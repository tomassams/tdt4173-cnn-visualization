import { Box, Center, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import ScrollspyNav from "react-scrollspy-nav";

export const LayerMap = ({ selected }) => {
    return (
        <>
            <Box
                as="header"
                pos={["relative", "sticky", "sticky", "sticky"]}
                left="0"
                w="100%"
                zIndex="9"
                top="0"
                bg="white"
            >
                <Text pt={2} color="black">
                    Use the navigation bar to directly move to a specific layer.
                </Text>
                <ScrollspyNav
                    scrollTargetIds={[
                        "section_2",
                        "section_3",
                        "section_4",
                        "section_5",
                        "section_6",
                        "section_7",
                        "section_8",
                        "section_9",
                    ]}
                    activeNavClass="is-current"
                >
                    <SimpleGrid
                        spacing="0"
                        as="ul"
                        listStyleType="none"
                        columns={[1, 4, 8, 8]}
                    >
                        <Center p={2} height="100%" as="li">
                            <Link href="#section_2">Input</Link>
                        </Center>
                        <Center p={2} height="100%" as="li">
                            <Link href="#section_3">Conv2D</Link>
                        </Center>
                        <Center p={2} height="100%" as="li">
                            <Link href="#section_4">MaxPooling2D</Link>
                        </Center>
                        <Center p={2} height="100%" as="li">
                            <Link href="#section_5">Conv2D</Link>
                        </Center>
                        <Center p={2} height="100%" as="li">
                            <Link href="#section_6">MaxPooling2D</Link>
                        </Center>
                        <Center p={2} height="100%" as="li">
                            <Link href="#section_7">Conv2D</Link>
                        </Center>
                        <Center p={2} height="100%" as="li">
                            <Link href="#section_8">Dense</Link>
                        </Center>
                        <Center p={2} height="100%" as="li">
                            <Link href="#section_9">Dense</Link>
                        </Center>
                    </SimpleGrid>
                </ScrollspyNav>
            </Box>
        </>
    );
};
