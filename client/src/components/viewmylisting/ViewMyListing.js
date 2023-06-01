import React from "react";
import { ChakraProvider, Container, Button, Heading, Divider, Card, CardBody, CardFooter, Text, Stack, Image } from "@chakra-ui/react";

const ViewMyListing = () => {
  return (
    <>
    <ChakraProvider>
      <Container>
        
        <Heading color='teal' paddingBottom='50px' align='center' size='md'>My Listing</Heading>
        
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='unstyled'
        >

          <Stack>
          <CardBody>
          <Heading size='md'>Lovely big garden in Hackney.</Heading>
          <Text pt='2' fontSize='sm'>
          South facing garden that I sadly don't have time to tend.
          The soil is heavy London clay (obviously!), so it doesn't
          drain well. I am more than happy for you to take things out
          and put things in, and I have a garden waste bag.
          </Text>

          <Button colorScheme='teal' variant='outline'>
            Connect
          </Button>
          </CardBody>
          </Stack>
          <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://www.theenglishhome.co.uk/wp-content/uploads/2016/03/J3C0304.jpg'
    alt='Hackney garden'
    borderRadius='lg'
  />
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

export default ViewMyListing;