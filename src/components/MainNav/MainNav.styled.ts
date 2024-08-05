import { makeStyles, CustomTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: CustomTheme) => ({
  navWrapper: {
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    minHeight: '100vh',
    height: '100%',
    overflow: 'visible',
    maxWidth: '250px',
    width: '100%',
    padding: '20px 0',
    backgroundColor: theme.colors.background.main,
    transition: 'all 0.2s ease',
    zIndex: 10,

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
  },

  navHidden: {
    transform: 'translateX(-100%)',
  },

  navTitle: {
    fontSize: '24px',
    color: theme.colors.text.main,
    fontWeight: 500,
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
  },

  nav: {
    width: '100%',
  },

  navSubtitle: {
    fontSize: 16,
    color: theme.colors.text.primary,
  },

  navIcon: {
    color: theme.colors.iconColor.main,
    transition: 'all 0.2s ease',
  },

  navText: {
    paddingLeft: 15,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: 14,
    color: theme.colors.text.main,
  },

  arrowEvent: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 20,
    right: -40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background.main,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
}));

export default useStyles;
