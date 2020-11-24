import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'

export const Layer = ({ title, image, shape, ...rest }) => {
    return (
            <Box>
                <Heading as="h3">{title}</Heading>
                <Text>{shape}</Text>
                <Image w="100%" src={image} />
            </Box>
    );
}