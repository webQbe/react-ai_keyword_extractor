import { Heading, Image, Text } from '@chakra-ui/react'
import logo from '../assets/light-bulb.svg' // becomes URL for <Image>'s src

const Header = () => {
  return (
    <>
        {/* Show logo image with a width of 100px and bottom margin */}
        <Image src={logo} alt='logo' width={100} marginBottom='1rem' />

        {/* Display white-colored title */}
        <Heading color='white' marginBottom='1rem'>
            AI Keyword Extractor
        </Heading>

        {/* Smaller centered description text */}
        <Text fontSize={14} textAlign='center'>
            Paste in your text below and we'll extract the keywords for you
        </Text>
    </>
  )
}

export default Header