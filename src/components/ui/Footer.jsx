import React from "react";

const Footer = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.sectionPadding}>
        <div style={styles.footerLinks}>
          <div style={styles.footerLinksDiv}>
            <h3 style={styles.heading}>StarJobs</h3>
            <p style={styles.about}>
              Star Jobs connects talented <br />
              individuals with top employers,
              <br /> simplifying the job search process <br />
              for seekers and enhancing <br />
              recruitment for companies
            </p>
          </div>

          <div style={styles.footerLinksDiv}>
            <h4 style={styles.heading}>Company</h4>
            <a href="/about us" style={styles.link}>
              <p>About Us</p>
            </a>
            <a href="/services" style={styles.link}>
              <p>Our Services</p>
            </a>
            <a href="/jobslist" style={styles.link}>
              <p>Jobs</p>
            </a>
            <a href="/contact us" style={styles.link}>
              <p>Contact Us</p>
            </a>
          </div>
          <div style={styles.footerLinksDiv}>
            <h4 style={styles.heading}>Quick Links</h4>
            <a href="/services" style={styles.link}>
              <p>Resume Writing Services</p>
            </a>
            <a href="/services" style={styles.link}>
              <p>Cover Letter Assistance </p>
            </a>
            <a href="/services" style={styles.link}>
              <p>LinkedIn Profile</p>
            </a>
            <a href="/services" style={styles.link}>
              <p>Career Coaching</p>
            </a>
          </div>

          <div style={styles.footerLinksDiv}>
            <h4 style={styles.heading}>Quick Links</h4>
            <a href="/services" style={styles.link}>
              <p>Resume Writing Services</p>
            </a>
            <a href="/services" style={styles.link}>
              <p>Cover Letter Assistance </p>
            </a>
            <a href="/services" style={styles.link}>
              <p>LinkedIn Profile</p>
            </a>
            <a href="/services" style={styles.link}>
              <p>Career Coaching</p>
            </a>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>
          Copyright ©2025. All Rights Reserved. — Designed by <b>BlinkTech</b>
        </p>
      </div>
    </div>
  );
};

const styles = {
  footer: {
    marginTop: "70px",
    backgroundColor: "#4F959D",
    padding: "20px 0",
    color: "#F6F8D5",
  },
  sectionPadding: {
    padding: "20px",
  },
  footerLinks: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap", // Allow wrapping for smaller screens
  },
  footerLinksDiv: {
    margin: "0 20px", // Reduced margin for better spacing
    flex: "1 1 200px", // Flex grow, shrink, and base width
    minWidth: "200px", // Minimum width for each section
    marginBottom: "20px", // Add space between rows on smaller screens
  },
  link: {
    textDecoration: "none",
    fontSize: "14px",
    color: "#F6F8D5",
  },

  heading: {
    fontSize: "20px", // Slightly smaller heading for mobile
    marginBottom: "10px",
    color: "#F6F8D5",
  },
  about: {
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#F6F8D5",
  },
  // Media queries for responsiveness
  "@media (max-width: 768px)": {
    footerLinks: {
      flexDirection: "column", // Stack sections vertically on smaller screens
      alignItems: "center", // Center align items
      textAlign: "center", // Center text
    },
    footerLinksDiv: {
      margin: "10px 0", // Adjust margin for stacked layout
    },
    heading: {
      fontSize: "18px", // Adjust heading size for mobile
    },
    about: {
      fontSize: "12px", // Adjust text size for mobile
    },
  },
};

export default Footer;
