import { TimeIcon } from "@chakra-ui/icons";
import { Flex, useColorModeValue, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Profil from "../components/profil";

const Home: NextPage = () => {
  return (
    <Flex direction={"column"} gap={10}>
      <Profil />
      <Flex
        direction="column"
        alignItems="center"
        bg={useColorModeValue("yellow.300", "yellow.600")}
        p={5}
      >
        <TimeIcon />
        <Heading
          colorScheme={"blackAlpha"}
          size="md"
          fontStyle={"initial"}
        >{`Soon, you'll get more info about me...`}</Heading>
      </Flex>
    </Flex>
  );
};

export default Home;
