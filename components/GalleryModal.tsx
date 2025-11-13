import React, { useState, useEffect, useCallback } from 'react';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface GalleryModalProps {
  images: string[];
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [goToPrevious, goToNext, onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="relative w-full max-w-4xl h-full max-h-[80vh] flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute -top-10 right-0 md:top-2 md:right-2 text-white/80 hover:text-white z-10"
          aria-label="Close gallery"
        >
          <CloseIcon className="w-8 h-8" />
        </button>

        <button 
          onClick={goToPrevious} 
          className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
            {images.map((image, index) => (
                <div 
                    key={index} 
                    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img 
                        src={image} 
                        alt={`Room image ${index + 1}`} 
                        className="w-full h-full object-contain" 
                    />
                </div>
            ))}
        </div>
        
        <button 
          onClick={goToNext} 
          className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRightIcon className="w-8 h-8" />
        </button>
        
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-lg bg-black/50 px-3 py-1 rounded-full font-sans">
            {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
