export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
      <Icon className="h-10 w-10 text-neutral-900 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm">{description}</p>
    </div>
  );
}
