import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(

  <StrictMode> {/* <StrictMode> Development-only tool: detect potential problems like unsafe lifecycle methods or deprecated APIs. */}
    
    <ChakraProvider /* Context Provider: Injects Chakra’s theme & style context  */
        value={defaultSystem} // pass the built-in system (prevents the runtime error)
        /* 
           Explicitly supply `defaultSystem` if you're using standard settings, or
           Provide a custom system when you've extended or modified the theme.
         */
     > 
      <App />
    </ChakraProvider>

  </StrictMode>,
)
