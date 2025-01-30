import React from 'react';
import "../StuDash.css"
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
export default MarksSection;