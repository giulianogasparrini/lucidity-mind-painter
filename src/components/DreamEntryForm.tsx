import React, { useState } from 'react';
import { Mic, Palette, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

interface DreamEntryFormProps {
  onSubmit: (dream: { title: string; content: string; mood: string }) => void;
}

const DreamEntryForm: React.FC<DreamEntryFormProps> = ({ onSubmit }) => {
  const { translations, language } = useLanguage();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmit({
        title,
        content,
        mood
      });
      setTitle('');
      setContent('');
      setMood('');
    }
  };

  const handleVoiceRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      console.log('Started recording...');
      setTimeout(() => {
        setIsRecording(false);
        setContent(prevContent => prevContent + (prevContent ? ' ' : '') + "I was flying over a city I didn't recognize, with buildings that shifted and changed as I watched...");
        console.log('Recording stopped.');
      }, 3000);
    } else {
      console.log('Stopped recording.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="dream-card p-5 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4 text-slate-50">
        {translations.recordDream[language]}
      </h2>
      
      <div className="mb-4">
        <Input 
          placeholder={translations.dreamTitle_placeholder[language]} 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          className="bg-white bg-opacity-70 border-dream-lightblue" 
        />
      </div>
      
      <div className="mb-4 relative">
        <Textarea 
          placeholder={translations.dreamDescription_placeholder[language]} 
          value={content} 
          onChange={e => setContent(e.target.value)} 
          className="min-h-[150px] bg-white bg-opacity-70 border-dream-lightblue" 
        />
        <Button 
          type="button" 
          variant="outline" 
          size="icon" 
          className={`absolute bottom-3 right-3 rounded-full ${isRecording ? 'bg-red-500 text-white' : 'bg-white bg-opacity-70'}`} 
          onClick={handleVoiceRecording}
        >
          <Mic className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="mb-4">
        <Input 
          placeholder={translations.mood_placeholder[language]} 
          value={mood} 
          onChange={e => setMood(e.target.value)} 
          className="bg-white bg-opacity-70 border-dream-lightblue" 
        />
      </div>
      
      <div className="flex justify-between">
        <Button 
          type="button" 
          variant="outline" 
          className="bg-white bg-opacity-70 border-dream-purple text-dream-purple hover:bg-dream-purple hover:text-white"
        >
          <Palette className="h-4 w-4 mr-2" />
          {translations.visualize[language]}
        </Button>
        <Button 
          type="submit" 
          className="bg-dream-purple hover:bg-dream-darkpurple text-white"
        >
          <Send className="h-4 w-4 mr-2" />
          {translations.save[language]}
        </Button>
      </div>
    </form>
  );
};

export default DreamEntryForm;
