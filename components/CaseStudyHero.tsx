'use client';

import Image from 'next/image';

interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  heroImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export default function CaseStudyHero({ title, subtitle, heroImage }: CaseStudyHeroProps) {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1 className="case-study-hero-title text-primary-dark mb-6">
          {title}
        </h1>
        
        {/* Subtitle */}
        <p className="case-study-hero-subtitle text-primary-dark mb-12 max-w-4xl mx-auto">
          {subtitle}
        </p>
        
        {/* Hero Image */}
        <div className="w-full">
          <Image 
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            className="w-full max-w-4xl mx-auto rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}