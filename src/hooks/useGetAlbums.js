import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { setInitialStates } from 'store/slices/albumsSlice';
import getValue from 'helpers/getValue';

const fetchAlbums = () => fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json');

export const useGetAlbums = () => {
  const dispatch = useDispatch();
  const handleSetInitialStates = (payload) => dispatch(setInitialStates(payload));

  const { data } = useQuery('albums', () =>
    fetchAlbums()
      .then((res) => res.json())
      .then((res) => {
        const albums = res?.feed?.entry;

        const arr = [];
        for (const [key] of Object.entries(albums)) {
          const releaseDate = getValue(albums[key], '[im:releaseDate].attributes.label');
          const tempData = {
            category: getValue(albums[key], 'category.attributes.label'),
            id: getValue(albums[key], 'id.attributes[im:id]'),
            artist: getValue(albums[key], '[im:artist].label'),
            image: getValue(albums[key], '[im:image][2].label'),
            name: getValue(albums[key], '[im:name].label'),
            releaseDate: releaseDate?.substr(releaseDate.length - 5),
            title: getValue(albums[key], 'title.label'),
            price: getValue(albums[key], '[im:price].label')
          };

          arr.push(tempData);
        }

        handleSetInitialStates(arr);
        return arr;
      })
  );
  return { data };
};
