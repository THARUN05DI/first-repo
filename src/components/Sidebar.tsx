import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Briefcase, MapPin, Clock, DollarSign, Filter } from 'lucide-react'
import { cn } from '../utils'

const Sidebar = () => {
  const location = useLocation()
  const [isExpanded, setIsExpanded] = useState(true)

  const jobTypes = [
    { value: 'full-time', label: 'Full Time', icon: Clock },
    { value: 'part-time', label: 'Part Time', icon: Clock },
    { value: 'contract', label: 'Contract', icon: Briefcase },
    { value: 'internship', label: 'Internship', icon: Briefcase }
  ]

  const experienceLevels = [
    { value: 'entry', label: 'Entry Level' },
    { value: 'mid', label: 'Mid Level' },
    { value: 'senior', label: 'Senior Level' },
    { value: 'lead', label: 'Lead/Manager' }
  ]

  const categories = [
    'Engineering',
    'Design',
    'Product',
    'Marketing',
    'Sales',
    'Finance',
    'HR',
    'Operations'
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <aside className={cn(
      "bg-white border-r border-gray-200 transition-all duration-300",
      isExpanded ? "w-64" : "w-16"
    )}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className={cn(
            "font-semibold text-gray-900 transition-opacity",
            isExpanded ? "opacity-100" : "opacity-0"
          )}>
            Filters
          </h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded hover:bg-gray-100 transition-colors"
          >
            <Filter className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Quick Actions */}
        <div className={cn(
          "mb-6 transition-opacity",
          isExpanded ? "opacity-100" : "opacity-0"
        )}>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <Link
              to="/post-job"
              className={cn(
                "flex items-center px-3 py-2 text-sm rounded-lg transition-colors",
                isActive('/post-job')
                  ? "bg-primary-50 text-primary-700 border border-primary-200"
                  : "text-gray-700 hover:bg-gray-50"
              )}
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Post a Job
            </Link>
            <Link
              to="/profile"
              className={cn(
                "flex items-center px-3 py-2 text-sm rounded-lg transition-colors",
                isActive('/profile')
                  ? "bg-primary-50 text-primary-700 border border-primary-200"
                  : "text-gray-700 hover:bg-gray-50"
              )}
            >
              <MapPin className="w-4 h-4 mr-2" />
              My Profile
            </Link>
          </div>
        </div>

        {/* Job Types */}
        <div className={cn(
          "mb-6 transition-opacity",
          isExpanded ? "opacity-100" : "opacity-0"
        )}>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Job Type</h3>
          <div className="space-y-2">
            {jobTypes.map((type) => {
              const Icon = type.icon
              return (
                <label key={type.value} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <Icon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">{type.label}</span>
                </label>
              )
            })}
          </div>
        </div>

        {/* Experience Level */}
        <div className={cn(
          "mb-6 transition-opacity",
          isExpanded ? "opacity-100" : "opacity-0"
        )}>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Experience Level</h3>
          <div className="space-y-2">
            {experienceLevels.map((level) => (
              <label key={level.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">{level.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className={cn(
          "mb-6 transition-opacity",
          isExpanded ? "opacity-100" : "opacity-0"
        )}>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Salary Range */}
        <div className={cn(
          "mb-6 transition-opacity",
          isExpanded ? "opacity-100" : "opacity-0"
        )}>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Salary Range</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Min Salary</label>
              <input
                type="number"
                placeholder="0"
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Max Salary</label>
              <input
                type="number"
                placeholder="200000"
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>

        {/* Remote Work */}
        <div className={cn(
          "transition-opacity",
          isExpanded ? "opacity-100" : "opacity-0"
        )}>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-700">Remote Work</span>
          </label>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar