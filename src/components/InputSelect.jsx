import { AspectRatio, Image, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'

export const InputSelect = ({ onSelect, inputImages }) => {
    const [selected, setSelected] = useState(null);

    const clickHandler = (i) => {
        onSelect(i)
        setSelected(i)
    }

    return (
        <SimpleGrid columns={4} spacing={4}>
            { inputImages.map(i => (
                <AspectRatio 
                    border={selected && selected.id === i.id ? '10px solid red' : ''} 
                    key={i.id} 
                    ratio={1} 
                    onClick={() => clickHandler(i)}
                >
                    <Image src={i.inputImage.default} />
                </AspectRatio>
                ))}
        </SimpleGrid>
    )
}