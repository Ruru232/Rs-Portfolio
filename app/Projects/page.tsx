'use client';
import Project from '../components/Project';
import { projects } from '../components/Project-List';
import TechStacks from '../components/Tech-Stacks';

import { useState } from 'react';

export default function Page() {
  const [activeTab, setActiveTab] = useState<'projects' | 'tech'>('projects');

  return (
    <div className="flex flex-col items-center mt-28 p-5">
      <div className="flex space-x-4 mb-5">
        <button
          className={`px-4 py-2 rounded-lg bg-transparent ${
            activeTab === 'projects'
              ? 'bg-blue-500 text-blue-500'
              : 'bg-gray-200 text-white'
          }`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button
          className={`px-4 py-2 rounded-lg bg-transparent ${
            activeTab === 'tech'
              ? 'bg-blue-500 text-blue-500'
              : 'bg-gray-200 text-white'
          }`}
          onClick={() => setActiveTab('tech')}
        >
          Tech Stack
        </button>
      </div>

      {activeTab === 'projects' ? (
        <Project projects={projects} />
      ) : (
        <TechStacks />
      )}
    </div>
  );
}
