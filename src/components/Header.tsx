import React from 'react';
import { MessageCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MessageCircle className="h-8 w-8" />
          <span className="text-xl font-bold">TeleChannel</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-blue-200 transition-colors">Features</a>
          <a href="#community" className="hover:text-blue-200 transition-colors">Community</a>
          <a href="#join" className="hover:text-blue-200 transition-colors">Join Now</a>
        </div>
      </nav>
    </header>
  );
}