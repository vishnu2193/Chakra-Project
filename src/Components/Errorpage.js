import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Errorpage = () => {
  return (
    <>
      <h2> Page Not found</h2>

      <Link to="/">
        <Button colorScheme="teal" size="lg">
          Go back Home
        </Button>
      </Link>
    </>
  );
};

export default Errorpage;
