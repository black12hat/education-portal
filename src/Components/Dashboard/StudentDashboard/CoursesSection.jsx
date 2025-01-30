import React, { useState } from 'react';
import { Book, Calendar, Users, Clock, ArrowLeft } from 'lucide-react';
import './CourseSection.css';
import { courseData } from './studentdata';

const CourseDetails = ({ course, onBack }) => {
  const data = course;
  
  return (
    <div className="course-details">
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={20} />
        Back to Courses
      </button>

      <div className="detail-card">
        <h2 className="course-title">{data.title}</h2>
        <p className="course-description">{data.description}</p>

        <div className="info-grid">
          <div className="info-box">
            <Users size={20} color="#3b82f6" />
            <div className="info-content">
              <h4>Instructor</h4>
              <p>{data.instructor}</p>
            </div>
          </div>
          <div className="info-box">
            <Calendar size={20} color="#3b82f6" />
            <div className="info-content">
              <h4>Schedule</h4>
              <p>{data.schedule}</p>
            </div>
          </div>
          <div className="info-box">
            <Users size={20} color="#3b82f6" />
            <div className="info-content">
              <h4>Students</h4>
              <p>{data.students}</p>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h3 className="section-title">Course Topics</h3>
          <ul className="topics-list">
            {data.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>

        <div className="content-section">
          <h3 className="section-title">Assignments</h3>
          <div className="assignments-grid">
            {data.assignments.map((assignment) => (
              <div key={assignment.id} className="assignment-card">
                <h4>{assignment.title}</h4>
                <p>Due: {assignment.dueDate}</p>
                <span className={`status-badge ${assignment.status.toLowerCase().replace(' ', '-')}`}>
                  {assignment.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <h3 className="section-title">Course Resources</h3>
          <div className="resources-grid">
            {data.resources.map((resource) => (
              <div key={resource.id} className="resource-card">
                <div className="resource-info">
                  <Book size={20} color="#3b82f6" />
                  <div>
                    <h4>{resource.title}</h4>
                    <p>{resource.type}</p>
                  </div>
                </div>
                <button className="download-button">Download</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  if (selectedCourse) {
    return (
      <CourseDetails
        course={selectedCourse}
        onBack={() => setSelectedCourse(null)}
      />
    );
  }

  return (
    <div className="courses-container">
      <h2 className="page-title">My Courses</h2>
      <div className="courses-grid">
        {Object.entries(courseData).map(([key, course]) => (
          <div key={key} className="course-card">
            <h3 className="course-title">{key}</h3>
            <p className="course-description">{course.description}</p>
            <div className="course-meta">
              <div className="course-stats">
                <span className="stat-item">
                  <Users size={16} />
                  {course.students}
                </span>
                <span className="stat-item">
                  <Clock size={16} />
                  {course.duration}
                </span>
              </div>
              <button 
                className="view-button"
                onClick={() => setSelectedCourse({ ...course, title: key })}
              >
                View Course
                <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;