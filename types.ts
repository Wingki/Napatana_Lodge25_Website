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