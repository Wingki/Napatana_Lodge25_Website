import React, { useState, useRef, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Dining from './components/Dining';
import Bar from './components/Bar';
import Activities from './components/Activities';
import Testimonials from './components/Testimonials';
import Staff from './components/Staff';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Room } from './types';

const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const sections = {
    about: useRef<HTMLDivElement>(null),
    rooms: useRef<HTMLDivElement>(null),
    dining: useRef<HTMLDivElement>(null),
    bar: useRef<HTMLDivElement>(null),
    activities: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
    staff: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof sections) => {
    sections[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openBookingModal = useCallback((room: Room | null) => {
    setSelectedRoom(room);
    setIsBookingModalOpen(true);
  }, []);

  const closeBookingModal = useCallback(() => {
    setIsBookingModalOpen(false);
    setSelectedRoom(null);
  }, []);

  return (
    <div className="bg-light font-sans text-primary">
      <Header onNavigate={scrollToSection} onBookNow={() => openBookingModal(null)} />
      <main>
        <Hero onBookNow={() => openBookingModal(null)} />
        <div ref={sections.about}>
          <About />
        </div>
        <div ref={sections.rooms}>
          <Rooms onBookRoom={openBookingModal} />
        </div>
        <div ref={sections.dining}>
          <Dining />
        </div>
        <div ref={sections.bar}>
          <Bar />
        </div>
        <div ref={sections.activities}>
          <Activities />
        </div>
        <div ref={sections.testimonials}>
          <Testimonials />
        </div>
        <div ref={sections.staff}>
          <Staff />
        </div>
      </main>
      <Footer />
      {isBookingModalOpen && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={closeBookingModal}
          initialRoom={selectedRoom}
        />
      )}
    </div>
  );
};

export default App;