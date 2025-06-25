import { useState } from 'react'
import {
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    CircularProgress,
    Container
} from '@chakra-ui/react'

const KeywordsModal = ({ keywords, loading, isOpen, closeModal }) => {

    // Hold state for the button label
    const [copied, setCopied] = useState(false)

    /* Handle copy button click event */
    const handleCopy = () => {
        // Copy keywords to clipboard
        navigator.clipboard.writeText(keywords || '') 
        .then(() => {
            setCopied(true) // Update state
            setTimeout(() => setCopied(false), 2000) // reset after 2 seconds
        })
        .catch(err => { // Handle errors
            console.error('Copy failed', err)
        })
    }

  return (
    <>
        <Modal isOpen={ isOpen } onClose={ closeModal }>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Keywords
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody display='flex' alignItems='center' justifyContent='center'>
                    { loading ? ( 
                        // While loading is true, show spinner
                        <CircularProgress 
                            isIndeterminate // continuous spinning circle — no progress value
                            color='blue.300' 
                        />
                    ) : ( // Once response is received and loading is false
                        <Container textAlign="center">
                            <Text fontWeight="bold"  color="blue.700">
                                { keywords }
                            </Text>
                            {/* Copy to clipboard button */}
                            <Button size="sm" mt={4} 
                                onClick={handleCopy} // Handle click event
                            >
                                { // Set button label
                                    copied ? 'Copied' : 'Copy to Clipboard'
                                }
                            </Button>
                        </Container>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={closeModal} >
                      Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
  )
}

export default KeywordsModal