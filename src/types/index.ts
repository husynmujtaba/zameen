export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: 'sale' | 'rent';
  category: 'house' | 'apartment' | 'land' | 'commercial';
  area: number;
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  images: string[];
  features: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
  createdAt: Date;
}

export interface SearchFilters {
  type?: 'sale' | 'rent';
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  minArea?: number;
  maxArea?: number;
  bedrooms?: number;
}