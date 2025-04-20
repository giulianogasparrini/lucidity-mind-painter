
import React from 'react';
import { BookText, Cloud, Star } from 'lucide-react';

interface DreamCardProps {
  title: string;
  date: string;
  excerpt: string;
  mood: string;
  onClick: () => void;
}

const DreamCard: React.FC<DreamCardProps> = ({ title, date, excerpt, mood, onClick }) => {
  return (
    <div 
      className="dream-card p-5 mb-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span className="text-sm text-dream-silver">{date}</span>
      </div>
      <p className="text-sm text-white mb-3 line-clamp-2">{excerpt}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Cloud className="w-4 h-4 mr-1 text-dream-silver" />
          <span className="text-xs text-dream-silver">{mood}</span>
        </div>
        <div className="flex">
          <BookText className="w-4 h-4 text-dream-silver" />
          <Star className="w-4 h-4 ml-2 text-dream-silver" />
        </div>
      </div>
    </div>
  );
};

export default DreamCard;
