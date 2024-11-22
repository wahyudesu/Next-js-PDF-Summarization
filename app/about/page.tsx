import React from 'react';
import Navbar from '@/components/navbar';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className='p-6'>
        <h1 className="text-2xl font-bold">About</h1>
        <p>Hello World</p>
      </div>
    </div>
  );
};

export default About;
