import React from "react";
import { ChakraProvider, Container, Button, Heading, Divider, Card, CardBody, CardFooter, Text, Stack, } from "@chakra-ui/react";

const Messages = () => {
  return (
    <>
    <ChakraProvider>
      <Container>
        
        <Heading color='teal' paddingBottom='50px' align='center' size='md'>Messages</Heading>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            marginBottom='50px'
            
        >

          <Stack>
          <CardBody>
          <Heading paddingBottom='30px' size='md'>You are messaging userName</Heading>
          <Text paddingBottom='20px '>Some hard coded text here as a placeholder. Hi Hello!</Text>
          <Button colorScheme='teal' variant='outline'>
            Send
          </Button>
          </CardBody>
          </Stack>
          
          </Card>
          <Card align='center'
          variant='unstyled'>
            <CardBody>
            <CardFooter>
            {/* <Link to={"/profilepage"}> */}
              <Button colorScheme='teal' variant='outline'> 
                Back to my profile page
              </Button>
          {/* </Link>   */}
          </CardFooter>
            </CardBody>
          </Card>
      </Container>
    </ChakraProvider>
    </>
  );
}

export default Messages;