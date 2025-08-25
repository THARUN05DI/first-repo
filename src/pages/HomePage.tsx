import { Link } from 'react-router-dom'
import { Search, Briefcase, Users, TrendingUp, ArrowRight } from 'lucide-react'
import { mockJobs } from '../data/mockData'
import { formatSalary, formatRelativeDate } from '../utils'
import JobCard from '../components/JobCard'

const HomePage = () => {
  const featuredJobs = mockJobs.slice(0, 3)

  const stats = [
    { label: 'Active Jobs', value: '2,847', icon: Briefcase, color: 'text-blue-600' },
    { label: 'Companies', value: '156', icon: Users, color: 'text-green-600' },
    { label: 'Job Seekers', value: '12,543', icon: TrendingUp, color: 'text-purple-600' }
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Dream Job
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Discover thousands of job opportunities and connect with top companies worldwide
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="w-full pl-12 pr-4 py-4 text-lg rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-700 hover:bg-primary-800 text-white px-6 py-2 rounded-md transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="card text-center">
              <div className={`inline-flex p-3 rounded-full bg-gray-100 mb-4 ${stat.color}`}>
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          )
        })}
      </section>

      {/* Featured Jobs */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Jobs</h2>
          <Link
            to="/jobs"
            className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            View all jobs
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Post a Job?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Reach thousands of qualified candidates and find the perfect fit for your team
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/post-job" className="btn-primary text-lg px-8 py-3">
            Post a Job
          </Link>
          <Link to="/jobs" className="btn-secondary text-lg px-8 py-3">
            Browse Jobs
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Engineering', 'Design', 'Marketing', 'Sales', 'Product', 'Finance', 'HR', 'Operations'].map((category) => (
            <Link
              key={category}
              to={`/jobs?category=${category}`}
              className="card text-center hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 transition-colors">
                <Briefcase className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-medium text-gray-900">{category}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage