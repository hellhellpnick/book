import { makeStyles, CustomTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: CustomTheme) => ({
  center: {
    maxWidth: '980px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    fontSize: 24,
    color: theme.colors.text.main,
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 18,
    color: theme.colors.text.main,
    marginBottom: 20,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '100%',
    marginBottom: 20,
  },

  info: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '47%',
    width: '100%',
  },

  input: {
    outline: 'none',
    border: `1px solid ${theme.colors.text.main}`,
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
    width: '100%',

    '& input': { color: theme.colors.text.main },

    '& label': {
      color: `${theme.colors.text.main} !important`,
      backgroundColor: theme.colors.background.primary,
      top: -5,
      padding: 5,
    },

    '& fieldset': {
      borderColor: 'transparent !important',
    },
  },

  boxSearch: {
    display: 'flex',
    flexDirection: 'row',
  },

  btn: {
    minWidth: 100,
    fontSize: 16,
    fontWeight: 600,
    borderColor: theme.colors.border.primary,
    color: theme.colors.text.second,
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
  },

  public: {
    maxWidth: '49%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  card: {
    maxWidth: '49%',
    width: '100%',
    backgroundColor: theme.colors.background.main,
    padding: '10px',
    borderRadius: 5,
  },

  data: {
    fontSize: 14,
    color: theme.colors.text.main,
  },

  links: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  linksText: {
    fontSize: 14,
    textAlign: 'center',
    color: theme.colors.text.main,

    '& > i': {
      color: theme.colors.iconColor.main,
      marginRight: 10,
    },
  },

  boxContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
}));

export default useStyles;
