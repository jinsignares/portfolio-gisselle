'use client';

import Image from 'next/image';

interface UserQuoteProps {
  quote: string;
  attribution: string;
  backgroundColor?: string;
  quoteIcon?: string;
}

export default function UserQuote({ 
  quote, 
  attribution, 
  backgroundColor = '#E9D5FF',
  quoteIcon = '/quote-medium.svg'
}: UserQuoteProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor }}>
      <div className="max-w-4xl mx-auto text-left">
        {/* Quote Icon */}
        <div className="mb-6 flex w-full justify-start text-left">
          <Image 
            src={quoteIcon}
            alt="Quote"
            width={48}
            height={48}
          />
        </div>
        
        {/* Quote Text */}
        <blockquote className="body text-primary-dark mb-6 text-lg leading-relaxed">
          &quot;{quote}&quot;
        </blockquote>
        
        {/* Attribution */}
        <cite className="d-subtitle text-primary-dark font-medium">
          - {attribution}
        </cite>
      </div>
    </section>
  );
}