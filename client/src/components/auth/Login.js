import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {
  ChakraProvider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
  Image, Card, Divider, Center
} from '@chakra-ui/react';
import Logo from "./logo-login.png";
import NavBarFalse from '../navbarfalse/NavBarFalse';

const Login = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:2000/tokens', { email, password }); //only thing changed here

      if (response.status !== 201) {
        console.log("yay");
        navigate('/login');
      } else {
        console.log("oops");
        window.localStorage.setItem("token", response.data.token);
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <ChakraProvider>
      <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Card maxW='md' boxShadow="0px 0px 10px gray" >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} minW={'sm'} py={6} px={6}>
            <Stack align={'center'}>
              <Image src={Logo} alt='logo' height={100} width={150} my={4} />
            </Stack>              
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" value={email} onChange={handleEmailChange} />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" value={password} onChange={handlePasswordChange} />
                </FormControl>
                <Stack spacing={8}>
                  <Button my={4} py={4} colorScheme='teal' type="submit">
                    Log in
                  </Button>
                </Stack>
              </Stack>
            </form>
            <Divider />
            <Link to={"/signup"}>
              <Center>
            <Button my={4} _hover={{bg: 'blue.500'}}>
              Create new account
                </Button>
                </Center>
            </Link>
          </Stack>
        </Card>
        </Flex>
    </ChakraProvider>        
  );
}

export default Login;

