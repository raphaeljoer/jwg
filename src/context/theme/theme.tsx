import { extendTheme, ChakraTheme } from "@chakra-ui/react"

export const theme: ChakraTheme = extendTheme({
  styles: {
    global: {
      "html": {
        scrollBehavior: "smooth"
      }
    }
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false
  },
  fonts: {
    heading: 'Ubuntu, system-ui, sans-serif',
    body: 'Ubuntu, system-ui, sans-serif'
  },
  colors: {
    blue: {
      "50": '#BEF3F9',
      "100": '#90EAF4',
      "200": '#61E1F0',
      "300": '#33D9EB',
      "400": '#1BD4E9',
      "500": '#15C3D6',
      "600": '#13AEBE',
      "700": '#1098A7',
      "800": '#0E8390',
      "900": '#0C6E79'
    },
    orange: {
      "50": '#FBF1E9',
      "100": '#F6E2D5',
      "200": '#F0C5A8',
      "300": '#F0A775',
      "400": '#F5883D',
      "500": '#FF6700',
      "600": '#E05E06',
      "700": '#C2550A',
      "800": '#A54B0D',
      "900": '#8A410F'
    },
    ice: {
      "50": '#F8FAFA',
      "100": '#F3F7F7',
      "200": '#F0F5F6',
      "300": '#EDF2F2',
      "400": '#ECF2F4',
      "500": '#E5EBF0',
      "600": '#DFEAEC',
      "700": '#C9DBDE',
      "800": '#B6CED3',
      "900": '#96B9C0',
    },
    oilblue: {
      "10": '#ECF3F9',    //BlueWhite
      "50": '#667C8F',
      "100": '#567086',
      "200": '#47637B',
      "300": '#39576F',
      "400": '#2D4A62',
      "500": '#223D54',   //Default OilBlue
      "600": '#20374B',
      "700": '#142A3E',
      "800": '#132534',   //Black
      "900": '#071521'
    },
    yellow: {
      "50": '#FFF8E5',
      "100": '#FFF1CC',
      "200": '#FFEBB3',
      "300": '#FFE499',
      "400": '#FFDD80',
      "500": '#FFD666',
      "600": '#FFC933',
      "700": '#CC9600',
      "800": '#997000',
      "900": '#805D00',
      "1000": '#664B00',
      "1100": '#4D3800'
    },
    chocolate: {
      "50": '#F0ECE7',
      "100": '#E1DAD0',
      "200": '#BCA480',
      "300": '#B39870',
      "400": '#AA8C5F',
      "500": '#8D734B',
      "600": '#7B6441',
      "700": '#6B5738',
      "800": '#5A4930',
      "900": '#493C27',
      "1000": '#392E1E',
      "1100": '#2B2317'
    },
    green: {
      "50": '#EBF9F2',
      "100": '#D7F4E5',
      "200": '#AFE9CC',
      "300": '#87DEB2',
      "400": '#5FD399',
      "500": '#37C77F',
      "600": '#2CA066',
      "700": '#21784C',
      "800": '#1C6440',
      "900": '#165033'
    },
    pink:{
      "50": '#FFE5EF',
      "100": '#FFCCDE',
      "200": '#FF99BE',
      "300": '#FF669D',
      "400": '#FF337C',
      "500": '#FF005C',
      "600": '#CC0049',
      "700": '#990037',
      "800": '#80002E',
      "900": '#660025'
    }
  }
});

export default theme;
