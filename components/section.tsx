import { Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";

type SectionProps = {
  title: string,
}
const Section: FC<SectionProps> = ({title, children}) => {
  return (
    <Flex direction={"column"}>
      <Heading as="h3" size="lg" mb={3}>{title}</Heading>
        <Flex direction={"column"} gap={3}>
          {children}
        </Flex>
    </Flex>
  )
}

export default Section;
