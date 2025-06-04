import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Banner from "./Banner";
import FeaturedProperties from "./FeaturedProperties";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "./Footer";

const Home = () => {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Banner />
            <FeaturedProperties />
            <WhyChooseUs />
            <Footer />
        </Box>
    );
};

export default Home;