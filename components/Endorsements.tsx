'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import endorsementsContent from '../content/endorsements.json';

export default function Endorsements() {
  const { endorsements } = endorsementsContent;
  const { content } = endorsements;
  const [currentEndorsement, setCurrentEndorsement] = useState(0);
  const [isPlaying, setIsPlaying] = useState(content.autoplay.enabled);

  const totalEndorsements = content.endorsements.length;

  // Navigation functions
  const nextEndorsement = useCallback(() => {
    setCurrentEndorsement((prev) => (prev + 1) % totalEndorsements);
  }, [totalEndorsements]);

  const prevEndorsement = useCallback(() => {
    setCurrentEndorsement((prev) => (prev - 1 + totalEndorsements) % totalEndorsements);
  }, [totalEndorsements]);

  const goToEndorsement = useCallback((index: number) => {
    setCurrentEndorsement(index);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextEndorsement();
    }, content.autoplay.interval);

    return () => clearInterval(interval);
  }, [isPlaying, nextEndorsement, content.autoplay.interval]);

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

  const currentEndorsementData = content.endorsements[currentEndorsement];

  return (
    <section 
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-light-gray overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-4xl mx-auto">

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={currentEndorsement}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <img 
                  src="/quote.svg" 
                  alt="Quote" 
                  className="w-12 h-12 opacity-30"
                />
              </div>
              
              {/* Endorsement Content */}
              <blockquote className={`${currentEndorsementData.content.className} mb-8 max-w-3xl`}>
                &ldquo;{currentEndorsementData.content.text}&rdquo;
              </blockquote>
              
              {/* Author Information */}
              <div className="text-center">
                <h3 className={currentEndorsementData.author.nameClassName}>
                  - {currentEndorsementData.author.name}
                </h3>
                <p className={`${currentEndorsementData.author.positionClassName} mt-1`}>
                  {currentEndorsementData.author.position}
                </p>
                
                {/* LinkedIn Link */}
                <a 
                  href={currentEndorsementData.author.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-accent-teal hover:text-accent-dark-teal transition-colors text-sm underline"
                >
                  View on LinkedIn
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevEndorsement}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-primary-dark/70 hover:text-primary-dark transition-colors z-10"
          aria-label="Previous endorsement"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          onClick={nextEndorsement}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-primary-dark/70 hover:text-primary-dark transition-colors z-10"
          aria-label="Next endorsement"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {content.endorsements.map((_, index) => (
            <button
              key={index}
              onClick={() => goToEndorsement(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentEndorsement 
                  ? 'bg-primary-dark scale-110' 
                  : 'bg-primary-dark/30 hover:bg-primary-dark/50'
              }`}
              aria-label={`Go to endorsement ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}