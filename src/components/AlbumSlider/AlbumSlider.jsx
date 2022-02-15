import { useGetAlbums } from 'hooks/useGetAlbums';
import { Link } from 'react-router-dom';

import { Heading, Flex, useColorModeValue, Icon } from '@chakra-ui/react';
import AlbumItem from 'components/AlbumItem/AlbumItem';
import { FiArrowRight } from 'react-icons/fi';
import SearchImage from 'assets/images/searchImage.webp';

function AlbumSlider() {
  const { data: albums } = useGetAlbums();
  const color = useColorModeValue('gray.500', 'gray.100');

  const placeholderAlbum = {
    image: SearchImage,
    name: 'View All Albums',
    artist: `TOP ${albums?.length} ALBUMS`,
    releaseDate: <Icon mr={3} as={FiArrowRight} />
  };

  return (
    <>
      <Heading pt={4} fontSize="md" fontWeight="900" color={color}>
        TOP ALBUMS
      </Heading>
      <Flex overflow="scroll" justify="space-between" py="20px" gridGap="12px">
        {albums?.slice(0, 5).map((album) => (
          <AlbumItem album={album} key={album.id} />
        ))}
        <Link to={`/browse`}>
          <AlbumItem album={placeholderAlbum} />
        </Link>
      </Flex>
    </>
  );
}

export default AlbumSlider;
