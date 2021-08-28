import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
  body: 'Proxima Nova, sans-serif',
  heading: 'Platform Regular, sans-serif',
  mono: 'Proxima Nova, sans-serif',
}

const breakpoints = createBreakpoints({
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1366px',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
    dullTeal: {
      50: '#e5f8f8',
      100: '#cde3e3',
      200: '#b0cece',
      300: '#93baba',
      400: '#76a6a6',
      500: '#5c8c8c',
      600: '#476e6e',
      700: '#314f4f',
      800: '#193030',
      900: '#001212',
    },
  },
  fonts,
  breakpoints,
  icons: {
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: '0 0 3000 3163',
    },
  },
})

export default theme
