import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            Buying House?
          </h1>
          <p className="text-xl text-white">
            Find homes that are available<br />
            When you want to move
          </p>
        </div>

        <div className="w-full max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search your Location?"
              className="w-full px-6 py-4 text-lg rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="mt-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
            Selling later
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;