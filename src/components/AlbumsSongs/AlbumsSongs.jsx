import { useDispatch, useSelector } from 'react-redux';
import { favoriteAlbumsSelector, setFavoriteSongs } from 'store/slices/albumsSlice';

import FavoriteButton from 'components/FavoriteButton';
import {
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  Divider,
  Box,
  useColorModeValue,
  Heading
} from '@chakra-ui/react';
import PlayerButton from 'components/PlayerButton';

function AlbumsSongs({ songs }) {
  const dispatch = useDispatch();
  const color = useColorModeValue('gray.500', 'gray.100');
  const colorSec = useColorModeValue('gray.500', 'white');
  const divider = useColorModeValue('rgba(0, 0, 0, 0.5)', 'rgba(255, 255, 255, 0.2)');

  const handleSetFavoriteAlbums = (payload) => dispatch(setFavoriteSongs(payload));
  const favoriteSongs = useSelector(favoriteAlbumsSelector);

  return (
    <>
      <Heading mt={8} mb={4} fontSize="md" fontWeight="900" color={color}>
        ALBUMS SONGS
      </Heading>
      <Divider borderColor={divider} borderWidth="0.5px" mb={4} />

      <Box>
        <Table color={color} fontWeight="600" variant="unstyled">
          <Tbody verticalAlign="baseline">
            {songs.length === 0 && (
              <Text height="200px">You do not have any favorite songs yet</Text>
            )}
            {songs?.map((album) => {
              const index = favoriteSongs?.findIndex((favAlbum) => favAlbum.id === album.id);
              return (
                <Tr key={album.id}>
                  <Td py={2.5} px={0} display="flex" gap="8px">
                    <PlayerButton url={album.audio} />
                    <FavoriteButton
                      handleClick={() => handleSetFavoriteAlbums(album)}
                      clicked={index >= 0}
                    />
                  </Td>
                  <Td py={2.5} color={colorSec}>
                    {album.name}
                    <Text
                      color="gray.500"
                      fontSize="14px"
                      display={{ base: 'block', md: 'none' }}>{`${album.artist.slice(0, 50)}${
                      album.artist.length > 50 ? '...' : ''
                    }`}</Text>
                  </Td>
                  <Td display={{ base: 'none', md: 'table-cell' }} py={2.5}>
                    {`${album.artist.slice(0, 50)}${album.artist.length > 50 ? '...' : ''}`}
                  </Td>
                  <Td display={{ base: 'none', md: 'table-cell' }} py={2.5}>
                    {album.category}
                  </Td>
                  <Td display={{ base: 'none', md: 'table-cell' }} py={2.5}>
                    {album.country}
                  </Td>
                  <Td textAlign="right" py={2.5}>
                    {album.duration}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </>
  );
}

export default AlbumsSongs;
