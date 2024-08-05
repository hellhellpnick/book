import { makeStyles, CustomTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: CustomTheme) => ({
  center: {
    position: 'relative',
    maxWidth: '980px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',

    '@media(max-width: 1024px)': {
      maxWidth: '100%',
      width: '100%',
    },
  },

  text: {
    fontSize: 20,
    fontWeight: 500,
    color: theme.colors.text.primary,
    marginBottom: 20,
    lineHeight: 1.5,
    letterSpacing: 1.2,
    textAlign: 'justify',
  },

  title: {
    fontSize: 30,
    fontWeight: 500,
    color: theme.colors.text.main,
    marginBottom: 30,
    textTransform: 'uppercase',
  },

  img: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.2,
    color: theme.colors.text.main,
    backgroundColor: theme.colors.background.second,
    padding: 20,
    marginBottom: 15,
    overflow: 'hidden',

    '@media(max-width: 1024px)': {
      maxWidth: '100%',
      width: '100%',
    },
  },

  wrapperPre: {
    position: 'relative',
  },

  imgSlider: {
    position: 'relative',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.2,
    color: theme.colors.text.main,
    backgroundColor: theme.colors.background.primary,
    padding: 20,
    marginBottom: 15,
    overflow: 'hidden',

  },

  iconCopy: {
    position: 'absolute',
    top: -40,
    right: -40,
    zIndex: 2,
    transition: 'all 0.2s ease',

    '@media(min-width: 1024px)': {
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },

    '@media(max-width: 1024px)': {
      top: 10,
      right: 10,
    },
  },

  link: {
    fontSize: 20,
    color: theme.colors.text.second,
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  },

  showSlider: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: theme.colors.background.second,
    position: 'fixed',
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    minHeight: '100vh',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,

    '& .slick-track': {
      display: 'flex !important',
    },

    '&::-webkit-scrollbar': {
      width: 10,
      borderRadius: 10,
    },

    '&::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(255, 255, 255, 0.01)',
    },

    '& ::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(255, 255, 255, 0.11)',
      borderRadius: 10,
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },

    '@media(max-width: 1024px)': {
      padding: 0,
    },
  },

  slider: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '90%',
    width: '100%',
    padding: 20,

    '@media(max-width: 1024px)': {
      maxWidth: '100%',
    },
  },

  arrowNext: {
    position: 'fixed',
    bottom: 40,
    right: 40,
    zIndex: 2,
  },

  arrowPrev: {
    position: 'fixed',
    bottom: 40,
    right: 120,
    zIndex: 2,
  },

  alert: {
    position: 'fixed',
    right: 20,
    bottom: 20,
    zIndex: 100,
  },

  iconClose: {
    position: 'fixed',
    top: 20,
    right: 40,
    zIndex: 2,

    '@media(max-width: 1024px)': {
      right: 20,
    },
  },
}));

export default useStyles;
