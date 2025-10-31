export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number; // 1 to 5
  comment: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}