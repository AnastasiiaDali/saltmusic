import { useGetSingleAlbum } from 'hooks/useGetSingleAlbum';
import { useLocation } from 'react-router-dom';

import { Text, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import AlbumBg from 'assets/images/album_bg.svg';

function AlbumHero() {
  const bgColor = useColorModeValue('white', 'purple.900');
  const color = useColorModeValue('gray.500', 'gray.100');
  const colorSec = useColorModeValue('gray.500', 'white');

  const { pathname } = useLocation();
  const { data } = useGetSingleAlbum(pathname.replace('/albums/', ''));

  return (
    <Flex
      left={0}
      py={3}
      zIndex={2}
      top="64px"
      width="100%"
      position="sticky"
      bgColor={bgColor}
      direction="column"
      justify="center"
      m="0 auto">
      <Image src={AlbumBg} alt="bg vector" position="absolute" zIndex="-1" />
      {data ? (
        <Flex
          flexDirection={{ base: 'column', lg: 'row' }}
          gap={4}
          align={{ base: 'center', lg: 'initial' }}>
          <Image width="170px" src={data.album.image} alt="album picture" borderRadius="8px" />
          <Flex
            gridGap={1}
            color={colorSec}
            direction="column"
            textAlign={{ base: 'center', lg: 'initial' }}
            fontWeight="900">
            <Text mb="auto" fontSize="2xl" fontWeight={900}>
              {data.album.name}
            </Text>
            <Text>
              <Text as="span" mr={1} color={color}>
                Artist:
              </Text>
              {data.album.artist}
            </Text>

            <Text>
              <Text as="span" mr={1} color={color}>
                Category:
              </Text>
              {data.album.category}
            </Text>

            <Text>
              <Text as="span" mr={1} color={color}>
                Release Date:
              </Text>
              {data.album.releaseDate}
            </Text>
          </Flex>
        </Flex>
      ) : (
        ''
      )}
    </Flex>
  );
}

export default AlbumHero;
