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
    marginLeft: 250,
    backgroundColor: theme.colors.background.primary,
    width: '100%',
  },
}));

export default useStyles;
