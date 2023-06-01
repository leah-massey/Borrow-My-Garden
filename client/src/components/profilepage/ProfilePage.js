import React from "react";
import { ChakraProvider, 
  Container, 
  Button, 
  Heading, 
  FormControl,
  Input,
  FormLabel,
  Stack, 
  Card, 
  CardBody,
  Text,
  Image } from "@chakra-ui/react";

const ProfilePage = () => {

return (
  <>
  <ChakraProvider>
    <Container>
      
      <Heading color='teal' paddingBottom='50px' align='center' size='md'>My Profile</Heading>
      <Button colorScheme='teal' variant='outline'>
        View messages
      </Button>
      <Stack paddingY='20px'>
      <Heading paddingTop='50px' size='md'>My Garden</Heading>
      <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='unstyled'
        >

          <Stack>
          <CardBody>
          <Text paddingBottom='20px' pt='2' fontSize='sm'>
          Unused raised beds.
          </Text>
          <Button colorScheme='teal' variant='outline'>
        More details
      </Button>
      </CardBody>
      </Stack>
          <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://asenhoradomonte.com/wp-content/uploads/2014/06/new_raised_beds.jpg'
    borderRadius='lg'
  />
 
      
      </Card>
      <Heading paddingTop='50px' size='md'>Update your details</Heading>
      <Card variant='unstyled'>
          <CardBody>
          
          <FormControl paddingY='20px'>
            <FormLabel>New username</FormLabel>
            <Input placeholder='New username' type='text' />
            <FormLabel>New email address</FormLabel>
            <Input placeholder='New email address' type='email' />
            <FormLabel>New password</FormLabel>
            <Input placeholder='New password' type='password' />
          </FormControl>
          <Button colorScheme='teal' variant='outline'>
            Save
          </Button>
          </CardBody>
        </Card>

      </Stack>
    </Container>
  </ChakraProvider>
  </>
);
}
export default ProfilePage;