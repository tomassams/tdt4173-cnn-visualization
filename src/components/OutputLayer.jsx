import {
    AspectRatio,
    Box,
    Heading,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";

export const OutputLayer = ({ shape, outputs, labels }) => {
    return (
        <Stack spacing={4} my={4}>
            <Heading as="h3">Dense</Heading>
            <Text>{shape}</Text>
            <SimpleGrid columns={[4, 4, 8, 8]}>
                {outputs.map((color, index) => {
                    return (
                        <AspectRatio
                            key={index}
                            ratio={1}
                            width="50"
                            color="white"
                            bg={color}
                        >
                            <Box p={4} fontWeight="bold">
                                {labels[index]}
                            </Box>
                        </AspectRatio>
                    );
                })}
            </SimpleGrid>
        </Stack>
    );
};
