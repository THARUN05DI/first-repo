import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapPin, Clock, DollarSign, Briefcase, Building, Calendar, Users, Globe } from 'lucide-react'
import { mockJobs, mockCompanies } from '../data/mockData'
import { Job, Company } from '../types'
import { formatSalary, formatDate, formatRelativeDate } from '../utils'

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const [job, setJob] = useState<Job | null>(null)
  const [company, setCompany] = useState<Company | null>(null)
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [isApplying, setIsApplying] = useState(false)

  useEffect(() => {
    if (id) {
      const foundJob = mockJobs.find(j => j.id === id)
      if (foundJob) {
        setJob(foundJob)
        const foundCompany = mockCompanies.find(c => c.name === foundJob.company)
        setCompany(foundCompany || null)
      }
    }
  }, [id])

  if (!job) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Job not found</h2>
        <Link to="/jobs" className="btn-primary">
          Back to Jobs
        </Link>
      </div>
    )
  }

  const handleApply = () => {
    setIsApplying(true)
    // Simulate application submission
    setTimeout(() => {
      setIsApplying(false)
      alert('Application submitted successfully!')
    }, 2000)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Button */}
      <Link
        to="/jobs"
        className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
      >
        ← Back to Jobs
      </Link>

      {/* Job Header */}
      <div className="card">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start space-x-4">
            <img
              src={job.companyLogo || `https://via.placeholder.com/80x80/6B7280/FFFFFF?text=${job.company.charAt(0)}`}
              alt={job.company}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
              <p className="text-xl text-gray-600 mb-1">{job.company}</p>
              <div className="flex items-center space-x-4 text-gray-500">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {job.location}
                </span>
                {job.isRemote && (
                  <span className="flex items-center">
                    <Globe className="w-4 h-4 mr-1" />
                    Remote
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-primary-600 mb-2">
              {formatSalary(job.salary.min, job.salary.max, job.salary.currency)}
            </div>
            <div className="text-sm text-gray-500">
              Posted {formatRelativeDate(job.postedDate)}
            </div>
          </div>
        </div>

        {/* Job Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className={`badge ${job.type === 'full-time' ? 'badge-success' : 'badge-primary'}`}>
            {job.type.replace('-', ' ')}
          </span>
          <span className="badge badge-secondary">
            {job.experienceLevel.replace('-', ' ')}
          </span>
          <span className="badge badge-secondary">
            {job.category}
          </span>
          {job.tags.map((tag) => (
            <span key={tag} className="badge badge-secondary">
              {tag}
            </span>
          ))}
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-gray-200">
          <div className="text-center">
            <Clock className="w-6 h-6 text-gray-400 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900 capitalize">{job.type.replace('-', ' ')}</div>
            <div className="text-xs text-gray-500">Job Type</div>
          </div>
          <div className="text-center">
            <Briefcase className="w-6 h-6 text-gray-400 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900 capitalize">{job.experienceLevel.replace('-', ' ')}</div>
            <div className="text-xs text-gray-500">Experience</div>
          </div>
          <div className="text-center">
            <Users className="w-6 h-6 text-gray-400 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900">{job.applications}</div>
            <div className="text-xs text-gray-500">Applications</div>
          </div>
          <div className="text-center">
            <Calendar className="w-6 h-6 text-gray-400 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900">{formatDate(job.postedDate)}</div>
            <div className="text-xs text-gray-500">Posted</div>
          </div>
        </div>
      </div>

      {/* Job Description */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Job Description</h2>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            {showFullDescription ? job.description : job.description.slice(0, 300) + '...'}
          </p>
          {job.description.length > 300 && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              {showFullDescription ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>
      </div>

      {/* Requirements */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Requirements</h2>
        <ul className="space-y-2">
          {job.requirements.map((requirement, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">{requirement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Benefits</h2>
        <ul className="space-y-2">
          {job.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Company Information */}
      {company && (
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About {company.name}</h2>
          <div className="flex items-start space-x-4">
            <img
              src={company.logo || `https://via.placeholder.com/100x100/6B7280/FFFFFF?text=${company.name.charAt(0)}`}
              alt={company.name}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1">
              <p className="text-gray-700 mb-4">{company.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Industry:</span>
                  <span className="text-gray-700 ml-2">{company.industry}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Company Size:</span>
                  <span className="text-gray-700 ml-2 capitalize">{company.size}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Location:</span>
                  <span className="text-gray-700 ml-2">{company.location}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Employees:</span>
                  <span className="text-gray-700 ml-2">{company.employees}+</span>
                </div>
              </div>
              {company.website && (
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 mt-4"
                >
                  <Building className="w-4 h-4 mr-1" />
                  Visit Company Website
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Application Section */}
      <div className="card bg-primary-50 border-primary-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Apply?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This is your opportunity to join an amazing team. Submit your application and take the first step towards your new career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleApply}
              disabled={isApplying}
              className="btn-primary text-lg px-8 py-3 disabled:opacity-50"
            >
              {isApplying ? 'Submitting...' : 'Apply Now'}
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              Save Job
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetailPage