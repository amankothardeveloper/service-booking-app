"use client"

import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <>
      <section name="booking-header" className="bg-[#29ABE2] text-white pt-12 pb-20 px-6 rounded-b-[60px] lg:rounded-b-[80px] shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left space-y-2">
            <p className="font-script text-2xl lg:text-3xl opacity-90 tracking-wide transform -rotate-2">Contact Us</p>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight max-w-xl">
              Book online, by phone, or through social media.
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 border border-white/50 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Facebook">
                <div className="w-5 h-5 overflow-hidden">
                  <Image 
                    src="https://api.designfast.io/v1/svg_generator/findone?desc=facebook&icon_set=tabler&color=ffffff" 
                    alt="Facebook" 
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
              </a>
              <a href="#" className="w-12 h-12 border border-white/50 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Instagram">
                <div className="w-5 h-5 overflow-hidden">
                  <Image 
                    src="https://api.designfast.io/v1/svg_generator/findone?desc=instagram&icon_set=tabler&color=ffffff" 
                    alt="Instagram" 
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
              </a>
              <a href="#" className="w-12 h-12 border border-white/50 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="X / Twitter">
                <div className="w-5 h-5 overflow-hidden">
                  <Image 
                    src="https://api.designfast.io/v1/svg_generator/findone?desc=brand-x&icon_set=tabler&color=ffffff" 
                    alt="X" 
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
              </a>
            </div>

            <a href="#" className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 pl-6 pr-2 py-2 rounded-full hover:bg-white/20 transition-all group">
              <span className="font-semibold text-lg">Book Online</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#29ABE2] group-hover:scale-105 transition-transform">
                <div className="w-5 h-5 overflow-hidden">
                  <Image 
                    src="https://api.designfast.io/v1/svg_generator/findone?desc=arrow-up-right&icon_set=tabler&color=29ABE2" 
                    alt="Arrow" 
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col justify-center h-full">
            <div className="mb-10 text-center lg:text-left">
              <p className="font-script text-[#2c3e50] text-2xl lg:text-3xl mb-2 transform -rotate-1">Testimonials</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What Our Clients Think</h2>
              
              <div className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                <div className="w-4 h-4 overflow-hidden bg-white rounded-full p-0.5">
                  <Image 
                    src="https://api.designfast.io/v1/svg_generator/findone?desc=brand-google&icon_set=tabler&color=DB4437" 
                    alt="Google" 
                    width={16}
                    height={16}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-center gap-0.5 text-yellow-400">
                  {[1, 2, 3, 4].map((_, i) => (
                    <Image 
                      key={`star-${i}`}
                      src="https://api.designfast.io/v1/svg_generator/findone?desc=star-filled&icon_set=tabler&color=fbbf24" 
                      width={12}
                      height={12}
                      alt="Star" 
                      className="w-3 h-3"
                    />
                  ))}
                  <Image 
                    src="https://api.designfast.io/v1/svg_generator/findone?desc=star-half-filled&icon_set=tabler&color=fbbf24" 
                    width={12}
                    height={12}
                    alt="Half Star" 
                    className="w-3 h-3"
                  />
                </div>
                <span>4.9</span>
              </div>
            </div>

            <div className="relative w-full overflow-x-auto hide-scrollbar pb-8">
              <div className="flex flex-col sm:flex-row gap-6 w-full">
                <TestimonialCard 
                  quote="It vinyl distillery trade raw. Asymmetrical lyft shaman vaporware street affogato. Mi marfa vibecession pug offal."
                  name="Pete Goldner"
                  role="Client"
                  image="https://api.designfast.io/v1/photo_library/findone?desc=Portrait%20of%20a%20man%20smiling&w=150&h=150&orientation=squarish"
                />
                
                <TestimonialCard 
                  quote="Great response time, staff was on time and got the job done pretty quickly. House looked great when they finished."
                  name="Rebecca Hawland"
                  role="Client"
                  image="https://api.designfast.io/v1/photo_library/findone?desc=Portrait%20of%20a%20young%20woman&w=150&h=150&orientation=squarish"
                />
              </div>

              <div className="flex gap-2 mt-8 justify-center sm:justify-start">
                <div className="w-2 h-2 rounded-full bg-[#1e3a8a]"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>

          <div className="relative h-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl">
              <Image 
                src="https://api.designfast.io/v1/photo_library/findone?desc=Woman%20sitting%20on%20kitchen%20counter%20holding%20a%20phone%20with%20laptop%20on%20lap%20in%20bright%20modern%20kitchen&w=800&h=1000&orientation=portrait" 
                alt="Woman using phone in kitchen" 
                width={800}
                height={1000}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const TestimonialCard = ({ quote, name, role, image }) => (
  <div className="bg-white p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex-1 min-w-[300px] hover:-translate-y-1 transition-transform duration-300">
    <div className="mb-4">
      <div className="w-10 h-10">
        <Image 
          src="https://api.designfast.io/v1/svg_generator/findone?desc=quote&icon_set=tabler&color=f97316" 
          alt="Quote" 
          width={40}
          height={40}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
    <p className="text-gray-700 text-sm leading-relaxed mb-8">
      {quote}
    </p>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
        <Image 
          src={image} 
          alt={name} 
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
        <p className="text-xs text-gray-400">{role}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;
