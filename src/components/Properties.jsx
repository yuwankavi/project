import React from 'react';

function Properties() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Property cards will go here */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Modern House</h2>
            <p className="text-gray-600 mb-2">123 Main St, City</p>
            <p className="text-green-600 font-bold">$299,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Properties;