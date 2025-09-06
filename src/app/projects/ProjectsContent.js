'use client';
import Head from "next/head";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/main.css';
export const metadata = {
  title:"Projects"
}
const projects = [
  {
    title: 'Vision Green RKR',
    description:
      'A clean, modern website for Vision Green RKR, showcasing their eco-friendly waste management solutions and community initiatives.',
    image: '/RKR.png',
    link: 'https://visiongreenrkr.com/',
  },
  {
    title: 'Oxynet Telecommunications Pvt. Ltd.',
    description:
      'A professional broadband service website with dynamic service plans, contact integration, and customer-first UI/UX.',
    image: '/oxyHome.png',
    link: 'https://oxynet.co.in/',
  },
];




const ProjectsContent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Head>
  <title>Our Projects | MSR DevXpert</title>
  <meta
    name="description"
    content="Explore web development projects by MSR DevXpert including Vision Green RKR and Oxynet. See how we deliver high-performance, modern digital solutions."
  />
  <meta
    name="keywords"
    content="MSR DevXpert Projects, Vision Green RKR, Oxynet Website, React Projects, Web Development Portfolio, Client Case Studies"
  />
  <meta name="author" content="MSR DevXpert" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Open Graph Meta */}
  <meta property="og:title" content="Our Projects | MSR DevXpert" />
  <meta
    property="og:description"
    content="From green tech to telecoms, browse our recent React-based projects including Vision Green and Oxynet."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://msrdevxpert.com/projects" />
  <meta property="og:image" content="https://msrdevxpert.com/favicon.ico" />

  {/* Twitter Card Meta */}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Our Projects | MSR DevXpert" />
  <meta
    name="twitter:description"
    content="Explore MSR DevXpert's project portfolio — building scalable and elegant digital platforms for businesses."
  />
  <meta name="twitter:image" content="https://msrdevxpert.com/favicon.ico" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://msrdevxpert.com/projects" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />
</Head>

    <section className="projects-section">
      <div className="orange-ball"></div>

      <div className="container" data-aos="fade-up">
        <h1>
          <span>Our</span> Projects
        </h1>
        <p className="section-subtitle">
          Explore the impactful digital solutions we've crafted for our valued
          clients.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              data-aos="zoom-in"
            >
              <img
                src={project.image}
                alt={project.title}
                className="card-circle-img"
              />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ProjectsContent;
