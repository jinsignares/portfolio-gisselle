'use client';

interface ProblemDiscoveryProps {
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
  backgroundColor?: string;
}

export default function ProblemDiscovery({ 
  problem, 
  discovery, 
  backgroundColor = '#F8FAFC' 
}: ProblemDiscoveryProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* The Problem */}
          <div>
            <h2 className="title text-primary-medium mb-6">{problem.title}</h2>
            {problem.content.map((paragraph, index) => (
              <p key={index} className="body text-primary-dark mb-6">
                {paragraph}
              </p>
            ))}
            
            <h3 className="d-subtitle text-primary-dark mb-4">{problem.objectives.title}</h3>
            <ul className="body text-primary-dark space-y-3">
              {problem.objectives.items.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          
          {/* The Discovery */}
          <div>
            <h2 className="title text-primary-medium mb-6">{discovery.title}</h2>
            <p className="body text-primary-dark mb-8">
              {discovery.content}
            </p>
            
            <h3 className="d-subtitle text-primary-dark mb-4">{discovery.keyFindings.title}</h3>
            <ul className="body text-primary-dark space-y-4">
              {discovery.keyFindings.items.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}