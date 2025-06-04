import React, { useState, useEffect } from "react";
import {
Box,
Typography,
Container,
TextField,
Button,
InputAdornment,
Paper,
Autocomplete,
Stack
} from '@mui/material';
import { Search as SearchIcon, LocationOn } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import bannerimage from '../../img/banner2.jpg';

const BannerContainer = styled(Box)(({ theme }) => ({
position: 'relative',
height: '80vh',
display: 'flex',
alignItems: 'center',
backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerimage})`,
backgroundSize: 'cover',
backgroundPosition: 'center',
color: 'white',
[theme.breakpoints.down('sm')]: {
height: '70vh',
},
}));

const SearchContainer = styled(Paper)(({ theme }) => ({
padding: theme.spacing(3),
borderRadius: theme.spacing(2),
backgroundColor: 'rgba(255, 255, 255, 0.68)',
backdropFilter: 'blur(5px)',
maxWidth: '800px',
width: '100%',
margin: '0 auto',
marginTop: theme.spacing(4),
[theme.breakpoints.down('sm')]: {
padding: theme.spacing(2),
},
}));

const locations = [
"Harare",
"Bulawayo",
"Mutare",
"Gweru",
"Masvingo",
"Victoria Falls",
];

const propertyTypes = [
"House",
"Apartment",
"Condo",
"Townhouse",
"Villa",
"Land"
];

export default function Banner() {
const [location, setLocation] = useState(null);
const [propertyType, setPropertyType] = useState(null);
const [priceRange, setPriceRange] = useState('');

return (
<BannerContainer>
<Container maxWidth="lg">
<Box textAlign="center" mb={4}>
<Typography
variant="h2"
component="h1"
sx={{
fontWeight: 700,
mb: 2,
fontSize: { xs: '2.5rem', md: '3.5rem' },
}}
>
Find Your Dream Home
</Typography>
<Typography
variant="h5"
sx={{
mb: 4,
fontSize: { xs: '1.2rem', md: '1.5rem' },
fontWeight: 400,
}}
>
Discover the perfect property in your favorite location
</Typography>
</Box>
    <SearchContainer elevation={3}>
      <Stack spacing={2}>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr auto' },
          }}
        >
          <Autocomplete
            value={location}
            onChange={(event, newValue) => setLocation(newValue)}
            options={locations}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Location"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          <Autocomplete
            value={propertyType}
            onChange={(event, newValue) => setPropertyType(newValue)}
            options={propertyTypes}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Property Type"
                variant="outlined"
              />
            )}
          />

          <TextField
            label="Price Range"
            variant="outlined"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            placeholder="Max Price"
            type="number"
          />

          <Button
            variant="contained"
            size="large"
            startIcon={<SearchIcon />}
            sx={{
              height: '56px',
              fontSize: '1.1rem',
              px: 4,
            }}
          >
            Search
          </Button>
        </Box>
      </Stack>
    </SearchContainer>
  </Container>
</BannerContainer>
);
}