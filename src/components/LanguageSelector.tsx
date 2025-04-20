
import React from 'react';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="fixed top-4 right-4 bg-white bg-opacity-10 border-dream-purple hover:bg-white hover:bg-opacity-20">
          <Globe className="h-4 w-4 text-white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white bg-opacity-90">
        <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'bg-slate-200' : ''}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('fr')} className={language === 'fr' ? 'bg-slate-200' : ''}>
          Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('es')} className={language === 'es' ? 'bg-slate-200' : ''}>
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
