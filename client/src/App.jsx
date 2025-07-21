import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import LandlordDashboard from './pages/LandlordDashboard';
import TenantDashboard from './pages/TenantDashboard';
import Home from './pages/Home'; // Role-based redirect
import LandingPage from './pages/LandingPage';
import LandlordProperties from './pages/LandlordProperties';


const App = () => (
  <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tenant"
        element={
          <ProtectedRoute>
            <TenantDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/landlord"
        element={
          <ProtectedRoute>
            <LandlordDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/landlord/properties" element={<LandlordProperties />} />
    </Routes>
  </>
);

export default App;
