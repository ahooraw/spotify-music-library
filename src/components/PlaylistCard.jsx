export default function PlaylistCard({ title, image, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center gap-4 transition-all"
    >
      <img src={image} alt={title} className="w-16 h-16 rounded" />
      <span className="text-white font-semibold">{title}</span>
    </a>
  );
}
