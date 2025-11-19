import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';
import { getTestimonials } from '../data';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-xl text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
     <svg className="w-12 h-12 text-secondary mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.5 8.5A2 2 0 015.5 6.5h.5a2.5 2.5 0 000-5H5.5A4.5 4.5 0 001 6.5v5A2.5 2.5 0 003.5 14h1a2.5 2.5 0 000-5h-1zm10 0A2 2 0 0115.5 6.5h.5a2.5 2.5 0 000-5H15.5A4.5 4.5 0 0011 6.5v5A2.5 2.5 0 0013.5 14h1a2.5 2.5 0 000-5h-1z" clipRule="evenodd"></path></svg>
    <p className="text-primary/80 italic text-lg mb-6 font-serif">"{testimonial.quote}"</p>
    <div className="mt-auto">
        <p className="font-bold text-primary-light">{testimonial.name}</p>
        <p className="text-sm text-primary/60">{testimonial.location}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const [testimonialsData, setTestimonialsData] = useState<Testimonial[]>([]);

  useEffect(() => {
    setTestimonialsData(getTestimonials());
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">Words From Our Guests</h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what some of our happy guests have to say about their stay.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
