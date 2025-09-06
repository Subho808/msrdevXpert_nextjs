
import React from 'react';
import Head from "next/head";

import { Button } from 'react-bootstrap';
import "../styles/main.css"; // Import your global CSS
// import './Career.css';
export const metadata = {
  title:"Career"
}
const Career = () => {
    return (
        <>
        <Head>
    <title>Careers at MSR DevXpert – Join Our Tech Team</title>
    <meta
      name="description"
      content="Explore exciting career opportunities at MSR DevXpert. We're hiring frontend developers, backend engineers, and UI/UX designers!"
    />
    <meta
      name="keywords"
      content="MSR DevXpert Careers, Developer Jobs, React Developer, Spring Boot Jobs, UI UX Designer, Tech Hiring, Web Development Jobs"
    />
    <meta name="author" content="MSR DevXpert" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* Open Graph Meta */}
    <meta property="og:title" content="Careers at MSR DevXpert" />
    <meta
      property="og:description"
      content="Join MSR DevXpert and shape the future of full-stack development. Explore our job openings and apply today!"
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://msrdevxpert.com/career" />
    <meta property="og:image" content="https://msrdevxpert.com/favicon.ico" />

    {/* Twitter Card Meta */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Careers at MSR DevXpert" />
    <meta
      name="twitter:description"
      content="We're hiring! Apply now to MSR DevXpert and work with a modern full-stack development company."
    />
    <meta name="twitter:image" content="https://msrdevxpert.com/favicon.ico" />

    {/* Canonical URL */}
    <link rel="canonical" href="https://msrdevxpert.com/career" />

    {/* Favicon */}
    <link rel="icon" href="/favicon.ico" />
  </Head>
        <section className="career-section">
        {/* Background Blob */}
      <div className="orange-ball"></div>
            <div className="container ">
                <h1 className=""><span>Join</span> Our Team</h1>
                <p className="section-subtitle">Be part of MSR DevXpert and build the future of web development.</p>

                <div className="career-intro">
                    <p>
                        At MSR DevXpert, we value creativity, collaboration, and continuous learning. If you're passionate
                        about creating impactful digital solutions and want to grow your career with a team that supports
                        innovation—you're in the right place.
                    </p>
                </div>

                <div className="career-grid">
                    <div className="career-card">
                        <h3>Frontend Developer</h3>
                        <p><b>Experience:</b> 1-3 years</p>
                        <p><b>Skills:</b> React.js, HTML, CSS, JavaScript</p>
                        <Button type='primary' className="custom-apply-btn"  size="large" href='/apply-now'>Apply Now</Button>
                    </div>

                    <div className="career-card">
                        <h3>Backend Developer</h3>
                        <p><b>Experience:</b> 2+ years</p>
                        <p><b>Skills:</b> Java, Spring Boot, REST APIs</p>
                        <Button type='primary' className='custom-apply-btn'  size="large" href='/apply-now'>Apply Now</Button>
                    </div>

                    <div className="career-card">
                        <h3>UI/UX Designer</h3>
                        <p><b>Experience:</b> 1+ year</p>
                        <p><b>Skills:</b> Figma, Adobe XD, Wireframing</p>
                        <Button type='primary' className='custom-apply-btn'  size="large" href='/apply-now'>Apply Now</Button>
                    </div>
                </div>

                <p className="apply-text">
                    Don’t see your role? We’re always on the lookout for talented individuals. Send your resume to <a href="mailto:msrdevxpert@gmail.com">msrdevxpert@gmail.com</a>.
                </p>
            </div>
        </section>
        </>
    );
};

export default Career;
