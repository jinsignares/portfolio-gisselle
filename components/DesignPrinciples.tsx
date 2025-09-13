'use client';

import Image from 'next/image';

interface Principle {
  id: string;
  title: string;
  description: string;
  icon: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

interface DesignPrinciplesProps {
  sectionTitle: string;
  sectionSubtitle: string;
  principles: Principle[];
  backgroundColor?: string;
}

export default function DesignPrinciples({ 
  sectionTitle, 
  sectionSubtitle, 
  principles, 
  backgroundColor = '#E9D5FF' 
}: DesignPrinciplesProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="case-study-hero-title text-primary-dark mb-6">{sectionTitle}</h2>
          <p className="case-study-phase-text text-primary-dark max-w-4xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>
        
        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle) => (
            <div key={principle.id} className="text-left">
              <Image 
                src={principle.icon.src}
                alt={principle.icon.alt}
                width={principle.icon.width}
                height={principle.icon.height}
              />
              <h3 className="case-study-principle-title text-primary-dark mb-4">{principle.title}</h3>
              <p className="case-study-phase-text text-primary-dark">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}