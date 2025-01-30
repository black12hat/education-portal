import React, { useState } from 'react';
import "../StuDash.css"

const AssignmentCard = ({ assignment }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Here you could add code to handle the file upload
      console.log(`Selected file for ${assignment}:`, file.name);
    }
  };

  const handleSubmitClick = () => {
    // Programmatically click the hidden file input
    document.getElementById(`file-input-${assignment}`).click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    // Reset the file input
    const fileInput = document.getElementById(`file-input-${assignment}`);
    fileInput.value = '';
  };

  return (
    <div className="assignment-card">
      <div className="assignment-content">
        <div className="assignment-info">
          <h3>{assignment}</h3>
          <p className="due-date">Due: January 25, 2025</p>
          {selectedFile && (
            <div className="selected-file-container">
              <p className="selected-file">
                Selected: {selectedFile.name}
              </p>
              <button 
                onClick={handleRemoveFile}
                className="remove-file-button"
                aria-label="Remove file"
              >
                <X size={16} />
              </button>
            </div>
          )}
        </div>
        <div className="assignment-actions">
          <input
            type="file"
            id={`file-input-${assignment}`}
            className="file-input"
            onChange={handleFileChange}
          />
          <button
            onClick={handleSubmitClick}
            className="submit-button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const AssignmentsSection = () => {
  const assignments = [
    'Mathematics Assignment 3',
    'Physics Lab Report',
    'English Essay'
  ];

  return (
    <div className="assignments-section">
      <h2>Assignments</h2>
      <div className="assignments-list">
        {assignments.map((assignment) => (
          <AssignmentCard 
            key={assignment}
            assignment={assignment}
          />
        ))}
      </div>
    </div>
  );
};
export default AssignmentsSection;