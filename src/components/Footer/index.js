"use client"

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Book.me</h2>
            <p className="text-gray-600 mb-6">
              We treat every space like royalty. Whether it's your home, office, or move-in clean, we tailor our services to fit your lifestyle and expectations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['AC Repair', 'TV Installation', 'Pest Control', 'Salon at Home', 'Cleaning', 'Plumbing', 'Painting', 'Gardening'].map((service) => (
                <li key={service}>
                  <Link href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="text-gray-600 hover:text-blue-600 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Info</h3>
            <ul className="space-y-2">
              {['Contact', 'About', 'Blog', 'Free Estimate'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="text-gray-600 hover:text-blue-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600">844 242 9464</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:contact@bookme.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  contact@bookme.com
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600">2590 Walnut St Denver, CO 80205</span>
              </li>
            </ul>
            <button className="mt-6 flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-colors">
              Book A Free Consultation
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 BoldThemes. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
