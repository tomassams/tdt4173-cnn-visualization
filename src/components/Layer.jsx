import { Center, Heading, Image, Spinner, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const Layer = ({ title, image, shape, ...rest }) => {
    return (
        <Stack my={4} spacing={4}>
            <Heading as="h3">{title}</Heading>
            <Text>{shape}</Text>
            <Image w="100%" src={image} fallback={<Center><Spinner/></Center>} />
        </Stack>
    );
};
