export interface TourItinerary {
  day: number;
  title: string;
  desc: string;
  activities: string[];
}

export interface Tour {
  id: string;
  title: string;
  subtitle: string;
  destination: string;
  country: string;
  region: 'Vietnam' | 'Asia' | 'Europe' | 'Americas' | 'Australia';
  duration: string;
  days: number;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  featured?: boolean;
  bestSeller?: boolean;
  tourType: 'Nghỉ dưỡng' | 'Khám phá' | 'Gia đình' | 'Mạo hiểm' | 'Văn hóa';
  groupSize: string;
  departure: string;
  highlights: string[];
  itinerary: TourItinerary[];
  included: string[];
  excluded: string[];
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: 'Vietnam' | 'Asia' | 'Europe' | 'Americas' | 'Australia';
  toursCount: number;
  image: string;
  description: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  userRole: string;
  tourName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
}

export interface SearchFilterParams {
  destination: string;
  date: string;
  adults: number;
  children: number;
  budgetRange: number;
  region?: string;
  tourType?: string;
  duration?: string;
}

export interface BookingSubmission {
  tour: Tour;
  departureDate: string;
  adults: number;
  children: number;
  packageType: 'Standard' | 'Deluxe' | 'VIP Luxury';
  includeInsurance: boolean;
  includeAirportTransfer: boolean;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  specialRequests: string;
  totalPrice: number;
}
