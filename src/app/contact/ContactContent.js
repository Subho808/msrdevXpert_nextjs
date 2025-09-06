"use client";
import Head from "next/head";

import React, { useState } from "react";
import toast from "react-hot-toast";
import AlertDismissibleExample from "../components/Alert";
import { Collapse, message } from "antd";
import { Button } from "@mui/material";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import dynamic from "next/dynamic";
import emailjs from "emailjs-com"; // Import EmailJS
const ClientMap = dynamic(() => import("../components/ClientMap"), {
  ssr: false,
});

const faqData = [
  {
    question: "How do you approach new projects?",
    answer:
      "We begin with a thorough discovery phase to understand your business goals, target audience, and requirements. Then we create a detailed project plan, including timeline and milestones, before moving to design and development phases. Throughout the process, we maintain clear communication and regular updates.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with a diverse range of industries, including healthcare, finance, retail, education, technology, and more. Our adaptable approach allows us to understand the unique challenges and opportunities in each sector and deliver tailored solutions.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "Project timelines vary based on scope, complexity, and requirements. A simple website might take 4–6 weeks, while a comprehensive web application could take 3–6 months. During our initial consultation, we’ll provide a more accurate timeline for your specific project.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer various maintenance and support plans to ensure your solution continues to perform optimally. Our support services include bug fixes, security updates, performance optimization, and feature enhancements.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer flexible pricing models, including fixed-price quotes for well-defined projects and time-and-materials billing for more complex or evolving projects.",
  },
];



const ContactContent = () => {
  const items = faqData.map((item, index) => ({
    key: index.toString(),
    label: item.question,
    children: <p>{item.answer}</p>,
  }));

  // const [showAlert, setShowAlert] = useState(false);
  // const [alertMessage, setAlertMessage] = useState("");
  // const [alertVariant, setAlertVariant] = useState("success");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("success");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSuccessToast = () => {
  toast.success("Message sent successfully!", {
    icon: '✅', // Optional: custom icon
    style: {
      backgroundColor: '#adebb3',
      color: '#000000',
      fontSize: '16px',
      padding: '12px 20px',
      borderRadius: '8px',
    },
  });
};

const handleErrorToast = () => {
  toast.error("Something went wrong!", {
    icon: '❌', // Optional: custom icon
    style: {
      backgroundColor: '#dc3545',
      color: '#fff',
      fontSize: '16px',
      padding: '12px 20px',
      borderRadius: '8px',
    },
  });
};

  // Handle form submit
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const { name, email, message } = formData;

  //   if (!name || !email || !message) {
  //     setAlertVariant("danger");
  //     setAlertMessage("Please fill in all fields.");
  //     setShowAlert(true);
  //     return;
  //   }

  //   setLoading(true);

  //   emailjs
  //     .send(
  //       "service_n1l686u",
  //       "template_1bvmcyf",
  //       {
  //         from_name: name,
  //         from_email: email,
  //         message: message,
  //       },
  //       "oFVhdo4NTEN07FhP_"
  //     )
  //     .then(
  //       (response) => {
  //         console.log("Email sent successfully:", response);
  //         // setAlertVariant("success");
  //         // setAlertMessage("Message sent successfully!");
  //         // setShowAlert(true);
  //         //  toast.success("Message sent successfully!");.
  //         handleSuccessToast();
  //         setToastType("success");
  //         setShowToast(true);
  //         setTimeout(() => setShowToast(false), 4000); // hide after 4 sec
  //         setFormData({ name: "", email: "", message: "" });
  //         setLoading(false);
  //       },
  //       (error) => {
  //         console.log("Error sending email:", error);
  //         // setAlertVariant("danger");
  //         // setAlertMessage("Failed to send message. Please try again later.");
  //         // setShowAlert(true);
  //         // toast.error("Something went wrong. Please try again later.");
  //         handleErrorToast();
  //         setToastType("error");
  //         setShowToast(true);
  //         setTimeout(() => setShowToast(false), 4000); // hide after 4 sec
  //         setLoading(false);
  //       }
  //     );
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, email, phone, message } = formData;

  if (!name || !email || !phone || !message ) {
    toast.error("Please fill in all fields!");
    return;
  }

  setLoading(true);

  // const reader = new FileReader();
  // reader.readAsDataURL(resume);

  

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
         
        }),
      });

      if (response.ok) {
        handleSuccessToast();
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          
        });
        e.target.reset();
      } else {
        handleErrorToast();
      }
    } catch (error) {
      console.error('Error sending form:', error);
      handleErrorToast();
    }

    setLoading(false);
  
};

  return (
    <>
    <Head>
    <title>Contact MSR DevXpert | Full-Stack Web Development Company</title>
    <meta
      name="description"
      content="Get in touch with MSR DevXpert for modern web development solutions. Fill out our contact form, call us, or visit our Kolkata office."
    />
    <meta
      name="keywords"
      content="Contact MSR DevXpert, Web Development Support, React Developers, Java Developers, Kolkata Software Company"
    />
    <meta name="author" content="MSR DevXpert" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* Open Graph Meta */}
    <meta property="og:title" content="Contact MSR DevXpert" />
    <meta
      property="og:description"
      content="Looking for a reliable tech partner? Contact MSR DevXpert today and let’s build something impactful together."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://msrdevxpert.com/contact" />
    <meta property="og:image" content="https://msrdevxpert.com/favicon.ico" />

    {/* Twitter Card Meta */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Contact MSR DevXpert" />
    <meta
      name="twitter:description"
      content="Get in touch with MSR DevXpert for your digital development needs. Quick response guaranteed."
    />
    <meta name="twitter:image" content="https://msrdevxpert.com/favicon.ico" />

    {/* Canonical URL */}
    <link rel="canonical" href="https://msrdevxpert.com/contact" />

    {/* Favicon */}
    <link rel="icon" href="/favicon.ico" />
  </Head>

    <section className="contact-section">
      <div className="orange-ball"></div>
      <div className="contact-container">
        <h1>
          <span>Let's</span> Get In Touch
        </h1>
        <p className="section-subtitle">
          We’d love to hear from you. Drop us a message below!
        </p>
        <div className="contact-info">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="msgTitle">
              <span>Send</span> us a message
            </h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Yor Mobile Nmber"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <Button
              type="submit"
              className="custom-apply-btn"
              size="large"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2 text-white"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="text-white">Sending...</span>
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
          <div
            style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}
          >
            {/* {showAlert && (
              <AlertDismissibleExample
                show={showAlert}
                setShow={setShowAlert}
                variant={alertVariant}
                message={alertMessage}
              />
            )} */}
            {/* {showToast && (
              <div
                className={`fixed bottom-6 right-6 z-50 px-4 py-2 rounded-lg text-white shadow-md transition-all duration-300 ${
                  toastType === "success" ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {toastType === "success"
                  ? "Message sent successfully!"
                  : "Something went wrong!"}
              </div>
            )} */}
          </div>

          <div className="contact-details">
            <h3 className="msgTitle">
              <span>Contact</span> Details
            </h3>
            <p>
    <MailOutlined style={{ marginRight: "8px" }} />
    <strong>Email:</strong>{" "}
    <a
  href="mailto:msrdevxpert@gmail.com"
  className="custom-link"
>
  msrdevxpert@gmail.com
</a>
  </p>
            <p>
    <PhoneOutlined style={{ marginRight: "8px" }} />
    <strong>Phone:</strong>{" "}
   <a
  href="tel:+917667229002"
  className="custom-link"
>
  +91 76672 29002
</a>
  </p>
           <p>
    <EnvironmentOutlined style={{ marginRight: "8px" }} />
    <strong>Address:</strong>{" "}
    <a
  href="https://www.google.com/maps/place/Ecostation+Business+Tower..."
  target="_blank"
  rel="noopener noreferrer"
  className="custom-link"
>
  Ecostation Business Tower, Street Number 9, BP Block, Sector V,
  Bidhannagar, Kolkata, West Bengal 700091
</a>
  </p>
            {/* Embedded Map */}
            <div className="map-container" style={{ marginTop: "20px" }}>
              <ClientMap />
            </div>
          </div>
        </div>

        <div className="faq-wrapper">
          <div className="faq-section">
            <h2 className="faq-title">
              <span>Frequently</span> Asked Questions
            </h2>
            <p className="faq-subtitle">
              Find answers to common questions about our services.
            </p>
            <Collapse accordion className="custom-collapse" items={items} />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactContent;
