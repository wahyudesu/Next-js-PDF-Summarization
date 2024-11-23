// app/page.tsx
"use client"

import FileUpload from '@/components/file-upload';
import Navbar from '@/components/navbar';
import ParsedTextDisplay from '@/components/parsed-text-display';
import SummaryDisplay from '@/components/summary';
import Footer from '@/components/footer';
import { useState } from 'react';

export default function Home() {
  const [parsedText, setParsedText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadComplete = async (text: string) => {
    setParsedText(text);
    if (text) {
      setIsLoading(true);
      try {
        const response = await fetch('/api/summarize', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ inputText: text }),
        });
        
        const data = await response.json();
        if (data.summary) {
          setSummary(data.summary);
        } else if (data.error) {
          setSummary(`Error: ${data.error}`);
        }
      } catch (error) {
        setSummary('Failed to get summary');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-between p-24">
        <div className="w-96 text-center">
          <h1 className="text-4xl mb-2 font-bold">PDF to Text & Summary</h1>
          <p className="mb-4">Convert PDF to text and get AI summary</p>
          <FileUpload onUploadComplete={handleUploadComplete} />
        </div>
        <div className="grid grid-cols-2 gap-4 px-4 mt-4">
          <div>
            {parsedText && <ParsedTextDisplay parsedText={parsedText} />}
          </div>
          <div>
            {isLoading ? (
              <div className="text-center">Generating summary...</div>
            ) : (
              summary && <SummaryDisplay summary={summary} />
            )}
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  )
};