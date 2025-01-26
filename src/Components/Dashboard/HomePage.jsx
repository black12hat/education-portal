
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, User, Mail, Bell, Award, GraduationCap, Phone, Locate} from 'lucide-react';
import { LoginCard } from '../../App';
import { blogData } from '../Content/BlogPage';
// import { LoginCard } from '../Auth/LoginCard';
const HomePage = () => {
    return (
      <div className="homepage">
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-content">
              <div className="navbar-brand">
                <Book className="w-6 h-6" />
                <span>Excellence Academy</span>
              </div>
              <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </nav>
  
        <section id="home" className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Welcome to Excellence Academy</h1>
              <p>Nurturing minds, shaping futures</p>
            </div>
            
            <div className="login-announcements-container">
              <LoginCard />
  
              <div className="card blogs-card">
                <div className="card-header">
                  <h2>Latest Updates</h2>
                  <Bell className="w-6 h-6" />
                </div>
                <div className="card-body">
                  {blogData.map(blog => (
                    <div key={blog.id} className="blog-preview">
                      <div className="blog-preview-header">
                        <h3>{blog.title}</h3>
                        <span>{blog.date}</span>
                      </div>
                      <p>{blog.excerpt}</p>
                      <Link to={`/blog/${blog.id}`} className="read-more">
                        Read More →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section id="about" className="about-section">
          <div className="section-container">
            <h2>Why Choose Excellence Academy?</h2>
            <div className="features-grid">
              {[
                { icon: <GraduationCap className="w-8 h-8" />, title: "Quality Education", 
                  description: "Our comprehensive curriculum is designed to nurture both academic excellence and personal growth." },
                { icon: <User className="w-8 h-8" />, title: "Expert Faculty",
                  description: "Learn from highly qualified educators who are passionate about student success." },
                { icon: <Award className="w-8 h-8" />, title: "Modern Facilities",
                  description: "Access state-of-the-art learning facilities and resources for enhanced education." }
              ].map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        <section id="contact" className="contact-section">
          <div className="section-container">
            <h2>Get in Touch</h2>
            <div className="contact-grid">
              {[
                { icon: <Mail className="w-10 h-10" />, title: "Email Us", 
                  info: "info@excellenceacademy.edu" },
                  { icon: <Locate className="w-10 h-10" />, title: "Location", 
                    info: "India" }, 
                { icon: <Phone className="w-10 h-10" />, title: "Call Us",
                  info: "+1 (555) 123-4567" }
                
              ].map((contact, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">{contact.icon}</div>
                  <h3>{contact.title}</h3>
                  <p>{contact.info}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };
export default HomePage;