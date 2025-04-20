import React, { useState } from 'react';
import DreamCard from './DreamCard';
import DreamEntryForm from './DreamEntryForm';
import DreamInsight from './DreamInsight';
import DreamAnalysis from './DreamAnalysis';

interface Dream {
  id: string;
  title: string;
  content: string;
  date: string;
  mood: string;
}

const DreamJournal: React.FC = () => {
  const [dreams, setDreams] = useState<Dream[]>([
    {
      id: '1',
      title: 'Flying Over Mountains',
      content: 'I was soaring over beautiful snow-capped mountains. The air was crisp and I could feel the wind rushing past me. Below I could see forests and small villages nestled in valleys. It felt liberating and peaceful.',
      date: 'April 19, 2025',
      mood: 'Exhilarated'
    },
    {
      id: '2',
      title: 'Lost in a Maze',
      content: 'I found myself wandering through an endless maze with walls that seemed to shift when I wasn\'t looking directly at them. The maze was filled with strange symbols that felt familiar somehow. Eventually I discovered a small door that led to a beautiful garden.',
      date: 'April 17, 2025',
      mood: 'Confused but curious'
    }
  ]);

  const [selectedDreamId, setSelectedDreamId] = useState<string | null>(null);

  const handleNewDream = (dream: { title: string; content: string; mood: string }) => {
    const newDream: Dream = {
      id: Date.now().toString(),
      title: dream.title,
      content: dream.content,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      mood: dream.mood
    };
    
    setDreams([newDream, ...dreams]);
  };

  const handleDreamClick = (id: string) => {
    setSelectedDreamId(id === selectedDreamId ? null : id);
  };

  const selectedDream = dreams.find(dream => dream.id === selectedDreamId);

  const dreamInsights = selectedDream ? [
    {
      title: 'Recurring Themes',
      description: 'This dream contains themes of exploration and discovery, which appeared in 3 of your recent dreams.'
    },
    {
      title: 'Emotional Pattern',
      description: `You often feel ${selectedDream.mood.toLowerCase()} in dreams that involve ${selectedDream.title.toLowerCase().includes('flying') ? 'flying or movement' : 'mazes or puzzles'}.`
    },
    {
      title: 'Symbol Analysis',
      description: `${selectedDream.title.toLowerCase().includes('flying') ? 'Flying often represents freedom, perspective, or escape from limitations.' : 'Mazes typically symbolize confusion, searching for answers, or navigating complex decisions.'}`
    }
  ] : [];

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="mb-8">
        <DreamEntryForm onSubmit={handleNewDream} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Your Dream Journal</h2>
          <div className="space-y-4">
            {dreams.map(dream => (
              <DreamCard
                key={dream.id}
                title={dream.title}
                date={dream.date}
                excerpt={dream.content.substring(0, 100) + '...'}
                mood={dream.mood}
                onClick={() => handleDreamClick(dream.id)}
              />
            ))}
          </div>
        </div>
        
        <div>
          {selectedDream ? (
            <>
              <h2 className="text-xl font-semibold mb-4 text-white">Dream Details</h2>
              <div className="dream-card p-5 mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">{selectedDream.title}</h3>
                  <span className="text-sm text-dream-silver">{selectedDream.date}</span>
                </div>
                <p className="text-white mb-3">{selectedDream.content}</p>
                <div className="text-sm text-dream-silver">Mood: {selectedDream.mood}</div>
              </div>
              
              <DreamAnalysis dreamContent={selectedDream.content} />
              <DreamInsight insights={dreamInsights} />
            </>
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-dream-silver text-center">Select a dream to see details and insights</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DreamJournal;
