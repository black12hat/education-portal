import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from './AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = React.useContext(AuthContext);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!user || (allowedRoles && !allowedRoles.includes(user.role))) {
      navigate('/');
    }
  }, [user, navigate, allowedRoles]);

  return user && (!allowedRoles || allowedRoles.includes(user.role)) ? children : null;
};
export default ProtectedRoute;