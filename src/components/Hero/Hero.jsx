import { Image, Flex, Heading, useColorModeValue } from '@chakra-ui/react';

function Hero({ image, title }) {
  const textShadow = useColorModeValue(
    '0px 0px 15px #7B61FF, 0px 0px 10px #7B61FF, 0px 0px 4px #7B61FF',
    '0px 0px 30px #7B61FF, 0px 0px 15px #7B61FF, 0px 0px 4px #7B61FF'
  );

  return (
    <Flex borderRadius="8px" align="center" height="30vh" overflow="hidden">
      <Heading
        left="8%"
        zIndex={2}
        color="white"
        position="absolute"
        textShadow={textShadow}
        fontSize={{ base: '4xl', lg: '5xl' }}
        top="30%">
        {title}
      </Heading>
      <Image minHeight="30vh" objectFit="cover" src={image} alt="hero picture" />
    </Flex>
  );
}

export default Hero;
