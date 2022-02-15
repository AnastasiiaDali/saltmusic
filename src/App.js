import { Routes, Route } from 'react-router-dom';
import { useGetAlbums } from 'hooks/useGetAlbums';

import DiscoverPage from 'pages/DiscoverPage';
import BrowsePage from 'pages/BrowsePage';
import FavoritePage from 'pages/FavoritePage';
import SingleAlbumPage from 'pages/SingleAlbumPage';

function App() {
  useGetAlbums();

  return (
    <Routes>
      <Route path="/" element={<DiscoverPage />} />
      <Route path="/browse" element={<BrowsePage />} />
      <Route path="/favorite" element={<FavoritePage />} />
      <Route path="/albums/:id" element={<SingleAlbumPage />} />
    </Routes>
  );
}

export default App;
