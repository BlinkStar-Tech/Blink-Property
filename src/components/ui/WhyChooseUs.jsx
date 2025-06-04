import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import {
  Security,
  Speed,
  MonetizationOn,
  SupportAgent,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 64,
  height: 64,
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
}));

const features = [
  {
    title: 'Trusted Security',
    description: 'Your data and transactions are protected with bank-level security measures.',
    icon: <Security fontSize="large" />,
  },
  {
    title: 'Fast & Efficient',
    description: 'Quick property search and streamlined buying process for your convenience.',
    icon: <Speed fontSize="large" />,
  },
  {
    title: 'Best Market Price',
    description: 'Get the most competitive prices and best value for your investment.',
    icon: <MonetizationOn fontSize="large" />,
  },
  {
    title: '24/7 Support',
    description: 'Our dedicated team is always here to help you with any questions.',
    icon: <SupportAgent fontSize="large" />,
  },
];

export default function WhyChooseUs() {
  return (
    <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
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
            Why Choose Us
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
            We provide the best service in the real estate industry
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StyledCard elevation={2}>
                <CardContent>
                  <StyledAvatar>
                    {feature.icon}
                  </StyledAvatar>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 