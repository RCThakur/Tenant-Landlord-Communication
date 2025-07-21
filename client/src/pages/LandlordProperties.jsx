import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import PropertyForm from '../components/PropertyForm';

const LandlordProperties = () => {
  const { token } = useAuth();
  const [properties, setProperties] = useState([]);

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

  const handleAddProperty = async (newProperty) => {
    try {
      console.log('Adding property:', newProperty); // Debug
      const res = await axios.post('http://localhost:5000/api/properties', newProperty, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setProperties((prev) => [...prev, res.data]);
    } catch (err) {
      console.error('Add Property Failed:', err);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Manage Your Properties</h1>
      <PropertyForm onSubmit={handleAddProperty} />

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        {properties.map((property) => (
          <div key={property._id} className="border p-4 rounded shadow-sm bg-gray-50">
            <h3 className="text-lg font-bold">{property.title}</h3>
            <p className="text-sm text-gray-600">{property.location}</p>
            <p><strong>Rent:</strong> ₹{property.rent}</p>
            <p><strong>Status:</strong> {property.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandlordProperties;
