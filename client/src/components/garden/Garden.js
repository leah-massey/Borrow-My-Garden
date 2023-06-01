import React from "react";
import {
  ChakraProvider,
  Container,
  Link,
  Button,
  Card,
  CardBody,
  UnorderedList,
  ListItem,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom';


const Garden = ({ garden, detailed }) => {
  return (
    <ChakraProvider>
      <Container className="garden-box" data-cy="garden" key={garden._id}>
        <Card marginY='30px' variant='elevated'>
          <CardBody>
            <Text fontWeight='medium' marginBottom='3px' className="title">{garden.title}.</Text>
            <Text marginBottom='10px' pt="2" fontSize="sm">
              {garden.description}
            </Text>
            {detailed && (
              <>
                <UnorderedList marginBottom='15px'>
                <ListItem><Text pt="2" fontSize="sm">Garden size: {garden.size}
                </Text></ListItem>
                <ListItem><Text pt="2" fontSize="sm">Garden postcode: {garden.postcode}
                </Text></ListItem>
                <ListItem><Text pt="2" fontSize="sm">Garden Type: {garden.gardenType}
                </Text></ListItem>
                </UnorderedList>
                <Button margin='15px' colorScheme="teal" variant="outline">Connect</Button>
              </>
            )}
            <Image src='https://www.stevedimmockgardens.co.uk/wp-content/uploads/2018/06/B13.jpg' alt='Find a garden' />
          </CardBody>
          {detailed ? null : (
              <Link as={ReactRouterLink} to={`/gardens/${garden._id}`}>
                <Button margin='15px' colorScheme="teal" variant="outline">
                  More Details
                </Button>
              </Link>
          )}
              <Link as={ReactRouterLink} to={`/profilechat`}>
              </Link>
        </Card>
      </Container>
    </ChakraProvider>
  );
};

export default Garden;