'use client';

import { motion } from 'framer-motion';
import navbarHeroContent from '../content/navbar-hero.json';

export default function Hero() {
  const { hero } = navbarHeroContent;

  // Animation variants for sequential fade-in from bottom to top
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.7,
        delayChildren: 0.3
      }
    }
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const
      }
    }
  };

  return (
    <section className={`min-h-[556px] flex items-center justify-center ${hero.content.background.className}`}>
      <div className="max-w-7xl mx-auto py-[88px] px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title lines */}
          <div className="max-w-6xl mx-auto">
            {hero.content.title.lines.map((line, index) => (
              <motion.p 
                key={index}
                className={line.className}
                variants={lineVariants}
              >
                {line.text}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}