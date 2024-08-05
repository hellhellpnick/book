import { makeStyles, CustomTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: CustomTheme) => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
    overflow: 'hidden',
  },
  content: {
    overflowX: 'hidden',
    overflowY: 'visible',
    padding: '20px 10px',
    minHeight: '100vh',
    marginLeft: 250,
    backgroundColor: theme.colors.background.primary,
    width: '100%',

    '@media(max-width: 1024px)': {
      maxWidth: '100%',
      width: '100%',
      marginLeft: 0,
      paddingTop: 60,
    },
  },
}));

export default useStyles;
