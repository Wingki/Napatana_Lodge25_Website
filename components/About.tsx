
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Discover Napatana
          </h2>
          <p className="text-lg text-primary/80 leading-relaxed mb-6">
            Nestled on the serene coastline of Alotau, Milne Bay Province, Napatana Lodge is a sanctuary of peace and natural splendor. Our lodge is perfectly positioned beside the crystal-clear waters of the Solomon Sea, offering breathtaking views and an authentic Papua New Guinean experience.
          </p>
          <p className="text-lg text-primary/80 leading-relaxed">
            From our comfortable, well-appointed rooms to our seaside restaurant serving the freshest local cuisine, every detail is crafted to ensure your stay is unforgettable. Whether you're seeking adventure in the vibrant coral reefs or simply a tranquil escape from the everyday, Napatana Lodge is your perfect home away from home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
