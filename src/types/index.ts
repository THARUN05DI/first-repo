export interface Job {
  id: string
  title: string
  company: string
  companyLogo?: string
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'internship'
  salary: {
    min: number
    max: number
    currency: string
  }
  description: string
  requirements: string[]
  benefits: string[]
  postedDate: string
  deadline?: string
  isRemote: boolean
  experienceLevel: 'entry' | 'mid' | 'senior' | 'lead'
  category: string
  tags: string[]
  applications: number
  status: 'active' | 'closed' | 'draft'
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  phone?: string
  location?: string
  bio?: string
  skills: string[]
  experience: WorkExperience[]
  education: Education[]
  resume?: string
  appliedJobs: string[]
  savedJobs: string[]
  createdAt: string
  updatedAt: string
}

export interface Company {
  id: string
  name: string
  logo?: string
  description: string
  website?: string
  location: string
  size: 'startup' | 'small' | 'medium' | 'large' | 'enterprise'
  industry: string
  founded?: number
  jobs: string[]
  employees: number
}

export interface WorkExperience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  current: boolean
  description: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  gpa?: number
}

export interface JobApplication {
  id: string
  jobId: string
  userId: string
  status: 'pending' | 'reviewing' | 'shortlisted' | 'rejected' | 'accepted'
  appliedDate: string
  coverLetter?: string
  resume: string
  notes?: string
}

export interface SearchFilters {
  query: string
  location: string
  type: string[]
  experience: string[]
  salary: {
    min: number
    max: number
  }
  remote: boolean
  category: string[]
}