import React, { useState } from 'react';
import { Book, GraduationCap, User, FileText, ClipboardList, Bell, LogOut, Mail, Phone, Hash, Home, Calendar, Users, UserCircle,Clock} from 'lucide-react';
import { studentData,personalData,courseData } from './StudentDashboard/studentdata';
import "./StuDash.css"
import MarksSection from './StudentDashboard/MarksSection';
import AssignmentsSection from './StudentDashboard/AssignmentsSection';
import NotesSection from "./StudentDashboard/NotesSection";
import CoursesSection from './StudentDashboard/CoursesSection';
import StudentProfile from './StudentDashboard/StudentProfile';
const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('courses');

  // Mock data - replace with actual API calls
  <StudentProfile 
    studentInfo={studentData}
    personalInfo={personalData}
  />
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
        return <StudentProfile 
        studentInfo={studentData}
        personalInfo={personalData}
      />;
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

export default StudentDashboard;