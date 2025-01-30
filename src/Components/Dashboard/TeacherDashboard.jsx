import React, { useState } from 'react';
import { 
  LayoutDashboard, Calendar, CheckSquare, FileText, Megaphone, Book, LogOut } from 'lucide-react';
import './TeaDash.css';
import ResourcesSection from "./TeacherDashboard/ResourcesComponent"
import { classesList,scheduleData,timeSlots } from './TeacherDashboard/TeacherData';



const TeacherDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'attendance', label: 'Attendance', icon: CheckSquare },
    { id: 'assignments', label: 'Assignments', icon: FileText },
    { id: 'announcements', label: 'Announcements', icon: Megaphone },
    { id: 'resources', label: 'Resources', icon: Book }
  ];

  const updateAttendance = (sectionId, studentId, newStatus) => {
    const updatedClasses = classesList.map(cls => ({
      ...cls,
      sections: cls.sections.map(section => 
        section.id === sectionId 
          ? {
              ...section,
              students: section.students.map(student => 
                student.id === studentId 
                  ? { ...student, attendance: newStatus } 
                  : student
              )
            }
          : section
      )
    }));
    // In a real app, you'd update the state or send to backend
  };

  const renderContent = () => {
 switch(activeSection) {
  case 'attendance':
    return (
          <div>
            <h2>Attendance Management</h2>
            {!selectedClass ? (
              <div className="class-grid">
                {classesList.map(cls => (
                  <div 
                    key={cls.id} 
                    className="class-card"
                    onClick={() => setSelectedClass(cls)}
                  >
                    <h3>{cls.name}</h3>
                    <p>{cls.sections.reduce((total, section) => total + section.students.length, 0)} Students</p>
                  </div>
                ))}
              </div>
            ) : !selectedSection ? (
              <div>
                <button 
                  onClick={() => setSelectedClass(null)} 
                  className="back-button"
                >
                  Back to Classes
                </button>
                <div className="class-grid">
                  {selectedClass.sections.map(section => (
                    <div 
                      key={section.id} 
                      className="class-card"
                      onClick={() => setSelectedSection(section)}
                    >
                      <h3>{section.name}</h3>
                      <p>{section.students.length} Students</p>
                      <div>
                        <strong>Attendance Summary:</strong>
                        <p>
                          Present: {section.students.filter(s => s.attendance === 'Present').length} 
                          | Absent: {section.students.filter(s => s.attendance === 'Absent').length}
                          | Late: {section.students.filter(s => s.attendance === 'Late').length}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h3>{selectedClass.name} - {selectedSection.name} Attendance</h3>
                <button 
                  onClick={() => setSelectedSection(null)} 
                  className="back-button"
                >
                  Back to Sections
                </button>
                <table className="attendance-table">
                  <thead>
                    <tr>
                      <th className="table-cell">Student Name</th>
                      <th className="table-cell">Current Status</th>
                      <th className="table-cell">Update Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedSection.students.map(student => (
                      <tr key={student.id}>
                        <td className="table-cell">{student.name}</td>
                        <td className="table-cell">{student.attendance}</td>
                        <td className="table-cell">
                          <select 
                            value={student.attendance}
                            onChange={(e) => updateAttendance(selectedSection.id, student.id, e.target.value)}
                          >
                            <option value="Present">Present</option>
                            <option value="Absent">Absent</option>
                            <option value="Late">Late</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
     case 'schedule':
        return (
          <div>
            <h2>Schedule</h2>
            <table className="schedule-grid">
              <thead>
                <tr>
                  <th>Time / Day</th>
                  {timeSlots.map((time, index) => (
                    <th key={index}>{time}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(scheduleData).map(([day, classes]) => (
                  <tr key={day}>
                    <td className="day-cell">{day}</td>
                    {timeSlots.map((time, index) => {
                      const classItem = classes.find(item => item.time === time);
                      return (
                        <td key={index} className="class-cell">
                          {classItem ? classItem.class : '-'}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

case 'assignments':
  return (
    <div>
      <h2>Assignments</h2>
      {classesList.map(cls => (
        <div key={cls.id} className="class-card">
          <h3>{cls.name}</h3>
          {cls.sections.map(section => (
            <div key={section.id}>
              <h4>{section.name} Assignments</h4>
              <ul>
                <li>Programming Project (Due: Next Week)</li>
                <li>Midterm Report (Due: In Two Weeks)</li>
                <li>Research Paper (Due: End of Month)</li>
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );


case 'announcements':
  return (
    <div>
      <h2>Announcements</h2>
      <div className="class-card">
        <h3>Upcoming Events</h3>
        <ul>
          <li>Midterm Exams Start Next Monday</li>
          <li>Guest Lecture on AI Ethics - Wednesday</li>
          <li>Department Hackathon Registration Open</li>
        </ul>
      </div>
    </div>
  );

case 'resources':
  return <ResourcesSection />;
case 'dashboard':
  return(
  <div className='profile-container'>
    <h1>Welcome to Dashboard</h1>
  </div>
  );
 
default:
 
}
  };

  return (
    <div className="dashboard">
      <header className="header">
        <div>
          <h1>Dashboard</h1>
        </div>
       
      </header>
      <div className="dashboard-container">
        <nav className="vertical-navbar">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`nav-item ${activeSection === item.id ? 'active-nav-item' : ''}`}
              >
                <Icon style={{marginRight: '10px'}} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <main className="dashboard-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;