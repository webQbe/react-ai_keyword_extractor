import { Container, Box } from '@chakra-ui/react' // Chakra UI components
import Header from './components/Header'          // Rendered inside styled Container
import Footer from './components/Footer'   
import TextInput from './components/TextInput'       
import './App.css'

function App() {

  return (
    <Box             // wrapper component like <div> but with props for styles
      bg='blue.600' 
      color='white' 
      minH='100vh'      // allow growing beyond viewport
      paddingTop={130}
    >
      <Container   // center and constrain content horizontally
        maxW='3xl' // set max width to Chakra's predefined 3xl value (about 48rem or 768px)
        centerContent
      > 
        <Header />    {/* Handles branding & intro text */}
        <TextInput /> {/* Accept & handle user input */}
        <Footer />    {/* Footer with OpenAI logo + “Powered By Open AI” text */}
      </Container>
    </Box>
  )
}

export default App
