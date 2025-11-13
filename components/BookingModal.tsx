import React, { useState, useEffect } from 'react';
import { Room } from '../types';
import { CloseIcon, CheckIcon } from './Icons';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoom: Room | null;
}

const roomsData: Room[] = [
  { id: 1, name: 'Oceanfront Bungalow', price: 450, description: '', imageUrls: [], amenities: [] },
  { id: 2, name: 'Seaview Queen Room', price: 320, description: '', imageUrls: [], amenities: [] },
  { id: 3, name: 'Garden View Twin', price: 250, description: '', imageUrls: [], amenities: [] },
];

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-primary/80 mb-1">{label}</label>
    <input {...props} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary" />
  </div>
);

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialRoom }) => {
  const [step, setStep] = useState(1);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(initialRoom);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
        setStep(1);
        setIsSuccess(false);
    }, 300);
  }

  if (!isOpen) return null;

  const renderStep = () => {
    switch (step) {
      case 1: // Dates and Room
        return (
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Select Your Stay</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <InputField label="Check-in Date" type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} min={today} required />
              <InputField label="Check-out Date" type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} min={checkIn || today} required />
            </div>
            <div className="mb-4">
              <InputField label="Number of Guests" type="number" value={guests} onChange={e => setGuests(parseInt(e.target.value, 10))} min={1} max={5} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary/80 mb-1">Room Preference</label>
              <select 
                value={selectedRoom?.id || ''} 
                onChange={e => setSelectedRoom(roomsData.find(r => r.id === parseInt(e.target.value, 10)) || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                required
              >
                <option value="" disabled>{initialRoom ? 'Confirm your room' : 'Select a room'}</option>
                {roomsData.map(room => <option key={room.id} value={room.id}>{room.name} - ${room.price}/night</option>)}
              </select>
            </div>
            <button onClick={handleNext} disabled={!checkIn || !checkOut || !selectedRoom} className="mt-8 w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 px-4 rounded-md transition-colors disabled:bg-gray-400">
              Continue
            </button>
          </div>
        );
      case 2: // Personal Details
        return (
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Your Information</h3>
            <div className="space-y-4">
                <InputField label="Full Name" type="text" value={name} onChange={e => setName(e.target.value)} required />
                <InputField label="Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                <InputField label="Phone Number" type="tel" />
            </div>
            <div className="flex justify-between mt-8">
                <button onClick={handleBack} className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-md hover:bg-gray-300">Back</button>
                <button onClick={handleNext} disabled={!name || !email} className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-md transition-colors disabled:bg-gray-400">Proceed to Payment</button>
            </div>
          </div>
        );
      case 3: // Payment
        return (
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Secure Payment</h3>
            <p className="text-sm text-center text-primary/70 mb-4">This is a simulation. Do not enter real card details.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField label="Card Number" type="text" placeholder="**** **** **** ****" />
              <div className="grid grid-cols-2 gap-4">
                <InputField label="Expiry Date" type="text" placeholder="MM / YY" />
                <InputField label="CVC" type="text" placeholder="123" />
              </div>
              <InputField label="Name on Card" type="text" placeholder="John M. Doe" />
              <div className="flex justify-between mt-8">
                <button type="button" onClick={handleBack} className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-md hover:bg-gray-300">Back</button>
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors w-40">
                    {isProcessing ? 'Processing...' : `Pay $${(selectedRoom?.price || 0) * 2}`}
                </button>
              </div>
            </form>
          </div>
        );
    }
  };
  
  const successContent = (
    <div className="text-center p-8">
        <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
            <CheckIcon className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-3xl font-serif font-bold text-primary mb-4">Booking Confirmed!</h3>
        <p className="text-primary/80 mb-2">Thank you, {name}. Your seaside escape awaits.</p>
        <p className="text-primary/80 mb-6">A confirmation email has been sent to <span className="font-semibold">{email}</span>.</p>
        <button onClick={handleClose} className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-md transition-colors">
            Close
        </button>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={handleClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg relative animate-slide-up" onClick={e => e.stopPropagation()}>
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <CloseIcon className="w-6 h-6" />
        </button>
        <div className="p-8">
          {isSuccess ? successContent : renderStep()}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;