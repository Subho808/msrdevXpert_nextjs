import React from 'react';
import Head from "next/head";

import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import {FaXTwitter,FaLinkedinIn} from "react-icons/fa6";
export const metadata = {
  title:"Team"
}
const Team = () => {
    return (
        <>
        <Head>
  <title>Meet the MSR DevXpert Team | Full-Stack Developers</title>
  <meta
    name="description"
    content="Get to know the skilled minds behind MSR DevXpert — from frontend expertise to backend and cloud engineering."
  />
  <meta
    name="keywords"
    content="MSR DevXpert team, frontend developer, backend developer, cloud engineer, full-stack development team, Subhojit Saha, Munna Sharma, Ranit Mandal"
  />
  <meta name="author" content="MSR DevXpert" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Open Graph Meta */}
  <meta property="og:title" content="Meet the MSR DevXpert Team | Full-Stack Developers" />
  <meta
    property="og:description"
    content="Explore our team of React developers, backend engineers, and cloud specialists working together at MSR DevXpert."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://msrdevxpert.com/team" />
  <meta property="og:image" content="https://msrdevxpert.com/favicon.ico" />

  {/* Twitter Card Meta */}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Meet the MSR DevXpert Team | Full-Stack Developers" />
  <meta
    name="twitter:description"
    content="Discover the talented developers and engineers behind MSR DevXpert's high-performance web solutions."
  />
  <meta name="twitter:image" content="https://msrdevxpert.com/favicon.ico" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://msrdevxpert.com/team" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />
</Head>

        <section className="team-section">
            <div className="orange-ball"></div>
            <div className="container" data-aos="fade-up">
                <h1 className=""><span>Our</span> Team</h1>
                <p className="section-subtitle">Meet the brains behind MSR DevXpert</p>

                <div className="team-grid">
                    <div className="team-card">
                        <img src="/frontend.png" alt="Subhojit Saha" />
                        <h3>Subhojit Saha</h3>
                        <p>Frontend Developer</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/profile.php?id=100008829696923" target="_blank"><Facebook /></a>
                            <a href="https://x.com/Subhojit861744" target="_blank"><FaXTwitter /></a>
                            <a href="https://www.instagram.com/Subhojit4630" target="_blank"><Instagram /></a>
                            <a href="www.linkedin.com/in/subhojitsaha808" target="_blank"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    <div className="team-card">
                        <img src="/backend.png" alt="Munna Sharma" />
                        <h3>Munna Sharma</h3>
                        <p>Backend Developer</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/profile.php?id=100010714185338&sk=about" target="_blank"><Facebook /></a>
                            <a href="https://x.com/MunnaRanaa" target="_blank"><FaXTwitter /></a>
                            <a href="https://www.instagram.com/munna.raana" target="_blank"><Instagram /></a>
                            <a href="https://www.linkedin.com/in/munna-rana/" target="_blank"><FaLinkedinIn /></a>

                        </div>
                    </div>

                    <div className="team-card">
                        <img src="/cloud.png" alt="Ranit Mandal" />
                        <h3>Ranit Mandal</h3>
                        <p>Backend Developer & Cloud Engineer</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/ranitmandal17/about" target="_blank"><Facebook /></a>
                            <a href="https://x.com/MandalRanit" target="_blank"><FaXTwitter /></a>
                            <a href="https://www.instagram.com/ranit_org" target="_blank"><Instagram /></a>
                            <a href="https://www.linkedin.com/in/ranitmandal/" target="_blank"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Team;
