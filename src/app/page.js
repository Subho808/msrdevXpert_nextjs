'use client';
import Head from "next/head";

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { Button, Row, Col } from "antd";
// import "../app/styles/main.css";
import "./styles/main.css"; // Import your global CSS
import {
  CodeOutlined,
  MobileOutlined,
  CloudServerOutlined,
  TeamOutlined,
  HeartOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';



// IMPORTANT: Use 'tagcloud' (not 'react-tagcloud') for 3D globe effect
// import TagCloud from "tagcloud";

export default function Home() {
  const router = useRouter();


  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  
  const [isClient, setIsClient] = useState(false);
  const TagCloud = require('TagCloud');
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const container = ".tagcloud";
    const texts = [
      "JavaScript", "React", "Node.js", "HTML5", "CSS3", "MongoDB", "Express",
      "Bootstrap", "Tailwind", "Firebase", "MySQL", "Git", "Docker",
      "Spring Boot", "JAVA", "AWS"
    ];
    const options = {
      radius: 180,
      maxSpeed: "normal",
      initSpeed: "fast",
      keep: true,
    };

    // Clear previous cloud if any
    const existing = document.querySelector(container);
    if (existing) existing.innerHTML = "";

    TagCloud(container, texts, options);

    // Custom colors
    const colors = [
      "#008b8b", "#7a4210", "#304520", "#6e6009", "#FF69B4", "#1E90FF",
      "#FF4500", "#32CD32", "#8A2BE2", "#FF1493", "#096c6e", "#FF8C00", "#20B2AA"
    ];
    const tagItems = document.querySelectorAll(".tagcloud--item");
    tagItems.forEach((item, index) => {
      item.style.color = colors[index % colors.length];
    });
  }, [isClient]);

  return (
    <>
<Head>
  <title>MSR DevXpert | Full-Stack Web & Mobile App Development in India</title>
  {/* <link rel="manifest" href="/manifest.webmanifest" /> */}
<meta name="theme-color" content="#ff6600" />

  <meta name="description" content="MSR DevXpert is a full-stack web and mobile development company offering custom solutions with React, Java, Spring Boot, and more. Partner with us to bring your digital ideas to life." />
  <meta name="keywords" content="MSR DevXpert, web development India, mobile app development, React developers, Java backend, Spring Boot, full-stack developers, SEO websites, software company Kolkata" />
  <meta name="author" content="MSR DevXpert" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="MSR DevXpert | Full-Stack Web & Mobile App Development" />
  <meta property="og:description" content="Explore cutting-edge digital solutions with MSR DevXpert — from websites to mobile apps and cloud integrations." />
  <meta property="og:image" content="https://msrdevxpert.com/og-image.jpg" />
  <meta property="og:url" content="https://msrdevxpert.com/" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="MSR DevXpert | Full-Stack Web & Mobile App Development" />
  <meta name="twitter:description" content="We build modern, scalable digital experiences using React, Java, Spring Boot, and more." />
  <meta name="twitter:image" content="https://msrdevxpert.com/og-image.jpg" />

  {/* Canonical */}
  <link rel="canonical" href="https://msrdevxpert.com/" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico"/>
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#ffffff" />
</Head>

    <div className="home-wrapper">


      {/* === Hero Section === */}
      <section className="hero-modern" data-aos="fade-up">
        <div className="hero-row">
          {/* Left Text Section */}
          <div className="hero-content">
            <h1 className="animated-heading">
              Empowering Ideas
              <br />
              <span className="highlight">
                {"Building Digital Futures".split("").map((char, index) => (
                  <span key={index} className="letter">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </h1>
            <p className="hero-subtitle">
              We blend creativity and technology to build next-gen web
              experiences.
            </p>
            
            <Button type="primary" size="large" onClick={() => router.push('/contact')}>
  Let’s Talk →
</Button>
          </div>
          {/* Right Cloud Section */}
          <div className="hero-cloud text-end">
            <span className="tagcloud"></span>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="home-container">
        <h2 className="section-title">Our Services</h2>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={12} md={8} data-aos="fade-up" data-aos-delay="100">
            <div className="service-card web-dev">
              <CodeOutlined className="service-icon" />
              <h3>Web Development</h3>
              <p>
                We design and develop custom website development in India,
                SEO-optimized websites tailored to your brand. From landing
                pages to dynamic web platforms, we deliver responsive, fast, and
                scalable solutions.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} data-aos="fade-up" data-aos-delay="200">
            <div className="service-card mob-dev">
              <MobileOutlined className="service-icon" />
              <h3>Mobile Solutions</h3>
              <p>
                Mobile app developers for startups. Launch cross-platform mobile
                apps that offer a seamless user experience. We build
                high-performance applications for both Android and iOS that meet
                your business goals.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} data-aos="fade-up" data-aos-delay="300">
            <div className="service-card backend-dev">
              <CloudServerOutlined className="service-icon" />
              <h3>Backend & APIs</h3>
              <p>
                Power your frontend with secure, scalable backend systems. We
                specialize in creating RESTful APIs and robust server-side logic
                using Node.js, Spring Boot, and more.
              </p>
            </div>
          </Col>
        </Row>
      </section>




      {/* Why choose us */}
      <section className="why-us">
        <h2 className="section-title">Why Choose Us</h2>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={12} md={8} data-aos="zoom-in" data-aos-delay="100">
            <div className="why-card">
              <TeamOutlined className="why-icon" />
              <h3>Expert Team</h3>
              <p>
                Our team of experienced developers, designers, and strategists
                bring your digital vision to life with precision and innovation.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} data-aos="zoom-in" data-aos-delay="100">
            <div className="why-card">
              <HeartOutlined className="why-icon" />
              <h3>Client-Centric</h3>
              <p>
                We collaborate closely with you at every step, ensuring your
                business goals are reflected in the final product.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} data-aos="zoom-in" data-aos-delay="100">
            <div className="why-card">
              <BulbOutlined className="why-icon" />
              <h3>Innovative Solutions</h3>
              <p>
                From cloud deployment to mobile optimization, we use
                cutting-edge tools to future-proof your digital presence.
              </p>
            </div>
          </Col>
        </Row>
      </section>

      {/* CTA */}
      <section className="cta-banner" data-aos="fade-up">
        <div className="cta-content">
          <h2>Ready to elevate your digital presence?</h2>
          <p>
            Partner with MSR DevXpert to build solutions that scale with your
            growth.
          </p>
          <Link href="/contact" passHref>
            <Button type="primary" className="CTAbutton" size="large" shape="round">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}