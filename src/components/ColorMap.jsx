import { Box, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const ColorMap = ({ image }) => {
    return (
        <Stack my={4}>
            <Text fontWeight="bold">Activation Intensity</Text>
            <Box>
                <Image w="100%" src={image} />
            </Box>
            <Stack direction="row" justify="space-between">
                <Text>Low</Text><Text>High</Text>
            </Stack>
      </Stack>
    )
}