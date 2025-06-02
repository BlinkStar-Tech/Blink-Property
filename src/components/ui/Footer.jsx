import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const footerStyle = {
  backgroundColor: '#343a40',
  color: '#f8f9fa',
  padding: '1rem 0',
};

const headingStyle = {
  fontSize: '1.25rem',
  marginBottom: '1rem',
};

const textStyle = {
  fontSize: '1rem',
  color: '#f8f9fa',
  textDecoration: 'none',
};

const listStyle = {
  paddingLeft: 0,
  marginBottom: '0.5rem',
};

const Footer = () => (
  <footer style={footerStyle}>
    <Container>
      <Grid container spacing={35}>
        <Grid item md={4} xs={12}>
          <Typography variant="h5" style={headingStyle}>Contact Us</Typography>
          <Typography style={textStyle}>7401 1st Crescent, Warren Park 1, Harare</Typography>
          <Typography style={textStyle}>Phone: +263 78 293 1905</Typography>
          <Typography style={textStyle}>Email: info@blinkstarprop.co.zw</Typography>
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography variant="h5" style={headingStyle}>Quick Links</Typography>
          <ul style={listStyle}>
            <li><Link href="#" style={textStyle} underline="none">Home</Link></li>
            <li><Link href="#" style={textStyle} underline="none">About</Link></li>
            <li><Link href="#" style={textStyle} underline="none">Properties</Link></li>
            <li><Link href="#" style={textStyle} underline="none">Contact</Link></li>
          </ul>
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography variant="h5" style={headingStyle}>Follow Us</Typography>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={textStyle}>
              <Facebook fontSize="large" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={textStyle}>
              <Twitter fontSize="large" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={textStyle}>
              <Instagram fontSize="large" />
            </Link>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={12} xs={12} style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Typography variant="body2" style={{ marginBottom: '0' }}>
            &copy; {new Date().getFullYear()} Real Estate. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </footer>
);

export default Footer;