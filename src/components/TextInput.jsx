import { useState } from 'react'
import { Textarea, Button, useToast } from '@chakra-ui/react' 

const TextInput = () => {

    // Hold typed content into <Textarea>
    const [ text, setText ] = useState('') 

    // Set up toast instance
    const toast = useToast()

    /* submitText function */
    const submitText = () => {

        if (!text.trim()) { // If text field is empty (after trimming whitespace)

            /* Show toast notification */
            toast({
                title: 'Text field is empty',
                description: 'Please enter some text to extract keywords',
                status: 'error',  // red style
                duration: 5000,   // 5 seconds
                isClosable: false // Not closable by user
            })

        } else { 
                // If the input has text
                console.log(text)
        }
    }

  return (
    <>
        <Textarea 
            bg='blue.400'
            color='white'
            padding={4}
            marginTop={6}
            height={200}
            value={text} // bind textarea to the state
            // update text whenever user types
            onChange={ (e) => setText(e.target.value ) }
        />
        <Button
          bg='blue.500'
          color='white'
          marginTop={4}
          width='100%'
          _hover={{ bg: 'blue.700' }} // darken button on hover
          onClick={ submitText } // Run submitText() on click
        >
            Extract Keywords
        </Button>
    </>
  )
}

export default TextInput