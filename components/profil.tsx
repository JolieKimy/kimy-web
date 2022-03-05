import { TimeIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

const Profil: FC<{}> = () => {
  return (
    <Flex py={3} gap={3} direction={{ base: "column", md: "row" }}>
      <Box alignSelf={{ base: "center", md: "flex-start" }} boxShadow={"md"}>
        <Image
          borderRadius={3}
          maxW={"30vh"}
          src="pp_20-07.jpg"
          alt="Kim Aurore Biloni"
          objectFit={"cover"}
        />
      </Box>
      <Flex direction={"column"} gap={1}>
        <Heading>{`Hi, I'm Kim !`}</Heading>
        <Text>{`I'm a Software Engineer`}</Text>
      </Flex>
      <Flex direction="column" alignItems="center" bg={useColorModeValue("yellow.300", "yellow.600")} p={5}>
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

export default Profil;
