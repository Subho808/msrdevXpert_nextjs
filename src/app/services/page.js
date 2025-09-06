import React from 'react';
import Head from "next/head";

import { Row, Col, Card } from 'antd';
import {
  CodeOutlined,
  MobileOutlined,
  CloudServerOutlined,
  DatabaseOutlined,
  SettingOutlined,
  DeploymentUnitOutlined,
} from '@ant-design/icons';
import '../styles/main.css';

const services = [
  {
    icon: <CodeOutlined />,
    title: 'Web Development',
    desc: 'Responsive and SEO-friendly websites built with React.js, HTML5, and CSS3 for modern user experiences.',
    aos: 'fade-up',
  },
  {
    icon: <MobileOutlined />,
    title: 'Mobile App UI',
    desc: 'Custom-designed mobile-first UIs that ensure performance and aesthetics across Android and iOS platforms.',
    aos: 'fade-up',
  },
  {
    icon: <CloudServerOutlined />,
    title: 'Cloud Hosting',
    desc: 'Efficient and scalable cloud deployment solutions using AWS, Firebase, and other cloud platforms.',
    aos: 'fade-up',
  },
  {
    icon: <DatabaseOutlined />,
    title: 'Database Design',
    desc: 'Well-structured, secure databases using MySQL, MongoDB, and PostgreSQL for seamless data management.',
    aos: 'fade-up',
  },
  {
    icon: <SettingOutlined />,
    title: 'Backend APIs',
    desc: 'Robust, secure APIs built with Spring Boot and Node.js to power your applications with speed and reliability.',
    aos: 'fade-up',
  },
  {
    icon: <DeploymentUnitOutlined />,
    title: 'Full-Stack Projects',
    desc: 'Complete frontend-to-backend development — from concept to deployment — using the latest tech stack.',
    aos: 'fade-up',
  },
];

export const metadata = {
  title:"Services"
}
const Services = () => {
  return (
    <>
    <Head>
  <title>Web Development Services | MSR DevXpert</title>
  <meta
    name="description"
    content="Explore MSR DevXpert’s full-stack development services including React.js, Spring Boot APIs, cloud hosting, mobile UI design, and secure database solutions."
  />
  <meta
    name="keywords"
    content="React web development, Spring Boot APIs, cloud hosting, full stack projects, database design, mobile UI, MSR DevXpert services"
  />
  <meta name="author" content="MSR DevXpert" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Open Graph Meta */}
  <meta property="og:title" content="Web Development Services | MSR DevXpert" />
  <meta
    property="og:description"
    content="We deliver cutting-edge solutions including responsive websites, backend APIs, cloud deployment, and full-stack development services."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://msrdevxpert.com/services" />
  <meta property="og:image" content="https://msrdevxpert.com/favicon.ico" />

  {/* Twitter Card Meta */}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Web Development Services | MSR DevXpert" />
  <meta
    name="twitter:description"
    content="From frontend to backend — see how MSR DevXpert builds scalable digital solutions with React, Spring Boot, and cloud platforms."
  />
  <meta name="twitter:image" content="https://msrdevxpert.com/favicon.ico" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://msrdevxpert.com/services" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />
</Head>

    <div className="services-container">
      {/* Orange Ball Background */}
      <div className="orange-ball"></div>

      <div className="section-heading" data-aos="fade-down">
        <h1><span>Our</span> Services</h1>
        <p>
  From frontend design to backend architecture, we deliver tailored solutions that drive your business forward.
</p>
      </div>

      <Row gutter={[24, 24]}>
        {services.map((service, index) => (
          <Col xs={24} sm={12} md={8} key={index} data-aos={service.aos} data-aos-delay={index * 100}>
            <Card className="service-card-glass">
              <div className="service-icon-glow">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </>
  );
};

export default Services;
