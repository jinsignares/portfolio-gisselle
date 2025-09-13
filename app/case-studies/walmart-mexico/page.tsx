import { Metadata } from 'next';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import CaseStudyHero from '../../../components/CaseStudyHero';
import ProblemDiscovery from '../../../components/ProblemDiscovery';
import UserQuote from '../../../components/UserQuote';
import ProcessPhases from '../../../components/ProcessPhases';
import DesignPrinciples from '../../../components/DesignPrinciples';
import DesignCarousel from '../../../components/DesignCarousel';
import ResultsTeam from '../../../components/ResultsTeam';
import StructuredData from '../../../components/StructuredData';
import caseStudyDataRaw from '../../../content/walmart-mexico-case-study.json';
import type { CaseStudyData } from '../../../types/case-study';

export const metadata: Metadata = {
  title: 'Walmart Mexico Case Study - Turning Reorders into Revenue | Gisselle Muñoz',
  description: 'Complete UX/UI redesign of Walmart Mexico\'s e-commerce repurchase features (Favorites, Recently ordered, and Lists). Increased page visits from 772K to 1.9M and revenue share from 3.64% to 5.99%. View the full case study.',
  keywords: [
    'Walmart Mexico',
    'UX Case Study',
    'E-commerce Design',
    'Mobile App Redesign',
    'User Experience Design',
    'Product Design',
    'Repurchase Features',
    'Add to Cart Optimization',
    'Revenue Growth',
    'User Research',
    'Design Strategy',
    'Mexico Market',
    'Shopping App Design',
    'Conversion Rate Optimization'
  ],
  authors: [{ name: 'Gisselle Muñoz' }],
  creator: 'Gisselle Muñoz',
  publisher: 'Gisselle Muñoz',
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://gisselle-insignares.vercel.app/case-studies/walmart-mexico',
    siteName: 'Gisselle Muñoz Portfolio',
    title: 'Walmart Mexico Case Study - Turning Reorders into Revenue',
    description: 'Complete UX/UI redesign of Walmart Mexico\'s e-commerce repurchase features. Increased page visits from 772K to 1.9M and revenue share from 3.64% to 5.99%.',
    images: [
      {
        url: 'https://fhwbwuvdvciwi1ix.public.blob.vercel-storage.com/Case%20Studies/Walmart%20Mexico/image%201.png',
        width: 1200,
        height: 630,
        alt: 'Walmart Mexico mobile app interfaces showing repurchase features redesign'
      }
    ],
    publishedTime: '2024-01-15T00:00:00.000Z',
    modifiedTime: '2024-01-15T00:00:00.000Z',
    section: 'Case Studies',
    tags: ['UX Design', 'E-commerce', 'Mobile App', 'Walmart', 'Mexico']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walmart Mexico Case Study - Turning Reorders into Revenue',
    description: 'Complete UX/UI redesign of Walmart Mexico\'s e-commerce repurchase features. See how we increased page visits by 146% and revenue share by 65%.',
    images: ['https://fhwbwuvdvciwi1ix.public.blob.vercel-storage.com/Case%20Studies/Walmart%20Mexico/image%201.png']
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
  }
};

const caseStudyData = caseStudyDataRaw as CaseStudyData;

export default function WalmartMexicoCaseStudy() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Walmart Mexico Case Study - Turning Reorders into Revenue",
    "description": "Complete UX/UI redesign of Walmart Mexico's e-commerce repurchase features (Favorites, Recently ordered, and Lists). Increased page visits from 772K to 1.9M and revenue share from 3.64% to 5.99%.",
    "image": [
      "https://fhwbwuvdvciwi1ix.public.blob.vercel-storage.com/Case%20Studies/Walmart%20Mexico/image%201.png",
      "https://fhwbwuvdvciwi1ix.public.blob.vercel-storage.com/Case%20Studies/Walmart%20Mexico/carousel0.png",
      "https://fhwbwuvdvciwi1ix.public.blob.vercel-storage.com/Case%20Studies/Walmart%20Mexico/carousel1.png"
    ],
    "author": {
      "@type": "Person",
      "name": "Gisselle Muñoz",
      "jobTitle": "UX/UI Designer",
      "url": "https://gisselle-insignares.vercel.app"
    },
    "publisher": {
      "@type": "Person",
      "name": "Gisselle Muñoz"
    },
    "datePublished": "2024-01-15T00:00:00.000Z",
    "dateModified": "2024-01-15T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://gisselle-insignares.vercel.app/case-studies/walmart-mexico"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "User Experience Design"
      },
      {
        "@type": "Thing",
        "name": "E-commerce Optimization"
      },
      {
        "@type": "Organization",
        "name": "Walmart Mexico"
      }
    ],
    "keywords": "UX Design, E-commerce, Mobile App, Walmart Mexico, User Research, Product Design, Conversion Optimization",
    "articleSection": "Case Studies",
    "wordCount": 1500,
    "inLanguage": "en-US"
  };

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Walmart Mexico UX/UI Redesign",
    "description": "Complete redesign of Walmart Mexico's e-commerce repurchase features including Favorites, Recently ordered, and Lists functionality.",
    "creator": {
      "@type": "Person",
      "name": "Gisselle Muñoz"
    },
    "dateCreated": "2024-01-15T00:00:00.000Z",
    "genre": "UX/UI Design",
    "about": {
      "@type": "Thing",
      "name": "E-commerce User Experience"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Design Professionals, Product Managers, UX Researchers"
    }
  };

  return (
    <div className="min-h-screen bg-light-gray">
      <StructuredData data={articleSchema} />
      <StructuredData data={creativeWorkSchema} />
      <Navbar />
      
      <CaseStudyHero 
        title={caseStudyData.hero.title}
        subtitle={caseStudyData.hero.subtitle}
        heroImage={caseStudyData.hero.heroImage}
      />
      
      <ProblemDiscovery 
        problem={caseStudyData.problemDiscovery.problem}
        discovery={caseStudyData.problemDiscovery.discovery}
        backgroundColor={caseStudyData.problemDiscovery.backgroundColor}
      />
      
      <UserQuote 
        quote={caseStudyData.userQuote.quote}
        attribution={caseStudyData.userQuote.attribution}
        backgroundColor={caseStudyData.userQuote.backgroundColor}
        quoteIcon={caseStudyData.userQuote.quoteIcon}
      />
      
      <ProcessPhases 
        sectionTitle={caseStudyData.processPhases.sectionTitle}
        sectionSubtitle={caseStudyData.processPhases.sectionSubtitle}
        phases={caseStudyData.processPhases.phases}
        backgroundColor={caseStudyData.processPhases.backgroundColor}
      />
      
      <DesignPrinciples 
        sectionTitle={caseStudyData.designPrinciples.sectionTitle}
        sectionSubtitle={caseStudyData.designPrinciples.sectionSubtitle}
        principles={caseStudyData.designPrinciples.principles}
        backgroundColor={caseStudyData.designPrinciples.backgroundColor}
      />
      
      <DesignCarousel 
        sectionTitle={caseStudyData.designCarousel.sectionTitle}
        images={caseStudyData.designCarousel.images}
        autoScroll={caseStudyData.designCarousel.autoScroll}
        scrollSpeed={caseStudyData.designCarousel.scrollSpeed}
        backgroundColor={caseStudyData.designCarousel.backgroundColor}
      />
      
      <ResultsTeam 
        results={caseStudyData.resultsTeam.results}
        team={caseStudyData.resultsTeam.team}
        backgroundColor={caseStudyData.resultsTeam.backgroundColor}
      />
      
      <Footer />
    </div>
  );
}