import React from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
import Background from "./assets/arcade.jpg";
import GameImages from "./assets";

const Home = () => {
  const [currentImage, setCurrentImage] = useState("");

  return (
    <Box h="100vh" w="100vw" bgGradient="linear(to-br, #171717, #252525)">
      <Text color="#ffffff" paddingLeft="1em" paddingTop="1em">
        Title
      </Text>
      <Box>
        {/* This is going to be the card switching area */}
        <Image></Image>
      </Box>
      <Text color="#ffffff">Games</Text>
      <Grid>{/* This is going to be the games list area */}</Grid>
    </Box>
  );
};

export default Home;
