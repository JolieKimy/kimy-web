import { Box, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { FC } from "react";

type ArticleProps = {
  title: string;
  date: string;
  description: string;
  link?: string;
};
const Article: FC<ArticleProps> = ({
  title,
  date,
  description,
  link = "#",
}) => {
  const dateTime = new Date(date);

  return (
    <LinkBox as="article" p="5" borderWidth="1px">
      <Box as="time" dateTime={dateTime.toUTCString()}>
        {dateTime.toDateString()}
      </Box>
      <Heading size="md" my="2">
        <LinkOverlay href={link} target="_blank">
          {title}
        </LinkOverlay>
      </Heading>
      <Text>{description}</Text>
    </LinkBox>
  );
};

export default Article;
