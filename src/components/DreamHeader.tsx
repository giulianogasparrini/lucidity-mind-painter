
import React from 'react';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const DreamHeader: React.FC = () => {
  const { translations, language } = useLanguage();

  return (
    <header className="relative z-10 py-6 px-4 text-center animate-fade-in">
      <div className="flex items-center justify-center mb-2">
        <Sparkles className="w-6 h-6 mr-2 text-dream-purple animate-pulse-slow" />
        <h1 className="text-3xl font-bold text-dream-silver">
          {translations.dreamTitle[language]}
        </h1>
        <Sparkles className="w-6 h-6 ml-2 text-dream-purple animate-pulse-slow" />
      </div>
      <p className="text-lg max-w-md mx-auto text-slate-50">
        {translations.dreamSubtitle[language]}
      </p>
    </header>
  );
};

export default DreamHeader;
