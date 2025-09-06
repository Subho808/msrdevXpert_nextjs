import React from 'react';
import Head from "next/head";

export const metadata = {
  title:"Blog"
}
const Blog = () => {
    return (
        <>
          <Head>
    <title>Tech Blog | MSR DevXpert – React, Backend, Cloud, DevOps</title>
    <meta
      name="description"
      content="Explore our latest insights and articles on React, Spring Boot, DevOps, cloud hosting strategies, and more from the MSR DevXpert team."
    />
    <meta
      name="keywords"
      content="Tech Blog, MSR DevXpert Blog, React Development, Spring Boot, DevOps, Cloud Hosting, CI/CD, Software Engineering Tips"
    />
    <meta name="author" content="MSR DevXpert" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* Open Graph */}
    <meta property="og:title" content="Tech Blog | MSR DevXpert" />
    <meta
      property="og:description"
      content="Get the latest updates, development tips, and tech insights from the engineers at MSR DevXpert."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://msrdevxpert.com/blog" />
    <meta property="og:image" content="https://msrdevxpert.com/favicon.ico" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Tech Blog | MSR DevXpert" />
    <meta
      name="twitter:description"
      content="Explore technical insights on full-stack development, cloud, and DevOps from MSR DevXpert."
    />
    <meta name="twitter:image" content="https://msrdevxpert.com/favicon.ico" />

    {/* Canonical Link */}
    <link rel="canonical" href="https://msrdevxpert.com/blog" />

    {/* Favicon */}
    <link rel="icon" href="/favicon.ico" />
  </Head>

        <section className="blog-section">
        {/* Background Blob */}
      <div className="orange-ball"></div>
            <div className="container ">
                <h1 className=""><span>Latest</span> Blog</h1>
                <p className="section-subtitle">Insights, updates & development tips from our team</p>

                <div className="blog-grid">
                    <div className="blog-card">
                        <img src="/blog1.jpg" alt="React Development" />
                        <div className="blog-content">
                            <h3>Why React is Our Go-To for Frontend Development</h3>
                            <p>From modular components to lightning-fast performance, explore why React helps us deliver dynamic user experiences.</p>
                            <a href="/blog/react-frontend">Read More →</a>
                        </div>
                    </div>

                    <div className="blog-card">
                        <img src="/blog2.jpg" alt="Spring Boot" />
                        <div className="blog-content">
                            <h3>Backend Brilliance with Spring Boot</h3>
                            <p>We break down how Spring Boot helps us build reliable, scalable, and secure APIs for our clients.</p>
                            <a href="/blog/spring-boot">Read More →</a>
                        </div>
                    </div>

                    <div className="blog-card">
                        <img src="/blog3.jpg" alt="Cloud Hosting" />
                        <div className="blog-content">
                            <h3>Choosing the Right Cloud & Hosting Strategy</h3>
                            <p>Understand the pros and cons of AWS, DigitalOcean, and shared hosting—and how we choose what's best for your app.</p>
                            <a href="/blog/cloud-hosting">Read More →</a>
                        </div>
                    </div>

                    <div className="blog-card">
                        <img src="/blog4.jpg" alt="DevOps" />
                        <div className="blog-content">
                            <h3>DevOps in Action: CI/CD & Server Monitoring</h3>
                            <p>See how we implement continuous deployment pipelines and proactive monitoring to keep applications healthy and fast.</p>
                            <a href="/blog/devops-strategy">Read More →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Blog;
