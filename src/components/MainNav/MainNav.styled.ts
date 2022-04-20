import { makeStyles, CustomTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: CustomTheme) => ({
  navWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'visible',
    maxWidth: '15%',
    width: '100%',
    padding: '20px 0',
    backgroundColor: theme.colors.background.main,

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

  navText: {
    fontSize: 14,
    color: theme.colors.text.main,
  },

  navIcon: {
    color: theme.colors.iconColor.main,
  },
}));

export default useStyles;
