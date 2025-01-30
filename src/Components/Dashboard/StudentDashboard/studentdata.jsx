export const studentData = {
    name: "John Doe",
    grade: "10",
    rollNo: "2023001",
    email: "john.doe@school.com",
    phone: "123-456-7890",
    photoUrl: null // Optional photo URL
  };
  
 export  const personalData = {
    dateOfBirth: "15 Jan 2008",
    address: "123 School Street, City",
    parentName: "Jane Doe",
    emergencyContact: "987-654-3210"
  };
  export const courseData = {
    Mathematics: {
      description: 'Advanced Mathematics covering Algebra, Calculus, and Statistics',
      instructor: 'Dr. Sarah Johnson',
      schedule: 'Mon, Wed, Fri - 9:00 AM',
      duration: '1.5 hours',
      students: 30,
      topics: [
        'Linear Algebra',
        'Differential Calculus',
        'Integral Calculus',
        'Probability Theory'
      ],
      assignments: [
        { id: 1, title: 'Week 1 Problem Set', dueDate: '2025-02-05', status: 'Pending' },
        { id: 2, title: 'Linear Algebra Quiz', dueDate: '2025-02-10', status: 'Completed' },
        { id: 3, title: 'Calculus Project', dueDate: '2025-02-15', status: 'In Progress' }
      ],
      resources: [
        { id: 1, title: 'Calculus Textbook', type: 'PDF' },
        { id: 2, title: 'Practice Problems', type: 'DOC' },
        { id: 3, title: 'Video Lectures', type: 'Video' }
      ]
    },
    Physics: {
      description: 'Comprehensive Physics course covering Mechanics and Electromagnetism',
      instructor: 'Prof. Robert Chen',
      schedule: 'Tue, Thu - 10:30 AM',
      duration: '2 hours',
      students: 25,
      topics: [
        'Classical Mechanics',
        'Electromagnetism',
        'Waves and Optics',
        'Modern Physics'
      ],
      assignments: [
        { id: 1, title: 'Lab Report 1', dueDate: '2025-02-07', status: 'Pending' },
        { id: 2, title: 'Mechanics Quiz', dueDate: '2025-02-12', status: 'Not Started' },
        { id: 3, title: 'Physics Project', dueDate: '2025-02-20', status: 'In Progress' }
      ],
      resources: [
        { id: 1, title: 'Physics Handbook', type: 'PDF' },
        { id: 2, title: 'Lab Materials', type: 'DOC' },
        { id: 3, title: 'Simulation Tools', type: 'Software' }
      ]
    },
    Chemistry: {
      description: 'General Chemistry covering atomic structure and chemical reactions',
      instructor: 'Dr. Emily Williams',
      schedule: 'Mon, Wed - 2:00 PM',
      duration: '1.5 hours',
      students: 28,
      topics: [
        'Atomic Structure',
        'Chemical Bonding',
        'Thermodynamics',
        'Organic Chemistry'
      ],
      assignments: [
        { id: 1, title: 'Chemical Analysis', dueDate: '2025-02-08', status: 'Pending' },
        { id: 2, title: 'Lab Report', dueDate: '2025-02-13', status: 'Not Started' },
        { id: 3, title: 'Research Paper', dueDate: '2025-02-18', status: 'Completed' }
      ],
      resources: [
        { id: 1, title: 'Chemistry Textbook', type: 'PDF' },
        { id: 2, title: 'Lab Safety Guide', type: 'PDF' },
        { id: 3, title: 'Periodic Table', type: 'Interactive' }
      ]
    },
    English: {
      description: 'Advanced English Literature and Composition',
      instructor: 'Prof. Mary Thompson',
      schedule: 'Tue, Thu - 1:00 PM',
      duration: '1.5 hours',
      students: 22,
      topics: [
        'Contemporary Literature',
        'Creative Writing',
        'Literary Analysis',
        'Academic Writing'
      ],
      assignments: [
        { id: 1, title: 'Essay Analysis', dueDate: '2025-02-06', status: 'In Progress' },
        { id: 2, title: 'Book Review', dueDate: '2025-02-11', status: 'Not Started' },
        { id: 3, title: 'Research Paper', dueDate: '2025-02-16', status: 'Pending' }
      ],
      resources: [
        { id: 1, title: 'Literature Anthology', type: 'PDF' },
        { id: 2, title: 'Writing Guide', type: 'DOC' },
        { id: 3, title: 'Grammar Handbook', type: 'PDF' }
      ]
    }
  };
  