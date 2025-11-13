import React from 'react';

const Bar: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <img src="https://picsum.photos/800/600?image=225" alt="Waterfront Bar at Napatana Lodge" className="rounded-lg shadow-2xl w-full" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">The Waterfront Bar</h2>
            <p className="text-lg text-primary/80 leading-relaxed mb-4">
              Our open-air bar is the heart of Napatana Lodge, where stories are shared and friendships are made. Feel the gentle sea breeze as you sip on handcrafted cocktails, featuring exotic local fruits and premium spirits.
            </p>
            <p className="text-lg text-primary/80 leading-relaxed">
              With a curated selection of fine wines, cold beers, and refreshing non-alcoholic beverages, it's the perfect spot to watch a spectacular Milne Bay sunset or unwind under a blanket of stars.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bar;
