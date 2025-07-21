// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'tenant') {
      navigate('/tenant');
    } else if (user?.role === 'landlord') {
      navigate('/landlord');
    }
  }, [user, navigate]);

  return (
    <div className="text-center mt-10 text-lg text-gray-600">
      Redirecting to your dashboard...
    </div>
  );
};

export default Home;
