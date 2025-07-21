// src/components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Streamline Tenant-Landlord Communication
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Report issues, track maintenance, pay rent, and stay informed with RentConnect.
        </p>
        <a
          href="#features"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          Explore Features
        </a>
      </div>
    </section>
  );
}
