import React, { useContext } from "react";
import { Image, Progress } from "@chakra-ui/react";
import NewHomeContext from "../Context/NewHomeContext";

const Home = () => {
  const { Homedata, loading, error } = useContext(NewHomeContext);

  if (loading) {
    return (
      <>
        <Progress value={20} size="xs" colorScheme="orange" isIndeterminate />
      </>
    );
  }
  if (error) {
    return <h3>Network error</h3>;
  }
  return (
    <>
      {Homedata.map((products, i) => {
        const { image, name, _id, price } = products;

        return (
          <div key={_id}>
            <Image
              src={image[0].image}
              alt={name}
              height="150px"
              width="150px"
            />

            <h3>{name}</h3>
            <h3>{price}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Home;
