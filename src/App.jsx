import React, { useState } from 'react';
import { BrowserRouter as Router, Routes} from 'react-router-dom';
import "./Styles/HomePage.css";
import StudentDashboard from './Components/Dashboard/StudentDashboard';
import TeacherDashboard from './Components/Dashboard/TeacherDashboard';
import HomePage from './Components/Dashboard/HomePage';
import { BlogPage } from './Components/Content/BlogPage';
import { blogData } from './Components/Content/BlogPage';
import ProtectedRoute from './Components/Auth/ProtectedRoute';
import  {AuthProvider} from "./Components/Auth/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogPage blogData={blogData} />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute allowedRoles={['student']}>
                <StudentDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/teacher-dashboard" 
            element={
              <ProtectedRoute allowedRoles={['teacher']}>
                <TeacherDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;