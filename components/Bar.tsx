import React, { useState, useEffect } from 'react';
import { BarContent } from '../types';
import { getBarContent } from '../data';

const Bar: React.FC = () => {
  const [content, setContent] = useState<BarContent | null>(null);

  useEffect(() => {
    setContent(getBarContent());
  }, []);

  if (!content) return null;

  return (
    <section className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <img src={content.image} alt="Waterfront Bar at Napatana Lodge" className="rounded-lg shadow-2xl w-full" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">{content.heading}</h2>
            <p className="text-lg text-primary/80 leading-relaxed mb-4">
              {content.paragraph1}
            </p>
            <p className="text-lg text-primary/80 leading-relaxed">
              {content.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bar;
