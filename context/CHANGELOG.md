# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2024-01-11

### Fixed
- **Font Loading Optimization**
  - Switched from Fontshare CDN to local font files for better performance
  - Implemented Next.js localFont optimization for Stardom and General Sans fonts
  - Added proper font loading with display: swap for better user experience
  - Configured multiple font weights (400, 500, 600, 700) for General Sans
  - Removed external font requests for improved privacy and performance
  - Updated CSS custom properties to use Next.js font variables

### Changed
- **Simplified Slider Structure**
  - Removed "IMPACT SNAPSHOTS" title text that wasn't in the design
  - Streamlined slider to only show the four required elements:
    - Company badge
    - KPI (percentage + metric)
    - Description
    - Case study link
  - Cleaned up content JSON structure by removing unnecessary title field

### Changed
- **Impact Slider Background**
  - Added stationary gradient background from #3C037A to #000000
  - Moved background styling from individual slides to section container
  - Only text content now slides while background remains fixed
  - Removed individual slide background classes for unified appearance
  - Maintained smooth sliding animations for content only

### Fixed
- **Impact Slider Animation**
  - Eliminated black fade effect between slide transitions
  - Restored x-axis slide animations with improved timing
  - Changed AnimatePresence mode to 'popLayout' for seamless transitions
  - Set opacity to 1 throughout animation to prevent fade to black
  - Maintained smooth sliding motion with spring physics
  - Preserved autoplay functionality and user controls
  - **Fixed slide visibility and centering**: Switched to opacity-only transitions to eliminate positioning issues
  - Removed x-axis animations that caused previous slides to remain visible
  - Ensured instant centering with no delay using opacity fade transitions
  - Added additional overflow container for extra content clipping
  - Completely eliminated previous slide visibility on screen edges

### Changed
- **Impact Slider Content Updates**
  - Updated all four slides to match the provided design specifications
  - **Walmart MX**: 13% Revenue growth on overlooked pages
  - **Walmart CA**: 6.9% increase in ATC after product page redesign
  - **MGM Resorts**: 0.2% bounce rate reduction after Rewards experience redesign
  - **MGM Resorts**: 50% faster delivery through scalable component library
  - Unified background color to `bg-primary-medium` for all slides
  - **Company Badge Styling Updates**:
    - **Walmart MX**: Light green background (#C2EBD3)
    - **Walmart CA**: Light blue background (#CAE8FF)
    - **MGM Resorts** (both slides): Light orange background (#FFECDE)
    - All badges use dark text color (#1A042A) and 4px border radius
    - Updated component to support inline styles from JSON content
  - Maintained autoplay functionality and smooth transitions
  - Updated case study IDs to match new content structure

### Added
- **Walmart Mexico Case Study**
  - Created first real case study page under `/case-studies/walmart-mexico` route
  - Updated The Work section with real Walmart Mexico project data
  - Added actual case study thumbnail from Vercel storage
  - **Case Study Content**: "Turning Reorders into Revenue: Redesign for Walmart Mexico"
  - **Real Description**: Detailed project overview with actual business impact
  - **Results Metrics**: 13% revenue growth, 45% increased engagement, 32% more cart additions
  - **Complete Page Structure**: Hero section, overview, challenge, solution, results, and process
  - **Navigation Integration**: Direct linking from The Work cards to case study pages
  - **Responsive Design**: Full mobile and desktop compatibility

- **Enhanced Navigation Features**
  - **Smooth Scrolling**: Added smooth scroll behavior to all navbar and footer links
  - **Dynamic Navbar Background**: Navbar transitions from transparent to solid white with shadow on scroll
  - **Scroll Detection**: Real-time scroll position tracking with useEffect and event listeners
  - **Improved UX**: Prevents default link behavior and uses JavaScript scrollIntoView API
  - **Mobile Menu Integration**: Smooth scrolling works in both desktop and mobile navigation
  - **Performance Optimized**: Proper event listener cleanup to prevent memory leaks

- **Footer Component**
  - Created footer with navigation links to all main sections
  - Purple background (#3C037A) matching the design theme
  - **Navigation Links**: The Work, About, Endorsements, Email, LinkedIn Profile
  - **Smooth Scrolling**: JavaScript scroll behavior for internal section links
  - **External Links**: Proper target="_blank" for LinkedIn and mailto for email
  - **GM Logo**: Centered logo using Stardom font
  - **Copyright**: Dynamic year display "Gisselle Muñoz, 2025"
  - **Responsive Design**: Flexible layout that works on all screen sizes
  - **Hover Effects**: Accent teal color on link hover
  - **Accessibility**: Proper ARIA attributes and semantic HTML

- **Page Structure Updates**
  - Added section IDs for proper navigation (#work, #endorsements)
  - Integrated Footer component into main page layout
  - Maintained consistent spacing and visual hierarchy

- **Endorsements Section**
  - Created autoplay slider for LinkedIn endorsements similar to impact slider
  - Implemented endorsement cards with quote icon, content, author, and position
  - Added navigation arrows and dot indicators for manual control
  - **Autoplay Functionality**: 5-second intervals with pause on hover
  - **LinkedIn Integration**: Direct links to endorsements on LinkedIn profiles
  - **Typography Classes**: Custom styles for endorsement content, author names, and positions
    - `.endorsement-content`: 16px General Sans for endorsement text
    - `.endorsement-author`: 24px Stardom font for author names
    - `.endorsement-author-position`: 14px General Sans for job titles
  - **Quote Icon**: Integrated SVG quote symbol for visual appeal
  - **Smooth Animations**: Framer-motion slide transitions between endorsements
  - **Sample Content**: Three professional endorsements with realistic content

- **Content Management**
  - Created endorsements.json for endorsement content structure
  - Structured data with LinkedIn URLs for easy linking
  - Configurable autoplay settings and styling classes

- **The Work Section**
  - Created responsive case study grid layout (2 columns desktop, 1 column mobile)
  - Implemented case study cards with company badges, titles, descriptions, and links
  - Added section title and subtitle with proper typography
  - **Case Study Images**: Added placeholder images with proper dimensions
    - Created SVG placeholder with 306.5625px height requirement (19.25rem)
    - Added custom `.h-77` CSS class for consistent image height
    - Images positioned at top of each card with rounded corners
    - Placeholder design includes visual indicators and dimensions
    - Ready for real case study images in `/public` directory
  - **Sequential Fade-in Animations**: Similar to hero section with framer-motion
    - Section title and subtitle animate in first
    - Case study cards animate in with staggered timing (0.2s delay between cards)
    - Cards fade in from bottom with 30px y-offset
    - Viewport-triggered animations with `whileInView` for performance
    - 0.6s duration with easeOut easing for smooth motion
  - Created dedicated CSS classes for case study typography:
    - `.case-study-company-badge`: 14px General Sans with light purple background
    - `.case-study-title`: 30px Stardom font for case study titles
    - `.case-study-description`: 20px General Sans for descriptions
    - `.case-study-link`: 16px General Sans with underline for links
  - Added hover effects and smooth transitions for better UX
  - Populated with sample case studies (MGM Resorts, Walmart CA, Project Inc)

- **Content Management**
  - Created the-work.json for case study content structure
  - Organized content with proper component mapping
  - Structured data for easy editing and maintenance

- **Company Badges in Slider**
  - Added company field to each impact slide (Walmart MX, E-Commerce Co, Mobile App Inc)
  - Created `.slider-company-badge` class with 14px (0.875rem) font size
  - Styled badges with semi-transparent background and rounded corners
  - Positioned badges at the top of each slide

### Fixed
- **Slider Typography Standardization**
  - Updated all typography to use proper rem units as specified:
    - Company badge: 14px (0.875rem)
    - Impact metric: 30px (1.875rem) 
    - Description: 16px (1rem)
    - CTA link: 14px (0.875rem)
  - Created dedicated classes: `.slider-company-badge`, `.slider-description`, `.slider-cta`
  - Maintained consistent font families (Stardom for metrics, General Sans for text)

- **Slider Typography**
  - Created dedicated `.slider-metric` class with 30px (1.875rem) font size
  - Fixed impact metric text in slider that was affected by global heading size changes
  - Maintained proper typography hierarchy while preserving hero section styles
  - Ensured slider displays correctly with appropriate font sizing

### Changed
- **Layout Restructure**
  - Moved "Gisselle Muñoz" from hero section to navbar logo
  - Updated navbar logo from "GM" to full name "Gisselle Muñoz"
  - Hero section now displays only the three animated subtitle lines
  - Maintained sequential fade-in animations for remaining hero content

### Added
- **Hero Component Animations**
  - Sequential fade-in animations for each text line
  - Lines appear from bottom to top with staggered timing
  - Smooth easeOut transitions with 0.6s duration
  - 0.3s delay between each line animation
  - Updated content structure to support individual lines
  - Split subtitle into three separate lines: "Product Designer", "Problem Solver", "Enthusiastic Questioner"

- **ImpactSlider Component**
  - Autoplay slider showcasing case study impact snapshots
  - Smooth framer-motion slide transitions with spring animations
  - Navigation arrows and dot indicators for manual control
  - Autoplay functionality with pause on hover
  - Responsive design with proper mobile support
  - Content-driven structure with case study references
  - Three sample impact slides with different metrics and backgrounds
  - Click-to-navigate functionality for case study pages (placeholder)

- **Content Management**
  - Created impact-slider.json for slider content configuration
  - Structured format with impact metrics, descriptions, and CTAs
  - Case study ID references for future navigation implementation
  - Configurable autoplay settings (interval, pause on hover)

- **Navbar Component**
  - Transparent fixed navbar with responsive design
  - Desktop navigation with anchor links to page sections
  - Mobile hamburger menu with framer-motion animations
  - Animated hamburger icon transformation (lines rotate and fade)
  - Conditional rendering for back button on case pages
  - Smooth backdrop blur effect on mobile menu
  - Staggered animation for mobile menu items

- **Hero Component**
  - Full-screen hero section with centered content
  - Responsive typography using Stardom font
  - Light purple background matching design
  - Content-driven design using JSON configuration

- **Dependencies**
  - Installed framer-motion for smooth animations
  - Added TypeScript support for motion components

- **Content Management**
  - Created navbar-hero.json for component content
  - Structured content format for easy editing
  - Separated design from content for maintainability

### Changed
- Updated main page to use new Navbar and Hero components
- Replaced typography demo with actual portfolio layout

### Technical Implementation
- Used framer-motion for hamburger menu animations
- Implemented responsive design with Tailwind CSS
- Added proper TypeScript interfaces for component props
- Created reusable component architecture

---

## [Previous] - 2024-01-11

### Added
- **Typography System Implementation**
  - Integrated Stardom font family from Fontshare for headings and titles
  - Integrated General Sans font family from Fontshare for body text and subtitles
  - Created comprehensive typography classes:
    - `.d-mega` - 64px desktop, 40px mobile (Stardom)
    - `.heading` - 36px desktop, 30px mobile (Stardom)
    - `.title` - 30px desktop, 24px mobile (Stardom)
    - `.d-subtitle` - 20px (General Sans)
    - `.d-subtitle-small` - 18px (General Sans)
    - `.body` - 16px (General Sans)
    - `.caption` - 14px (General Sans)
  - Implemented responsive breakpoints for mobile typography

- **Color System**
  - Added project color palette as CSS custom properties:
    - Primary Dark: #1A042A
    - Primary Medium: #3C037A
    - Accent Teal: #11CDB7
    - Accent Dark Teal: #049797
    - Light Purple: #E9D5FF
    - Light Gray: #F8FAFC
    - White: #FFFFFF
  - Created utility classes for text and background colors

- **Project Structure**
  - Created `/components` directory for reusable components
  - Created `/types` directory for TypeScript interfaces
  - Created `/content` directory for JSON content management
  - Created `/context` directory for project documentation
  - Added sample typography demo content in JSON format

### Changed
- Updated `layout.tsx` to remove Geist fonts and use new font system
- Completely rewrote `globals.css` with new typography and color system
- Set General Sans as the default body font

### Technical Details
- Font loading via Fontshare CDN with optimized display=swap
- Mobile-first responsive design approach
- CSS custom properties for maintainable theming
- Semantic typography class naming convention