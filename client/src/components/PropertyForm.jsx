import React, { useState } from "react";
import axios from "axios";

const AddPropertyForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    rent: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // token saved at login

    try {
      const response = await axios.post(
        "http://localhost:5000/api/properties/properties",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Property added!");
      console.log(response.data);
    } catch (error) {
      console.error("Add Property Failed:", error.response?.data || error);
      alert("Failed to add property");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      /><br />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      /><br />

      <input
        type="number"
        name="rent"
        placeholder="Rent"
        value={formData.rent}
        onChange={handleChange}
        required
      /><br />

      <button type="submit">Add Property</button>
    </form>
  );
};

export default AddPropertyForm;
