import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Experience } from "../content/experiences";
import moment from "moment";

const Experience : FC<Experience> = ({title, organisation, from, to, location, description}) => {
    const dateFormat = (d: Date): string => moment(d).format('MMMM YYYY');
    const fromTo = `${dateFormat(from)} to ${dateFormat(to)}`.toUpperCase();
    return <Flex direction={"column"}>
        <Flex direction={'row'}>
            <Box as="span" fontWeight={"bold"}>{title}</Box>
            <Box as="span" color="#f2511b" mx="1">●</Box>
            <Box as="span">{organisation}</Box>    
        </Flex>
        <Text color={'gray.500'}>{`${fromTo}, ${location}`}</Text>
        <Text>{description}</Text>
    </Flex>
};

export default Experience;