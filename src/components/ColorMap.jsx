import { Box, Center, Image, Spinner, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const ColorMap = ({ image }) => {
    return (
        <Stack>
            <Text fontWeight="bold">Activation Intensity</Text>
            <Text>
                The activation intensity gives an indicator as to how the
                network is processing the images.
            </Text>
            <Text>
                Blue colors are low activations and red colors are high
                activations.
            </Text>
            <Box>
                <Image w="100%" src={image} fallback={<Center><Spinner/></Center>}/>
            </Box>
            <Stack direction="row" justify="space-between">
                <Text>Low</Text>
                <Text>High</Text>
            </Stack>
        </Stack>
    );
};
