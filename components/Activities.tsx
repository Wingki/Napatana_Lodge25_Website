
import React from 'react';

const activities = [
  { name: 'Scuba Diving', description: 'Explore world-class dive sites with vibrant coral reefs and diverse marine life.', image: 'https://picsum.photos/600/400?image=1082' },
  { name: 'Snorkeling Trips', description: 'Discover the underwater wonders just a short boat ride from the lodge.', image: 'https://picsum.photos/600/400?image=1069' },
  { name: 'Cultural Village Tours', description: 'Immerse yourself in the rich history and traditions of Milne Bay culture.', image: 'https://picsum.photos/600/400?image=103' },
  { name: 'Island Hopping', description: 'Visit nearby uninhabited islands for a day of picnicking, swimming, and exploring.', image: 'https://picsum.photos/600/400?image=15' },
];

const ActivityCard: React.FC<{ activity: typeof activities[0] }> = ({ activity }) => (
    <div className="relative rounded-lg overflow-hidden shadow-xl group">
        <img src={activity.image} alt={activity.name} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-2xl font-serif font-bold">{activity.name}</h3>
            <p className="opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">{activity.description}</p>
        </div>
    </div>
);

const Activities: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">Experience Milne Bay</h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Adventure and relaxation await. Let us guide you through the unforgettable experiences of Papua New Guinea.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map(activity => (
            <ActivityCard key={activity.name} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
