import { makeStyles, CustomTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: CustomTheme) => ({
  center: {
    position: 'relative',
    maxWidth: '980px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  },

  text: {
    fontSize: 20,
    fontWeight: 500,
    color: theme.colors.text.main,
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
  },

  hiddenSlider: {
    display: 'none',
  },

  slider: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '90%',
    width: '100%',
    padding: 20,
  },

  arrowNext: {
    position: 'absolute',
    bottom: 40,
    right: 40,
  },

  arrowPrev: {
    position: 'absolute',
    bottom: 40,
    right: 120,
  },

  iconClose: {
    position: 'absolute',
    top: 20,
    right: 40,
    zIndex: 2,
  },
}));

export default useStyles;
