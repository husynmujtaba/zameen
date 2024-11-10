import React from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '../types';

const FEATURED_PROPERTIES: Property[] = [
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
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Lake View', 'Modern Kitchen', 'Garden'],
    agent: {
      name: 'Amir Khan',
      phone: '+91-9876543210',
      email: 'amir@soonzameen.com',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    createdAt: new Date()
  },
  {
    id: '2',
    title: 'Modern Apartment in Gulmarg',
    price: 15000000,
    location: 'Gulmarg',
    type: 'sale',
    category: 'apartment',
    area: 1800,
    bedrooms: 3,
    bathrooms: 2,
    description: 'Ski-in ski-out apartment with stunning mountain views',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    features: ['Mountain View', 'Ski Access', 'Parking'],
    agent: {
      name: 'Sara Shah',
      phone: '+91-9876543211',
      email: 'sara@soonzameen.com',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    createdAt: new Date()
  }
];

const FeaturedProperties = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURED_PROPERTIES.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;