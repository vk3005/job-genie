import React, { useState } from 'react';
// import JobCard from './JobCard';
import "../styles/SearchPage.css"
import Navbar from '../components/shared/Navbar';

// Extended sample job data with more listings
const jobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$80K - $100K',
    description: 'We are looking for a skilled Software Engineer to join our dynamic team.',
    tags: ['Remote', 'Urgent'],
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Innovate Corp.',
    location: 'New York, NY',
    type: 'Part-time',
    salary: '$60K - $80K',
    description: 'Join our team to drive product vision and strategy.',
    tags: ['On-site', 'New'],
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'Data Analytics Inc.',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$90K - $120K',
    description: 'Analyze complex datasets and build predictive models to drive business decisions.',
    tags: ['Remote', 'Flexible Hours'],
  },
  {
    id: 4,
    title: 'UX Designer',
    company: 'Creative Minds',
    location: 'Austin, TX',
    type: 'Contract',
    salary: '$50K - $70K',
    description: 'Design intuitive and engaging user interfaces for our web and mobile applications.',
    tags: ['Remote', 'Urgent'],
  },
  {
    id: 5,
    title: 'Marketing Specialist',
    company: 'BrandBoost',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    salary: '$55K - $75K',
    description: 'Develop and implement marketing strategies to boost our brand presence.',
    tags: ['On-site', 'New'],
  },
  {
    id: 6,
    title: 'Customer Support Representative',
    company: 'HelpDesk Co.',
    location: 'Remote',
    type: 'Full-time',
    salary: '$40K - $50K',
    description: 'Provide top-notch support to our customers via chat, email, and phone.',
    tags: ['Remote', 'Flexible'],
  },
  {
    id: 7,
    title: 'DevOps Engineer',
    company: 'CloudTech Solutions',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$100K - $130K',
    description: 'Manage and optimize cloud infrastructure and CI/CD pipelines.',
    tags: ['Remote', 'Urgent', 'Flexible Hours'],
  },
  {
    id: 8,
    title: 'Sales Executive',
    company: 'SalesHub',
    location: 'Miami, FL',
    type: 'Commission-based',
    salary: '$50K - $150K',
    description: 'Drive sales growth and build relationships with key clients.',
    tags: ['On-site', 'High Commission'],
  },
  {
    id: 9,
    title: 'Graphic Designer',
    company: 'Designify',
    location: 'Portland, OR',
    type: 'Freelance',
    salary: '$30/hr - $50/hr',
    description: 'Create visually stunning graphics and marketing materials.',
    tags: ['Remote', 'Freelance'],
  },
  {
    id: 10,
    title: 'Cybersecurity Analyst',
    company: 'SecureNet',
    location: 'Washington, DC',
    type: 'Full-time',
    salary: '$110K - $140K',
    description: 'Protect our systems and data from cyber threats and vulnerabilities.',
    tags: ['On-site', 'Urgent'],
  },
];

// Main Search Page Component
const SearchPage = () => {
  const [profession, setProfession] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    alert(`Searching for ${profession} jobs in ${location}`);
    // Add additional search logic here if needed
  };
  return (
    <div className="search-page">
      <Navbar></Navbar>
      <section className="search-section">
        <h1>Find a <span className="highlight">Job</span> You Will Love.</h1>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Profession you are looking for"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Any particular location?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <button type="submit" className="search-btn">🔍</button>
        </form>
      </section>

      <section className="jobs-section">
        <h2>Available Jobs</h2>
        <div className="job-cards-container">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3 className="job-title">{job.title}</h3>
              <p className="job-company">{job.company}</p>
              <p className="job-location">{job.location}</p>
              <p className="job-description">{job.description}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
