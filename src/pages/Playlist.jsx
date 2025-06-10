import { useParams } from 'react-router-dom';

const Playlist = () => {
  const { id } = useParams();
  return <div className='p-4 text-white'>Playlist ID: {id}</div>;
};

export default Playlist;