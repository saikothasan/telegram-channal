import React from 'react';

const faqs = [
  {
    question: 'How often is content posted?',
    answer: 'We post 3-5 curated updates daily, ensuring you stay informed without being overwhelmed.'
  },
  {
    question: 'What type of content do you share?',
    answer: 'We cover breaking tech news, industry analysis, emerging technologies, and practical insights for tech professionals.'
  },
  {
    question: 'Is the content beginner-friendly?',
    answer: 'While we focus on professional-level insights, we ensure our content is accessible to anyone with a basic understanding of technology.'
  },
  {
    question: 'Can I share the content with my team?',
    answer: 'Yes! We encourage sharing our insights with your team and network.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}