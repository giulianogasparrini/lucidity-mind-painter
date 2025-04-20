import React, { useState } from 'react';
import { Mic, Palette, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
interface DreamEntryFormProps {
  onSubmit: (dream: {
    title: string;
    content: string;
    mood: string;
  }) => void;
}
const DreamEntryForm: React.FC<DreamEntryFormProps> = ({
  onSubmit
}) => {
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
    // In a real app, we would implement speech-to-text functionality here
    if (!isRecording) {
      console.log('Started recording...');
      // Simulate recording ending after 3 seconds
      setTimeout(() => {
        setIsRecording(false);
        setContent(prevContent => prevContent + (prevContent ? ' ' : '') + "I was flying over a city I didn't recognize, with buildings that shifted and changed as I watched...");
        console.log('Recording stopped.');
      }, 3000);
    } else {
      console.log('Stopped recording.');
    }
  };
  return <form onSubmit={handleSubmit} className="dream-card p-5 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4 text-slate-50">Record a New Dream</h2>
      
      <div className="mb-4">
        <Input placeholder="Dream Title" value={title} onChange={e => setTitle(e.target.value)} className="bg-white bg-opacity-70 border-dream-lightblue" />
      </div>
      
      <div className="mb-4 relative">
        <Textarea placeholder="Describe your dream..." value={content} onChange={e => setContent(e.target.value)} className="min-h-[150px] bg-white bg-opacity-70 border-dream-lightblue" />
        <Button type="button" variant="outline" size="icon" className={`absolute bottom-3 right-3 rounded-full ${isRecording ? 'bg-red-500 text-white' : 'bg-white bg-opacity-70'}`} onClick={handleVoiceRecording}>
          <Mic className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="mb-4">
        <Input placeholder="Mood or Feeling" value={mood} onChange={e => setMood(e.target.value)} className="bg-white bg-opacity-70 border-dream-lightblue" />
      </div>
      
      <div className="flex justify-between">
        <Button type="button" variant="outline" className="bg-white bg-opacity-70 border-dream-purple text-dream-purple hover:bg-dream-purple hover:text-white">
          <Palette className="h-4 w-4 mr-2" />
          Visualize
        </Button>
        <Button type="submit" className="bg-dream-purple hover:bg-dream-darkpurple text-white">
          <Send className="h-4 w-4 mr-2" />
          Save Dream
        </Button>
      </div>
    </form>;
};
export default DreamEntryForm;