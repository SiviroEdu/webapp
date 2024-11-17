import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';

const ProtectedComponent = () => {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      // Perform logout operations, then navigate
      navigate('/');
    };
  
    return (
      <div>
        <h1>Protected Page</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
};

export default ProtectedComponent;