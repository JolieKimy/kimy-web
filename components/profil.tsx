import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
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
        <Heading>{`Kim Aurore Biloni`}</Heading>
        <Text>{`Software Engineer & Project Leader`}</Text>
      </Flex>
    </Flex>
  );
};

export default Profil;
