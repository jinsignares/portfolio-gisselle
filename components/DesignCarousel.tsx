'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface DesignCarouselProps {
  sectionTitle: string;
  images: CarouselImage[];
  autoScroll?: boolean;
  scrollSpeed?: number;
  backgroundColor?: string;
}

export default function DesignCarousel({ 
  sectionTitle, 
  images, 
  autoScroll = true,
  scrollSpeed = 0.2,
  backgroundColor = 'white'
}: DesignCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoScroll) return;
    
    const container = containerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const totalWidth = container.scrollWidth;
    const visibleWidth = container.clientWidth;
    const halfWidth = (totalWidth - visibleWidth) / 2;

    const autoScrollFn = () => {
      scrollPosition += scrollSpeed;
      
      // Seamless reset when we've scrolled past the first set of images
      if (scrollPosition >= halfWidth) {
        // Instantly jump back to the beginning without animation
        container.scrollLeft = 0;
        scrollPosition = 0;
      } else {
        container.scrollLeft = scrollPosition;
      }
      
      requestAnimationFrame(autoScrollFn);
    };

    const animationId = requestAnimationFrame(autoScrollFn);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [autoScroll, scrollSpeed]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="case-study-hero-title text-primary-medium mb-4">{sectionTitle}</h2>
        </div>
        
        {/* Carousel Container */}
        <div className="relative h-[600px]">
          {/* Scrollable Container */}
          <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-hidden px-8 py-4 h-full items-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* First set of images */}
            {images.map((image, index) => (
              <div key={image.id} className="flex-shrink-0 h-full">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-full w-auto object-cover"
                  quality={100}
                  unoptimized={true}
                  priority={index < 3}
                />
              </div>
            ))}
            
            {/* Duplicate set for infinite scroll */}
            {images.map((image) => (
              <div key={`${image.id}-duplicate`} className="flex-shrink-0 h-full">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-full w-auto object-cover rounded-lg shadow-md"
                  quality={100}
                  unoptimized={true}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}