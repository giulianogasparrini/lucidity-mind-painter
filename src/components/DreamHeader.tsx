import React from 'react';
import { Sparkles } from 'lucide-react';
const DreamHeader: React.FC = () => {
  return <header className="relative z-10 py-6 px-4 text-center animate-fade-in">
      <div className="flex items-center justify-center mb-2">
        <Sparkles className="w-6 h-6 mr-2 text-dream-purple animate-pulse-slow" />
        <h1 className="text-3xl font-bold text-dream-silver">Lucidity</h1>
        <Sparkles className="w-6 h-6 ml-2 text-dream-purple animate-pulse-slow" />
      </div>
      <p className="text-lg max-w-md mx-auto text-slate-50">
        Your AI-powered dream journal for insights and reflection
      </p>
    </header>;
};
export default DreamHeader;