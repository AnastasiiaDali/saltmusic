import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { categoriesSelector } from 'store/slices/albumsSlice';

import {
  Box,
  Heading,
  Stack,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Divider,
  useColorModeValue
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { MdFavorite } from 'react-icons/md';
import { HiHome } from 'react-icons/hi';
import { BiCategory, BiSearchAlt } from 'react-icons/bi';
import { GiSoundWaves } from 'react-icons/gi';

const buttons = [
  {
    id: 0,
    title: 'Discover',
    icon: HiHome,
    link: '/'
  },
  {
    id: 1,
    title: 'Browse',
    icon: BiSearchAlt,
    link: '/browse'
  },
  {
    id: 2,
    title: 'Favorites',
    icon: MdFavorite,
    link: '/favorite'
  }
];
function SideMenu() {
  const categories = useSelector(categoriesSelector);
  const { pathname } = useLocation();
  const colorSec = useColorModeValue('gray.500', 'white');
  const bgColor = useColorModeValue('white', 'purple.900');
  const borderColor = useColorModeValue('rgba(0,0,0, 0.2)', 'rgba(255,255,255, 0.2)');
  const divider = useColorModeValue('rgba(0, 0, 0, 0.5)', 'rgba(255, 255, 255, 0.2)');

  return (
    <>
      <Box
        zIndex={4}
        color={colorSec}
        bottom={0}
        borderRight="1px solid"
        borderColor={borderColor}
        width={{ base: '100vw', lg: '20%' }}
        position={{ base: 'fixed', lg: 'initial' }}
        height={{ base: '64px', lg: '100vh' }}>
        <Heading display={{ base: 'none', lg: 'block' }} color="purple.500" py={4} align="center">
          <Link to="/">SaltMusic</Link>
        </Heading>
        <Stack
          spacing={{ base: 0, lg: 2 }}
          height={{ base: '100%', lg: 'auto' }}
          direction={{ base: 'row', lg: 'column' }}
          justify={{ base: 'space-around', lg: 'baseline' }}
          p={{ base: 0, lg: 5 }}>
          {buttons.map((button) => (
            <Button
              as={Link}
              key={button.id}
              to={button.link}
              color={pathname === button.link ? 'white' : colorSec}
              bgColor={pathname === button.link ? 'purple.500' : bgColor}
              variant="menu">
              <Icon mr={{ base: 0, lg: 3 }} as={button.icon} />
              <Text as="span" fontSize={{ base: '14px', lg: '20px' }}>
                {button.title}
              </Text>
            </Button>
          ))}
          <Box display={{ base: 'none', lg: 'block' }}>
            <Accordion defaultIndex={[0]} variant="menu" allowToggle border="none">
              <AccordionItem>
                <AccordionButton color={colorSec}>
                  <Icon mr={3} as={BiCategory} />
                  Categories
                </AccordionButton>
                <Box height="calc(100vh - 424px)" overflowY="scroll" my={4} px={4}>
                  <AccordionPanel>
                    <Divider borderColor={divider} borderWidth="0.5px" mb={4} />
                    {categories?.map((category, index) => (
                      <Link key={index} state={{ category }} to={`/browse`}>
                        <Text py={2}>
                          <Icon mb="-3px" mr={3} as={GiSoundWaves} />
                          {category}
                        </Text>
                      </Link>
                    ))}
                  </AccordionPanel>
                </Box>
              </AccordionItem>
            </Accordion>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default SideMenu;
