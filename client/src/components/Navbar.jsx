// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">RentConnect</h1>
        <div className="space-x-4">
          <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}
