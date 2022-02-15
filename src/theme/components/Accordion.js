export default {
  variants: {
    search: {
      panel: {
        display: 'flex',
        overflow: 'scroll',
        maxHeight: 'calc(100vh - 260px)',
        flexDirection: 'column',
        gap: '20px',
        width: '100%',
        px: 2
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        border: 'none'
      }
    },
    menu: {
      panel: {
        fontWeight: 'bold',
        fontSize: '16px',
        p: 0
      },
      container: {
        border: 'none'
      },
      button: {
        fontWeight: '600',
        fontSize: 20,
        justifyContent: 'left'
      }
    }
  }
};
