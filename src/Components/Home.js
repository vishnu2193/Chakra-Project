import React, { useContext } from "react";
import NewHomeContext from "../Context/NewHomeContext";

const Home = () => {
  const { Homedata, loading } = useContext(NewHomeContext);
  console.log(Homedata);
  return <div>My Home</div>;
};

export default Home;
