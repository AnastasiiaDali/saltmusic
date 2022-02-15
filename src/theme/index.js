import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import Button from 'theme/components/Button';
import Accordion from 'theme/components/Accordion';

export const PrimaryColor = '#7B61FF';
export const PrimaryText = '#3C3C3C';
export const SecondaryText = 'rgba(255, 255, 255, 0.4)';
export const BackgroundMain = '#060018';
export const White = '#FFFFFF';
export const Black = '#000000';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const theme = extendTheme({
  modes: {
    dark: {
      background: '#000'
    }
  },
  fonts: {
    heading: 'Kabel-Black, sans-serif',
    body: 'Lato'
  },
  colors: {
    purple: {
      500: PrimaryColor,
      900: BackgroundMain
    },
    gray: {
      500: PrimaryText,
      100: SecondaryText
    },
    white: White,
    black: Black
  },
  components: {
    Button,
    Accordion
  },
  styles: {
    global: (props) => ({
      'audio::-webkit-media-controls-panel': {
        backgroundColor: '#DCD6FF'
      },
      body: {
        background: mode(White, BackgroundMain)(props)
      },
      '::-webkit-scrollbar': {
        width: 0,
        background: 'transparent'
      },
      a: {
        textDecoration: 'none !important'
      }
    })
  },
  config
});

export default theme;
