// src/pages/LandingPage.jsx
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />

        <div className="flex justify-center gap-4 my-8">
        <Link to="/login" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Login
        </Link>
        <Link to="/register" className="px-6 py-2 bg-gray-100 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
          Register
        </Link>
      </div>
      <FeaturesSection />
      <Testimonials />
      <Footer />
    </>
  );
}
