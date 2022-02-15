import { MdFavorite } from 'react-icons/md';
import { useColorModeValue } from '@chakra-ui/react';

const FavoriteButton = ({ handleClick, clicked }) => {
  const favColor = useColorModeValue('rgba(0,0,0,0.4)', 'rgba(255,255,255,0.4)');

  return (
    <MdFavorite
      size={20}
      cursor="pointer"
      onClick={handleClick}
      color={clicked ? 'red' : favColor}
    />
  );
};

export default FavoriteButton;
