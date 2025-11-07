
export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  altText: string;
  content: {
    features: string[];
    useCases: string[];
  };
  faqs: { q: string; a: string }[];
  relatedServices?: string[];
}

export interface Area {
  slug: string;
  city: string;
  state: string;
  zipCodes: string[];
  landmarks: string[];
  neighborhoods: string[];
  description: string;
}

export interface Attraction {
  slug: string;
  name: string;
  description: string;
  image: string;
  altText: string;
}

export interface NavLink {
    name: string;
    path: string;
    subLinks?: NavLink[];
}

export interface Breadcrumb {
    name: string;
    path: string;
}