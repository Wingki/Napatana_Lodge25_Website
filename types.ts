export interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrls: string[];
  amenities: string[];
}

export interface BookingDetails {
  checkIn: string;
  checkOut: string;
  guests: number;
  room: Room | null;
  name: string;
  email: string;
  phone: string;
}

export interface AboutContent {
  heading: string;
  paragraph1: string;
  paragraph2: string;
}

export interface MenuItem {
  name: string;
  description: string;
  image?: string;
}

export type MenuCategory = 'breakfast' | 'lunch' | 'dinner';

export interface DiningContent {
  heading: string;
  paragraph: string;
  image: string;
  menu: { [key in MenuCategory]: MenuItem[] };
}

export interface BarContent {
  heading: string;
  paragraph1: string;
  paragraph2: string;
  image: string;
}

export interface Activity {
  name: string;
  description: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export interface StaffMember {
  name: string;
  role: string;
  image: string;
}

export interface StaffContent {
    heading: string;
    paragraph: string;
    groupImage: string;
    members: StaffMember[];
}
