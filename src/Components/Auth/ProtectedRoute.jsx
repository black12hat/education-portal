import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

export const ProtectedRoute = ({ children, allowedRoles = ['student', 'teacher'] }) => {
  const { user } = React.useContext(AuthContext);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};