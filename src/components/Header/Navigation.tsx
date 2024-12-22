import React from 'react';

export function Navigation() {
  return (
    <nav className="space-x-6">
      <a href="#features" className="text-gray-600 hover:text-blue-500 transition-colors">Features</a>
      <a href="#testimonials" className="text-gray-600 hover:text-blue-500 transition-colors">Testimonials</a>
      <a href="#faq" className="text-gray-600 hover:text-blue-500 transition-colors">FAQ</a>
    </nav>
  );
}