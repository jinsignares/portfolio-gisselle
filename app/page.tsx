import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ImpactSlider from '../components/ImpactSlider';
import TheWork from '../components/TheWork';
import Endorsements from '../components/Endorsements';
import Footer from '../components/Footer';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'Gisselle Muñoz - UX/UI Designer & Product Designer Portfolio',
  description: 'Experienced UX/UI Designer specializing in user-centered design, product strategy, and digital experiences. View my portfolio featuring case studies from Walmart Mexico, e-commerce optimization, and innovative design solutions.',
  keywords: [
    'UX Designer',
    'UI Designer', 
    'Product Designer',
    'User Experience',
    'User Interface',
    'Portfolio',
    'Case Studies',
    'Design Strategy',
    'E-commerce Design',
    'Mobile App Design',
    'Walmart Mexico',
    'Digital Product Design'
  ],
  authors: [{ name: 'Gisselle Muñoz' }],
  creator: 'Gisselle Muñoz',
  publisher: 'Gisselle Muñoz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gisselle-insignares.vercel.app',
    siteName: 'Gisselle Muñoz Portfolio',
    title: 'Gisselle Muñoz - UX/UI Designer Portfolio',
    description: 'Experienced UX/UI Designer specializing in user-centered design, product strategy, and digital experiences. View my portfolio featuring case studies and innovative design solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gisselle Muñoz - UX/UI Designer Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gisselle Muñoz - UX/UI Designer Portfolio',
    description: 'Experienced UX/UI Designer specializing in user-centered design and digital experiences. View my portfolio and case studies.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code'
  }
};

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gisselle Muñoz",
    "jobTitle": "UX/UI Designer",
    "description": "Experienced UX/UI Designer specializing in user-centered design, product strategy, and digital experiences.",
    "url": "https://gisselle-insignares.vercel.app",
    "sameAs": [
      "https://linkedin.com/in/gisselle-insignares",
      "https://behance.net/gisselle-insignares"
    ],
    "knowsAbout": [
      "User Experience Design",
      "User Interface Design",
      "Product Design",
      "Design Strategy",
      "E-commerce Design",
      "Mobile App Design"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "UX/UI Designer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Mexico"
      }
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Gisselle Muñoz Portfolio",
    "description": "Portfolio showcasing UX/UI design work, case studies, and digital experiences.",
    "url": "https://gisselle-insignares.vercel.app",
    "author": {
      "@type": "Person",
      "name": "Gisselle Muñoz"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://gisselle-insignares.vercel.app/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="min-h-screen">
      <StructuredData data={personSchema} />
      <StructuredData data={websiteSchema} />
      <Navbar />
      <Hero />
      <ImpactSlider />
      <div id="work">
        <TheWork />
      </div>
      <div id="endorsements">
        <Endorsements />
      </div>
      <Footer />
    </div>
  );
}
