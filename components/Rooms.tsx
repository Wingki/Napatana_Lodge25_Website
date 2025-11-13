import React, { useState, useEffect } from 'react';
import { Room } from '../types';
import { WifiIcon, AirConIcon, SeaViewIcon } from './Icons';
import GalleryModal from './GalleryModal';

interface RoomsProps {
  onBookRoom: (room: Room) => void;
  onOpenGallery: (images: string[]) => void;
}

const roomsData: Room[] = [
  {
    id: 1,
    name: 'Oceanfront Bungalow',
    description: 'Wake up to the sound of waves in our private bungalows with direct sea views.',
    price: 450,
    imageUrls: [
        'https://picsum.photos/1200/800?image=1040',
        'https://picsum.photos/1200/800?image=1041',
        'https://picsum.photos/1200/800?image=1042',
        'https://picsum.photos/1200/800?image=1043',
    ],
    amenities: ['Sea View', 'Air Conditioning', 'Free WiFi'],
  },
  {
    id: 2,
    name: 'Seaview Queen Room',
    description: 'Comfortable and spacious rooms with a private balcony overlooking the ocean.',
    price: 320,
    imageUrls: [
        'https://picsum.photos/1200/800?image=219',
        'https://picsum.photos/1200/800?image=220',
        'https://picsum.photos/1200/800?image=221',
    ],
    amenities: ['Sea View', 'Air Conditioning', 'Free WiFi'],
  },
  {
    id: 3,
    name: 'Garden View Twin',
    description: 'Nestled amongst our lush tropical gardens, perfect for a peaceful retreat.',
    price: 250,
    imageUrls: [
        'https://picsum.photos/1200/800?image=1025',
        'https://picsum.photos/1200/800?image=1026',
        'https://picsum.photos/1200/800?image=1027',
        'https://picsum.photos/1200/800?image=1028',
    ],
    amenities: ['Air Conditioning', 'Free WiFi'],
  },
];

const Amenity: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
    <div className="flex items-center text-primary/70">
        {icon}
        <span className="ml-2 text-sm">{label}</span>
    </div>
);

const amenityIcons: { [key: string]: React.ReactNode } = {
    'Sea View': <SeaViewIcon className="w-5 h-5 text-secondary" />,
    'Air Conditioning': <AirConIcon className="w-5 h-5 text-secondary" />,
    'Free WiFi': <WifiIcon className="w-5 h-5 text-secondary" />,
};

interface RoomCardProps {
    room: Room;
    onBookRoom: (room: Room) => void;
    onOpenGallery: (images: string[]) => void;
    confirmingRoomId: number | null;
    setConfirmingRoomId: (id: number | null) => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, onBookRoom, onOpenGallery, confirmingRoomId, setConfirmingRoomId }) => {
    useEffect(() => {
        if (confirmingRoomId === room.id) {
            const timer = setTimeout(() => {
                setConfirmingRoomId(null);
            }, 3000); // Auto-cancel after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [confirmingRoomId, room.id, setConfirmingRoomId]);

    const isConfirming = confirmingRoomId === room.id;

    return (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
            <div className="relative group cursor-pointer" onClick={() => onOpenGallery(room.imageUrls)}>
                <img src={room.imageUrls[0]} alt={room.name} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">View Gallery</p>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">{room.name}</h3>
                <p className="text-primary/80 mb-4 flex-grow">{room.description}</p>
                <div className="flex space-x-4 mb-4">
                    {room.amenities.map(amenity => <Amenity key={amenity} icon={amenityIcons[amenity]} label={amenity} />)}
                </div>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-light min-h-[60px]">
                    <div>
                        <span className="text-2xl font-bold text-primary-light">${room.price}</span>
                        <span className="text-primary/70"> / night</span>
                    </div>
                    {isConfirming ? (
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => setConfirmingRoomId(null)}
                                className="bg-gray-200 text-primary font-bold py-2 px-4 rounded-full hover:bg-gray-300 transition-colors duration-300 text-sm"
                                aria-label={`Cancel booking for ${room.name}`}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    onBookRoom(room);
                                    setConfirmingRoomId(null);
                                }}
                                className="bg-accent hover:bg-accent-hover text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 text-sm"
                                aria-label={`Confirm booking for ${room.name}`}
                            >
                                Confirm
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => setConfirmingRoomId(room.id)}
                            className="bg-secondary text-white font-bold py-2 px-5 rounded-full hover:bg-primary-light transition-colors duration-300"
                        >
                            Book
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const Rooms: React.FC<RoomsProps> = ({ onBookRoom, onOpenGallery }) => {
  const [confirmingRoomId, setConfirmingRoomId] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">Our Accommodations</h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Choose your perfect haven. Each room is designed for comfort, blending modern amenities with traditional charm.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {roomsData.map(room => (
            <RoomCard 
              key={room.id} 
              room={room} 
              onBookRoom={onBookRoom} 
              onOpenGallery={onOpenGallery}
              confirmingRoomId={confirmingRoomId}
              setConfirmingRoomId={setConfirmingRoomId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;