import { ThemeOptions } from "@mui/material"

const BaseTheme: ThemeOptions = {
  palette: {},
  typography: {
    fontFamily: ['Roboto', 'Arial'].join(','),
    h1: {
      fontSize: '2.5rem'
    },
    h2: {
      fontSize: '2rem'
    },
    h3: {
      fontSize: '1.5rem'
    },
    h4: {
      fontSize: '1.375rem'
    },
    h5: {
      fontSize: '1.25rem'
    },
    h6: {
      fontSize: '1.125rem'
    },
    button: {
      fontFamily: 'Roboto, Arial',
      textTransform: 'none'
    }
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536
    }
  },
  zIndex: {
    drawer: 1000
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*::-webkit-scrollbar': {
          width: '0.12em',
          height: '3px'
        },
        '*::-webkit-scrollbar-thumb': {
          borderRadius: '20px',
          backgroundColor: '#eee',
          height: '3px',
          opacity: 0.25
        }
      }
    },
    MuiAppBar:{
      defaultProps:{
        elevation: 0
      }
    }
  },
}

export default BaseTheme
