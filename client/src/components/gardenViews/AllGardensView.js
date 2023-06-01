import React, { useState, useEffect } from "react";
import axios from "axios";
import Garden from "../garden/Garden";
import { ChakraProvider, Heading, Container } from "@chakra-ui/react";


const AllGardensView = ({ navigate }) => {
  const [gardens, setGardens] = useState([]);
  const [token, setToken] = useState(
    window.localStorage.getItem("token")
  );

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:2000/gardens", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (response) => {
          const data = response.data;
          window.localStorage.setItem("token", data.token);
          setToken(window.localStorage.getItem("token"));
          setGardens(data.gardens);
        })
        .catch((error) => {
          console.error("Error fetching gardens:", error);
        });
    }
  }, []);

  return (
    <>
    <ChakraProvider>
        <Container>
          
          <Heading color='teal' paddingBottom='50px' align='center' size='md'>Choose Your Garden</Heading>
          </Container>
          </ChakraProvider>
      {gardens.map((garden) => (
        <div key={garden._id}>
          <Garden
            garden={{ ...garden }}
            detailed={false}
          />
        </div>
      ))}
    </>
  );
};
export default AllGardensView;