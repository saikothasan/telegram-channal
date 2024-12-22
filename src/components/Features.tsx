import React from 'react';
import { Users, Zap, Shield, Bell } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Vibrant Community',
    description: 'Join thousands of like-minded individuals in meaningful discussions.'
  },
  {
    icon: Zap,
    title: 'Instant Updates',
    description: 'Get real-time notifications about the latest trends and news.'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Enjoy end-to-end encryption and privacy protection.'
  },
  {
    icon: Bell,
    title: 'Custom Alerts',
    description: 'Set up personalized notifications for topics that matter to you.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Join Our Channel?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}