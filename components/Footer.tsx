'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      text: "The Work",
      href: "#work",
      onClick: () => {
        const element = document.querySelector('#work');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      text: "About",
      href: "#about",
      onClick: () => {
        const element = document.querySelector('#about');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      text: "Endorsements",
      href: "#endorsements",
      onClick: () => {
        const element = document.querySelector('#endorsements');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      text: "Email",
      href: "mailto:gisselle@example.com",
      onClick: null
    },
    {
      text: "LinkedIn Profile",
      href: "https://linkedin.com/in/gisselle-munoz",
      target: "_blank",
      onClick: null
    }
  ];

  return (
    <footer className="bg-primary-medium py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <h2 className="title text-white mb-8">
            GM
          </h2>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 mb-8">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.target || undefined}
              rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (link.onClick) {
                  e.preventDefault();
                  link.onClick();
                }
              }}
              className="d-subtitle-small text-white hover:text-accent-teal transition-colors"
            >
              {link.text}
            </a>
          ))}
        </nav>
        
        {/* Divider */}
        <div className="border-t border-white/20 mb-6"></div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="body text-white/80">
            Gisselle Muñoz, {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}