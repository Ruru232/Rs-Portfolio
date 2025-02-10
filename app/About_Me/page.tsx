'use client';

import { useState } from 'react';
import About from '../components/about';
import Certificates from '../components/Certificates';

export default function Page() {
  const [activeTab, setActiveTab] = useState<'about' | 'cert'>('about');
  return (
    <div className="flex flex-col items-center mt-28 p-5">
      <div className="flex space-x-4 mb-5">
        <button
          className={`px-4 py-2 rounded-lg bg-transparent ${
            activeTab === 'about'
              ? 'bg-blue-500 text-blue-500'
              : 'bg-gray-200 text-white'
          }`}
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button
          className={`px-4 py-2 rounded-lg bg-transparent ${
            activeTab === 'cert'
              ? 'bg-blue-500 text-blue-500'
              : 'bg-gray-200 text-white'
          }`}
          onClick={() => setActiveTab('cert')}
        >
          Certficates
        </button>
      </div>

      {activeTab === 'about' ? <About /> : <Certificates />}
    </div>
  );
}
