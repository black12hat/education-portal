import React from 'react';
import {  Mail, Phone, Hash, Home, Calendar, Users, UserCircle} from 'lucide-react';

import "../StuDash.css"

const InfoItem = ({ icon, label, value }) => (
  <div className="info-item">
    <div className="info-icon">
      {icon}
    </div>
    <div className="info-text">
      <p className="info-label">{label}</p>
      <p className="info-value">{value}</p>
    </div>
  </div>
);

const StudentInfoSection = ({ studentInfo }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Student Information</h2>
      </div>
      <div className="card-content">
        <div className="profile-header">
          <div className="profile-photo">
            {studentInfo.photoUrl ? (
              <img src={studentInfo.photoUrl} alt={studentInfo.name} />
            ) : (
              <div className="profile-photo-placeholder">
                <UserCircle />
              </div>
            )}
          </div>
          <h3 className="profile-name">{studentInfo.name}</h3>
          <p className="profile-grade">Grade {studentInfo.grade}</p>
        </div>

        <div className="info-grid">
          <InfoItem
            icon={<Hash />}
            label="Roll Number"
            value={studentInfo.rollNo}
          />
          <InfoItem
            icon={<Mail />}
            label="Email"
            value={studentInfo.email}
          />
          <InfoItem
            icon={<Phone />}
            label="Phone"
            value={studentInfo.phone}
          />
        </div>
      </div>
    </div>
  );
};

const PersonalInfoSection = ({ personalInfo }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Personal Information</h2>
      </div>
      <div className="card-content">
        <div className="info-grid">
          <InfoItem
            icon={<Calendar />}
            label="Date of Birth"
            value={personalInfo.dateOfBirth}
          />
          <InfoItem
            icon={<Home />}
            label="Address"
            value={personalInfo.address}
          />
          <InfoItem
            icon={<Users />}
            label="Parent/Guardian"
            value={personalInfo.parentName}
          />
          <InfoItem
            icon={<Phone />}
            label="Emergency Contact"
            value={personalInfo.emergencyContact}
          />
        </div>
      </div>
    </div>
  );
};

const StudentProfile = ({ studentInfo, personalInfo }) => {
  return (
    <div className="profile-container">
      <div className='profile-gird'>
      <StudentInfoSection studentInfo={studentInfo} />
      <PersonalInfoSection personalInfo={personalInfo} />
      </div>     
    </div>
  );
};
export default StudentProfile;