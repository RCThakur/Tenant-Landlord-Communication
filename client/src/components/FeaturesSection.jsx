// src/components/FeaturesSection.jsx
const features = [
  {
    title: "Maintenance Requests",
    desc: "Easily submit, track, and manage maintenance issues in real-time.",
  },
  {
    title: "Instant Messaging",
    desc: "Seamless chat between tenants and landlords with status updates.",
  },
  {
    title: "Rent Tracking",
    desc: "View payment history, get reminders, and notify delays instantly.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-10">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-blue-600 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
