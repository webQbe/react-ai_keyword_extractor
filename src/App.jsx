import { useState } from 'react'
import { Container, Box } from '@chakra-ui/react' // Chakra UI components
import Header from './components/Header'          // Rendered inside styled Container
import Footer from './components/Footer'   
import TextInput from './components/TextInput'       
import './App.css'

function App() {

  /* State Variables */
  const [ keywords, setKeywords ] = useState('')  // store output from OpenAI
  const [isOpen, setIsOpen] = useState(false)     // for toggling the modal
  const [ loading, setLoading ] = useState(false) // indicate keyword extraction progress
 
  /* Send POST request to OpenAI API using Chat Completion format */
  const extractKeywords = async (text) => {

    /* Start loading */
    setLoading(true)
    setIsOpen(true)

    /* Create request options */
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // OpenAI’s chat-based model
        // provide structured input for the assistant
        messages: [
                      { role: "system", content: "You are a keyword extraction assistant." },
                      { role: "user", content: text }
                  ],
        temperature: 0.5, // controls randomness; 0.5 is moderately creative
        max_tokens: 60    // limits reply length
      })
    }

   /* Fetch from OpenAI */
   try {
      // Send API request
      const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options)

      /* Extract & Handle Response */
      const json = await response.json()
      // Safely check the structure of the response using optional chaining
      const data = json.choices?.[0]?.message?.content?.trim() ?? 'No keywords found'
      console.log(data)
      setKeywords(data) // Store the assistant’s reply (extracted keywords)

    } catch (err) { /* Handle Errors and Loading State */

      console.error('Error fetching from OpenAI:', err)

    } finally {
        // Set loading back to false once the request is complete or errored
        setLoading(false) 
      
    }
    
  }

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

        <TextInput    /* Accept & handle user input */
            extractKeywords={ extractKeywords }
        /> 

        <Footer />    {/* Footer with OpenAI logo + “Powered By Open AI” text */}
      </Container>
    </Box>
  )
}

export default App
