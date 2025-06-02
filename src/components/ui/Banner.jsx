import React, { useState, useEffect } from "react";
import bannerImage from "../../img/banner.jpg"; 

const Banner = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Initial check
    handleResize();
    
    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: isSmallScreen ? "20px" : "40px 60px",
        color: "white",
        backgroundImage: `url(${bannerImage})`,
        height: isSmallScreen ? "50vh" : "70vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: isSmallScreen ? "20px" : "30px",
          borderRadius: "10px",
          width: isSmallScreen ? "100%" : "50%",
        }}
      >
        <h1
          style={{
            fontSize: isSmallScreen ? "1.8rem" : "2.5rem",
            marginBottom: "10px",
          }}
        >
          Your Dream Home Awaits
        </h1>
        <p
          style={{
            fontSize: isSmallScreen ? "0.9rem" : "1.1rem",
            marginBottom: "20px",
          }}
        >
          Discover amazing properties for sale and rent.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            placeholder="Enter location..."
            style={{
              padding: "10px",
              fontSize: "1rem",
              borderRadius: "5px",
              border: "none",
              width: isSmallScreen ? "100%" : "auto",
              flex: "1",
            }}
          />
          <select
            style={{
              padding: "10px",
              fontSize: "1rem",
              borderRadius: "5px",
              border: "none",
              width: isSmallScreen ? "100%" : "auto",
            }}
          >
            <option value="">Select Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
          <button
            style={{
              padding: "10px 15px",
              fontSize: "1rem",
              backgroundColor: "#4F959D",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              flex: "1",
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "#FF6347",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;