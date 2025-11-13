import React, { useState } from 'react';

type MenuCategory = 'breakfast' | 'lunch' | 'dinner';

const menuData = {
  breakfast: [
    { name: 'Tropical Fruit Platter', description: 'A vibrant selection of fresh, local fruits like pineapple, mango, and passionfruit.' },
    { name: 'Sago Pancakes (Saksak)', description: 'A traditional delicacy, served warm with coconut cream and a drizzle of local honey.' },
    { name: 'Island Omelette', description: 'Fluffy eggs with fresh garden vegetables, cheese, and a side of toast.' },
    { name: 'Freshly Brewed Goroka Coffee', description: 'Rich and aromatic coffee sourced from the highlands of Papua New Guinea.' },
  ],
  lunch: [
    { name: 'Grilled Fish of the Day', description: 'Freshly caught fish, grilled to perfection and served with lemon, herbs, and a garden salad.' },
    { name: 'Chicken & Coconut Soup', description: 'A light and flavorful soup with tender chicken, coconut milk, and fresh greens.' },
    { name: 'Napatana Club Sandwich', description: 'A hearty sandwich with grilled chicken, bacon, fresh lettuce, tomato, and our special sauce.' },
    { name: 'Sweet Potato (Kaukau) Fries', description: 'Crispy and delicious, a local favorite served with a side of aioli.' },
  ],
  dinner: [
    { name: 'Coconut Crab Curry', description: 'A rich, aromatic curry featuring succulent crab meat cooked in coconut cream with local spices.' },
    { name: 'Slow-Cooked Pork (Mumu-style)', description: 'Tender pork, slow-cooked with root vegetables, inspired by the traditional mumu feast.' },
    { name: 'Seafood Platter for Two', description: 'A generous platter of grilled fish, prawns, and calamari, perfect for sharing.' },
    { name: 'Vegetable Stir-fry with Tofu', description: 'A medley of fresh, seasonal vegetables and tofu in a savory sauce, served with rice.' },
  ]
};

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

const Dining: React.FC = () => {
    const [activeTab, setActiveTab] = useState<MenuCategory>('dinner');

    return (
        <section className="py-20 lg:py-32 bg-light">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <img 
                            src="https://res.cloudinary.com/dzac4g9vp/image/upload/v1716301301/napatana-food-buffet.jpg" 
                            alt="A beautiful buffet of fresh food at Napatana Lodge" 
                            className="rounded-lg shadow-2xl w-full" 
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">Seaside Dining</h2>
                        <p className="text-lg text-primary/80 leading-relaxed mb-8">
                            Our restaurant offers a culinary journey with panoramic ocean views. We specialize in fresh, locally-sourced seafood and tropical fruits, prepared with a blend of international and local flavors to celebrate the rich bounty of Milne Bay.
                        </p>
                        
                        {/* Tab Navigation */}
                        <div className="border-b border-gray-300 mb-6 flex space-x-2">
                            <TabButton label="Breakfast" isActive={activeTab === 'breakfast'} onClick={() => setActiveTab('breakfast')} />
                            <TabButton label="Lunch" isActive={activeTab === 'lunch'} onClick={() => setActiveTab('lunch')} />
                            <TabButton label="Dinner" isActive={activeTab === 'dinner'} onClick={() => setActiveTab('dinner')} />
                        </div>

                        {/* Menu Content */}
                        <div className="space-y-4 animate-fade-in">
                            {menuData[activeTab].map(item => (
                                <div key={item.name}>
                                    <h4 className="text-xl font-bold font-serif text-primary">{item.name}</h4>
                                    <p className="text-primary/70">{item.description}</p>
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
