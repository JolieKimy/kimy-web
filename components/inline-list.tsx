import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

type InlineListProps = {
    items: string[]
}
const InlineList: FC<InlineListProps> = ({ items = [] }) => {
    return (
        <Text wordBreak={'break-word'}>
            {items.map((v, i) =>
                <>
                    <Box as="span" key={i}>{v}</Box>
                    {i !== items.length - 1 && <Box as="span" color="#f2511b" mx="1">●</Box>}
                </>
            )}
        </Text>
    );
}

export default InlineList;