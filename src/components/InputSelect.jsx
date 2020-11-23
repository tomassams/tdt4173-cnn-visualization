import { AspectRatio, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

export const InputSelect = ({ onSelect, inputImages }) => {

    return (
        <>
            <SimpleGrid columns={4} spacing={4}>
                { inputImages.map(i => (<AspectRatio key={i.id} ratio={1} onClick={() => onSelect(i)}><Image src={i.inputImage.default}  /></AspectRatio>)) }
            </SimpleGrid>
        </>
    )
}