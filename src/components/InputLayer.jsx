import {
    AspectRatio,
    Center,
    Heading,
    Image,
    SimpleGrid,
    Spinner,
    Stack,
    Text,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export const InputLayer = ({ title, images, shape, ...rest }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Stack spacing={4}>
                    <Heading>{title}</Heading>
                    <Text>{shape}</Text>
                    <SimpleGrid columns={3} spacing={4}>
                        {images.map((i, index) => {
                            return (
                                <AspectRatio key={index} ratio={1}>
                                    <Image src={i.default} fallback={<Center><Spinner /></Center>} />
                                </AspectRatio>
                            );
                        })}
                    </SimpleGrid>
                </Stack>
            </motion.div>
        </AnimatePresence>
    );
};
