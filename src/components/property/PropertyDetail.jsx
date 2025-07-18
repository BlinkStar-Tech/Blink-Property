import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Box, Typography, Card, CardMedia, Button, CircularProgress, Grid } from '@mui/material';
import ContactForm from './ContactForm';

const getImageUrl = (img) => {
  if (!img) return '';
  if (img.startsWith('http')) return img;
  return img.startsWith('/uploads') ? img : `/uploads/${img}`;
};

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/property/${id}`)
      .then(res => res.json())
      .then(data => {
        setProperty(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <CircularProgress />;
  if (!property) return <Typography>Property not found.</Typography>;

  const isOwner = user && property.listedBy && user._id === property.listedBy._id;

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this property?')) return;
    try {
      const res = await fetch(`/api/property/${property._id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (!res.ok) throw new Error('Failed to delete property');
      navigate('/properties');
    } catch (err) {
      alert('Error deleting property');
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>{property.title}</Typography>
      <Grid container spacing={2}>
        {property.images && property.images.map((img, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card>
              <CardMedia component="img" height="200" image={getImageUrl(img)} alt={property.title} />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" mt={2}>${property.price}</Typography>
      <Typography variant="subtitle1">{property.location}</Typography>
      <Typography variant="body1" mt={2}>{property.description}</Typography>
      <Typography variant="body2" mt={2}>Type: {property.propertyType}</Typography>
      <Typography variant="body2">Bedrooms: {property.bedrooms}</Typography>
      <Typography variant="body2">Bathrooms: {property.bathrooms}</Typography>
      <Typography variant="body2">Area: {property.area} sq ft</Typography>
      {isOwner && (
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={() => navigate(`/property/edit/${property._id}`)} sx={{ mr: 2 }}>Edit</Button>
          <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
        </Box>
      )}
      <ContactForm propertyTitle={property.title} propertyId={property._id} />
    </Box>
  );
};

export default PropertyDetail;
