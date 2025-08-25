# JobPortal - Modern Job Portal Application

A comprehensive, modern job portal application built with React, TypeScript, and Tailwind CSS. This application provides a complete solution for job seekers and employers to connect and find opportunities.

## 🚀 Features

### For Job Seekers
- **Browse Jobs**: Search and filter through thousands of job opportunities
- **Advanced Search**: Filter by location, job type, experience level, salary, and more
- **Job Details**: Comprehensive job information with requirements and benefits
- **Profile Management**: Create and manage professional profiles
- **Application Tracking**: Track job applications and saved jobs
- **Responsive Design**: Mobile-first design for all devices

### For Employers
- **Post Jobs**: Easy-to-use form to post new job opportunities
- **Company Profiles**: Showcase company information and culture
- **Applicant Management**: Track and manage job applications
- **Branding**: Customize job postings with company logos and details

### Technical Features
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **React Router**: Client-side routing for smooth navigation
- **Component Architecture**: Reusable, maintainable components
- **Mock Data**: Sample data for immediate testing and demonstration

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm/yarn
- **Development**: ESLint + Prettier

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Sidebar.tsx     # Filter sidebar
│   ├── JobCard.tsx     # Job listing card
│   └── Layout.tsx      # Main layout wrapper
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── JobsPage.tsx    # Job listings
│   ├── JobDetailPage.tsx # Individual job view
│   ├── PostJobPage.tsx # Job posting form
│   ├── ProfilePage.tsx # User profile
│   ├── LoginPage.tsx   # Authentication
│   └── RegisterPage.tsx # User registration
├── types/              # TypeScript interfaces
│   └── index.ts        # Type definitions
├── data/               # Mock data
│   └── mockData.ts     # Sample jobs, companies, users
├── utils/              # Utility functions
│   └── index.ts        # Helper functions
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd job-portal-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory.

## 📱 Available Routes

- `/` - Home page with featured jobs and statistics
- `/jobs` - Job listings with search and filters
- `/jobs/:id` - Individual job details
- `/post-job` - Job posting form for employers
- `/profile` - User profile management
- `/login` - User authentication
- `/register` - User registration

## 🎨 Customization

### Colors
The application uses a custom color palette defined in `tailwind.config.js`. You can modify the primary and secondary colors to match your brand:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... more shades
  },
  secondary: {
    // ... secondary color palette
  }
}
```

### Components
All components are built with Tailwind CSS classes and can be easily customized by modifying the className props or extending the CSS utilities.

### Mock Data
Sample data is located in `src/data/mockData.ts`. You can modify this file to add your own jobs, companies, and user data for testing.

## 🔧 Development

### Code Style
The project uses ESLint and Prettier for code formatting. Run the linter with:

```bash
npm run lint
npm run lint:fix
```

### Adding New Features
1. Create new components in the `src/components/` directory
2. Add new pages in the `src/pages/` directory
3. Update routing in `src/App.tsx`
4. Add new types in `src/types/index.ts`
5. Update mock data as needed

### Styling Guidelines
- Use Tailwind CSS utility classes for styling
- Follow the existing component patterns
- Use the predefined color palette
- Ensure responsive design for all components

## 📊 Mock Data Structure

The application includes sample data for:

- **Jobs**: 5 sample job postings with full details
- **Companies**: 3 sample companies with logos and descriptions
- **Users**: 1 sample user profile with experience and education

## 🚀 Deployment

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure build settings if needed

### Other Platforms
The application can be deployed to any static hosting platform by building the project and serving the static files.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Provide steps to reproduce the problem
4. Include your environment details (OS, Node.js version, etc.)

## 🔮 Future Enhancements

- **Real-time Notifications**: Email and push notifications for job updates
- **Advanced Analytics**: Job application tracking and insights
- **AI-powered Matching**: Smart job recommendations
- **Video Interviews**: Integrated video calling for remote interviews
- **Mobile App**: Native mobile applications
- **Multi-language Support**: Internationalization for global users
- **Payment Integration**: Premium job posting features
- **Social Features**: Professional networking and referrals

---

Built with ❤️ using React, TypeScript, and Tailwind CSS