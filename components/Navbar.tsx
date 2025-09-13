'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import navbarHeroContent from '../content/navbar-hero.json';
import Link from 'next/link';

interface NavbarProps {
  showBackButton?: boolean;
}

export default function Navbar({ showBackButton = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { navbar } = navbarHeroContent;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const smoothScrollTo = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Animation variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20
    },
    open: {
      opacity: 1,
      y: 0
    }
  };

  const menuTransition = {
    duration: 0.3,
    ease: 'easeInOut' as const
  };

  // Animation variants for hamburger lines
  const lineVariants = {
    closed: {
      rotate: 0,
      y: 0
    },
    open: {
      rotate: 45,
      y: 6
    }
  };

  const line2Variants = {
    closed: {
      opacity: 1
    },
    open: {
      opacity: 0
    }
  };

  const line3Variants = {
    closed: {
      rotate: 0,
      y: 0
    },
    open: {
      rotate: -45,
      y: -6
    }
  };

  if (showBackButton) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <button 
              onClick={() => window.history.back()}
              className="d-subtitle-small hover:text-accent-teal text-accent-dark-teal transition-colors"
            >
              ← Back
            </button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link href="/" className={navbar.content.logo.className}>
            {navbar.content.logo.text}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navbar.content.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(link.href);
                  setIsMenuOpen(false);
                }}
                className={`${link.className} hover:text-accent-dark-teal transition-colors cursor-pointer`}
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-6 h-6 flex flex-col justify-center items-center space-y-1"
            aria-label="Toggle menu"
          >
            <motion.div
              className="w-6 h-0.5 bg-accent-teal"
              variants={lineVariants}
              animate={isMenuOpen ? 'open' : 'closed'}
            />
            <motion.div
              className="w-6 h-0.5 bg-accent-teal"
              variants={line2Variants}
              animate={isMenuOpen ? 'open' : 'closed'}
            />
            <motion.div
              className="w-6 h-0.5 bg-accent-teal"
              variants={line3Variants}
              animate={isMenuOpen ? 'open' : 'closed'}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white/95 backdrop-blur-sm rounded-lg mx-4 mt-2 p-6 shadow-lg"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={menuTransition}
            >
              <div className="flex flex-col space-y-4">
                {navbar.content.links.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className={`${link.className} hover:text-accent-dark-teal transition-colors cursor-pointer`}
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo(link.href);
                      setIsMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1 }
                    }}
                  >
                    {link.text}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}