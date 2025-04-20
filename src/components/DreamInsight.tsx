
import React from 'react';
import { Sparkles } from 'lucide-react';

interface DreamInsightProps {
  insights: Array<{
    title: string;
    description: string;
  }>;
}

const DreamInsight: React.FC<DreamInsightProps> = ({ insights }) => {
  return (
    <div className="dream-card p-5 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4 text-dream-darkpurple flex items-center">
        <Sparkles className="w-5 h-5 mr-2 text-dream-purple" />
        Dream Insights
      </h2>
      
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="bg-white bg-opacity-40 rounded-lg p-3">
            <h3 className="text-sm font-medium text-dream-darkpurple mb-1">{insight.title}</h3>
            <p className="text-xs text-dream-midnight">{insight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DreamInsight;
