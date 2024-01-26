import { extendTheme, defineStyle, defineStyleConfig } from '@chakra-ui/react'
import '@fontsource/inter';
import { cardTheme } from './card.theme';
const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
    
  },
  colors: {
    brand: {
      100: '#56A3A6',
   
      200: '#9BDEAC',
      800: '#F5FBEF'
    }
  },
  components:{
    Card: cardTheme
  }
})



export default theme