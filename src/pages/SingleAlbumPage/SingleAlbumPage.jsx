import { useLocation } from 'react-router-dom';
import { useGetSingleAlbum } from 'hooks/useGetSingleAlbum';

import AlbumsSongs from 'components/AlbumsSongs';
import AlbumHero from 'components/AlbumHero';
import Layout from 'components/Layout';

function SingleAlbumPage() {
  const { pathname } = useLocation();
  const { data: album } = useGetSingleAlbum(pathname.replace('/albums/', ''));

  return (
    <Layout title="Album Details">
      <AlbumHero />
      {album && <AlbumsSongs songs={album.filteredSongs} />}
    </Layout>
  );
}

export default SingleAlbumPage;
