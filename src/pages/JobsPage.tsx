import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Filter, MapPin, Briefcase } from 'lucide-react'
import { mockJobs } from '../data/mockData'
import { Job, SearchFilters } from '../types'
import { formatSalary, formatRelativeDate } from '../utils'
import JobCard from '../components/JobCard'

const JobsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [jobs, setJobs] = useState<Job[]>(mockJobs)
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs)
  const [filters, setFilters] = useState<SearchFilters>({
    query: searchParams.get('search') || '',
    location: '',
    type: [],
    experience: [],
    salary: { min: 0, max: 0 },
    remote: false,
    category: []
  })
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    applyFilters()
  }, [filters, jobs])

  const applyFilters = () => {
    let filtered = [...jobs]

    // Search query filter
    if (filters.query) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(filters.query.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.query.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.query.toLowerCase())
      )
    }

    // Location filter
    if (filters.location) {
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      )
    }

    // Job type filter
    if (filters.type.length > 0) {
      filtered = filtered.filter(job => filters.type.includes(job.type))
    }

    // Experience level filter
    if (filters.experience.length > 0) {
      filtered = filtered.filter(job => filters.experience.includes(job.experienceLevel))
    }

    // Salary filter
    if (filters.salary.min > 0 || filters.salary.max > 0) {
      filtered = filtered.filter(job => {
        if (filters.salary.min > 0 && job.salary.max < filters.salary.min) return false
        if (filters.salary.max > 0 && job.salary.min > filters.salary.max) return false
        return true
      })
    }

    // Remote filter
    if (filters.remote) {
      filtered = filtered.filter(job => job.isRemote)
    }

    // Category filter
    if (filters.category.length > 0) {
      filtered = filtered.filter(job => filters.category.includes(job.category))
    }

    setFilteredJobs(filtered)
  }

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      query: '',
      location: '',
      type: [],
      experience: [],
      salary: { min: 0, max: 0 },
      remote: false,
      category: []
    })
  }

  const jobTypes = ['full-time', 'part-time', 'contract', 'internship']
  const experienceLevels = ['entry', 'mid', 'senior', 'lead']
  const categories = ['Engineering', 'Design', 'Product', 'Marketing', 'Sales', 'Finance', 'HR', 'Operations']

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Find Jobs</h1>
          <p className="text-gray-600 mt-1">
            {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
          </p>
        </div>
        
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 btn-secondary"
        >
          <Filter className="w-4 h-4" />
          <span>Filters</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search jobs, companies, or keywords..."
            value={filters.query}
            onChange={(e) => handleFilterChange('query', e.target.value)}
            className="w-full pl-12 pr-4 py-3 input-field"
          />
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Location
                </label>
                <input
                  type="text"
                  placeholder="City, state, or remote"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="input-field"
                />
              </div>

              {/* Job Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Briefcase className="w-4 h-4 inline mr-1" />
                  Job Type
                </label>
                <div className="space-y-2">
                  {jobTypes.map((type) => (
                    <label key={type} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.type.includes(type)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleFilterChange('type', [...filters.type, type])
                          } else {
                            handleFilterChange('type', filters.type.filter(t => t !== type))
                          }
                        }}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700 capitalize">{type.replace('-', ' ')}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <div className="space-y-2">
                  {experienceLevels.map((level) => (
                    <label key={level} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.experience.includes(level)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleFilterChange('experience', [...filters.experience, level])
                          } else {
                            handleFilterChange('experience', filters.experience.filter(e => e !== level))
                          }
                        }}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700 capitalize">{level.replace('-', ' ')}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categories
                </label>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.category.includes(category)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            handleFilterChange('category', [...filters.category, category])
                          } else {
                            handleFilterChange('category', filters.category.filter(c => c !== category))
                          }
                        }}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Filter Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-6">
              <button
                onClick={clearFilters}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Clear all filters
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="btn-primary"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Job Listings */}
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search criteria or filters
          </p>
          <button
            onClick={clearFilters}
            className="btn-primary"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  )
}

export default JobsPage