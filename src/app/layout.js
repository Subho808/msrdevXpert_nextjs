// app/layout.js or app/layout.jsx
import ContentWithLoader from './components/ContentWithLoader';
import { LoaderProvider } from './context/LoaderContext';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../app/styles/main.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import ScrollToTop from "../app/components/ScrollToTop"; // Import the ScrollToTop component
import 'bootstrap/dist/css/bootstrap.min.css';

import { Layout } from "antd"; // ✅ make sure this comes from 'antd'
import OrientationLock from "./components/OrientationLock";
import { Toaster } from "react-hot-toast";
const { Content } = Layout;

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });



export const metadata = {
  title: {
    default: "MSR DevXpert",
    template: "%s - MSR DevXpert",
    twitter:{
      card: "summary_large_image",
    }
  },
  description: "Top IT Solutions in Kolkata: Web & App Development by Experts",
  keywords: ["web development", "app development", "Kolkata", "MSR DevXpert", "IT solutions"],
  openGraph: {
    title: "MSR DevXpert - Best Web & App Development",
    description: "Leading IT service provider for businesses in Kolkata and beyond.",
    url: "https://yourdomain.com",
    siteName: "MSR DevXpert",
    images: [
      {
        url: "https://yourdomain.com/images/og-banner.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MSR DevXpert",
    description: "We build websites and apps that grow your business.",
    site: "@yourtwitter",
  },
   icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* <RouteLoader /> */}
      <LoaderProvider>
        <Layout style={{color:"#d69c54"}}>
        <OrientationLock />
        <ScrollToTop /> {/* Add ScrollToTop component here */}
          <Navbar />
          <div className="layout-container" style={{ padding: "2rem", background: "#f0f2f5", minHeight: "80vh" }}>
          
           <ContentWithLoader>{children}</ContentWithLoader>
             <Toaster position="bottom-right" reverseOrder={false} />
            </div>
          <Footer />
        </Layout>
        </LoaderProvider>
      </body>
    </html>
  );
}
