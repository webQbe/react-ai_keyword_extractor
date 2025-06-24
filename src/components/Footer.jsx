import { Box, Image, Text, Flex } from '@chakra-ui/react'
import logo from '../assets/openai.png' // displays OpenAI logo 

const Footer = () => {
  return (
    <Box 
        marginTop={50} // Add space between footer and content above it
    >
        <Flex /* Chakra UI layout component for flexbox */
            justifyContent='center' // horizontally
            alignItems='center'     // vertically
        >
            <Image src={logo} 
                marginRight={1} // add spacing between logo & text
            />
            {/* Small caption */}
            <Text fontSize={12}>
                Powered By Open AI
            </Text>
        </Flex>
    </Box>
  )
}

export default Footer