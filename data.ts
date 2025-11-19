import { Room, AboutContent, DiningContent, BarContent, Activity, Testimonial, StaffContent } from './types';

// --- Generic LocalStorage Helpers ---
function getData<T>(key: string, defaultValue: T): T {
  try {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
  } catch (error) {
    console.error(`Error reading from localStorage for key "${key}":`, error);
  }
  return defaultValue;
}

function saveData<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing to localStorage for key "${key}":`, error);
  }
}

// --- Content Definitions ---

// 1. About Section
const defaultAbout: AboutContent = {
    heading: 'Discover Napatana',
    paragraph1: 'Nestled on the serene coastline of Alotau, Milne Bay Province, Napatana Lodge is a sanctuary of peace and natural splendor. Our lodge is perfectly positioned beside the crystal-clear waters of the Solomon Sea, offering breathtaking views and an authentic Papua New Guinean experience.',
    paragraph2: 'From our comfortable, well-appointed rooms to our seaside restaurant serving the freshest local cuisine, every detail is crafted to ensure your stay is unforgettable. Whether you\'re seeking adventure in the vibrant coral reefs or simply a tranquil escape from the everyday, Napatana Lodge is your perfect home away from home.',
};
export const getAboutContent = () => getData('content_about', defaultAbout);
export const saveAboutContent = (data: AboutContent) => saveData('content_about', data);


// 2. Rooms
const defaultRooms: Room[] = [
  { id: 1, name: 'Oceanfront Bungalow', description: 'Wake up to the sound of waves in our private bungalows with direct sea views.', price: 450, imageUrls: ['https://picsum.photos/1200/800?image=1040', 'https://picsum.photos/1200/800?image=1041', 'https://picsum.photos/1200/800?image=1042', 'https://picsum.photos/1200/800?image=1043'], amenities: ['Sea View', 'Air Conditioning', 'Free WiFi'] },
  { id: 2, name: 'Seaview Queen Room', description: 'Comfortable and spacious rooms with a private balcony overlooking the ocean.', price: 320, imageUrls: ['https://picsum.photos/1200/800?image=219', 'https://picsum.photos/1200/800?image=220', 'https://picsum.photos/1200/800?image=221'], amenities: ['Sea View', 'Air Conditioning', 'Free WiFi'] },
  { id: 3, name: 'Garden View Twin', description: 'Nestled amongst our lush tropical gardens, perfect for a peaceful retreat.', price: 250, imageUrls: ['https://picsum.photos/1200/800?image=1025', 'https://picsum.photos/1200/800?image=1026', 'https://picsum.photos/1200/800?image=1027', 'https://picsum.photos/1200/800?image=1028'], amenities: ['Air Conditioning', 'Free WiFi'] },
];
export const getRooms = () => getData('content_rooms', defaultRooms);
export const saveRooms = (data: Room[]) => saveData('content_rooms', data);


// 3. Dining
const defaultDining: DiningContent = {
    heading: 'Seaside Dining',
    paragraph: 'Our restaurant offers a culinary journey with panoramic ocean views. We specialize in fresh, locally-sourced seafood and tropical fruits, prepared with a blend of international and local flavors to celebrate the rich bounty of Milne Bay.',
    image: 'https://res.cloudinary.com/dzac4g9vp/image/upload/v1716301301/napatana-food-buffet.jpg',
    menu: {
        breakfast: [
            { name: 'Tropical Fruit Platter', description: 'A vibrant selection of fresh, local fruits like pineapple, mango, and passionfruit.' },
            { name: 'Sago Pancakes (Saksak)', description: 'A traditional delicacy, served warm with coconut cream and a drizzle of local honey.' },
            { name: 'Island Omelette', description: 'Fluffy eggs with fresh garden vegetables, cheese, and a side of toast.' },
            { name: 'Freshly Brewed Goroka Coffee', description: 'Rich and aromatic coffee sourced from the highlands of Papua New Guinea.' },
        ],
        lunch: [
            { name: 'Grilled Fish of the Day', description: 'Freshly caught fish, grilled to perfection and served with lemon, herbs, and a garden salad.' },
            { name: 'Chicken & Coconut Soup', description: 'A light and flavorful soup with tender chicken, coconut milk, and fresh greens.' },
            { name: 'Napatana Club Sandwich', description: 'A hearty sandwich with grilled chicken, bacon, fresh lettuce, tomato, and our special sauce.' },
            { name: 'Sweet Potato (Kaukau) Fries', description: 'Crispy and delicious, a local favorite served with a side of aioli.' },
        ],
        dinner: [
            { name: 'Coconut Crab Curry', description: 'A rich, aromatic curry featuring succulent crab meat cooked in coconut cream with local spices.' },
            { name: 'Slow-Cooked Pork (Mumu-style)', description: 'Tender pork, slow-cooked with root vegetables, inspired by the traditional mumu feast.' },
            { name: 'Signature Grilled Reef Fish', description: 'A whole, locally-sourced reef fish, grilled to perfection with citrus and herbs. A true taste of Milne Bay.', image: 'https://res.cloudinary.com/dzac4g9vp/image/upload/v1763000507/486143806_1086389130174147_4792934733789176422_n_-_Copy_-_Copy_ofl21x.jpg' },
            { name: 'Seafood Platter for Two', description: 'A generous platter of grilled fish, prawns, and calamari, perfect for sharing.' },
            { name: 'Vegetable Stir-fry with Tofu', description: 'A medley of fresh, seasonal vegetables and tofu in a savory sauce, served with rice.' },
        ],
    },
};
export const getDiningContent = () => getData('content_dining', defaultDining);
export const saveDiningContent = (data: DiningContent) => saveData('content_dining', data);


// 4. Bar
const defaultBar: BarContent = {
    heading: 'The Waterfront Bar',
    paragraph1: 'Our open-air bar is the heart of Napatana Lodge, where stories are shared and friendships are made. Feel the gentle sea breeze as you sip on handcrafted cocktails, featuring exotic local fruits and premium spirits.',
    paragraph2: 'With a curated selection of fine wines, cold beers, and refreshing non-alcoholic beverages, it\'s the perfect spot to watch a spectacular Milne Bay sunset or unwind under a blanket of stars.',
    image: 'https://picsum.photos/800/600?image=225',
};
export const getBarContent = () => getData('content_bar', defaultBar);
export const saveBarContent = (data: BarContent) => saveData('content_bar', data);


// 5. Activities
const defaultActivities: Activity[] = [
  { name: 'Scuba Diving', description: 'Explore world-class dive sites with vibrant coral reefs and diverse marine life.', image: 'https://picsum.photos/600/400?image=1082' },
  { name: 'Snorkeling Trips', description: 'Discover the underwater wonders just a short boat ride from the lodge.', image: 'https://picsum.photos/600/400?image=1069' },
  { name: 'Cultural Village Tours', description: 'Immerse yourself in the rich history and traditions of Milne Bay culture.', image: 'https://picsum.photos/600/400?image=103' },
  { name: 'Island Hopping', description: 'Visit nearby uninhabited islands for a day of picnicking, swimming, and exploring.', image: 'https://picsum.photos/600/400?image=15' },
];
export const getActivities = () => getData('content_activities', defaultActivities);
export const saveActivities = (data: Activity[]) => saveData('content_activities', data);


// 6. Testimonials
const defaultTestimonials: Testimonial[] = [
  { quote: "Absolutely breathtaking! The views from our bungalow were postcard-perfect. The staff treated us like family. We can't wait to come back.", name: 'Jessica & Tom', location: 'Sydney, Australia' },
  { quote: "A true gem in Papua New Guinea. The food was incredible, especially the fresh seafood. Diving here is a must-do. Napatana Lodge exceeded all our expectations.", name: 'David L.', location: 'California, USA' },
  { quote: "We were looking for a peaceful escape, and we found it. Waking up to the sound of the ocean was magical. Thank you for an unforgettable stay.", name: 'Anja K.', location: 'Berlin, Germany' },
];
export const getTestimonials = () => getData('content_testimonials', defaultTestimonials);
export const saveTestimonials = (data: Testimonial[]) => saveData('content_testimonials', data);


// 7. Staff
const defaultStaff: StaffContent = {
    heading: 'Meet Our Friendly Team',
    paragraph: 'Our dedicated team is the heart of Napatana Lodge, committed to making your stay exceptional with genuine Papua New Guinean hospitality.',
    groupImage: 'https://res.cloudinary.com/dzac4g9vp/image/upload/v1763000505/482072610_1072401148239612_6094351489164346454_n_-_Copy_wpsmn2.jpg',
    members: [
        { name: 'Johnathan K.', role: 'General Manager', image: 'https://picsum.photos/seed/manager/200/200' },
        { name: 'Maria S.', role: 'Head Chef', image: 'https://picsum.photos/seed/chef/200/200' },
        { name: 'Samuel T.', role: 'Lead Dive Instructor', image: 'https://picsum.photos/seed/dive/200/200' },
        { name: 'Elizabeth M.', role: 'Guest Relations', image: 'https://picsum.photos/seed/guest/200/200' },
    ],
};
export const getStaffContent = () => getData('content_staff', defaultStaff);
export const saveStaffContent = (data: StaffContent) => saveData('content_staff', data);
