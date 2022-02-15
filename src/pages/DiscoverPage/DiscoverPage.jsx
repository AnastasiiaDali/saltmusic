import { useSelector } from 'react-redux';
import { favoriteAlbumsSelector, categoriesSelector } from 'store/slices/albumsSlice';
import { Link } from 'react-router-dom';

import { Flex, Heading, Button, useColorModeValue } from '@chakra-ui/react';
import AlbumsSongs from 'components/AlbumsSongs';
import AlbumSlider from 'components/AlbumSlider';
import Layout from 'components/Layout';
import DarkWave from 'assets/images/discover_bg.svg';
import Hero from 'components/Hero';

function DiscoverPage() {
  const favoriteSongs = useSelector(favoriteAlbumsSelector);
  const categories = useSelector(categoriesSelector);
  const color = useColorModeValue('gray.500', 'gray.100');

  return (
    <Layout title="Discover Best Music">
      <Hero image={DarkWave} title="SaltMusic" />

      <AlbumSlider />
      <Heading py={4} fontSize="md" fontWeight="900" color={color}>
        CATEGORIES
      </Heading>
      <Flex py={4} gridGap="8px 12px" wrap="wrap">
        {categories?.map((category) => (
          <Button
            as={Link}
            key={category}
            to={`/browse`}
            state={{ category }}
            variant="filterOption">
            {category}
          </Button>
        ))}
      </Flex>
      {favoriteSongs && <AlbumsSongs songs={favoriteSongs} />}
    </Layout>
  );
}

export default DiscoverPage;
