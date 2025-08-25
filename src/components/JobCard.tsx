import { Link } from 'react-router-dom'
import { MapPin, Clock, DollarSign, Briefcase } from 'lucide-react'
import { Job } from '../types'
import { formatSalary, formatRelativeDate } from '../utils'

interface JobCardProps {
  job: Job
  showActions?: boolean
}

const JobCard = ({ job, showActions = true }: JobCardProps) => {
  const getJobTypeColor = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'bg-green-100 text-green-800'
      case 'part-time':
        return 'bg-blue-100 text-blue-800'
      case 'contract':
        return 'bg-orange-100 text-orange-800'
      case 'internship':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getExperienceColor = (level: string) => {
    switch (level) {
      case 'entry':
        return 'bg-blue-100 text-blue-800'
      case 'mid':
        return 'bg-green-100 text-green-800'
      case 'senior':
        return 'bg-orange-100 text-orange-800'
      case 'lead':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="card hover:shadow-lg transition-all duration-200 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={job.companyLogo || `https://via.placeholder.com/48x48/6B7280/FFFFFF?text=${job.company.charAt(0)}`}
            alt={job.company}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
              {job.title}
            </h3>
            <p className="text-gray-600">{job.company}</p>
          </div>
        </div>
        
        {job.isRemote && (
          <span className="badge badge-success text-xs">Remote</span>
        )}
      </div>

      {/* Job Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{job.location}</span>
        </div>
        
        <div className="flex items-center text-gray-600 text-sm">
          <Clock className="w-4 h-4 mr-2" />
          <span className="capitalize">{job.type.replace('-', ' ')}</span>
        </div>
        
        <div className="flex items-center text-gray-600 text-sm">
          <DollarSign className="w-4 h-4 mr-2" />
          <span>{formatSalary(job.salary.min, job.salary.max, job.salary.currency)}</span>
        </div>
        
        <div className="flex items-center text-gray-600 text-sm">
          <Briefcase className="w-4 h-4 mr-2" />
          <span className="capitalize">{job.experienceLevel.replace('-', ' ')}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`badge ${getJobTypeColor(job.type)}`}>
          {job.type.replace('-', ' ')}
        </span>
        <span className={`badge ${getExperienceColor(job.experienceLevel)}`}>
          {job.experienceLevel.replace('-', ' ')}
        </span>
        {job.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="badge badge-secondary">
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {job.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="text-sm text-gray-500">
          Posted {formatRelativeDate(job.postedDate)}
        </div>
        
        {showActions && (
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
            <Link
              to={`/jobs/${job.id}`}
              className="btn-primary text-sm px-4 py-2"
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default JobCard