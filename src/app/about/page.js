import React from "react";
import Head from "next/head";

import { Row, Col, Card } from "antd";
import { RocketOutlined, EyeOutlined, StarOutlined } from "@ant-design/icons";
import "../styles/main.css";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

export const metadata = {
  title:"About"
}
const About = () => {
  return (
    <>
<Head>
  <title>About Us | MSR DevXpert – Full-Stack Web Development</title>
  <meta
    name="description"
    content="Learn about MSR DevXpert’s mission, vision, and how we empower businesses through scalable and modern digital solutions."
  />
  <meta
    name="keywords"
    content="MSR DevXpert, About MSR DevXpert, Full-Stack Development, Web Development Company, Software Development, Agile Development"
  />
  <meta name="author" content="MSR DevXpert" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Open Graph - Without a wide image */}
  <meta property="og:title" content="About Us | MSR DevXpert" />
  <meta
    property="og:description"
    content="Discover our approach, values, and why businesses trust MSR DevXpert for full-stack development solutions."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://msrdevxpert.com/about" />

  {/* Optional fallback image (favicon-based logo) */}
  <meta property="og:image" content="https://msrdevxpert.com/favicon.ico" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="About Us | MSR DevXpert" />
  <meta
    name="twitter:description"
    content="Meet the team behind MSR DevXpert and explore our mission-driven full-stack development approach."
  />
  <meta name="twitter:image" content="https://msrdevxpert.com/favicon.ico" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://msrdevxpert.com/about" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />
</Head>


    <div className="about-container">
      {/* Background Blob */}
      <div className="orange-ball"></div>

      {/* Heading */}
      <div className="about-header" data-aos="fade-down">
        <h1>
          <span>About</span> MSR devXpert
        </h1>
        <p className="section-subtitle">
          MSR DevXpert is your trusted partner for building powerful, scalable,
          and modern digital solutions. From startups to enterprises, we empower
          growth through full-stack web development.
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <Row gutter={[24, 24]} className="about-section">
        <Col xs={24} md={12} data-aos="fade-right">
          <Card className="about-card glass">
            <RocketOutlined className="about-icon" />
            <h3>Our Mission</h3>
            <p>
              Empower businesses with innovative, fast, and scalable web
              solutions that drive digital transformation.
            </p>
          </Card>
        </Col>
        <Col xs={24} md={12} data-aos="fade-left">
          <Card className="about-card glass">
            <EyeOutlined className="about-icon" />
            <h3>Our Vision</h3>
            <p>
              To be the leading tech partner for global enterprises through
              excellence and customer-first strategies.
            </p>
          </Card>
        </Col>
      </Row>

      {/* Mission & Vision Cards */}
      <Row gutter={[24, 24]} className="about-section">
        <Col xs={24} md={12} data-aos="fade-right">
          <Card className="about-card glass">
            <WorkOutlineIcon
              className="about-icon"
              // style={{ fontSize: "5vh" }}
            />
            <h2>How We Work</h2>
            <p>
              At MSR DevXpert, we combine <strong>agile methodologies</strong>{" "}
              with deep technical skills to deliver on time, every time. We
              collaborate closely with our clients to understand their goals,
              solve real problems, and deliver measurable value.
            </p>
          </Card>
        </Col>
        <Col xs={24} md={12} data-aos="fade-left">
          <Card className="about-card glass">
            <HandshakeOutlinedIcon
              className="about-icon"
              // style={{ fontSize: "5vh" }}
            />
            <h2>Our Promise</h2>
            <p>
              We are more than just developers — we are your technology
              partners. With a commitment to quality, transparency, and
              innovation, we help our clients achieve sustainable growth in the
              digital era.
            </p>
          </Card>
        </Col>
      </Row>

      {/* Why Choose Us */}
      <div className="why-choose" data-aos="fade-up">
        <h2>
          <StarOutlined /> Why Choose Us
        </h2>
        <ul>
          <li>🚀 Skilled team in React, Spring Boot & full-stack web tech</li>
          <li>🤝 Customized solutions tailored to your business needs</li>
          <li>⏱️ Fast delivery with ongoing support & maintenance</li>
          <li>💡 Focused on creativity, scalability, and real-world results</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default About;
