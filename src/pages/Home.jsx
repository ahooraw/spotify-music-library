import PlaylistCard from "../components/PlaylistCard";
import PlaylistSection from "../components/PlaylistSection";

export default function Home() {
  const quickPlaylists = [
    {
      title: "Liked Songs",
      image: "/liked.jpg",
      link: "https://open.spotify.com/collection/tracks",
    },
    {
      title: "Daily Mix",
      image: "/daily.jpg",
      link: "https://open.spotify.com/playlist/37i9dQZF1E37R4DsVxF8xz",
    },
    {
      title: "Chill Hits",
      image: "/chill.jpg",
      link: "https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6",
    },
  ];

  const madeForYou = [
    {
      title: "Your Mix 1",
      image: "/mix1.jpg",
      link: "https://open.spotify.com/playlist/1",
    },
    {
      title: "Your Mix 2",
      image: "/mix2.jpg",
      link: "https://open.spotify.com/playlist/2",
    },
    {
      title: "Your Mix 3",
      image: "/mix3.jpg",
      link: "https://open.spotify.com/playlist/3",
    },
  ];

  const recentlyPlayed = [
    {
      title: "Workout Mix",
      image: "/workout.jpg",
      link: "https://open.spotify.com/playlist/4",
    },
    {
      title: "Focus Flow",
      image: "/focus.jpg",
      link: "https://open.spotify.com/playlist/5",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Good Afternoon</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {quickPlaylists.map((item, idx) => (
          <PlaylistCard key={idx} {...item} />
        ))}
      </div>

      <PlaylistSection title="Made For You" items={madeForYou} />
      <PlaylistSection title="Recently Played" items={recentlyPlayed} />
    </div>
  );
}
