import React from 'react';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import { Property } from '../types';
import { Filter, SlidersHorizontal } from 'lucide-react';

const SAMPLE_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Luxury Villa with Dal Lake View',
    price: 25000000,
    location: 'Dal Lake, Srinagar',
    type: 'sale',
    category: 'house',
    area: 3500,
    bedrooms: 4,
    bathrooms: 3,
    description: 'Beautiful villa overlooking Dal Lake with modern amenities',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9'],
    features: ['Lake View', 'Modern Kitchen', 'Garden'],
    agent: {
      name: 'Amir Khan',
      phone: '+91-9876543210',
      email: 'amir@soonzameen.com',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    createdAt: new Date()
  },
  // Add more sample properties...
];

const BuyPage = () => {
  const [showFilters, setShowFilters] = React.useState(false);

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-emerald-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Find Your Dream Property in Kashmir
          </h1>
          <p className="text-xl text-emerald-100 mb-8">
            Explore a wide range of properties for sale across Kashmir
          </p>
          <SearchBar />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Properties for Sale</h2>
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
                      Price Range
                    </label>
                    <select className="w-full input-primary">
                      <option>Any Price</option>
                      <option>Under ₹50 Lac</option>
                      <option>₹50 Lac - ₹1 Cr</option>
                      <option>Above ₹1 Cr</option>
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
                      <option>Land</option>
                      <option>Commercial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bedrooms
                    </label>
                    <select className="w-full input-primary">
                      <option>Any</option>
                      <option>1+</option>
                      <option>2+</option>
                      <option>3+</option>
                      <option>4+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Area (sq.ft)
                    </label>
                    <select className="w-full input-primary">
                      <option>Any</option>
                      <option>Under 1000</option>
                      <option>1000 - 2000</option>
                      <option>2000 - 3000</option>
                      <option>Above 3000</option>
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
              {SAMPLE_PROPERTIES.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;