import { Box, Divider, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ColorMap } from "./components/ColorMap";
import { InputLayer } from "./components/InputLayer";
import { InputSelect } from "./components/InputSelect";
import { Layer } from "./components/Layer";
import { OutputLayer } from "./components/OutputLayer";
import { LayerMap } from "./components/LayerMap";
import { initialInputImages } from "./data";

import "./App.css";

function App() {
    const [inputImages] = useState(initialInputImages);
    const [selected, setSelected] = useState(null);

    return (
        <Box
            textAlign="center"
            m="auto"
            p={4}
            maxW={["100%", "100%", "80%", "1100px"]}
            className="App"
        >
            <Heading as="h1" pb={4}>
                CNN Visualization
            </Heading>

            <Stack
                spacing={4}
                maxW={["100%", "100%", "80%", "50%"]}
                mx="auto"
                my={4}
                textAlign="left"
            >
                <Text>
                    This website illustrates how a convolutional neural network
                    process features in an image input. It was made for the
                    final project in the course TDT4173 Machine Learning at
                    NTNU, and it uses the CNN model from our{" "}
                    <Link href="https://github.com/tomassams/tdt4173-machine-learning-project">
                        project repository
                    </Link>
                    . The dataset is the{" "}
                    <Link href="https://datasets.simula.no/kvasir/">
                        Kvasir dataset v2
                    </Link>{" "}
                    and contains 8000 images from the gastrointestinal tract
                    split into eight class labels representing anatomical
                    landmarks, pathological findings, or endoscopic features.
                </Text>
                <Text>
                    For clarity purposes, we have picked one image from each
                    class to visualize predictions on this page, and we decided
                    to visualize the CNN instead of the ResNet50 we trained due
                    to the large number of network layers in the ResNet compared
                    to the CNN.
                </Text>
                <Text>
                    Made with the help of{" "}
                    <Link href="https://github.com/facebook/create-react-app">
                        Create React App{" "}
                    </Link>
                    and{" "}
                    <Link href="https://github.com/philipperemy/keract">
                        Keract
                    </Link>
                </Text>

                {selected ? (
                    <Text>Selected: {selected.name}</Text>
                ) : (
                    <Text>Please select an image to view activations</Text>
                )}
            </Stack>

            <div id="section_1">
                <InputSelect onSelect={setSelected} inputImages={inputImages} />
            </div>

            {selected && (
                <Stack spacing={4}>
                    <Divider mt={4} />

                    <ColorMap image={require("./img/colormap.png").default} />

                    <LayerMap selected={selected} />

                    <div id="section_2">
                        <InputLayer
                            title={`input: ${selected.name}`}
                            shape="(1, 256, 256, 3)"
                            images={inputImages[selected.id].layers[0]}
                        />
                    </div>

                    <div id="section_3">
                        <Layer
                            title="Conv2D"
                            shape="(1, 254, 254, 32)"
                            image={inputImages[selected.id].layers[1].default}
                        />
                    </div>

                    <div id="section_4">
                        <Layer
                            title="MaxPooling2D"
                            shape="(1, 127, 127, 32)"
                            image={inputImages[selected.id].layers[2].default}
                        />
                    </div>
                    <div id="section_5">
                        <Layer
                            title="Conv2D"
                            shape="(1, 125, 125, 64)"
                            image={inputImages[selected.id].layers[3].default}
                        />
                    </div>
                    <div id="section_6">
                        <Layer
                            title="MaxPooling2D"
                            shape="(1, 62, 62, 64)<"
                            image={inputImages[selected.id].layers[4].default}
                        />
                    </div>
                    <div id="section_7">
                        <Layer
                            title="Conv2D"
                            shape="(1, 60, 60, 64)"
                            image={inputImages[selected.id].layers[5].default}
                        />
                    </div>

                    {/* <Heading as="h3">Flatten</Heading> */}

                    <div id="section_8">
                        <Layer
                            title="Dense"
                            shape="(1, 64)"
                            image={inputImages[selected.id].layers[6].default}
                        />
                    </div>

                    <div id="section_9">
                        <OutputLayer
                            title="Dense (Output)"
                            shape="(1, 8)"
                            outputs={inputImages[selected.id].output}
                            labels={inputImages.map((i) => i.name)}
                        />
                    </div>
                    <Box mb="800px"></Box>
                </Stack>
            )}
        </Box>
    );
}

export default App;
