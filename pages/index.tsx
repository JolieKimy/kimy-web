import { TimeIcon } from "@chakra-ui/icons";
import { Flex, useColorModeValue, Heading, Text, Box, LinkBox, LinkOverlay } from "@chakra-ui/react";
import type { NextPage } from "next";
import Article from "../components/article";
import InlineList from "../components/inline-list";
import Profil from "../components/profil";
import Section from "../components/section";
import Projects from "../content/projects";
import Abilities from "../content/abilities";
import Experiences from "../content/experiences";
import Experience from "../components/experience";

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
      <Section title="Abilities">
        <InlineList items={Abilities} />
      </Section>
      <Section title="Projects">
        {Projects.map((a, i) => <Article key={i} {...a} />)}
      </Section>
      <Section title="Experiences">
        {Experiences.map((e, i) => <Experience key={i} {...e} />)}
      </Section>
      <Section title="Education">
        <Text>{`// TODO`}</Text>
      </Section>
      <Section title="Vonlunteering">
        <Text>{`// TODO`}</Text>
      </Section>
      <Section title="Contact">
        <Text>{`// TODO`}</Text>
      </Section>
    </Flex>
  );
};

export default Home;
