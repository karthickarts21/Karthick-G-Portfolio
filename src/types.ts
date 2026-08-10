export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  emoji: string;
  image: string;
  year: string;
  client: string;
  tools: string[];
  featured?: boolean;
  aspectRatio: 'aspect-square' | 'aspect-[4/5]' | 'aspect-[16/9]' | 'aspect-[4/3]';
  details: {
    overview: string;
    challenge: string;
    solution: string;
    deliverables: string[];
  };
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  highlights?: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  icon: string;
  category: 'Software' | 'Core Discipline';
  level: number; // 0 to 100
  tagline: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
}

export type CursorState = {
  text?: string;
  variant?: 'default' | 'hover' | 'drag' | 'view' | 'copy';
};
