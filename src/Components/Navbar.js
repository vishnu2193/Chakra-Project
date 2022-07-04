import React, { useContext } from "react";
import NewHomeContext from "../Context/NewHomeContext";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  ButtonGroup,
  Button
} from "@chakra-ui/react";

const Navbar = () => {
  const { Homedata, loading } = useContext(NewHomeContext);
 
  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap="2" bg="green.400">
        <Box p="6">
          <Heading size="md">My App</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="Black" variant="ghost">
            Cart({Homedata.length})
          </Button>
          <Button colorScheme="teal">Sign Up</Button>
          <Button colorScheme="teal">Log in</Button>
          <Spacer />
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default Navbar;
