import { AspectRatio, Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'

export const InputLayer = ({ images, shape }) => {
    return (
        <Box>
            <Heading py={4}>Input</Heading>
            <Text>{shape}</Text>
            <SimpleGrid columns={3} spacing={4}>
                {images.map((i) => {
                    return (
                        <AspectRatio ratio={1}>
                            <Image src={ i.default } />
                        </AspectRatio>
                    )
                })}
            </SimpleGrid>
        </Box>
    );
}