export interface Project {
  id: string;
  title: string;
  category: string;
  role: string;
  description: string;
  result: string;
  color: string;
  imageSeed: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface PortfolioData {
  name: string;
  city: string;
  major: string;
  hobbies: string;
  heroOption: 'A' | 'B';
  accentColor: 'indigo' | 'amber' | 'emerald' | 'rose' | 'slate';
  optionA: {
    headline: string;
    subheadline: string;
  };
  optionB: {
    headline: string;
    subheadline: string;
  };
}
