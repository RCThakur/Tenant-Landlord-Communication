import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Building2, MessageSquareText, Bell, FileText, Settings, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const COLORS = ['#4ade80', '#facc15', '#f87171'];

const pieData = [
  { name: 'Rent Received', value: 70 },
  { name: 'Rent Pending', value: 20 },
  { name: 'Maintenance', value: 10 },
];

const LandlordDashboard = () => {
  const { user, logout, token } = useAuth();
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

    useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/properties', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProperties(res.data);
      } catch (err) {
        console.error('Error fetching properties:', err);
      }
    };

    fetchProperties();
  }, [token]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">TenantConnect</h2>
        <nav className="space-y-4">
          <button 
             onClick={() => navigate('/landlord/properties')}
             className="flex items-center space-x-2 hover:text-yellow-300">
            <Building2 size={18} />
            <span>Properties</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-yellow-300">
            <MessageSquareText size={18} />
            <span>Messages</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-yellow-300">
            <FileText size={18} />
            <span>Documents</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-yellow-300">
            <Bell size={18} />
            <span>Alerts</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-yellow-300">
            <Settings size={18} />
            <span>Settings</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Welcome, {user?.name} (Landlord)</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded shadow-md transition-all duration-300"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>

        {/* Pie Chart & Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Rent & Maintenance Overview</h2>
            <PieChart width={300} height={300}>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>

          {/* Earnings Summary */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Earnings Summary</h2>
            <ul className="space-y-2 text-gray-700">
              <li>This Month: <strong>₹30,000</strong></li>
              <li>Last Month: ₹28,500</li>
              <li>Year to Date: ₹2,70,000</li>
            </ul>
          </div>
        </div>

        {/* Maintenance Panel */}
        <div className="mt-8 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Open Maintenance Requests</h2>
          <ul className="text-gray-700 list-disc list-inside">
            <li>Water leakage reported by Ankit Kumar</li>
            <li>Electricity issue reported by Priya Singh</li>
          </ul>
        </div>

        {/* Tenant Profiles */}
        <div className="mt-8 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Tenant Overview</h2>
          <table className="w-full table-auto border text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Name</th>
                <th className="p-2">Rent Status</th>
                <th className="p-2">Feedback</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Rohit Sharma</td>
                <td className="p-2 text-green-600">Paid</td>
                <td className="p-2">⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="p-2">Priya Singh</td>
                <td className="p-2 text-red-600">Pending</td>
                <td className="p-2">⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="p-2">Ankit Kumar</td>
                <td className="p-2 text-yellow-600">Maintenance</td>
                <td className="p-2">⭐⭐⭐⭐⭐</td>
              </tr>
            </tbody>
          </table>
        </div>

          {/* Property List */}
          <div className="mt-8 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Your Properties</h2>
          <div className="grid md:grid-cols-2 gap-4">
          {properties.length > 0 ? (
          properties.map((property) => (
          <div key={property._id} className="border p-4 rounded shadow-sm bg-gray-50">
            <h3 className="text-lg font-bold">{property.title}</h3>
            <p className="text-sm text-gray-600">{property.location}</p>
            <p className="mt-2"><strong>Rent:</strong> ₹{property.rent}</p>
            <p className="mt-1"><strong>Status:</strong> {property.status}</p>
          </div>
          ))
          ) : (
          <p>No properties found.</p>
          )}
          </div>
          </div>

      </main>
    </div>
  );
};

export default LandlordDashboard;
