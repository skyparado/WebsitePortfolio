export default function PostCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-white p-6 rounded shadow-md h-full">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
