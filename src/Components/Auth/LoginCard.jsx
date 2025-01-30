import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { Loader } from 'lucide-react';
import { AuthContext } from './AuthContext';
import "../../Styles/HomePage.css"
export const LoginCard = () => {
  const navigate = useNavigate();
  const { login } = React.useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState('student');
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '', general: '' };

    if (!loginData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!loginData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (loginData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({ email: '', password: '', general: '' });

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const success = login(loginData, role);
      if (success) {
        navigate(role === 'teacher' ? '/teacher-dashboard' : '/dashboard');
      } else {
        setErrors(prev => ({
          ...prev,
          general: 'Invalid credentials'
        }));
      }
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        general: 'An error occurred during login. Please try again.'
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card login-card">
      <div className="card-header">
        <h2>Login</h2>
      </div>
      <div className="card-body">
        <form className="login-form" onSubmit={handleLogin}>
          {errors.general && (
            <div className="error-message">
              {errors.general}
            </div>
          )}
          
          <div className="form-group">
            <label>Login as:</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="student"
                  checked={role === 'student'}
                  onChange={() => setRole('student')}
                />
                Student
              </label>
              <label>
                <input
                  type="radio"
                  value="teacher"
                  checked={role === 'teacher'}
                  onChange={() => setRole('teacher')}
                />
                Teacher
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={handleInputChange}
              className={errors.email ? 'error' : ''}
              disabled={isLoading}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={handleInputChange}
              className={errors.password ? 'error' : ''}
              disabled={isLoading}
            />
            {errors.password && <span className="field-error">{errors.password}</span>}
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="login-button"
          >
            {isLoading ? (
              <span className="button-content">
                <Loader className="w-4 h-4 animate-spin" />
                Logging in...
              </span>
            ) : (
              'Login'
            )}
          </button>

          <a href="#" className="forgot-password">
            Forgot Password? Contact Administration
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;