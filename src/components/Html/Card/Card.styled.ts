import { makeStyles, CustomTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: CustomTheme) => ({
  title: {
    fontSize: 20,
    marginBottom: 5,
    color: theme.colors.text.primary,
    textTransform: 'uppercase',
  },

  list: {
    columns: 3,
    marginBottom: 20,
  },

  listLink: {
    fontSize: 16,
    color: theme.colors.text.main,
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    width: '100%',

    '@media(min-width: 1024px)': {
      '&:hover': {
        color: theme.colors.text.primary,
      },
    },
  },
}));

export default useStyles;
