
import React, { useState, FC } from 'react';
import * as data from '../data';
import { AboutContent, Room, DiningContent, BarContent, Activity, Testimonial, StaffContent, MenuCategory, MenuItem, StaffMember } from '../types';

// Reusable form components
const Input: FC<any> = (props) => <input {...props} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary" />;
const Textarea: FC<any> = (props) => <textarea {...props} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary" />;
const Label: FC<any> = (props) => <label {...props} className="block text-sm font-bold text-primary/80 mb-1" />;
const FormField: FC<{label: string, children: React.ReactNode}> = ({label, children}) => (
    <div className="mb-4">
        <Label>{label}</Label>
        {children}
    </div>
);
const SaveButton: FC<{onClick: () => void}> = ({onClick}) => (
    <button onClick={onClick} className="bg-accent hover:bg-accent-hover text-white font-bold py-2 px-6 rounded-md transition-colors duration-300">
        Save Changes
    </button>
);

// Editor components for each section
const AboutEditor: FC<{onSave: () => void}> = ({ onSave }) => {
    const [content, setContent] = useState(data.getAboutContent);
    const handleSave = () => { data.saveAboutContent(content); onSave(); };

    return (
        <div>
            <h3 className="text-2xl font-serif font-bold mb-4">About Section</h3>
            <FormField label="Heading"><Input value={content.heading} onChange={e => setContent({...content, heading: e.target.value})} /></FormField>
            <FormField label="Paragraph 1"><Textarea value={content.paragraph1} onChange={e => setContent({...content, paragraph1: e.target.value})} /></FormField>
            <FormField label="Paragraph 2"><Textarea value={content.paragraph2} onChange={e => setContent({...content, paragraph2: e.target.value})} /></FormField>
            <SaveButton onClick={handleSave} />
        </div>
    );
};

const RoomsEditor: FC<{onSave: () => void}> = ({ onSave }) => {
    const [rooms, setRooms] = useState(data.getRooms);
    const handleSave = () => { data.saveRooms(rooms); onSave(); };
    
    const handleRoomChange = (index: number, field: keyof Room, value: any) => {
        const newRooms = [...rooms];
        (newRooms[index] as any)[field] = value;
        setRooms(newRooms);
    };

    return (
        <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Rooms Section</h3>
            {rooms.map((room, index) => (
                <div key={room.id} className="p-4 border rounded-md mb-6 bg-light">
                    <h4 className="text-xl font-bold font-serif mb-2">{room.name}</h4>
                    <FormField label="Name"><Input value={room.name} onChange={e => handleRoomChange(index, 'name', e.target.value)} /></FormField>
                    <FormField label="Description"><Textarea value={room.description} onChange={e => handleRoomChange(index, 'description', e.target.value)} /></FormField>
                    <FormField label="Price per night"><Input type="number" value={room.price} onChange={e => handleRoomChange(index, 'price', parseInt(e.target.value, 10))} /></FormField>
                    <FormField label="Amenities (comma-separated)"><Input value={room.amenities.join(', ')} onChange={e => handleRoomChange(index, 'amenities', e.target.value.split(',').map(s => s.trim()))} /></FormField>
                    <FormField label="Image URLs (comma-separated)"><Textarea value={room.imageUrls.join(', ')} onChange={e => handleRoomChange(index, 'imageUrls', e.target.value.split(',').map(s => s.trim()))} /></FormField>
                </div>
            ))}
            <SaveButton onClick={handleSave} />
        </div>
    );
};

const DiningEditor: FC<{onSave: () => void}> = ({ onSave }) => {
    const [content, setContent] = useState(data.getDiningContent);
    const handleSave = () => { data.saveDiningContent(content); onSave(); };

    const handleMenuItemChange = (category: MenuCategory, index: number, field: keyof MenuItem, value: string) => {
        const newContent = {...content};
        (newContent.menu[category][index] as any)[field] = value;
        setContent(newContent);
    };
    
    return (
        <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Dining Section</h3>
            <FormField label="Heading"><Input value={content.heading} onChange={e => setContent({...content, heading: e.target.value})} /></FormField>
            <FormField label="Paragraph"><Textarea value={content.paragraph} onChange={e => setContent({...content, paragraph: e.target.value})} /></FormField>
            <FormField label="Main Image URL"><Input value={content.image} onChange={e => setContent({...content, image: e.target.value})} /></FormField>
            
            {(Object.keys(content.menu) as MenuCategory[]).map(category => (
                <div key={category} className="mt-6">
                    <h4 className="text-xl font-bold font-serif mb-2 capitalize">{category} Menu</h4>
                    {content.menu[category].map((item, index) => (
                         <div key={index} className="p-4 border rounded-md mb-4 bg-light">
                             <FormField label="Item Name"><Input value={item.name} onChange={e => handleMenuItemChange(category, index, 'name', e.target.value)} /></FormField>
                             <FormField label="Item Description"><Textarea value={item.description} onChange={e => handleMenuItemChange(category, index, 'description', e.target.value)} /></FormField>
                             <FormField label="Item Image URL (optional)"><Input value={item.image || ''} onChange={e => handleMenuItemChange(category, index, 'image', e.target.value)} /></FormField>
                         </div>
                    ))}
                </div>
            ))}
            <SaveButton onClick={handleSave} />
        </div>
    );
};

const BarEditor: FC<{ onSave: () => void }> = ({ onSave }) => {
    const [content, setContent] = useState(data.getBarContent);
    const handleSave = () => { data.saveBarContent(content); onSave(); };

    return (
        <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Bar Section</h3>
            <FormField label="Heading"><Input value={content.heading} onChange={e => setContent({ ...content, heading: e.target.value })} /></FormField>
            <FormField label="Paragraph 1"><Textarea value={content.paragraph1} onChange={e => setContent({ ...content, paragraph1: e.target.value })} /></FormField>
            <FormField label="Paragraph 2"><Textarea value={content.paragraph2} onChange={e => setContent({ ...content, paragraph2: e.target.value })} /></FormField>
            <FormField label="Image URL"><Input value={content.image} onChange={e => setContent({ ...content, image: e.target.value })} /></FormField>
            <SaveButton onClick={handleSave} />
        </div>
    );
};

const ActivitiesEditor: FC<{ onSave: () => void }> = ({ onSave }) => {
    const [activities, setActivities] = useState(data.getActivities);
    const handleSave = () => { data.saveActivities(activities); onSave(); };
    
    const handleChange = (index: number, field: keyof Activity, value: any) => {
        const newActivities = [...activities];
        (newActivities[index] as any)[field] = value;
        setActivities(newActivities);
    };

    return (
        <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Activities Section</h3>
            {activities.map((activity, index) => (
                <div key={index} className="p-4 border rounded-md mb-6 bg-light">
                    <FormField label="Name"><Input value={activity.name} onChange={e => handleChange(index, 'name', e.target.value)} /></FormField>
                    <FormField label="Description"><Textarea value={activity.description} onChange={e => handleChange(index, 'description', e.target.value)} /></FormField>
                    <FormField label="Image URL"><Input value={activity.image} onChange={e => handleChange(index, 'image', e.target.value)} /></FormField>
                </div>
            ))}
            <SaveButton onClick={handleSave} />
        </div>
    );
};

const TestimonialsEditor: FC<{ onSave: () => void }> = ({ onSave }) => {
    const [testimonials, setTestimonials] = useState(data.getTestimonials);
    const handleSave = () => { data.saveTestimonials(testimonials); onSave(); };
    
    const handleChange = (index: number, field: keyof Testimonial, value: any) => {
        const newTestimonials = [...testimonials];
        (newTestimonials[index] as any)[field] = value;
        setTestimonials(newTestimonials);
    };

    return (
        <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Testimonials Section</h3>
            {testimonials.map((testimonial, index) => (
                <div key={index} className="p-4 border rounded-md mb-6 bg-light">
                    <FormField label="Quote"><Textarea value={testimonial.quote} onChange={e => handleChange(index, 'quote', e.target.value)} /></FormField>
                    <FormField label="Name"><Input value={testimonial.name} onChange={e => handleChange(index, 'name', e.target.value)} /></FormField>
                    <FormField label="Location"><Input value={testimonial.location} onChange={e => handleChange(index, 'location', e.target.value)} /></FormField>
                </div>
            ))}
            <SaveButton onClick={handleSave} />
        </div>
    );
};

const StaffEditor: FC<{ onSave: () => void }> = ({ onSave }) => {
    const [content, setContent] = useState(data.getStaffContent);
    const handleSave = () => { data.saveStaffContent(content); onSave(); };

    const handleMemberChange = (index: number, field: keyof StaffMember, value: string) => {
        const newContent = {...content};
        (newContent.members[index] as any)[field] = value;
        setContent(newContent);
    };

    return (
        <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Our Team Section</h3>
            <FormField label="Heading"><Input value={content.heading} onChange={e => setContent({ ...content, heading: e.target.value })} /></FormField>
            <FormField label="Paragraph"><Textarea value={content.paragraph} onChange={e => setContent({ ...content, paragraph: e.target.value })} /></FormField>
            <FormField label="Group Image URL"><Input value={content.groupImage} onChange={e => setContent({ ...content, groupImage: e.target.value })} /></FormField>
            
             <div className="mt-6">
                <h4 className="text-xl font-bold font-serif mb-2">Team Members</h4>
                {content.members.map((member, index) => (
                     <div key={index} className="p-4 border rounded-md mb-4 bg-light">
                         <FormField label="Name"><Input value={member.name} onChange={e => handleMemberChange(index, 'name', e.target.value)} /></FormField>
                         <FormField label="Role"><Input value={member.role} onChange={e => handleMemberChange(index, 'role', e.target.value)} /></FormField>
                         <FormField label="Image URL"><Input value={member.image} onChange={e => handleMemberChange(index, 'image', e.target.value)} /></FormField>
                     </div>
                ))}
            </div>
            <SaveButton onClick={handleSave} />
        </div>
    );
};

// Main Admin Panel
const AdminPanel: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeSection, setActiveSection] = useState('about');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin') {
      setLoggedIn(true);
    } else {
      setError('Incorrect password.');
    }
  };
  
  const handleSave = () => {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="bg-light p-8 rounded-lg shadow-xl w-full max-w-sm">
          <h2 className="text-2xl font-serif font-bold text-center text-primary mb-6">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <FormField label="Password" >
                <Input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </FormField>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-2 px-4 rounded-md mt-4">
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-primary/60 hover:text-primary">Back to Website</a>
          </div>
        </div>
      </div>
    );
  }
  
  const sections = {
      about: <AboutEditor onSave={handleSave} />,
      rooms: <RoomsEditor onSave={handleSave} />,
      dining: <DiningEditor onSave={handleSave} />,
      bar: <BarEditor onSave={handleSave} />,
      activities: <ActivitiesEditor onSave={handleSave} />,
      testimonials: <TestimonialsEditor onSave={handleSave} />,
      staff: <StaffEditor onSave={handleSave} />,
  };
  
  type SectionKey = keyof typeof sections;

  return (
    <div className="min-h-screen bg-light font-sans">
      <header className="bg-primary text-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-serif font-bold">Admin Panel</h1>
        <a href="#/" className="text-secondary hover:underline">View Site</a>
      </header>
      <div className="flex">
        <aside className="w-64 bg-white p-4 border-r">
          <nav>
            <ul>
              {Object.keys(sections).map(key => (
                 <li key={key} className="mb-2">
                    <button 
                        onClick={() => setActiveSection(key)} 
                        className={`w-full text-left p-2 rounded-md font-bold capitalize ${activeSection === key ? 'bg-secondary/20 text-primary' : 'hover:bg-light'}`}
                    >
                        {key}
                    </button>
                 </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-8 relative">
            {showSuccess && (
                <div className="absolute top-4 right-8 bg-green-500 text-white font-bold py-2 px-4 rounded-md shadow-lg animate-fade-in">
                    Changes saved successfully!
                </div>
            )}
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-sm text-primary/60 mb-6">To update an image, upload it to a service like <a href="https://cloudinary.com" target="_blank" rel="noopener noreferrer" className="text-secondary underline">Cloudinary</a> or <a href="https://imgur.com/upload" target="_blank" rel="noopener noreferrer" className="text-secondary underline">Imgur</a> and paste the public URL.</p>
                {sections[activeSection as SectionKey]}
            </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
