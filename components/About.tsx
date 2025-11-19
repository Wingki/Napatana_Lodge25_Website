import React, { useState, useEffect } from 'react';
import { getAboutContent } from '../data';
import { AboutContent } from '../types';

const About: React.FC = () => {
  const [content, setContent] = useState<AboutContent | null>(null);

  useEffect(() => {
    setContent(getAboutContent());
  }, []);

  if (!content) {
    return null; // Or a loading skeleton
  }

  return (
    <section className="py-20 lg:py-32 bg-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            {content.heading}
          </h2>
          <p className="text-lg text-primary/80 leading-relaxed mb-6">
            {content.paragraph1}
          </p>
          <p className="text-lg text-primary/80 leading-relaxed">
            {content.paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
