import { IconButton, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import useAudio from 'hooks/useAudio';

const PlayerButton = ({ url }) => {
  const [toggle] = useAudio(url);
  const colorSec = useColorModeValue('gray.500', 'white');

  return (
    <IconButton
      p={0}
      size="lg"
      height={6}
      minWidth={5}
      variant="ghost"
      onClick={toggle}
      color={colorSec}
      _hover={{ backgroundColor: 'inherit' }}
      icon={<Icon color="inherit" mr={3} as={FaPlay} />}
    />
  );
};

export default PlayerButton;
