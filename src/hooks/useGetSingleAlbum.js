import { useQuery } from 'react-query';

const fetchAlbum = (id) =>
  fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song&media=music`);

export const useGetSingleAlbum = (id) =>
  useQuery(id && ['album', id], () =>
    fetchAlbum(id)
      .then((res) => res.json())
      .then((res) => {
        const songs = res?.results;
        const filteredSongs = [];
        let album = {};
        for (const [key, value] of Object.entries(songs)) {
          if (key !== '0') {
            const ms = value.trackTimeMillis;
            const min = Math.floor(ms / 1000 / 60);
            const sec = Math.floor((ms / 1000) % 60);

            const tempData = {
              id: value.trackId,
              artist: value.artistName,
              name: value.trackName,
              category: value.primaryGenreName,
              releaseDate: value.releaseDate?.substr(0, 10),
              duration: `${min}:${sec < 10 ? 0 + sec.toString() : sec}`,
              audio: value.previewUrl,
              country: value.country
            };

            filteredSongs.push(tempData);
          } else {
            const data = {
              category: value.primaryGenreName,
              id: value.artistId,
              artist: value.artistName,
              image: value.artworkUrl100,
              name: value.collectionCensoredName,
              releaseDate: value.releaseDate?.substr(0, 10),
              price: value.collectionPrice
            };

            album = data;
          }
        }
        return { album, filteredSongs };
      })
  );
