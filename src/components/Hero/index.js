import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-[500px] bg-cover bg-center flex items-center" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-6f8d8c340a98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Customize Your Clean With Extras</h1>
          <p className="text-lg mb-8">
            Whether you're preparing for guests, moving in or out, or simply want to refresh your space, 
            our add-ons help you personalize your cleaning experience.
          </p>
          <Link href="/booking" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
