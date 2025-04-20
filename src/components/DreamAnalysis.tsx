
import React, { useState } from 'react';
import { Brain, Infinity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface DreamAnalysisProps {
  dreamContent: string;
}

const DreamAnalysis: React.FC<DreamAnalysisProps> = ({ dreamContent }) => {
  const [analysis, setAnalysis] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const analyzeDream = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 8e604ef8dd8043d980503c6c63a01ef9'
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: 'You are a philosophical dream interpreter. Analyze dreams through the lens of philosophy, psychology, and symbolism. Be concise but insightful.'
            },
            {
              role: 'user',
              content: `Please analyze this dream from a philosophical perspective: ${dreamContent}`
            }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to analyze dream');
      }

      const data = await response.json();
      setAnalysis(data.choices[0].message.content);
      toast.success('Dream analysis completed');
    } catch (error) {
      console.error('Error analyzing dream:', error);
      toast.error('Unable to analyze dream. Please try again.');
      setAnalysis('Unable to analyze dream at this moment. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dream-card p-5 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4 text-white flex items-center">
        <Brain className="w-5 h-5 mr-2 text-white" />
        Philosophical Analysis
      </h2>
      
      {!analysis && (
        <Button 
          onClick={analyzeDream} 
          className="w-full mb-4 bg-dream-purple hover:bg-dream-darkpurple text-white"
          disabled={isLoading}
        >
          <Infinity className="mr-2 h-4 w-4" />
          {isLoading ? 'Analyzing...' : 'Analyze Dream'}
        </Button>
      )}
      
      {analysis && (
        <div className="bg-white/10 rounded-lg p-4">
          <p className="text-white text-sm">{analysis}</p>
        </div>
      )}
    </div>
  );
};

export default DreamAnalysis;
