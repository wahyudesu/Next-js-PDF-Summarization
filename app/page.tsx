
"use client"

import FileUpload from '@/components/file-upload';
import Navbar from '@/components/navbar';
import ParsedTextDisplay from '@/components/parsed-text-display';
import Footer from '@/components/footer';
import { useState } from 'react';

export default function Home() {
  const [parsedText, setParsedText] = useState('');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="flex flex-col items-center justify-between p-24">
        <div className="w-96 text-center">
          <h1 className="text-4xl mb-2 font-bold">PDF to Text</h1>
          <p className="mb-4">Convert PDF to text</p>
          <FileUpload onUploadComplete={(text) => setParsedText(text)} />
        </div>
      </main>
      <div className="grid grid-cols-2 gap-4">
        {parsedText && <ParsedTextDisplay parsedText={parsedText} />}
        {parsedText && <ParsedTextDisplay parsedText={parsedText} />}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
