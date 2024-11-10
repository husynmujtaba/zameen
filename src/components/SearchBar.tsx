import React from 'react';
import { Search, MapPin } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by location (e.g., Srinagar, Gulmarg)"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
            <option value="">Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="land">Land</option>
            <option value="commercial">Commercial</option>
          </select>
          
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
            <option value="">Budget</option>
            <option value="0-2000000">Under ₹20 Lac</option>
            <option value="2000000-5000000">₹20 Lac - ₹50 Lac</option>
            <option value="5000000-10000000">₹50 Lac - ₹1 Cr</option>
            <option value="10000000+">Above ₹1 Cr</option>
          </select>
          
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 flex items-center">
            <Search className="h-5 w-5 mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;