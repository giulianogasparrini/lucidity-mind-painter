
import React from 'react';
import DreamHeader from '@/components/DreamHeader';
import DreamJournal from '@/components/DreamJournal';
import StarField from '@/components/StarField';

const Index = () => {
  return (
    <div className="min-h-screen bg-dream-gradient relative overflow-hidden">
      <StarField />
      <div className="relative z-10 container mx-auto py-8">
        <DreamHeader />
        <main className="mt-8">
          <DreamJournal />
        </main>
      </div>
    </div>
  );
};

export default Index;
