import { 
  Wifi, 
  Anchor, 
  Wind, 
  Car, 
  Sun,
} from 'lucide-react';

export const CONTACT_INFO = {
  phone: "+91 80507 94033",
  name: "Deepak",
  email: "kodibengarehomestay@gmail.com",
  address: "CMWW+V42, Kodi Bengare-Hoode Rd, Kodi Bengare, Kodi, Karnataka 576218",
  mapLink: "https://maps.google.com/?q=CMWW+V42,+Kodi+Bengare-Hoode+Rd,+Kodi+Bengare,+Kodi,+Karnataka+576218"
};

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Amenities', href: '#features' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const AMENITIES = [
  {
    id: 1,
    title: "Beach Access",
    description: "Steps away from the serene Delta Beach. Feel the sand between your toes instantly.",
    icon: Anchor,
  },
  {
    id: 3,
    title: "AC & Entertainment",
    description: "24/7 Air Conditioning and TV in rooms for your absolute comfort.",
    icon: Wind,
  },
  {
    id: 4,
    title: "Free Wi-Fi",
    description: "Stay connected with high-speed internet while you disconnect from stress.",
    icon: Wifi,
  },
  {
    id: 5,
    title: "Safe Parking",
    description: "Secure private parking space for your vehicles within the property.",
    icon: Car,
  },
  {
    id: 6,
    title: "Boat Rides",
    description: "Hire a fishing boat (paid service) and explore the backwaters.",
    icon: Sun,
  },
];

export const ROOMS = [
  {
    id: 1,
    title: "Luxury Cottage Room",
    price: "Starts at ₹2500",
    // Specific Bedroom Image (Floral/Cozy)
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2000&auto=format&fit=crop", 
    features: ["King Bed", "Private Balcony", "Garden View", "Window with Beach View"]
  },
  {
    id: 2,
    title: "Family Suite",
    price: "Starts at ₹4500",
    // Specific Hall Image (Large/Spacious)
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop", 
    features: ["2 Queen Beds", "Large Luxury Hall", "Kitchenette", "Ideal for Groups"]
  },
  {
    id: 3,
    title: "Standard Double",
    price: "Starts at ₹1800",
    // Specific Exterior Image
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop", 
    features: ["Queen Bed", "Compact & Cozy", "Work Desk", "Budget Friendly"]
  }
];

export const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop", alt: "Kodi Bengare Exterior" },
  { src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2000&auto=format&fit=crop", alt: "Master Bedroom" },
  { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop", alt: "Spacious Hall" },
  { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop", alt: "Modern Blue Tiled Bathroom" },
  { src: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2000&auto=format&fit=crop", alt: "Beach View" },
  { src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2000&auto=format&fit=crop", alt: "Living Area" }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Happy Guest",
    date: "9 months ago",
    rating: 5,
    text: "Our stay at Kodi Bengre Homestay was unforgettable! We booked during a special offer for just ₹3000 and loved every moment. The homestay features a cozy bedroom with a window offering a stunning direct view of the beach, along with a large luxury hall that’s perfect for relaxing. The amenities, including AC and TV, made our stay even more comfortable.",
    response: "Thank you so much for your wonderful review! We’re delighted to hear that you enjoyed your stay at Kodi Bengre Homestay and appreciated the comfort, amenities, and beautiful surroundings."
  },
  {
    id: 2,
    name: "Goku_ynwa",
    date: "6 months ago",
    rating: 5,
    text: "I had a pleasant and peaceful stay at this Homestay. This venue is calm and silent. Makes a perfect stay for a laid back trip for unwinding experience.",
    response: "Thank you for sharing your 5-star experience! We are so pleased to hear you had a pleasant and peaceful stay."
  },
  {
    id: 3,
    name: "Anusha Annagiri",
    date: "1 month ago",
    rating: 5,
    text: "Perfect home stay for a relaxing vacation. Host made us feel like we are at home.",
    response: "Wow, thank you so much for this fantastic 5-star review! We are absolutely delighted to hear that Kodi Bengare Homestay was the perfect homestay for a relaxing vacation."
  },
  {
    id: 4,
    name: "Kirubakaran K",
    date: "1 month ago",
    rating: 5,
    text: "I truly felt at home, and the property owner was so friendly that it felt like he genuinely cared for us.",
    response: "It truly warms our hearts to know that you felt at home during your stay and that the genuine care from the property owner was something you appreciated."
  },
  {
    id: 5,
    name: "Rishie Harti",
    date: "9 months ago",
    rating: 5,
    text: "Staying at Kodi Bengare Homestay was an absolute delight! From the moment we arrived, Hosts made us feel incredibly welcome. The home itself was immaculate, beautifully decorated, and equipped with all the amenities we could have hoped for.",
    response: "Thank you so much for taking the time to share your wonderful experience at our homestay! 🌟"
  },
  {
    id: 6,
    name: "M Sathiesh",
    date: "6 months ago",
    rating: 5,
    text: "Budget friendly home stay. Very friendly owner of property. Also he assist with the local attractions like dolphin watching and mangrove boating",
    response: "We're glad you found our homestay budget-friendly and enjoyed the hospitality. It was our pleasure to assist you with local attractions."
  }
];