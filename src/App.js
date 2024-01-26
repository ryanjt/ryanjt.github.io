import { ChakraProvider, SimpleGrid, Box } from '@chakra-ui/react'
import theme from './Themes/theme.fonts';
import './App.css';
import LeftSide from './Components/Left/LeftSide';
import RightSide from './Components/Right/RightSide';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <SimpleGrid columns={2} spacingX='5px'  minChildWidth="400px">
          <Box>
          <LeftSide />
          </Box>
         
            
            <Box>
            <RightSide />
            </Box>
          
        </SimpleGrid>
       

      </div>
    </ChakraProvider>
  );
}

export default App;
