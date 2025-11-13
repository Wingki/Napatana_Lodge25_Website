import React from 'react';

interface IconProps {
  className?: string;
}

export const MenuIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const WifiIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.556A5.5 5.5 0 0115.889 16.556m-3.889-2.778a2.75 2.75 0 013.889 0M12 21a1 1 0 100-2 1 1 0 000 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.5 12.5a9.5 9.5 0 0117 0" />
  </svg>
);

export const AirConIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5 18 6m-1.5 9 1.5 1.5m-6-1.5-1.5 1.5m1.5-12-1.5-1.5M3 12h3.375" />
    </svg>
);

export const SeaViewIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21.75 12-3.75 3.75m3.75-3.75L18 8.25m3.75 3.75H3m18 0-3.75-3.75M3 12h18M3 12l3.75 3.75M3 12l3.75-3.75m11.25 3.75-3.75 3.75M14.25 12l3.75-3.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12C1.5 7.85786 4.85786 4.5 9 4.5c1.896 0 3.63.7 4.94975 1.83858M22.5 12c0 4.1421-3.3579 7.5-7.5 7.5-1.896 0-3.63-.7-4.94975-1.83858" />
    </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);