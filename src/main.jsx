import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(

  <StrictMode> {/* <StrictMode> Development-only tool: detect potential problems like unsafe lifecycle methods or deprecated APIs. */}
    
    <ChakraProvider> {/* Context Provider: Injects Chakra’s theme & style context  */}
      <App />
    </ChakraProvider>

  </StrictMode>,
)
