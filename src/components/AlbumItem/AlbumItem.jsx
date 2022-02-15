import { Link } from 'react-router-dom';
import { Flex, Text, Heading, Image, useColorModeValue } from '@chakra-ui/react';

const AlbumItem = ({ album }) => {
  const colorSec = useColorModeValue('gray.500', 'white');
  const bgColorItem = useColorModeValue('rgba(0, 0, 0, 0.05)', 'rgba(255, 255, 255, 0.05)');

  return (
    <Flex
      cursor="pointer"
      bgColor={bgColorItem}
      borderRadius="8px"
      color={colorSec}
      as={album.id && Link}
      to={`/albums/${album.id}`}
      direction="column"
      minWidth={{ base: '168px', lg: '194px' }}
      maxWidth={{ base: '168px', lg: '194px' }}
      height="260px"
      p="12px">
      <Image
        filter={!album.id && 'brightness(60%)'}
        width="100%"
        src={album.image}
        alt="album image"
        borderRadius="8px"
      />
      <Heading my={2} fontSize="sm">
        {`${album.name.slice(0, 40)}${album.name.length > 40 ? '...' : ''}`}
      </Heading>
      <Flex justify="space-between" mt="auto">
        <Text fontSize="xs">
          {`${album.artist.slice(0, 20)}${album.artist.length > 20 ? '...' : ''}`}
        </Text>
        <Text fontSize="xs">{album?.releaseDate}</Text>
      </Flex>
    </Flex>
  );
};

export default AlbumItem;
