import { AspectRatio, Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'

export const InputLayer = ({ title, images, shape, ...rest }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
            >
        <Box>
            <Heading py={4}>{title}</Heading>
            <Text>{shape}</Text>
            <SimpleGrid columns={3} spacing={4}>
                {images.map((i, index) => {
                    return (
                        <AspectRatio key={index} ratio={1}>
                            <Image src={ i.default } />
                        </AspectRatio>
                    )
                })}
            </SimpleGrid>
        </Box>
        </motion.div>
        </AnimatePresence>
    );
}