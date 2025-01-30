import React, { useState } from 'react';

const AuthContext = React.createContext(null);

// Auth Provider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (credentials, role) => {
    // In a real app, you would validate credentials against a backend
    setUser({ 
      email: credentials.email, 
      role: role || 'student' 
    });
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export  {AuthContext,AuthProvider};
