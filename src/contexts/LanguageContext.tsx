
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<Language, string>>;
}

const translations = {
  dreamTitle: {
    en: "Lucidity",
    fr: "Lucidité",
    es: "Lucidez"
  },
  dreamSubtitle: {
    en: "Your AI-powered dream journal for insights and reflection",
    fr: "Votre journal de rêves alimenté par l'IA pour la réflexion",
    es: "Tu diario de sueños con IA para reflexión y comprensión"
  },
  recordDream: {
    en: "Record a New Dream",
    fr: "Enregistrer un Nouveau Rêve",
    es: "Registrar un Nuevo Sueño"
  },
  dreamTitle_placeholder: {
    en: "Dream Title",
    fr: "Titre du Rêve",
    es: "Título del Sueño"
  },
  dreamDescription_placeholder: {
    en: "Describe your dream...",
    fr: "Décrivez votre rêve...",
    es: "Describe tu sueño..."
  },
  mood_placeholder: {
    en: "Mood or Feeling",
    fr: "Humeur ou Sentiment",
    es: "Estado de Ánimo"
  },
  visualize: {
    en: "Visualize",
    fr: "Visualiser",
    es: "Visualizar"
  },
  save: {
    en: "Save Dream",
    fr: "Sauvegarder",
    es: "Guardar"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
