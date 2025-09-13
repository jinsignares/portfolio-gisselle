'use client';

interface Metric {
  id: string;
  title: string;
  value: string;
  description: string;
}

interface ResultsTeamProps {
  results: {
    title: string;
    metrics: Metric[];
  };
  team: {
    title: string;
    description: string;
  };
  backgroundColor?: string;
}

export default function ResultsTeam({ 
  results, 
  team, 
  backgroundColor = 'white' 
}: ResultsTeamProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* The Results */}
          <div>
            <h2 className="case-study-hero-title text-primary-medium mb-8">{results.title}</h2>
            <div className="space-y-6">
              {results.metrics.map((metric) => (
                <div key={metric.id}>
                  <h3 className="d-subtitle text-primary-dark mb-2">{metric.title}</h3>
                  <p className="case-study-phase-text text-primary-dark mb-1">
                    <strong>{metric.value}</strong> {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* The Team */}
          <div>
            <h2 className="case-study-hero-title text-primary-medium mb-8">{team.title}</h2>
            <p className="case-study-phase-text text-primary-dark">
              {team.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}