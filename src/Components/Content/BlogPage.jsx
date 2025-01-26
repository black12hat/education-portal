import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import "../../Styles/HomePage.css";
export const blogData = [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "2025-01-20",
      excerpt: "Join us for our annual sports day celebration next week! Get ready for an exciting day of sports and competition...",
      content: `Join us for our annual sports day celebration next week! Get ready for an exciting day of sports and competition.
  
      Event Details:
      - Date: January 20th, 2025
      - Time: 9:00 AM - 4:00 PM
      - Venue: School Main Ground
      
      Activities include:
      • Track and field events
      • Team sports competitions
      • Individual sports challenges
      • Special performances
      • Award ceremony
      
      All students, parents, and staff are welcome to participate in this exciting event. Don't forget to register for your preferred events by January 18th.`
    },
    {
      id: 2,
      title: "Parent-Teacher Meeting",
      date: "2025-01-25",
      excerpt: "Schedule for Term 1 parent-teacher meetings now available. Important updates regarding upcoming parent-teacher conferences...",
      content: `We are pleased to announce our Term 1 parent-teacher meetings. This is an important opportunity to discuss your child's academic progress and overall development.
  
      Meeting Schedule:
      - Grades 1-5: January 25th, 9:00 AM - 12:00 PM
      - Grades 6-8: January 25th, 1:00 PM - 4:00 PM
      - Grades 9-12: January 26th, 9:00 AM - 4:00 PM
  
      Please book your preferred time slot through the parent portal. Each session will be 15 minutes long.`
    }
  ];
  
export const BlogPage = () => {
    const { id } = useParams();
    const blog = blogData.find(blog => blog.id === parseInt(id));
  
    if (!blog) {
      return (
        <div className="blog-page">
          <div className="blog-container">
            <h2>Blog post not found</h2>
            <Link to="/" className="back-link">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      );
    }
  
    return (
      <div className="blog-page">
        <div className="blog-container">
          <Link to="/" className="back-link">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <article className="blog-content">
            <h1>{blog.title}</h1>
            <div className="blog-meta">
              <span>{blog.date}</span>
            </div>
            <div className="blog-body">
              {blog.content.split('\n').map((paragraph, index) => (
                paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </article>
        </div>
      </div>
    );
  };
