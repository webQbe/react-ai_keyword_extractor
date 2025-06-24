import { useState } from 'react'
import { Textarea, Button } from '@chakra-ui/react'

const TextInput = () => {

    // Hold typed content into <Textarea>
    const [ text, setText ] = useState('') 

    const submitText = () => {
        console.log(text) // logs current text to console
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