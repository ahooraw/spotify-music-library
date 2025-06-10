export default function SidebarLeft() {
  return (
    <div className="w-60 bg-gray-800 p-4 hidden md:block">
      <h2 className="text-lg font-semibold mb-4">Your Library</h2>
      <ul className="space-y-2">
        <li>Liked Songs</li>
        <li>Recently Played</li>
        <li>Albums</li>
        <li>Artists</li>
      </ul>
    </div>
  )
}