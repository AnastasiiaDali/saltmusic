import { useSelector } from 'react-redux';
import { favoriteAlbumsSelector } from 'store/slices/albumsSlice';

import AlbumsSongs from 'components/AlbumsSongs';
import Layout from 'components/Layout';
import Favorite from 'assets/images/favorite_bg.svg';
import Hero from 'components/Hero';

function FavoritePage() {
  const favoriteSongs = useSelector(favoriteAlbumsSelector);

  return (
    <Layout title="My favorite songs">
      <Hero image={Favorite} title="My Favorite Songs" />
      {favoriteSongs && <AlbumsSongs songs={favoriteSongs} />}
    </Layout>
  );
}

export default FavoritePage;
