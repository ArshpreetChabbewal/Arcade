import React from "react";
import {
  Box,
  Text,
  Grid,
  Image,
  Flex,
  Button,
  Input,
  background,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import GameImages from "../assets/gameImages.js";

const SnakeMenu = ({ setGameDescOpened }) => {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      h="100vh"
      w="100vw"
      zIndex="3"
      bg="rgba(0,0,0,0.9)"
    >
      <div>_</div>
      <Box marginTop="15vh">
        <Image
          src={GameImages[0]}
          h="70vh"
          w="70vw"
          marginBottom="-85vh"
          marginLeft="15vw"
        />
      </Box>
      <Flex alignItems="center" justifyContent="center">
        <Box
          zIndex="4"
          bgGradient="linear(to-r, rgba(0,0,0,0), rgba(10,10,10) 50%)"
          marginTop="15vh"
          h="70vh"
          w="70vw"
        >
          <Button
            marginTop="1em"
            marginLeft="1em"
            borderRadius="4"
            bg="rgba(0,0,0,0)"
            color="white"
            _hover={{ color: "black", background: "white" }}
            onClick={() => setGameDescOpened("none")}
          >
            <ArrowBackIcon />
            Back
          </Button>
          <Box marginLeft="55%" marginTop="-2em" color="white">
            <Text marginLeft="30%" fontSize="4xl" fontFamily="Roboto">
              Snake Game
            </Text>
            {/* Title of Game */}
            <Text
              marginTop="1.5em"
              fontSize="2xl"
              fontWeight="bold"
              fontFamily="Roboto"
            >
              Instructions
            </Text>
            {/* These are the instructions */}
            <Text marginTop="1em">(INSTRUCTIONS)</Text>
            <Text
              marginTop="3em"
              fontSize="2xl"
              fontWeight="bold"
              fontFamily="Roboto"
            >
              Controls
            </Text>
            <Text marginTop="1em">(CONTROLS)</Text>
            <Flex justifyContent="space-between">
              <Button
                marginTop="12em"
                w="30%"
                background="green"
                _hover={{ backgroundColor: "white", color: "green" }}
              >
                Play
              </Button>
              <Button
                marginTop="12em"
                marginRight="4em"
                w="30%"
                background="red"
                _hover={{ backgroundColor: "white", color: "red" }}
              >
                LeaderBoard
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SnakeMenu;
