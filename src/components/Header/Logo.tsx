import React from 'react';
import { Send } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Send className="h-8 w-8 text-blue-500" />
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        TechInsider
      </span>
    </div>
  );
}