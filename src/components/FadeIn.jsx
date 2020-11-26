import React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const variants = {
    hidden: {
        opacity: 0,
    },
    hiddenFromTop: {
        opacity: 0,
        y: "-50px",
    },
    hiddenFromBottom: {
        opacity: 0,
        y: "50px",
    },
    hiddenFromLeft: {
        opacity: 0,
        x: "-50px",
    },
    hiddenFromRight: {
        opacity: 0,
        x: "50px",
    },
    visible: {
        opacity: 1,
        y: "0",
        x: "0",
    },
};

export const FadeIn = ({ children, initial, exit, delay = 0, ...rest }) => (
    <Box {...rest}>
        <motion.div
            variants={variants}
            initial={initial}
            animate="visible"
            exit={exit}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    </Box>
);
