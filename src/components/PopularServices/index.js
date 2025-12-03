"use client"

import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'AC Repair',
    image: 'https://images.unsplash.com/photo-1581861527066-9726ae587bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'TV Installation',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f29d8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Pest Control',
    image: 'https://images.unsplash.com/photo-1600891964098-4316c195ae3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    title: 'Salon at Home',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
];

const PopularServices = () => {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Services</h2>
        
        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -left-6 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition-colors"
            aria-label="Scroll left"
          >
            <FaArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <div 
            ref={scrollContainer}
            className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service) => (
              <div key={service.id} className="flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -right-6 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition-colors"
            aria-label="Scroll right"
          >
            <FaArrowRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
