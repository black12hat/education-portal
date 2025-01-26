import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  CheckSquare, 
  FileText, 
  Megaphone, 
  Book, 
  LogOut 
} from 'lucide-react';
import './TeaDash.css';

const classesList = [
  { 
    id: 1, 
    name: 'Mathematics', 
    sections: [
      { 
        id: 'math-5', 
        name: '5th Standard', 
        students: [
          { id: 1, name: 'Aarav Patel', attendance: 'Present' },
          { id: 2, name: 'Priya Singh', attendance: 'Absent' },
          { id: 3, name: 'Rohan Sharma', attendance: 'Late' }
        ]
      },
      { 
        id: 'math-12', 
        name: '12th Standard', 
        students: [
          { id: 4, name: 'Anjali Gupta', attendance: 'Present' },
          { id: 5, name: 'Vikram Reddy', attendance: 'Present' }
        ]
      }
    ]
  },
  { 
    id: 2, 
    name: 'Science', 
    sections: [
      { 
        id: 'sci-8', 
        name: '8th Standard', 
        students: [
          { id: 6, name: 'Neha Kapoor', attendance: 'Present' },
          { id: 7, name: 'Arjun Kumar', attendance: 'Absent' },
          { id: 8, name: 'Meera Iyer', attendance: 'Late' }
        ]
      }
    ]
  },
  { 
    id: 3, 
    name: 'English', 
    sections: [
      { 
        id: 'eng-10', 
        name: '10th Standard', 
        students: [
          { id: 9, name: 'Sanjay Mehta', attendance: 'Present' },
          { id: 10, name: 'Divya Nair', attendance: 'Present' },
          { id: 11, name: 'Rahul Joshi', attendance: 'Absent' }
        ]
      }
    ]
  },
  { 
    id: 4, 
    name: 'Hindi', 
    sections: [
      { 
        id: 'hindi-7', 
        name: '7th Standard', 
        students: [
          { id: 12, name: 'Aisha Khan', attendance: 'Present' },
          { id: 13, name: 'Mohit Malhotra', attendance: 'Late' },
          { id: 14, name: 'Shreya Desai', attendance: 'Present' }
        ]
      }
    ]
  },
  { 
    id: 5, 
    name: 'Sports', 
    sections: [
      { 
        id: 'sports-11', 
        name: '11th Standard', 
        students: [
          { id: 15, name: 'Karthik Raman', attendance: 'Present' },
          { id: 16, name: 'Lakshmi Menon', attendance: 'Absent' },
          { id: 17, name: 'Rajesh Pillai', attendance: 'Present' }
        ]
      }
    ]
  },
  { 
    id: 6, 
    name: 'Social Studies', 
    sections: [
      { 
        id: 'soc-9', 
        name: '9th Standard', 
        students: [
          { id: 18, name: 'Poorva Jain', attendance: 'Present' },
          { id: 19, name: 'Nikhil Pandey', attendance: 'Late' },
          { id: 20, name: 'Tanvi Kulkarni', attendance: 'Present' }
        ]
      }
    ]
  },
  { 
    id: 7, 
    name: 'Art', 
    sections: [
      { 
        id: 'art-6', 
        name: '6th Standard', 
        students: [
          { id: 21, name: 'Zara Shaikh', attendance: 'Present' },
          { id: 22, name: 'Yash Chopra', attendance: 'Absent' },
          { id: 23, name: 'Nisha Kumari', attendance: 'Present' }
        ]
      }
    ]
  },
  { 
    id: 8, 
    name: 'Music', 
    sections: [
      { 
        id: 'music-12', 
        name: '12th Standard', 
        students: [
          { id: 24, name: 'Vivek Bansal', attendance: 'Present' },
          { id: 25, name: 'Pallavi Rao', attendance: 'Late' },
          { id: 26, name: 'Ankit Verma', attendance: 'Present' }
        ]
      }
    ]
  }
];
const timeSlots = [
  '09:00 - 10:00', 
  '10:15 - 11:15', 
  '11:30 - 12:30', 
  '12:30 - 13:30', 
  '13:30 - 14:30', 
  '14:45 - 15:45', 
  '16:00 - 17:00'
];
// Expanded schedule data for the entire week
const scheduleData = {
  Monday: [
    { time: '09:00 - 10:00', class: 'Mathematics' },
    { time: '10:15 - 11:15', class: 'Science' },
    { time: '11:30 - 12:30', class: 'English' },
    { time: '12:30 - 13:30', class: 'Lunch Break' },
    { time: '13:30 - 14:30', class: 'Social Studies' },
    { time: '14:45 - 15:45', class: 'Hindi' },
    { time: '16:00 - 17:00', class: 'Sports' }
  ],
  Tuesday: [
    { time: '09:00 - 10:00', class: 'Art' },
    { time: '10:15 - 11:15', class: 'Music' },
    { time: '11:30 - 12:30', class: 'Science' },
    { time: '12:30 - 13:30', class: 'Lunch Break' },
    { time: '13:30 - 14:30', class: 'Mathematics' },
    { time: '14:45 - 15:45', class: 'English' },
    { time: '16:00 - 17:00', class: 'Social Studies' }
  ],
  Wednesday: [
    { time: '09:00 - 10:00', class: 'Hindi' },
    { time: '10:15 - 11:15', class: 'Physical Education' },
    { time: '11:30 - 12:30', class: 'Mathematics' },
    { time: '12:30 - 13:30', class: 'Lunch Break' },
    { time: '13:30 - 14:30', class: 'Science' },
    { time: '14:45 - 15:45', class: 'Art' },
    { time: '16:00 - 17:00', class: 'Music' }
  ],
  Thursday: [
    { time: '09:00 - 10:00', class: 'Social Studies' },
    { time: '10:15 - 11:15', class: 'English' },
    { time: '11:30 - 12:30', class: 'Sports' },
    { time: '12:30 - 13:30', class: 'Lunch Break' },
    { time: '13:30 - 14:30', class: 'Hindi' },
    { time: '14:45 - 15:45', class: 'Mathematics' },
    { time: '16:00 - 17:00', class: 'Science' }
  ],
  Friday: [
    { time: '09:00 - 10:00', class: 'Music' },
    { time: '10:15 - 11:15', class: 'Art' },
    { time: '11:30 - 12:30', class: 'Physical Education' },
    { time: '12:30 - 13:30', class: 'Lunch Break' },
    { time: '13:30 - 14:30', class: 'English' },
    { time: '14:45 - 15:45', class: 'Social Studies' },
    { time: '16:00 - 17:00', class: 'Hindi' }
  ],
  Saturday: [
    { time: '09:00 - 10:30', class: 'Extra Curricular Activities' },
    { time: '10:45 - 12:15', class: 'Science Project Workshop' },
    { time: '12:15 - 13:15', class: 'Lunch Break' },
    { time: '13:15 - 14:45', class: 'Mathematics Problem Solving' }
  ],
  Sunday: [
    { time: '10:00 - 12:00', class: 'Optional Study Hall' },
    { time: '14:00 - 16:00', class: 'Parent-Teacher Consultation' }
  ]
};

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
      
      // Other cases (schedule, assignments, etc.) remain the same, 
      // just replace inline styles with corresponding CSS classes
      
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
  return (
    <div>
      <h2>Learning Resources</h2>
      {classesList.map(cls => (
        <div key={cls.id} className="class-card">
          <h3>{cls.name} Resources</h3>
          <ul>
            <li>Lecture Slides</li>
            <li>Reference Books</li>
            <li>Online Tutorial Links</li>
            <li>Practice Exercises</li>
          </ul>
        </div>
      ))}
    </div>
  );

case 'dashboard':
default:
  return (
    <div>
      <h2>Dashboard Overview</h2>
      <div className="class-grid">
        <div className="class-card">
          <h3>Total Classes</h3>
          <p>{classesList.length}</p>
        </div>
        <div className="class-card">
          <h3>Total Students</h3>
          <p>{classesList.reduce((total, cls) => total + cls.sections.reduce((sectionTotal, section) => sectionTotal + section.students.length, 0), 0)}</p>
        </div>
      </div>
    </div>
  );
}
  };

  return (
    <div className="dashboard">
      <header className="header">
        <div>
          <h1>Dashboard</h1>
        </div>
        <div>
          <div className="profile-section">
            <img 
              src="edu-platform/src/assets/title_icon.png" 
              alt="Teacher Profile" 
              className="profile-avatar"
            />
            <div className="profile-dropdown">
              <div>
                <p>John Doe</p>
                <p>Computer Science</p>
                <p>john.doe@school.edu</p>
              </div>
              <button>
                <LogOut /> Logout
              </button>
            </div>
          </div>
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