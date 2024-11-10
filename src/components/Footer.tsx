import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Soonzameen</h3>
            <p className="text-gray-400">
              Kashmir's premier real estate platform connecting buyers, sellers, and agents.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/properties" className="hover:text-white">Properties</Link></li>
              <li><Link to="/agents" className="hover:text-white">Agents</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Areas</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/srinagar" className="hover:text-white">Srinagar</Link></li>
              <li><Link to="/gulmarg" className="hover:text-white">Gulmarg</Link></li>
              <li><Link to="/pahalgam" className="hover:text-white">Pahalgam</Link></li>
              <li><Link to="/baramulla" className="hover:text-white">Baramulla</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@soonzameen.com</li>
              <li>Phone: +91-9876543210</li>
              <li>Address: Lal Chowk, Srinagar</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Soonzameen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;