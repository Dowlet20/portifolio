export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  category: 'web' | 'mobile' | 'fullstack' | 'frontend' | 'backend';
  status: 'completed' | 'in-progress' | 'archived';
  demoUrl?: string;
  githubUrl?: string;
  screenshots: {
    id: string;
    url: string;
    alt: string;
    caption: string;
  }[];
  createdDate: string;
  duration: string;
}

export const projects: Project[] = [
  {
    id: 'marketplace',
    title: 'Döwrebap marketplace',
    description: 'Bu platforma flutter, nextjs we go backend tehnologiýalary ulanmak bilen döredilen.',
    longDescription: 'Marketplace ulgamy üç platformadan ybarat Klientler üçin: Müşderiler dürli marketlerden haryt saýlap, satyn alyp biler. Market Eýeleri üçin: Market eýeleri haryt girizip, zakazlary dolandyryp biler. Superadmin üçin: Administrator täze marketler döredip, ulgamy doly dolandyrýar. Ulgam ähli taraplar üçin ýeňil we netijeli çözgüt hödürleýär.',
    technologies: ['Next.js', 'TypeScript', 'Flutter', 'MySQL', 'Go backend'],
    features: [
      'User authentication and authorization',
      'Product catalog with advanced filtering',
      'Shopping cart and checkout process',
      'Payment processing with Stripe',
      'Order management system',
      'Admin dashboard with analytics',
      'Real-time inventory tracking',
      'Responsive design for all devices'
    ],
    category: 'fullstack',
    status: 'completed',
    demoUrl: 'http://216.250.10.105:4001',
    githubUrl: 'https://github.com/Dowlet20/ecommerce',
    screenshots: [
      {
        id: '1',
        url: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Homepage with featured products',
        caption: 'Clean and modern homepage showcasing featured products with smooth animations'
      },
      {
        id: '2',
        url: 'https://images.pexels.com/photos/1029744/pexels-photo-1029744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Product detail page',
        caption: 'Detailed product view with image gallery and specifications'
      },
      {
        id: '3',
        url: 'https://images.pexels.com/photos/1029743/pexels-photo-1029743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Shopping cart interface',
        caption: 'Intuitive shopping cart with real-time updates and smooth transitions'
      },
      {
        id: '4',
        url: 'https://images.pexels.com/photos/1029749/pexels-photo-1029749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Admin dashboard',
        caption: 'Comprehensive admin dashboard with analytics and inventory management'
      }
    ],
    createdDate: '2025-06-20',
    duration: '2 aý'
  },
  {
    id: 'emugallym',
    title: 'Collaborative Task Manager',
    description: 'Real-time task management application with team collaboration features, drag-and-drop functionality, and advanced project tracking.',
    longDescription: 'A sophisticated task management application designed for teams and individuals. Built with React and Firebase, it features real-time collaboration, drag-and-drop task organization, project timelines, and comprehensive reporting. The app includes advanced features like task dependencies, time tracking, and automated notifications.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'React DnD', 'Chart.js'],
    features: [
      'Real-time collaboration with team members',
      'Drag-and-drop task organization',
      'Project timelines and milestones',
      'Task dependencies and relationships',
      'Time tracking and reporting',
      'Automated notifications and reminders',
      'File attachments and comments',
      'Advanced filtering and search'
    ],
    category: 'frontend',
    status: 'completed',
    demoUrl: 'https://taskmanager.example.com',
    githubUrl: 'https://github.com/username/task-manager',
    screenshots: [
      {
        id: '1',
        url: 'https://images.pexels.com/photos/1516644/pexels-photo-1516644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Task board with drag-and-drop',
        caption: 'Kanban-style task board with smooth drag-and-drop functionality'
      },
      {
        id: '2',
        url: 'https://images.pexels.com/photos/1516647/pexels-photo-1516647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Project timeline view',
        caption: 'Interactive project timeline with milestone tracking'
      },
      {
        id: '3',
        url: 'https://images.pexels.com/photos/1516649/pexels-photo-1516649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Team collaboration interface',
        caption: 'Real-time team collaboration with comments and file sharing'
      }
    ],
    createdDate: '2023-11-20',
    duration: '2 months'
  },
  {
    id: 'weather-dashboard',
    title: 'Advanced Weather Dashboard',
    description: 'Comprehensive weather application with interactive maps, detailed forecasts, and beautiful data visualizations.',
    longDescription: 'A feature-rich weather dashboard that provides detailed weather information with interactive maps, hourly and daily forecasts, and beautiful data visualizations. The application uses multiple weather APIs to provide accurate and comprehensive weather data with a focus on user experience and visual appeal.',
    technologies: ['Vue.js', 'TypeScript', 'D3.js', 'OpenWeather API', 'Mapbox', 'Vuetify'],
    features: [
      'Interactive weather maps',
      'Detailed hourly and daily forecasts',
      'Weather data visualizations',
      'Location-based weather alerts',
      'Historical weather data',
      'Favorite locations management',
      'Responsive design with dark mode',
      'Offline caching capabilities'
    ],
    category: 'frontend',
    status: 'completed',
    demoUrl: 'https://weather.example.com',
    githubUrl: 'https://github.com/username/weather-dashboard',
    screenshots: [
      {
        id: '1',
        url: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Main dashboard view',
        caption: 'Clean dashboard interface with current weather and key metrics'
      },
      {
        id: '2',
        url: 'https://images.pexels.com/photos/1118874/pexels-photo-1118874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Interactive weather map',
        caption: 'Interactive map showing weather patterns and forecasts'
      },
      {
        id: '3',
        url: 'https://images.pexels.com/photos/1118875/pexels-photo-1118875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Detailed forecast view',
        caption: 'Comprehensive forecast with charts and detailed information'
      }
    ],
    createdDate: '2023-09-10',
    duration: '6 weeks'
  },
  {
    id: 'social-media-app',
    title: 'Social Media Platform',
    description: 'Modern social media application with real-time messaging, media sharing, and advanced social features.',
    longDescription: 'A comprehensive social media platform built with React Native for mobile and React for web. Features include real-time messaging, photo and video sharing, stories, social feeds, and advanced privacy controls. The application emphasizes user experience with smooth animations and intuitive navigation.',
    technologies: ['React', 'React Native', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3', 'JWT'],
    features: [
      'Real-time messaging and chat',
      'Photo and video sharing',
      'Stories and timeline feeds',
      'User profiles and connections',
      'Advanced privacy controls',
      'Push notifications',
      'Cross-platform compatibility',
      'Content moderation tools'
    ],
    category: 'fullstack',
    status: 'in-progress',
    githubUrl: 'https://github.com/username/social-media-app',
    screenshots: [
      {
        id: '1',
        url: 'https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Social feed interface',
        caption: 'Modern social feed with engaging content and smooth scrolling'
      },
      {
        id: '2',
        url: 'https://images.pexels.com/photos/1542253/pexels-photo-1542253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Messaging interface',
        caption: 'Real-time messaging with media sharing capabilities'
      },
      {
        id: '3',
        url: 'https://images.pexels.com/photos/1542254/pexels-photo-1542254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'User profile page',
        caption: 'Comprehensive user profile with activity timeline'
      }
    ],
    createdDate: '2024-02-01',
    duration: '4 months (ongoing)'
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(project => project.category === category);
}

export function getProjectsByStatus(status: Project['status']): Project[] {
  return projects.filter(project => project.status === status);
}