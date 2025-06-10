export default function SidebarRight() {
  return (
    <div className="w-72 bg-gray-800 p-4 hidden lg:block">
      <h2 className="text-lg font-semibold mb-4">Discover</h2>
      <ul className="space-y-2">
        <li>Top Charts</li>
        <li>New Releases</li>
        <li>Recommended</li>
      </ul>
    </div>
  )
}