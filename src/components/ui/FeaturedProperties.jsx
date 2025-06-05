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
import banner from '../../img/banner.jpg';
import banner2 from '../../img/banner2.jpg';
import house1 from '../../img/house1.jpg';
import accommoo from '../../img/accommo.jpg';

const featuredProperties = [
  {
    id: 1,
    title: 'Modern House',
    location: 'Chisipete, Harare',
    price: 4500000,
    status: 'For Sale',
    beds: 5,
    baths: 6,
    parking: 3,
    imageUrl: house1,
    isFavorite: false,
  },
  {
    id: 2,
    title: 'Luxury Waterfall Villa',
    location: 'Victoria Falls',
    price: 2100000,
    status: 'For Sale',
    beds: 3,
    baths: 2,
    parking: 1,
    imageUrl: banner,
    isFavorite: false,
  },
  {
    id: 3,
    title: 'Mountain View Retreat',
    location: 'Borrowdale, Harare',
    price: 3200000,
    status: 'Accommodation',
    beds: 4,
    baths: 3,
    parking: 2,
    imageUrl: accommoo,
    isFavorite: false,
  },
  {
    id: 4,
    title: 'Cozy Family Home',
    location: 'Aspindale Park, Harare',
    price: 250000,
    status: 'For Sale',
    beds: 4,
    baths: 3,
    parking: 2,
    imageUrl: banner2,
    isFavorite: false,
  },
];

export default function FeaturedProperties() {
  return (
    <Box 
      sx={{ 
        py: { xs: 4, sm: 6, md: 8 }, 
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Box 
          sx={{ 
            mb: { xs: 4, sm: 5, md: 6 }, 
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            Featured Properties
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              mb: { xs: 3, sm: 4 },
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
              px: { xs: 2, sm: 0 }
            }}
          >
            Discover our hand-picked selection of premium properties
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {featuredProperties.map((property) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              lg={3} 
              key={property.id}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box 
                sx={{ 
                  width: '100%',
                  maxWidth: { xs: '400px', sm: '100%' }
                }}
              >
                <PropertyCard property={property} />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box 
          sx={{ 
            mt: { xs: 4, sm: 5, md: 6 }, 
            textAlign: 'center'
          }}
        >
          <Button
            variant="outlined"
            size="large"
            endIcon={<ArrowForward />}
            href="/properties"
            sx={{
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              borderRadius: 2,
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            }}
          >
            View All Properties
          </Button>
        </Box>
      </Container>
    </Box>
  );
} 