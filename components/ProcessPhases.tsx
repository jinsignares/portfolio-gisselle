'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Phase {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  imagePosition: 'left' | 'right';
}

interface ProcessPhasesProps {
  sectionTitle: string;
  sectionSubtitle: string;
  phases: Phase[];
  backgroundColor?: string;
}

export default function ProcessPhases({ 
  sectionTitle, 
  sectionSubtitle, 
  phases, 
  backgroundColor = 'white' 
}: ProcessPhasesProps) {
  const [visibleImages, setVisibleImages] = useState<Set<string>>(new Set());
  const imageRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const phaseId = entry.target.getAttribute('data-phase-id');
            if (phaseId) {
              setVisibleImages(prev => new Set([...prev, phaseId]));
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    Object.values(imageRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(imageRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [phases]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="case-study-hero-title text-primary-medium mb-6">{sectionTitle}</h2>
          <p className="case-study-hero-subtitle text-primary-dark max-w-4xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>
        
        {/* Phases */}
        {phases.map((phase, index) => (
          <div key={phase.id} className={`grid grid-cols-1 lg:grid-cols-2 items-center h-auto md:h-[418px] gap-6 lg:gap-0 ${index < phases.length - 1 ? 'mb-12 md:mb-0' : ''}`}>
            {/* Image */}
            <div 
              ref={(el) => { imageRefs.current[phase.id] = el; }}
              data-phase-id={phase.id}
              className={`h-64 lg:h-full bg-[#f4f4f4] items-center flex justify-center order-1 ${
                phase.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'
              }`}
            >
              <Image 
                src={phase.image.src}
                alt={phase.image.alt}
                width={phase.image.width}
                height={phase.image.height}
                className={`w-full h-full object-contain ${
                  visibleImages.has(phase.id) ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              />
            </div>
            
            {/* Content */}
            <div className={`order-2 px-4 lg:px-0 ${
              phase.imagePosition === 'right' ? 'lg:order-1 lg:mr-4' : 'lg:order-2 lg:ml-4'
            }`}>
              <h3 className="title text-primary-medium mb-4">{phase.title}</h3>
              <h4 className="title text-primary-medium mb-6">{phase.subtitle}</h4>
              <div className="case-study-phase-text text-primary-dark" dangerouslySetInnerHTML={{ __html: phase.content }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}