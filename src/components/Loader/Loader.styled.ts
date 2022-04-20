import { makeStyles, CustomTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: CustomTheme) => (
  {
    loader: {
      position: 'relative',
      width: 60,
      height: 60,
      borderRadius: '50%',
      margin: 75,
      display: 'inline-block',
      verticalAlign: 'middle',
      border: '6px groove #7e57c2',
      transform: 'rotate(360deg)',
      transition: ' all 1s ease',
      animation: '$circle 1s ease-out alternate infinite',
    },
    inner: {
      border: '0px inset #9575cd',
      borderRadius: '50%',
      width: '100%',
      height: '100%',
      animation: '$border-zoom 1s ease-out alternate infinite',
    },
    center: {
      zIndex: 100,
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: theme.colors.background.main,
      borderRadius: '5',
      boxShadow: '0px 0px 30px 1px #103136 inset',
    },

    '@keyframes border-zoom': {
      '0%': {
        borderWidth: 0,
      },
      '100%': {
        borderWidth: 10,
      },
    },

    '@keyframes circle': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(-360deg)',
      },
    },
  }));

export { useStyles };
