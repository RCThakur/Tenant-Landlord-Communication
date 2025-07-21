import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const TenantDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tenant Dashboard</h1>
        <div>
          <span className="mr-4">{user?.name} ({user?.role})</span>
          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-blue-100"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome, {user?.name}!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Submit Maintenance Request</h3>
            <p className="text-gray-600">Report issues like plumbing, electricity, etc.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Track Requests</h3>
            <p className="text-gray-600">See the status of your submitted issues.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Rent Payments</h3>
            <p className="text-gray-600">Check your payment history and next due date.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TenantDashboard;
