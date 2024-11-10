import React from 'react';
import SearchBar from '../components/SearchBar';
import FeaturedProperties from '../components/FeaturedProperties';
import { MapPin, Home, Building2, Warehouse, TrendingUp } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1627894483216-2138af692e32?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Kashmir Valley"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Discover Your Dream Property in Kashmir
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Find the perfect home in paradise with Kashmir's premier real estate platform
            </p>
          </div>
          
          <SearchBar />
        </div>
      </div>

      {/* Property Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Explore Properties by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Home, title: 'Houses', count: 150 },
            { icon: Building2, title: 'Apartments', count: 89 },
            { icon: Warehouse, title: 'Commercial', count: 45 },
            { icon: MapPin, title: 'Land', count: 67 }
          ].map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <category.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.count} Properties</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Properties */}
      <FeaturedProperties />

      {/* Market Insights */}
      <div className="bg-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kashmir Real Estate Market Insights
            </h2>
            <p className="text-gray-600">Stay informed with the latest market trends and statistics</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Property Value Growth',
                value: '+12.5%',
                description: 'Average appreciation in the last year'
              },
              {
                icon: Home,
                title: 'Properties Listed',
                value: '350+',
                description: 'Active listings across Kashmir'
              },
              {
                icon: MapPin,
                title: 'Prime Locations',
                value: '15+',
                description: 'Featured neighborhoods'
              }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <stat.icon className="h-8 w-8 text-emerald-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-3xl font-bold text-emerald-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;