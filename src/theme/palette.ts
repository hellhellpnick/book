import { Theme, ThemeOptions } from '@material-ui/core/styles';

declare module '@material-ui/core/styles' {
 interface CustomTheme extends Theme {
  colors: {
    background: {
      main: string;
      primary: string;
      second: string;
    };

    backgroundArticle: {
      main: string;
    };

    text: {
      main: string;
      primary: string;
      second: string;
    };

    link: {
      main: string;
    };

    iconColor: {
      main: string;
      primary: string;
    };

    border: {
      main: string;
      primary: string;
    };

    shadow: {
      main: string;
      primary: string;
      second: string;
    };
  }
}

  interface CustomThemeOptions extends ThemeOptions {
    colors?: {
      background?: {
        main?: string;
        primary?: string;
        second?: string;
      };

      backgroundArticle?: {
        main?: string;
      };

      text?: {
        main?: string;
        primary?: string;
        second?: string;
      };

      link?: {
        main?: string;
      };

      iconColor?: {
        main?: string;
        primary?: string;
      };

      border?: {
        main?: string;
        primary?: string;
      };

      shadow?: {
        main?: string;
        primary?: string;
        second?: string;
      };
    }
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

const colors = {
  background: {
    second: '#2b2b2b',
    main: '#2d2e2e',
    primary: '#3c3c3c',
  },

  backgroundArticle: {
    main: '#282929',
  },

  text: {
    primary: '#979899',
    main: '#a4a5a6',
    second: '#1c92ca',
  },

  link: {
    main: '#1c82cc',
  },

  iconColor: {
    main: '#717273',
    primary: '#575859',
    second: '#3f4040',
  },

  border: {
    main: '#404242',
    primary: '#1c92ca',
  },

  shadow: {
    main: '#fff',
    primary: '#1c92ca',
    second: '#282929',
  },
};

export default colors;
