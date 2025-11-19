import React, { useState, useEffect } from 'react';
import { DiningContent, MenuCategory, MenuItem } from '../types';
import { getDiningContent } from '../data';

const TabButton: React.FC<{ label: string; isActive: boolean; onClick: () => void; }> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-6 py-3 font-sans font-bold text-lg rounded-t-lg transition-colors duration-300 focus:outline-none ${
            isActive
                ? 'bg-white text-primary-light border-b-4 border-accent'
                : 'bg-transparent text-primary/60 hover:text-primary'
        }`}
    >
        {label}
    </button>
);

interface DiningProps {
    onOpenGallery: (images: string[]) => void;
}

const Dining: React.FC<DiningProps> = ({ onOpenGallery }) => {
    const [activeTab, setActiveTab] = useState<MenuCategory>('dinner');
    const [content, setContent] = useState<DiningContent | null>(null);

    useEffect(() => {
        setContent(getDiningContent());
    }, []);

    if (!content) return null;

    const menuData = content.menu;

    return (
        <section className="py-20 lg:py-32 bg-light">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <img 
                            src={content.image} 
                            alt="A beautiful buffet of fresh food at Napatana Lodge" 
                            className="rounded-lg shadow-2xl w-full" 
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">{content.heading}</h2>
                        <p className="text-lg text-primary/80 leading-relaxed mb-8">
                            {content.paragraph}
                        </p>
                        
                        <div className="border-b border-gray-300 mb-6 flex space-x-2">
                            <TabButton label="Breakfast" isActive={activeTab === 'breakfast'} onClick={() => setActiveTab('breakfast')} />
                            <TabButton label="Lunch" isActive={activeTab === 'lunch'} onClick={() => setActiveTab('lunch')} />
                            <TabButton label="Dinner" isActive={activeTab === 'dinner'} onClick={() => setActiveTab('dinner')} />
                        </div>

                        <div className="space-y-6 animate-fade-in min-h-[300px]">
                            {menuData[activeTab].map(item => (
                                <div key={item.name} className="flex items-start gap-4">
                                  {item.image && (
                                    <button
                                      onClick={() => onOpenGallery([item.image!])}
                                      className="flex-shrink-0 group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-lg"
                                      aria-label={`View larger image of ${item.name}`}
                                    >
                                      <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-24 h-24 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                                      />
                                    </button>
                                  )}
                                  <div className="flex-grow">
                                    <h4 className="text-xl font-bold font-serif text-primary">{item.name}</h4>
                                    <p className="text-primary/70">{item.description}</p>
                                  </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dining;
