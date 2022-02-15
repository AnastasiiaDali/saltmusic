import { Box, Heading, Flex, useColorModeValue, useColorMode, Button } from '@chakra-ui/react';
import SideMenu from 'components/SideMenu';
import { MdDarkMode, MdWbSunny } from 'react-icons/md';

function Layout({ children, title }) {
  const bgColor = useColorModeValue('white', '#060018');
  const color = useColorModeValue('gray.500', 'gray.100');
  const boxShadow = useColorModeValue(
    '20px 20px 60px #bebebe, -20px -20px 60px #ffffff;',
    'rgba(200, 200, 170, 0.25) 0px 30px 40px -8px, rgba(200, 200, 200, 0.3) 0px 18px 26px -8px;'
  );

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      overflow="hidden"
      maxWidth="1480px"
      position="relative"
      boxShadow={boxShadow}
      height="calc(100vh - 40px)"
      my={{ base: '0', lg: '20px' }}
      borderRadius={{ base: '0', lg: '20px' }}
      border="1px solid rgba(255,255,255, 0.2)"
      mx="auto">
      <SideMenu />

      <Box
        overflow="scroll"
        position="relative"
        px={{ base: 3, lg: 10 }}
        height="calc(100vh - 40px)"
        width={{ base: '100%', lg: '80%' }}
        pb={{ base: 20, lg: 4 }}>
        <Heading
          pb={3}
          pt={4}
          top={0}
          left={0}
          zIndex={3}
          width="100%"
          fontSize="3xl"
          position="sticky"
          fontWeight="900"
          bgColor={bgColor}
          color={color}>
          {title}
        </Heading>
        {children}
      </Box>
      <Button
        zIndex={4}
        top="16px"
        position="absolute"
        variant="outline"
        right={{ base: '20px', lg: '40px' }}
        onClick={toggleColorMode}>
        {colorMode === 'light' ? <MdDarkMode fontSize="24px" /> : <MdWbSunny fontSize="24px" />}
      </Button>
    </Flex>
  );
}

export default Layout;
