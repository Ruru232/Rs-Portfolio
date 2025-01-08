import React from 'react';
import Navbar from '../components/Navbar';

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen mx-[25%] justify-center items-center mt-52 border border-red-600">
        about
      </div>
    </div>
  );
}
