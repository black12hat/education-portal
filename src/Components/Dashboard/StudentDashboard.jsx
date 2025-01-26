import React, { useState } from 'react';
import { Book, GraduationCap, User, FileText, ClipboardList, Bell, LogOut } from 'lucide-react';
import "./StuDash.css"
const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('courses');

  // Mock data - replace with actual API calls
  const studentInfo = {
    name: "John Doe",
    grade: "10th Grade",
    rollNo: "2024001",
    email: "john.doe@student.ecssxcellenceacademy.edu"
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'courses':
        return <CoursesSection />;
      case 'marks':
        return <MarksSection />;
      case 'assignments':
        return <AssignmentsSection />;
      case 'notes':
        return <NotesSection />;
      case 'info':
        return <StudentInfoSection studentInfo={studentInfo} />;
      default:
        return <CoursesSection />;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Vertical Navbar */}
      <nav className="dashboard-nav">
        <div className="nav-header">
          <div className="nav-brand">
            <Book />
            <span>Student Portal</span>
          </div>
        </div>
        
        <div className="nav-links">
          <NavItem
            icon={<GraduationCap />}
            label="Courses"
            active={activeTab === 'courses'}
            onClick={() => setActiveTab('courses')}
          />
          <NavItem
            icon={<ClipboardList />}
            label="Marks"
            active={activeTab === 'marks'}
            onClick={() => setActiveTab('marks')}
          />
          <NavItem
            icon={<Bell />}
            label="Assignments"
            active={activeTab === 'assignments'}
            onClick={() => setActiveTab('assignments')}
          />
          <NavItem
            icon={<FileText />}
            label="Notes"
            active={activeTab === 'notes'}
            onClick={() => setActiveTab('notes')}
          />
          <NavItem
            icon={<User />}
            label="Student Info"
            active={activeTab === 'info'}
            onClick={() => setActiveTab('info')}
          />
        </div>
        
        <div className="nav-footer">
          <button className="logout-button">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        {renderContent()}
      </main>
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ icon, label, active, onClick }) => (
  <button
    className={`nav-item ${active ? 'active' : ''}`}
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </button>
);

// Section Components
const CoursesSection = () => (
  <div className="dashboard-section">
    <h2>My Courses</h2>
    <div className="courses-grid">
      {['Mathematics', 'Physics', 'Chemistry', 'English'].map((course) => (
        <div key={course} className="course-card">
          <h3>{course}</h3>
          <p>View course materials, assignments, and progress.</p>
          <button className="view-course-btn">
            View Course →
          </button>
        </div>
      ))}
    </div>
  </div>
);

const MarksSection = () => (
  <div className="dashboard-section">
    <h2>Academic Performance</h2>
    <div className="marks-card">
      <table className="marks-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Test 1</th>
            <th>Test 2</th>
            <th>Final</th>
          </tr>
        </thead>
        <tbody>
          {['Mathematics', 'Physics', 'Chemistry', 'English'].map((subject) => (
            <tr key={subject}>
              <td>{subject}</td>
              <td>85%</td>
              <td>88%</td>
              <td>90%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const AssignmentsSection = () => (
  <div className="dashboard-section">
    <h2>Assignments</h2>
    <div className="assignments-list">
      {['Mathematics Assignment 3', 'Physics Lab Report', 'English Essay'].map((assignment) => (
        <div key={assignment} className="assignment-card">
          <div className="assignment-info">
            <h3>{assignment}</h3>
            <p>Due: January 25, 2025</p>
          </div>
          <button className="submit-btn">
            Submit
          </button>
        </div>
      ))}
    </div>
  </div>
);

const NotesSection = () => (
  <div className="dashboard-section">
    <h2>Class Notes</h2>
    <div className="notes-grid">
      {['Mathematics Chapter 5', 'Physics Notes - Wave Motion', 'Chemistry - Organic Compounds'].map((note) => (
        <div key={note} className="note-card">
          <h3>{note}</h3>
          <p>Last updated: January 15, 2025</p>
          <button className="download-btn">
            Download PDF →
          </button>
        </div>
      ))}
    </div>
  </div>
);

const StudentInfoSection = ({ studentInfo }) => (
  <div className="dashboard-section">
    <h2>Student Information</h2>
    <div className="info-card">
      <div className="student-profile">
        <div className="profile-image">
          <User />
        </div>
        <div className="profile-details">
          <h3>{studentInfo.name}</h3>
          <p>{studentInfo.grade}</p>
        </div>
      </div>
      <div className="info-grid">
        <InfoItem label="Roll Number" value={studentInfo.rollNo} />
        <InfoItem label="Email" value={studentInfo.email} />
      </div>
    </div>
  </div>
);

const InfoItem = ({ label, value }) => (
  <div className="info-item">
    <p className="info-label">{label}</p>
    <p className="info-value">{value}</p>
  </div>
);

export default StudentDashboard;