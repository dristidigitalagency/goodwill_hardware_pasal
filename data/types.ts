export interface Feature {
  label: string;
  value?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  subCategory?: string;
  brand: string;
  description: string;
  image: string;
  badge?: string;
  features: string[];
  specifications?: Feature[];
}

export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  image?: string;
  icon?: string;
  color: string;
}
