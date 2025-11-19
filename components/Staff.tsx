import React, { useState, useEffect } from 'react';
import { StaffContent, StaffMember } from '../types';
import { getStaffContent } from '../data';

const StaffCard: React.FC<{ member: StaffMember }> = ({ member }) => (
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
  const [content, setContent] = useState<StaffContent | null>(null);

  useEffect(() => {
    setContent(getStaffContent());
  }, []);

  if (!content) return null;

  return (
    <section className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">{content.heading}</h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            {content.paragraph}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <img 
            src={content.groupImage} 
            alt="The Napatana Lodge Team" 
            className="rounded-lg shadow-2xl w-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.members.map((member) => (
            <StaffCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;
