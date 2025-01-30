export const classesList = [
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
  export const timeSlots = [
    '09:00 - 10:00', 
    '10:15 - 11:15', 
    '11:30 - 12:30', 
    '12:30 - 13:30', 
    '13:30 - 14:30', 
    '14:45 - 15:45', 
    '16:00 - 17:00'
  ];
  // Expanded schedule data for the entire week
  export const scheduleData = {
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
  
 