import { Project, ExperienceItem, SkillItem, TestimonialItem } from '../types';
import karthickImg from '../assets/images/karthick.jpg';
import project01Img from '../assets/images/Project 01.png';
import project02Img from '../assets/images/Project 02.png';
import project03Img from '../assets/images/Project 03.png';
import project04Img from '../assets/images/Project 04.png';
import project05Img from '../assets/images/Project 05.png';
import project06Img from '../assets/images/Project 06.png';
import project07Img from '../assets/images/Project 07.png';

export const PERSONAL_INFO = {
  name: 'Karthick G',
  title: 'Graphic Designer',
  subtitle: 'Graphic Designer • 6+ Years Experience',
  location: 'Chennai, Tamil Nadu',
  fullLocation: 'Chennai, Tamil Nadu, India',
  phone: '+91 8760626890',
  email: 'karthidesigner21@gmail.com',
  experienceYears: '6+',
  currentCompany: 'Sukan Traders',
  currentCompanyLocation: 'Gummidipoondi, Tiruvallur District, Chennai',
  tagline: 'Turning Ideas into Powerful Visual Experiences.',
  heroBadge: 'Available for Hire',
  heroHeading: 'Turning Ideas into Powerful Visual Experiences.',
  heroDescription: "Hi, I'm Karthick G, a Graphic Designer based in Chennai with over 6 years of experience in Graphic Design, Print Media, Branding, and Visual Communication. I create professional, creative, and impactful designs that help businesses grow and communicate their ideas effectively.",
  socials: {
    instagram: 'https://www.instagram.com/karthi_designer_21',
    whatsapp: 'https://wa.me/message/G75CQBXZRKUYJ1',
    linkedin: 'https://www.linkedin.com/in/karthick-g-155677353?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: 'https://github.com'
  },
  defaultAvatar: karthickImg,
  philosophy: '“Good design is more than making things look better. It’s about communicating clearly, creating impact, and turning ideas into visuals that work.”',
};

export const ABOUT_CONTENT = {
  title: 'From Curiosity to Creativity',
  paragraphs: [
    'I’m Karthick G, a Graphic Designer specializing in branding, print design, and visual communication. I create clean, impactful designs that help businesses build a strong and consistent visual identity.',
    'My experience spans branding, marketing creatives, posters, banners, business stationery, and print-ready artwork — combining creative thinking with precise production execution.',
    'I’m continuously exploring new design approaches and digital tools to create work that is not only visually strong, but also purposeful and production-ready.'
  ]
};

export const STRENGTHS = [
  'Creative Problem Solving',
  'Continuous Learning Mindset',
  'Fast Learner',
  'Print Production Knowledge',
  'Attention to Detail',
  'On-Time Delivery',
  'Affordable Design Solutions',
  'Strong Client Communication'
];

export const STATS = [
  { value: '6+', label: 'Years of Design Experience', description: '' },
  { value: '500+', label: 'Print & Digital Projects', description: '' },
  { value: '100%', label: 'Design-Focused Approach', description: '' },
  { value: '2021', label: 'Professional Design Career', description: '' }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: 'exp-2',
    period: '2020 – 2021',
    role: 'Graphic Designer',
    company: 'DSP Digital',
    location: 'Alangulam, Tenkasi District',
    description: 'Specialized in logo creation, wedding albums, flex banner printing, offset and digital print production.'
  },
  {
    id: 'exp-3',
    period: '2021 – 2023',
    role: 'Freelance Graphic Designer',
    company: 'Freelance',
    location: 'Surandai, Tenkasi District',
    description: 'Provided complete end-to-end design solutions and printing consultation for regional clients and businesses.'
  },
  {
    id: 'exp-1',
    period: '2023 – Present',
    role: 'Graphic Designer',
    company: 'Sukan Traders',
    location: 'Gummidipoondi, Tiruvallur District, Chennai',
    description: 'Leading end-to-end graphic designing, print media, branding identity, and print production.'
  }
];

export const SKILLS: SkillItem[] = [
  { id: 'photoshop', name: 'Adobe Photoshop', icon: '🎨', category: 'Software', level: 98, tagline: 'Photo Editing, Retouching & Compositing' },
  { id: 'coreldraw', name: 'CorelDRAW', icon: '📐', category: 'Software', level: 96, tagline: 'Vector Layouts, Flex Banners & Offset Printing' },
  { id: 'illustrator', name: 'Adobe Illustrator', icon: '✏️', category: 'Software', level: 95, tagline: 'Logo Design, Branding & Vector Art' },
  { id: 'canva', name: 'Canva', icon: '⚡', category: 'Software', level: 90, tagline: 'Quick Social Media Graphics & Marketing Assets' },
  { id: 'figma', name: 'Figma', icon: '📱', category: 'Software', level: 88, tagline: 'UI/UX Layouts, Prototypes & Design Systems' },
  { id: 'print-media', name: 'Print Media Design', icon: '🖨️', category: 'Core Discipline', level: 98, tagline: 'Flex Banners, Brochures, Visiting Cards & Offset/Digital Print' },
  { id: 'packaging', name: 'Packaging Design', icon: '📦', category: 'Core Discipline', level: 92, tagline: 'Box Design, Label Design & Print Production' },
  { id: 'uiux', name: 'UI/UX Design', icon: '💻', category: 'Core Discipline', level: 85, tagline: 'User Interface Layouts, FlowDesk & App Wireframing' }
];

export const EDUCATION = {
  degree: 'Bachelor of Engineering (B.E.)',
  major: 'Mechanical Engineering',
  institution: 'Thamirabharani Engineering College',
  location: 'Tirunelveli',
  period: '2017 – 2021',
  description: 'Graduated in Mechanical Engineering. Learned design software during free time and worked on part-time design projects throughout college before pursuing full-time Graphic Design.'
};

export const PROJECTS: Project[] = [
  {
    id: 'flex-banner-design',
    title: 'Flex Banner Design',
    category: 'Print Media',
    description: 'High-impact outdoor flex banners, shop signboards, and event backdrops.',
    emoji: '🖼️',
    year: '2023',
    client: 'Sukan Traders & Event Organizers',
    tools: ['Photoshop'],
    aspectRatio: 'aspect-[16/9]',
    image: project01Img,
    featured: true,
    details: {
      overview: 'Large-format flex banner designs crafted for outdoor displays, wedding celebrations, and retail promotions.',
      challenge: 'Maintaining razor-sharp image quality and vibrant CMYK color balance at massive outdoor scales.',
      solution: 'Used ultra-high DPI compositions and sharp vector lettering tailored specifically for large flex printing machines.',
      deliverables: ['Large-Format Print Files (TIFF / CDR)', 'Flex Banner Backdrops', 'Shop Entrance Displays']
    }
  },
  {
    id: 'photo-frame-design',
    title: 'Photo Frame Design',
    category: 'Print Media',
    description: 'Custom photo frame layouts, digital mixing, border retouching, and premium wall art framing.',
    emoji: '🖼️',
    year: '2024',
    client: 'Studio Clients & Retail Art Buyers',
    tools: ['Photoshop'],
    aspectRatio: 'aspect-[16/9]',
    image: project02Img,
    featured: true,
    details: {
      overview: 'Stunning photo frame compositions, digital background replacements, and artistic borders for weddings and family portraits.',
      challenge: 'Blending disparate lighting and skin tones into a harmonious framed portrait artwork.',
      solution: 'Applied advanced retouching, lighting color balance, and elegant ornamental frame borders.',
      deliverables: ['High-Res Print-Ready TIFF Files', 'Custom Frame Vector Masks', 'Digital Wall Art Mockups']
    }
  },
  {
    id: 'packaging-design',
    title: 'Packaging Design',
    category: 'Packaging',
    description: 'Product boxes, pouch designs, labels, and die-line print templates.',
    emoji: '📦',
    year: '2024',
    client: 'Sukan Traders FMCG & Goods',
    tools: ['Illustrator', 'Photoshop', 'CorelDRAW'],
    aspectRatio: 'aspect-[16/9]',
    image: project03Img,
    featured: true,
    details: {
      overview: 'Eye-catching product packaging and die-cut box layouts engineered for shelf stand-out.',
      challenge: 'Aligning die-line fold precision with vivid brand storytelling and ingredient compliance.',
      solution: 'Engineered precise CAD-based vector die-lines combined with rich product renders.',
      deliverables: ['3D Box Renderings', 'Die-Line Vector Files', 'Product Label Prints']
    }
  },
  {
    id: 'business-card-design',
    title: 'Business Card Design',
    category: 'Print Media',
    description: 'Premium visiting cards with spot UV, embossing, matte finish, and foil stamping.',
    emoji: '📇',
    year: '2024',
    client: 'Corporate Executives & Entrepreneurs',
    tools: ['Illustrator', 'CorelDRAW', 'Photoshop'],
    aspectRatio: 'aspect-[16/9]',
    image: project04Img,
    featured: false,
    details: {
      overview: 'Tactile and modern business card designs tailored for lasting first impressions.',
      challenge: 'Maximizing elegance and legibility within standard 3.5" x 2" print constraints.',
      solution: 'Applied clean typographic hierarchy, generous breathing room, and premium print finish specs.',
      deliverables: ['Double-Sided Print Files', 'Spot UV & Gold Foil Mask Layers', 'Digital Visiting Cards']
    }
  },
  {
    id: 'social-media-designs',
    title: 'Social Media Designs',
    category: 'Digital',
    description: 'Engaging Instagram posts, carousel series, festival greetings, and promotional banners.',
    emoji: '📱',
    year: '2024',
    client: 'Sukan Traders & Local Brands',
    tools: ['Photoshop', 'Canva'],
    aspectRatio: 'aspect-[16/9]',
    image: project05Img,
    featured: false,
    details: {
      overview: 'High-converting social media creatives designed to boost audience engagement and brand presence.',
      challenge: 'Creating scroll-stopping visuals that stand out in crowded social feeds.',
      solution: 'Leveraged high-contrast typography, energetic color palettes, and bold focal imagery.',
      deliverables: ['1080x1080px Feed Posts', '1080x1920px Story Layouts', 'Carousel Templates']
    }
  },
  {
    id: 'brochure-design',
    title: 'Brochure Design',
    category: 'Print Media',
    description: 'Bi-fold and tri-fold corporate brochures, product catalogs, and flyers.',
    emoji: '📄',
    year: '2023',
    client: 'Sukan Traders & Corporate Clients',
    tools: ['CorelDRAW'],
    aspectRatio: 'aspect-[16/9]',
    image: project06Img,
    featured: false,
    details: {
      overview: 'Informative bifold and trifold brochures presenting company services with structured visual clarity.',
      challenge: 'Organizing dense text and product specifications into an easy-to-read, attractive brochure.',
      solution: 'Utilized multi-column grid layouts, clear section dividers, and high-quality product imagery.',
      deliverables: ['Tri-fold Brochure Files', 'Product Catalog PDFs', 'High-Res Print Outputs']
    }
  },
  {
    id: 'invitation-design',
    title: 'Invitation Design',
    category: 'Print Media',
    description: 'Custom wedding invitations, reception cards, birthday event banners, and digital invite videos.',
    emoji: '💌',
    year: '2025',
    client: 'Private Families & Event Planners',
    tools: ['Photoshop'],
    aspectRatio: 'aspect-[16/9]',
    image: project07Img,
    featured: true,
    details: {
      overview: 'Bespoke wedding and event invitation cards featuring traditional motifs, gold foil typography, and ornamental flourishes.',
      challenge: 'Capturing the cultural and emotional essence of special celebrations through fine typography and ornamental borders.',
      solution: 'Crafted multi-page invitation sets with traditional mandala vector accents and elegant script lettering.',
      deliverables: ['Print-Ready CMYK Card Files', 'Digital WhatsApp Video Invites', 'Envelope & Seal Layouts']
    }
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    quote: "Karthick's designs for our brand identity and packaging were outstanding. His attention to print production details saved us time and brought our brand to life beautifully.",
    author: 'Management Team',
    role: 'Sukan Traders',
    company: 'Chennai',
    rating: 5
  },
  {
    id: 'testi-2',
    quote: "Working with Karthick on our wedding album and event banners was a wonderful experience. Highly creative, quick delivery, and top-quality printing knowledge.",
    author: 'DSP Digital Partner',
    role: 'Studio Director',
    company: 'Tenkasi',
    rating: 5
  },
  {
    id: 'testi-3',
    quote: "Karthick's engineering background gives him a unique structural precision in grid alignment and typography. Reliable, affordable, and extremely professional.",
    author: 'Freelance Client',
    role: 'Business Owner',
    company: 'Surandai',
    rating: 5
  }
];
