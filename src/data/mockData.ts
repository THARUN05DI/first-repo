import { Job, Company, User } from '../types'

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    companyLogo: 'https://via.placeholder.com/60x60/3B82F6/FFFFFF?text=TC',
    location: 'San Francisco, CA',
    type: 'full-time',
    salary: { min: 120000, max: 180000, currency: 'USD' },
    description: 'We are looking for a Senior Frontend Developer to join our team and help build amazing user experiences.',
    requirements: [
      '5+ years of experience with React/TypeScript',
      'Strong understanding of modern CSS and responsive design',
      'Experience with state management (Redux, Zustand)',
      'Knowledge of testing frameworks (Jest, React Testing Library)'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work hours and remote options',
      'Professional development budget'
    ],
    postedDate: '2024-01-15',
    deadline: '2024-02-15',
    isRemote: true,
    experienceLevel: 'senior',
    category: 'Engineering',
    tags: ['React', 'TypeScript', 'Frontend', 'UI/UX'],
    applications: 45,
    status: 'active'
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'InnovateLab',
    companyLogo: 'https://via.placeholder.com/60x60/10B981/FFFFFF?text=IL',
    location: 'New York, NY',
    type: 'full-time',
    salary: { min: 100000, max: 150000, currency: 'USD' },
    description: 'Join our product team to drive innovation and deliver exceptional user experiences.',
    requirements: [
      '3+ years of product management experience',
      'Strong analytical and problem-solving skills',
      'Experience with agile methodologies',
      'Excellent communication and leadership skills'
    ],
    benefits: [
      'Competitive compensation package',
      '401(k) matching',
      'Unlimited PTO',
      'Stock options'
    ],
    postedDate: '2024-01-10',
    deadline: '2024-02-10',
    isRemote: false,
    experienceLevel: 'mid',
    category: 'Product',
    tags: ['Product Management', 'Agile', 'Analytics', 'Leadership'],
    applications: 32,
    status: 'active'
  },
  {
    id: '3',
    title: 'UX Designer',
    company: 'DesignStudio',
    companyLogo: 'https://via.placeholder.com/60x60/8B5CF6/FFFFFF?text=DS',
    location: 'Austin, TX',
    type: 'full-time',
    salary: { min: 80000, max: 120000, currency: 'USD' },
    description: 'Create beautiful and intuitive user experiences for our growing product suite.',
    requirements: [
      '2+ years of UX/UI design experience',
      'Proficiency in Figma and design tools',
      'Understanding of user research and testing',
      'Portfolio showcasing your work'
    ],
    benefits: [
      'Flexible work environment',
      'Health benefits',
      'Professional development',
      'Creative freedom'
    ],
    postedDate: '2024-01-12',
    deadline: '2024-02-12',
    isRemote: true,
    experienceLevel: 'mid',
    category: 'Design',
    tags: ['UX Design', 'UI Design', 'Figma', 'User Research'],
    applications: 28,
    status: 'active'
  },
  {
    id: '4',
    title: 'Backend Engineer',
    company: 'DataFlow',
    companyLogo: 'https://via.placeholder.com/60x60/F59E0B/FFFFFF?text=DF',
    location: 'Seattle, WA',
    type: 'full-time',
    salary: { min: 110000, max: 160000, currency: 'USD' },
    description: 'Build scalable backend services and APIs that power our data platform.',
    requirements: [
      '4+ years of backend development experience',
      'Strong knowledge of Python/Node.js',
      'Experience with databases (PostgreSQL, Redis)',
      'Understanding of microservices architecture'
    ],
    benefits: [
      'Competitive salary',
      'Health and wellness benefits',
      'Remote work options',
      'Learning and development'
    ],
    postedDate: '2024-01-08',
    deadline: '2024-02-08',
    isRemote: true,
    experienceLevel: 'senior',
    category: 'Engineering',
    tags: ['Backend', 'Python', 'Node.js', 'Microservices'],
    applications: 38,
    status: 'active'
  },
  {
    id: '5',
    title: 'Marketing Specialist',
    company: 'GrowthHub',
    companyLogo: 'https://via.placeholder.com/60x60/EF4444/FFFFFF?text=GH',
    location: 'Chicago, IL',
    type: 'full-time',
    salary: { min: 60000, max: 90000, currency: 'USD' },
    description: 'Drive growth through creative marketing campaigns and digital strategies.',
    requirements: [
      '2+ years of digital marketing experience',
      'Experience with social media platforms',
      'Knowledge of Google Analytics and SEO',
      'Creative thinking and copywriting skills'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Flexible work schedule',
      'Performance bonuses'
    ],
    postedDate: '2024-01-14',
    deadline: '2024-02-14',
    isRemote: false,
    experienceLevel: 'entry',
    category: 'Marketing',
    tags: ['Digital Marketing', 'Social Media', 'SEO', 'Analytics'],
    applications: 52,
    status: 'active'
  }
]

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'TechCorp',
    logo: 'https://via.placeholder.com/100x100/3B82F6/FFFFFF?text=TC',
    description: 'Leading technology company focused on innovative solutions for modern businesses.',
    website: 'https://techcorp.com',
    location: 'San Francisco, CA',
    size: 'large',
    industry: 'Technology',
    founded: 2010,
    jobs: ['1'],
    employees: 500
  },
  {
    id: '2',
    name: 'InnovateLab',
    logo: 'https://via.placeholder.com/100x100/10B981/FFFFFF?text=IL',
    description: 'Startup incubator and innovation hub for cutting-edge technologies.',
    website: 'https://innovatelab.com',
    location: 'New York, NY',
    size: 'startup',
    industry: 'Technology',
    founded: 2020,
    jobs: ['2'],
    employees: 25
  },
  {
    id: '3',
    name: 'DesignStudio',
    logo: 'https://via.placeholder.com/100x100/8B5CF6/FFFFFF?text=DS',
    description: 'Creative design agency specializing in user experience and brand identity.',
    website: 'https://designstudio.com',
    location: 'Austin, TX',
    size: 'medium',
    industry: 'Design',
    founded: 2015,
    jobs: ['3'],
    employees: 75
  }
]

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'https://via.placeholder.com/100x100/6B7280/FFFFFF?text=JD',
    phone: '+1-555-0123',
    location: 'San Francisco, CA',
    bio: 'Passionate frontend developer with 5+ years of experience building modern web applications.',
    skills: ['React', 'TypeScript', 'Node.js', 'CSS', 'Git'],
    experience: [
      {
        id: '1',
        company: 'Previous Tech',
        position: 'Frontend Developer',
        startDate: '2020-01',
        endDate: '2023-12',
        current: false,
        description: 'Built responsive web applications using React and modern JavaScript.'
      }
    ],
    education: [
      {
        id: '1',
        institution: 'Tech University',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        startDate: '2016-09',
        endDate: '2020-05',
        gpa: 3.8
      }
    ],
    appliedJobs: ['1', '3'],
    savedJobs: ['2', '4'],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-15'
  }
]