'use client';

import { motion } from 'framer-motion';
import theWorkContent from '../content/the-work.json';

export default function TheWork() {
  const { theWork } = theWorkContent;
  const { content } = theWork;

  // Animation variants for sequential fade-in
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const
      }
    }
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const
      }
    }
  };

  return (
    <section className="py-40 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.h2 
            className={content.title.className}
            variants={titleVariants}
          >
            {content.title.text}
          </motion.h2>
          
          {/* Section Subtitle */}
          <motion.p 
            className={content.subtitle.className}
            variants={titleVariants}
          >
            {content.subtitle.text}
          </motion.p>
        </motion.div>
        
        {/* Case Studies Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {content.caseStudies.map((caseStudy, index) => (
            <motion.div 
              key={caseStudy.id}
              className="bg-white p-6 hover:shadow-md transition-shadow duration-300"
              variants={cardVariants}
            >
              {/* Case Study Image */}
              {caseStudy.image && (
                <img 
                  src={caseStudy.image.src}
                  alt={caseStudy.image.alt}
                  className={caseStudy.image.className}
                />
              )}
              
              {/* Company Badge */}
              <div className={`${caseStudy.company.className} mb-4`}>
                {caseStudy.company.text}
              </div>
              
              {/* Case Study Title */}
              <h3 className={`${caseStudy.title.className} mb-4`}>
                {caseStudy.title.text}
              </h3>
              
              {/* Description */}
              <p className={`${caseStudy.description.className} mb-6`}>
                {caseStudy.description.text}
              </p>
              
              {/* Case Study Link */}
              <a 
                href={caseStudy.link.href}
                className={caseStudy.link.className}
                onClick={(e) => {
                  e.preventDefault();
                  // TODO: Navigate to case study page
                  console.log('Navigate to case study:', caseStudy.id);
                }}
              >
                {caseStudy.link.text} →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}