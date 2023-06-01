import React, { useState } from "react";
import axios from 'axios';

import { ChakraProvider, Container, Button, Heading, Divider, Input, Select, Card, CardBody, FormLabel, HStack, Center, SimpleGrid } from "@chakra-ui/react";


const CreateGarden = ({ navigate }) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [postcode, setPostcode] = useState("");
  const [gardenType, setGardenType] = useState("");
  
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  
  const onChangeSize = (e) => {
    setSize(e.target.value);
  };

  const onChangePostcode = (e) => {
    setPostcode(e.target.value);
  };

  const onChangeGardenType = (e) => {
    console.log(e.target.value);
    setGardenType(e.target.value);
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    const garden = {
      title,
      description,
      size,
      postcode,
      gardenType
    };
    console.log(garden);
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .post('http://localhost:2000/gardens/add', garden, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
        .then((res) => {
          console.log(res.data);
          setTitle('');
          setDescription('');
          setSize('');
          setPostcode('');
          setGardenType('');
          navigate('/gardens'); //this can be changed to navigate back to the 'feed' when we add that component
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('No token found');
    }
  };

  return (
    <>
      <ChakraProvider>
        <Container pt={"100px"}>
          <Card variant="outline">
            <CardBody>
          

          <Heading color='teal' paddingBottom='50px' align='center' size='md'>List Your Garden</Heading>
          
          
          <form onSubmit={onSubmit}>
            <HStack >
              <FormLabel color='teal'>Title</FormLabel>
              <Input marginBottom='10px' placeholder='Title' id="title" type='text' value={ title } onChange={onChangeTitle} /> 
            </HStack>
            <HStack pt="6">
              <FormLabel color='teal'>Description</FormLabel>
              <Input marginBottom='10px' placeholder='Description' id="description" type='text' value={ description } onChange={onChangeDescription} /> 
            </HStack>
            <HStack pt="6">
              <FormLabel color='teal'>Size</FormLabel>
              <Input marginBottom='10px' placeholder='Size' id="size" type='text' value={ size } onChange={onChangeSize} /> 
            </HStack>
            <HStack pt="6">
              <FormLabel color='teal'>Postcode</FormLabel>
              <Input marginBottom='10px' placeholder='Postcode' id="postcode" type='text' value={ postcode } onChange={onChangePostcode} />
            </HStack>
            <HStack pt="6">
              <FormLabel color='teal'>Garden Type</FormLabel> 
              <Select placeholder='Type of Garden' type='text' value={ gardenType } onChange={onChangeGardenType}> 
            
            
            {/* this isnt working yet */}
              <option type='text'>Flower</option>
              <option type='text'>Vegetable</option>
              <option type='text'>Other type of garden</option>
            </Select>
            </HStack>
            <Center>
            <Button marginTop='10px' colorScheme="teal" variant="outline" onClick={onSubmit}>Submit</Button>
            </Center>
            
          </form>
          
          </CardBody>  
          </Card>
        </Container>
      </ChakraProvider>
    </>
  );
}

export default CreateGarden;
