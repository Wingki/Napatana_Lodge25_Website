import React from 'react';

const staffData = [
  {
    name: 'Johnathan K.',
    role: 'General Manager',
    image: 'https://picsum.photos/seed/manager/200/200',
  },
  {
    name: 'Maria S.',
    role: 'Head Chef',
    image: 'https://picsum.photos/seed/chef/200/200',
  },
  {
    name: 'Samuel T.',
    role: 'Lead Dive Instructor',
    image: 'https://picsum.photos/seed/dive/200/200',
  },
  {
    name: 'Elizabeth M.',
    role: 'Guest Relations',
    image: 'https://picsum.photos/seed/guest/200/200',
  },
];

const StaffCard: React.FC<{ member: typeof staffData[0] }> = ({ member }) => (
  <div className="bg-white p-6 rounded-lg shadow-xl text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
    <img 
      src={member.image} 
      alt={`Portrait of ${member.name}`}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-secondary/50"
    />
    <h3 className="text-xl font-serif font-bold text-primary">{member.name}</h3>
    <p className="text-primary/70">{member.role}</p>
  </div>
);


const Staff: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">Meet Our Friendly Team</h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Our dedicated team is the heart of Napatana Lodge, committed to making your stay exceptional with genuine Papua New Guinean hospitality.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <img 
            src="https://res.cloudinary.com/dzac4g9vp/image/upload/v1763000505/482072610_1072401148239612_6094351489164346454_n_-_Copy_wpsmn2.jpg" 
            alt="The Napatana Lodge Team" 
            className="rounded-lg shadow-2xl w-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staffData.map((member) => (
            <StaffCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;