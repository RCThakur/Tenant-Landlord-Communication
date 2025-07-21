// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center flex-col md:flex-row">
        <p>&copy; {new Date().getFullYear()} RentConnect. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
