// src/components/Testimonials.jsx
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-8">What Users Say</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-700 italic">
              "RentConnect made communication with my landlord effortless. Issues are resolved faster than ever!"
            </p>
            <footer className="mt-4 text-sm text-gray-500">— Riya, Tenant</footer>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-700 italic">
              "Managing multiple properties is now a breeze. I can track all maintenance from one place."
            </p>
            <footer className="mt-4 text-sm text-gray-500">— Mr. Kapoor, Landlord</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
