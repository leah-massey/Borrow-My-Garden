import { useState } from 'react';
import { Flex, Box, Text, HStack } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";

const MenuItem = ({ children, isLast, to = '/' }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  return (
    <Flex
      mb={8}
      p={8}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
    >
      <Box w="200px" pl={"30px"}>
        <Link to={"/"}>
        <img src={Logo} alt='Logo' width={150} height={250} />
        </Link>
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }} 
      >
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}   
        >
          <HStack spacing="20px">
      
            <Box bg="" p="10px">
            <Link to={"/"}>Home</Link>
            </Box>
            <Box bg="" p="10px">
              <Link to={"/gardens"}>Browse Gardens</Link>
            </Box>
            <Box bg="" p="10px">
              <Link to={"/add"}>List a Garden</Link>
            </Box>
            <Box bg="" p="10px">
              <Link to={"/login"} isLast>Logout</Link>
            </Box>

          </HStack>
          
        </Flex>
      </Box>
      
    </Flex>
  );
};

export default Header;