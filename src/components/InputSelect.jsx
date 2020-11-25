import { AspectRatio, Image, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

export const InputSelect = ({ onSelect, inputImages, ...rest}) => {
    const [selected, setSelected] = useState(null);

    const clickHandler = (i) => {
        if (selected && selected.id === i.id) {
            setSelected(null)
            onSelect(null)
        } else {
            onSelect(i)
            setSelected(i)
        }
    }

    return (
        <AnimatePresence {...rest}>
            <FadeIn 
                initial="hiddenFromBottom"
                exit="hiddenFromBottom"
            >
                <SimpleGrid columns={4} spacing={4}>
                    { inputImages.map(i => (
                        <motion.div
                            key={i.id} 
                            whileTap={{ scale: 1 }} 
                            whileHover={{ scale: 1.02 }}>
                            <AspectRatio 
                                _hover={{ cursor: 'pointer' }}
                                border={selected && selected.id === i.id ? '5px solid red' : ''} 
                                ratio={1} 
                                onClick={() => clickHandler(i)}
                            >
                                <Image src={i.inputImage.default} />
                            </AspectRatio>
                        </motion.div>
                    ))}
                </SimpleGrid>
            </FadeIn>
        </AnimatePresence>
    );
}