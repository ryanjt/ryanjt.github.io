import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import LeftSide from './Components/Left/LeftSide';
import RightSide from './Components/Right/RightSide';
function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <div className="row">
        <div className="column">
          <LeftSide/>
        </div>
        <div className="column">
        <RightSide/>
        </div>
      </div>
     
    </div>
    </ChakraProvider>
  );
}

export default App;
