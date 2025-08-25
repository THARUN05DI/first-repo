import { useState } from 'react'
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Edit2, Save, X } from 'lucide-react'
import { mockUsers } from '../data/mockData'
import { User as UserType, WorkExperience, Education } from '../types'
import { getInitials } from '../utils'

const ProfilePage = () => {
  const [user, setUser] = useState<UserType>(mockUsers[0])
  const [isEditing, setIsEditing] = useState(false)
  const [editMode, setEditMode] = useState<'profile' | 'experience' | 'education' | null>(null)
  const [editData, setEditData] = useState<any>({})

  const handleEdit = (mode: 'profile' | 'experience' | 'education', data?: any) => {
    setEditMode(mode)
    setEditData(data || {})
    setIsEditing(true)
  }

  const handleSave = () => {
    if (editMode === 'profile') {
      setUser(prev => ({ ...prev, ...editData }))
    } else if (editMode === 'experience') {
      if (editData.id) {
        // Update existing experience
        setUser(prev => ({
          ...prev,
          experience: prev.experience.map(exp => 
            exp.id === editData.id ? { ...exp, ...editData } : exp
          )
        }))
      } else {
        // Add new experience
        setUser(prev => ({
          ...prev,
          experience: [...prev.experience, { ...editData, id: Date.now().toString() }]
        }))
      }
    } else if (editMode === 'education') {
      if (editData.id) {
        // Update existing education
        setUser(prev => ({
          ...prev,
          education: prev.education.map(edu => 
            edu.id === editData.id ? { ...edu, ...editData } : edu
          )
        }))
      } else {
        // Add new education
        setUser(prev => ({
          ...prev,
          education: [...prev.education, { ...editData, id: Date.now().toString() }]
        }))
      }
    }
    
    setIsEditing(false)
    setEditMode(null)
    setEditData({})
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditMode(null)
    setEditData({})
  }

  const handleDelete = (type: 'experience' | 'education', id: string) => {
    if (type === 'experience') {
      setUser(prev => ({
        ...prev,
        experience: prev.experience.filter(exp => exp.id !== id)
      }))
    } else {
      setUser(prev => ({
        ...prev,
        education: prev.education.filter(edu => edu.id !== id)
      }))
    }
  }

  const addNew = (type: 'experience' | 'education') => {
    if (type === 'experience') {
      handleEdit('experience', {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      })
    } else {
      handleEdit('education', {
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        gpa: ''
      })
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <button
          onClick={() => handleEdit('profile', user)}
          className="btn-secondary"
        >
          <Edit2 className="w-4 h-4 mr-2" />
          Edit Profile
        </button>
      </div>

      {/* Profile Information */}
      <div className="card">
        <div className="flex items-start space-x-6">
          <div className="relative">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600">
                  {getInitials(user.firstName, user.lastName)}
                </span>
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {user.firstName} {user.lastName}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{user.email}</span>
              </div>
              
              {user.phone && (
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{user.phone}</span>
                </div>
              )}
              
              {user.location && (
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{user.location}</span>
                </div>
              )}
            </div>
            
            {user.bio && (
              <p className="text-gray-700 mt-4">{user.bio}</p>
            )}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Skills</h3>
          <button
            onClick={() => handleEdit('profile', user)}
            className="text-primary-600 hover:text-primary-700"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {user.skills.map((skill, index) => (
            <span key={index} className="badge badge-primary">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <Briefcase className="w-5 h-5 mr-2" />
            Work Experience
          </h3>
          <button
            onClick={() => addNew('experience')}
            className="btn-primary"
          >
            Add Experience
          </button>
        </div>
        
        <div className="space-y-6">
          {user.experience.map((exp) => (
            <div key={exp.id} className="border-l-4 border-primary-200 pl-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{exp.position}</h4>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </p>
                  <p className="text-gray-700 mt-2">{exp.description}</p>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => handleEdit('experience', exp)}
                    className="text-primary-600 hover:text-primary-700 p-1"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete('experience', exp.id)}
                    className="text-red-600 hover:text-red-700 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <GraduationCap className="w-5 h-5 mr-2" />
            Education
          </h3>
          <button
            onClick={() => addNew('education')}
            className="btn-primary"
          >
            Add Education
          </button>
        </div>
        
        <div className="space-y-6">
          {user.education.map((edu) => (
            <div key={edu.id} className="border-l-4 border-green-200 pl-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-500">{edu.field}</p>
                  <p className="text-sm text-gray-500">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>
                  )}
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => handleEdit('education', edu)}
                    className="text-primary-600 hover:text-primary-700 p-1"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete('education', edu.id)}
                    className="text-red-600 hover:text-red-700 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Edit {editMode === 'profile' ? 'Profile' : editMode === 'experience' ? 'Experience' : 'Education'}
              </h3>
              
              <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                {editMode === 'profile' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        value={editData.firstName || ''}
                        onChange={(e) => setEditData({ ...editData, firstName: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        value={editData.lastName || ''}
                        onChange={(e) => setEditData({ ...editData, lastName: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                      <textarea
                        value={editData.bio || ''}
                        onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                        rows={3}
                        className="input-field"
                      />
                    </div>
                  </div>
                )}
                
                {editMode === 'experience' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                      <input
                        type="text"
                        value={editData.position || ''}
                        onChange={(e) => setEditData({ ...editData, position: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input
                        type="text"
                        value={editData.company || ''}
                        onChange={(e) => setEditData({ ...editData, company: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                        <input
                          type="month"
                          value={editData.startDate || ''}
                          onChange={(e) => setEditData({ ...editData, startDate: e.target.value })}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                        <input
                          type="month"
                          value={editData.endDate || ''}
                          onChange={(e) => setEditData({ ...editData, endDate: e.target.value })}
                          className="input-field"
                          disabled={editData.current}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={editData.current || false}
                          onChange={(e) => setEditData({ ...editData, current: e.target.checked })}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm text-gray-700">Current Position</span>
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={editData.description || ''}
                        onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                        rows={3}
                        className="input-field"
                      />
                    </div>
                  </div>
                )}
                
                {editMode === 'education' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                      <input
                        type="text"
                        value={editData.degree || ''}
                        onChange={(e) => setEditData({ ...editData, degree: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                      <input
                        type="text"
                        value={editData.institution || ''}
                        onChange={(e) => setEditData({ ...editData, institution: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
                      <input
                        type="text"
                        value={editData.field || ''}
                        onChange={(e) => setEditData({ ...editData, field: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                        <input
                          type="month"
                          value={editData.startDate || ''}
                          onChange={(e) => setEditData({ ...editData, startDate: e.target.value })}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                        <input
                          type="month"
                          value={editData.endDate || ''}
                          onChange={(e) => setEditData({ ...editData, endDate: e.target.value })}
                          className="input-field"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">GPA (Optional)</label>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="4"
                        value={editData.gpa || ''}
                        onChange={(e) => setEditData({ ...editData, gpa: e.target.value })}
                        className="input-field"
                      />
                    </div>
                  </div>
                )}
                
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfilePage