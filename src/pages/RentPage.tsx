import React from 'react';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import { Property } from '../types';
import { Filter, SlidersHorizontal } from 'lucide-react';

const SAMPLE_RENTALS: Property[] = [
  {
    id: '1',
    title: 'Modern Apartment near Lal Chowk',
    price: 25000,
    location: 'Lal Chowk, Srinagar',
    type: 'rent',
    category: 'apartment',
    area: 1200,
    bedrooms: 2,
    bathrooms: 2,
    description: 'Fully furnished apartment in prime location',
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'],
    features: ['Furnished', 'Security', 'Parking'],
    agent: {
      name: 'Sara Shah',
      phone: '+91-9876543211',
      email: 'sara@soonzameen.com',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    },
    createdAt: new Date()
  },
  // Add more sample rentals...
];

const RentPage = () => {
  const [showFilters, setShowFilters] = React.useState(false);

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-emerald-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Find Your Perfect Rental in Kashmir
          </h1>
          <p className="text-xl text-emerald-100 mb-8">
            Explore quality rental properties across Kashmir
          </p>
          <SearchBar />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Properties for Rent</h2>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-gray-600 hover:text-emerald-600"
          >
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="col-span-12 md:col-span-3">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filter Properties
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Monthly Rent
                    </label>
                    <select className="w-full input-primary">
                      <option>Any Price</option>
                      <option>Under ₹15,000</option>
                      <option>₹15,000 - ₹25,000</option>
                      <option>₹25,000 - ₹50,000</option>
                      <option>Above ₹50,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Property Type
                    </label>
                    <select className="w-full input-primary">
                      <option>All Types</option>
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Room</option>
                      <option>Commercial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Furnishing
                    </label>
                    <select className="w-full input-primary">
                      <option>Any</option>
                      <option>Fully Furnished</option>
                      <option>Semi Furnished</option>
                      <option>Unfurnished</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bedrooms
                    </label>
                    <select className="w-full input-primary">
                      <option>Any</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>

                  <button className="w-full btn-primary">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Property Grid */}
          <div className={`col-span-12 ${showFilters ? 'md:col-span-9' : 'md:col-span-12'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SAMPLE_RENTALS.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentPage;