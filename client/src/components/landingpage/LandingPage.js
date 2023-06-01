import React from "react";
import { Link } from "react-router-dom";
import { ChakraProvider, Container, Button, Heading, Image, Box, Stack, Center, Divider, HStack } from "@chakra-ui/react";

const LandingPage = () => {

  return (
    <>
    <ChakraProvider>
      <Container>
        <Heading color='teal' paddingBottom='50px' align='center' size='md'>Welcome! </Heading>
        <Center>
        <HStack>
        <Container align='center' p='4'>   
          <Box boxSize='sm'>
          <Image src='https://images.cdn3.stockunlimited.net/preview1300/man-looking-away-while-gardening-at-plant-nursery_1930169.jpg' alt='Find a garden' />
          <Link to={"/gardens"}>
          <Center>
          <Button marginTop='10px' colorScheme='teal' variant='outline'> 
            Find a garden
          </Button>
          </Center>
          </Link>
          </Box>
        </Container>

        <Container align='center' p='4'>
          <Box boxSize='sm'>
            <Image src='https://www.rhs.org.uk/getmedia/80a72c91-1f32-42cc-9fd9-d434f4f0623f/Cottage-garden-hero.jpg?width=800&height=533' alt='Garden' />
            <Link to={"/add"}>
            <Center>
            <Button marginTop='10px' colorScheme='teal' variant='outline'> 
              List your garden
            </Button>
            </Center>
          </Link> 
          </Box>
        </Container>
        </HStack>
        </Center>
      
      </Container>  
    </ChakraProvider>
    </>
  );
}

export default LandingPage;