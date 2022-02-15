export default {
  variants: {
    filterOption: {
      borderRadius: '20px',
      boxShadow: 'md',
      bgColor: 'purple.500',
      color: 'white',
      border: '1px solid',
      _hover: {
        bgColor: 'purple.500',
        color: 'white'
      },
      _focus: {
        boxShadow: 'none'
      },
      borderColor: 'purple.500',
      height: 8
    },
    menu: {
      fontSize: '20px',
      width: '-webkit-fill-available',
      _hover: { backgroundColor: 'none' },
      height: { base: '100%', lg: '48px' },
      borderRadius: { base: '0', lg: '8px' },
      justifyContent: { base: 'center', lg: 'left' },
      flexDirection: { base: 'column', lg: 'row' }
    }
  }
};
