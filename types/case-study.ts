export interface CaseStudyHeroData {
  title: string;
  subtitle: string;
  heroImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface ProblemDiscoveryData {
  problem: {
    title: string;
    content: string[];
    objectives: {
      title: string;
      items: string[];
    };
  };
  discovery: {
    title: string;
    content: string;
    keyFindings: {
      title: string;
      items: string[];
    };
  };
  backgroundColor: string;
}

export interface UserQuoteData {
  quote: string;
  attribution: string;
  backgroundColor: string;
  quoteIcon: string;
}

export interface Phase {
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

export interface ProcessPhasesData {
  sectionTitle: string;
  sectionSubtitle: string;
  phases: Phase[];
  backgroundColor: string;
}

export interface Principle {
  id: string;
  title: string;
  description: string;
  icon: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface DesignPrinciplesData {
  sectionTitle: string;
  sectionSubtitle: string;
  principles: Principle[];
  backgroundColor: string;
}

export interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface DesignCarouselData {
  sectionTitle: string;
  images: CarouselImage[];
  autoScroll: boolean;
  scrollSpeed: number;
  backgroundColor: string;
}

export interface Metric {
  id: string;
  title: string;
  value: string;
  description: string;
}

export interface ResultsTeamData {
  results: {
    title: string;
    metrics: Metric[];
  };
  team: {
    title: string;
    description: string;
  };
  backgroundColor: string;
}

export interface CaseStudyData {
  hero: CaseStudyHeroData;
  problemDiscovery: ProblemDiscoveryData;
  userQuote: UserQuoteData;
  processPhases: ProcessPhasesData;
  designPrinciples: DesignPrinciplesData;
  designCarousel: DesignCarouselData;
  resultsTeam: ResultsTeamData;
}