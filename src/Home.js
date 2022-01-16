import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Text,
  Grid,
  Image,
  Flex,
  Button,
  Input,
  Fade,
  useDisclosure,
} from "@chakra-ui/react";
import Background from "./assets/arcade.jpg";
import GameImages from "./assets/gameImages.js";
import SnakeMenu from "./Menus/SnakeMenu";
import AimMenu from "./Menus/AimMenu";
import TicTacToeMenu from "./Menus/TicTacToeMenu";
import TypingMenu from "./Menus/TypingMenu";
import "./Home.css";

const Home = () => {
  const [counter, setCounter] = useState(1);
  const [gameDescOpened, setGameDescOpened] = useState("none");
  const counterRef = useRef();

  counterRef.current = counter;

  const openGameDesc = () => {};

  const changeImage = () => {
    document.getElementById("radio" + counterRef.current).checked = true;
    setCounter(counterRef.current + 1);
    if (counterRef.current > 4) {
      setCounter(1);
    }
  };

  useEffect(() => {
    // setInterval(changeImage, 5000);
  }, []);

  return (
    <>
      {gameDescOpened === "snake" && (
        <SnakeMenu setGameDescOpened={setGameDescOpened} />
      )}
      {gameDescOpened === "aim" && (
        <AimMenu setGameDescOpened={setGameDescOpened} />
      )}
      {gameDescOpened === "tictactoe" && (
        <TicTacToeMenu setGameDescOpened={setGameDescOpened} />
      )}
      {gameDescOpened === "typing" && (
        <TypingMenu setGameDescOpened={setGameDescOpened} />
      )}
      <Box
        bgGradient="linear(to-br, #010101, #171717)"
        position="absolute"
        top="0"
        left="0"
      >
        <Text
          color="#ffffff"
          fontSize="2.5em"
          paddingLeft="1em"
          paddingTop="0.5em"
        >
          Title
        </Text>
        <Flex justifyContent="center" marginTop="-2em">
          <Input
            placeHolder="Enter a game"
            size="sm"
            w="40%"
            h="2.2em"
            borderRadius="5"
            color="#ffffff"
            fontFamily="calibri"
            fontSize="1.2em"
            backgroundColor="#171717"
            borderColor="#272727"
          />
          <Button borderRadius="0" marginLeft="-2em" h="2.6em" w="5em"></Button>
        </Flex>
        {/* Add random stuff */}

        <Flex marginTop="4em" alignItems="center" justifyContent="center">
          <div class="slider">
            <div class="slides">
              <input type="radio" name="radio-btn" id="radio1" />
              <input type="radio" name="radio-btn" id="radio2" />
              <input type="radio" name="radio-btn" id="radio3" />
              <input type="radio" name="radio-btn" id="radio4" />

              <div class="slide first">
                <img src={GameImages[0]} alt="" />
              </div>
              <div class="slide">
                <img src={GameImages[1]} alt="" />
              </div>
              <div class="slide">
                <img src={GameImages[2]} alt="" />
              </div>
              <div class="slide">
                <img src={GameImages[3]} alt="" />
              </div>

              <div class="navigation-auto">
                <div class="auto-btn1"></div>
                <div class="auto-btn2"></div>
                <div class="auto-btn3"></div>
                <div class="auto-btn4"></div>
              </div>
            </div>

            <div class="navigation-manual">
              <label for="radio1" class="manual-btn"></label>
              <label for="radio2" class="manual-btn"></label>
              <label for="radio3" class="manual-btn"></label>
              <label for="radio4" class="manual-btn"></label>
            </div>
          </div>
        </Flex>
        <Text
          paddingLeft="0.5em"
          fontSize="4em"
          color="#ffffff"
          fontWeight="bold"
          fontFamily="Calibri"
        >
          Games
        </Text>
        <Grid
          marginTop="2em"
          marginLeft="10%"
          w="80%"
          templateColumns="repeat(4, 1fr)"
          gap={20}
        >
          <Box>
            <Image
              src={GameImages[0]}
              transition="0.3s"
              _hover={{ transform: "scale(1.1)" }}
              onClick={() => setGameDescOpened("snake")}
            />
          </Box>
          <Box>
            <Image
              src={GameImages[1]}
              transition="0.3s"
              _hover={{ transform: "scale(1.1)" }}
              onClick={() => setGameDescOpened("aim")}
            />
          </Box>
          <Box>
            <Image
              src={GameImages[2]}
              transition="0.3s"
              _hover={{ transform: "scale(1.1)" }}
              onClick={() => setGameDescOpened("typing")}
            />
          </Box>
          <Box>
            <Image
              src={GameImages[3]}
              transition="0.3s"
              _hover={{ transform: "scale(1.1)" }}
              onClick={() => setGameDescOpened("tictactoe")}
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
