const steps = [
  {
    title: "1. Sign Up",
    desc: "Create an account as a tenant or landlord to get started.",
  },
  {
    title: "2. Connect",
    desc: "Add your properties and connect with tenants/landlords instantly.",
  },
  {
    title: "3. Manage Everything",
    desc: "Use our tools to handle maintenance, messaging, and payments with ease.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-8 py-16 bg-blue-50">
      <h3 className="text-3xl font-semibold text-center mb-10">How It Works</h3>
      <div className="flex flex-col lg:flex-row justify-around gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="text-center p-6">
            <h4 className="text-xl font-bold mb-2">{step.title}</h4>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
