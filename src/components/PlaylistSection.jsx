import PlaylistCard from "./PlaylistCard";

export default function PlaylistSection({ title, items }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((item, idx) => (
          <PlaylistCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}
