import React from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">
            {property.type === 'sale' ? 'For Sale' : 'For Rent'}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.title}</h3>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-emerald-600">
            ₹{property.price.toLocaleString('en-IN')}
          </span>
          {property.type === 'rent' && <span className="text-gray-600">/month</span>}
        </div>
        
        <div className="flex items-center justify-between text-gray-600 border-t pt-4">
          {property.bedrooms && (
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{property.area} sq.ft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;