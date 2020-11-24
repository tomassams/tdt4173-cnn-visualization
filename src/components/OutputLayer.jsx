import { AspectRatio, Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'


export const OutputLayer = ({ shape, outputs, labels }) => {
    return (
        <Box>
            <Heading as="h3">Dense</Heading>
            <Text>{shape}</Text>
            <SimpleGrid columns={8}>
                {outputs.map((color, index) => {
                    return (
                        <AspectRatio key={index} ratio={1} width="50" color="white" bg={color}>
                            <Box p={4} fontWeight="bold">
                                {labels[index]}
                            </Box>
                        </AspectRatio>
                    )
                })}
            </SimpleGrid>
        </Box>
    );
}