import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import PropertyCard from '../dashboard/PropertyCard';


const featuredProperties = [
  {
    id: 1,
    title: 'Luxury Beachfront Villa',
    location: 'Chisipete, Harare',
    price: 4500000,
    status: 'For Sale',
    beds: 5,
    baths: 6,
    parking: 3,
    imageUrl: 'banner.jpg',
    isFavorite: false,
  },
  {
    id: 2,
    title: 'Modern City Apartment',
    location: 'Victoria Falls',
    price: 2100000,
    status: 'For Sale',
    beds: 3,
    baths: 2,
    parking: 1,
    image: 'https://source.unsplash.com/random/800x600/?modern,apartment',
    isFavorite: false,
  },
  {
    id: 3,
    title: 'Mountain View Retreat',
    location: 'Borrowdale, Harare',
    price: 3200000,
    status: 'For Sale',
    beds: 4,
    baths: 3,
    parking: 2,
    image: 'https://source.unsplash.com/random/800x600/?mountain,house',
    isFavorite: false,
  },
  {
    id: 3,
    title: 'Mountain View Retreat',
    location: 'Aspindale Park, Harare',
    price: 250000,
    status: 'For Sale',
    beds: 4,
    baths: 3,
    parking: 2,
    image: 'https://source.unsplash.com/random/800x600/?mountain,house',
    isFavorite: false,
  },
];

export default function FeaturedProperties() {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Featured Properties
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Discover our hand-picked selection of premium properties
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {featuredProperties.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <PropertyCard property={property} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Button
            variant="outlined"
            size="large"
            endIcon={<ArrowForward />}
            href="/properties"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontSize: '1.1rem',
            }}
          >
            View All Properties
          </Button>
        </Box>
      </Container>
    </Box>
  );
} 