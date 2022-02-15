import { Flex } from '@chakra-ui/react';
import AlbumItem from 'components/AlbumItem/AlbumItem';

const FilteredAlbums = ({ filteredAlbums }) => {
  return (
    <Flex
      wrap="wrap"
      height="auto"
      p={{ base: '8px', lg: '20px' }}
      justify={filteredAlbums.length > 4 ? 'space-around' : 'center'}
      gridGap="12px">
      {filteredAlbums.map((album) => (
        <AlbumItem album={album} key={album.id} />
      ))}
    </Flex>
  );
};

export default FilteredAlbums;
