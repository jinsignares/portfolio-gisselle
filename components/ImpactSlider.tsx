'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import impactSliderContent from '../content/impact-slider.json';

export default function ImpactSlider() {
  const { impactSlider } = impactSliderContent;
  const { content } = impactSlider;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(content.autoplay.enabled);

  const totalSlides = content.slides.length;

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, content.autoplay.interval);

    return () => clearInterval(interval);
  }, [isPlaying, nextSlide, content.autoplay.interval]);

  // Pause/resume on hover
  const handleMouseEnter = () => {
    if (content.autoplay.pauseOnHover) {
      setIsPlaying(false);
    }
  };

  const handleMouseLeave = () => {
    if (content.autoplay.pauseOnHover) {
      setIsPlaying(content.autoplay.enabled);
    }
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const slideTransition = {
    x: { type: 'spring' as const, stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 }
  };

  const currentSlideData = content.slides[currentSlide];

  return (
    <section 
      className="relative min-h-[220px] py-10 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait" custom={1}>
        <motion.div
          key={currentSlide}
          custom={1}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          className={`absolute inset-0 flex items-center justify-center ${currentSlideData.background.className}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            {/* Company Badge */}
            {currentSlideData.company && (
              <div className={`${currentSlideData.company.className} mb-2`}>
                {currentSlideData.company.text}
              </div>
            )}
            
            {/* Impact Percentage */}
            <div className="flex justify-center items-center space-x-2">
              <h2 className="slider-metric text-white">
                {currentSlideData.impact.percentage}
              </h2>
            
            {/* Impact Metric */}
            <h3 className="slider-metric text-white">
              {currentSlideData.impact.metric}
            </h3>
            </div>
            
            {/* Description */}
            <p className="slider-description text-white/90 mb-2 max-w-2xl mx-auto">
              {currentSlideData.impact.description}
            </p>
            
            {/* CTA */}
            <button 
              className={currentSlideData.impact.cta.className}
              onClick={() => {
                // TODO: Navigate to case study page
                console.log('Navigate to case study:', currentSlideData.caseStudyId);
              }}
            >
              {currentSlideData.impact.cta.text}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {content.slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}