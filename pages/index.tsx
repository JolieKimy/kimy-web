import { TimeIcon } from "@chakra-ui/icons";
import { Flex, useColorModeValue, Heading, Text, Box, LinkBox, LinkOverlay } from "@chakra-ui/react";
import type { NextPage } from "next";
import Article from "../components/article";
import Profil from "../components/profil";
import Section from "../components/section";
import Projects from "../content/projects";

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
        >{`Work in progess...`}</Heading>
      </Flex>
      <Section title="About">
        <Text>{`// TODO`}</Text>
      </Section>
      <Section title="Projects">
        {Projects.map((a, i) => <Article key={i} {...a} />)}
      </Section>
      <Section title="Contact" />
    </Flex>
  );
};

export default Home;
