import React from 'react';
import { useForm } from 'react-hook-form';
import { Home, MapPin, IndianRupee, Camera, Plus } from 'lucide-react';

interface PropertyForm {
  title: string;
  description: string;
  type: 'sale' | 'rent';
  category: 'house' | 'apartment' | 'land' | 'commercial';
  price: number;
  location: string;
  area: number;
  bedrooms?: number;
  bathrooms?: number;
  features: string[];
}

const PostPropertyPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<PropertyForm>();
  const propertyType = watch('type');
  const propertyCategory = watch('category');

  const onSubmit = (data: PropertyForm) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">List Your Property</h1>
            <p className="text-gray-600 mt-2">Fill in the details to list your property on Soonzameen</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <Home className="h-5 w-5 mr-2" />
                Basic Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Listing Type*
                  </label>
                  <select
                    {...register('type', { required: 'Listing type is required' })}
                    className="input-primary"
                  >
                    <option value="">Select Type</option>
                    <option value="sale">For Sale</option>
                    <option value="rent">For Rent</option>
                  </select>
                  {errors.type && (
                    <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Category*
                  </label>
                  <select
                    {...register('category', { required: 'Property category is required' })}
                    className="input-primary"
                  >
                    <option value="">Select Category</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="land">Land</option>
                    <option value="commercial">Commercial</option>
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Title*
                </label>
                <input
                  {...register('title', { required: 'Property title is required' })}
                  type="text"
                  className="input-primary"
                  placeholder="e.g., Modern Villa with Lake View"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description*
                </label>
                <textarea
                  {...register('description', { required: 'Description is required' })}
                  rows={4}
                  className="input-primary"
                  placeholder="Describe your property..."
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                )}
              </div>
            </div>

            {/* Location and Price */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Location and Price
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location*
                </label>
                <input
                  {...register('location', { required: 'Location is required' })}
                  type="text"
                  className="input-primary"
                  placeholder="e.g., Dal Lake, Srinagar"
                />
                {errors.location && (
                  <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price* ({propertyType === 'rent' ? 'per month' : 'total'})
                  </label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      {...register('price', {
                        required: 'Price is required',
                        min: { value: 1, message: 'Price must be greater than 0' }
                      })}
                      type="number"
                      className="pl-10 input-primary"
                      placeholder="Enter price"
                    />
                  </div>
                  {errors.price && (
                    <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Area (sq.ft)*
                  </label>
                  <input
                    {...register('area', {
                      required: 'Area is required',
                      min: { value: 1, message: 'Area must be greater than 0' }
                    })}
                    type="number"
                    className="input-primary"
                    placeholder="Enter area in sq.ft"
                  />
                  {errors.area && (
                    <p className="mt-1 text-sm text-red-600">{errors.area.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Property Details */}
            {(propertyCategory === 'house' || propertyCategory === 'apartment') && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Property Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bedrooms
                    </label>
                    <select {...register('bedrooms')} className="input-primary">
                      <option value="">Select Bedrooms</option>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                      <option value="6">6+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bathrooms
                    </label>
                    <select {...register('bathrooms')} className="input-primary">
                      <option value="">Select Bathrooms</option>
                      {[1, 2, 3, 4].map((num) => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                      <option value="5">5+</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Images Upload */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <Camera className="h-5 w-5 mr-2" />
                Property Images
              </h2>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  id="images"
                />
                <label
                  htmlFor="images"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Plus className="h-12 w-12 text-gray-400 mb-2" />
                  <span className="text-gray-600">Click to upload images</span>
                  <span className="text-sm text-gray-500 mt-1">
                    (Maximum 10 images, each up to 5MB)
                  </span>
                </label>
              </div>
            </div>

            <button type="submit" className="w-full btn-primary">
              List Property
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostPropertyPage;