import React from "react";
import "./About.css"; // Import the CSS file
import Navbar from "../../Navbar/Navbar";

const About = () => {
  return (
    <>
    <Navbar />
    <div className="about-us-container">
      <h1 className="about-us-heading">About Us</h1>
      <p>We are a leading company in the field of dummy data generation.</p>
      <p>
        Our mission is to provide realistic and customizable data for various
        applications, such as website development, software testing, and data
        analysis.
      </p>
      <p>
        Our team of experts has years of experience in creating high-quality
        data sets that meet the needs of our clients.
      </p>
      <h2 className="services-heading">Our Services</h2>
      <ul>
        <li>Customizable data sets</li>
        <li>Realistic data generation</li>
        <li>Various data formats (JSON, CSV, etc.)</li>
        <li>Quick turnaround time</li>
      </ul>
      <h2 className="contact-heading">Contact Us</h2>
      <p>Feel free to contact us if you have any questions or inquiries:</p>
      <ul>
        <li>Email: contact@dummydata.com</li>
        <li>Phone: 123-456-7890</li>
        <li>Address: 123 Main Street, Anytown, USA</li>
      </ul>
    </div>
    </>
  );
};

export default About;
