import { Box, Divider, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { ColorMap } from './components/ColorMap';
import { InputLayer } from './components/InputLayer';
import { InputSelect } from './components/InputSelect';
import { Layer } from './components/Layer';
import { OutputLayer } from './components/OutputLayer';

import { initialInputImages } from './data'

import './App.css';


function App() {
  const [inputImages] = useState(initialInputImages);
  const [selected, setSelected] = useState(null)

  const inputSelectRef = useRef(null)
  const scrollToInputSelect = () => inputSelectRef.current.scrollIntoView()

  useEffect(() => {
    scrollToInputSelect()
  }, [selected])

  return (
    <Box textAlign="center" m="auto" py={4} maxW={[ "100%", "100%", "80%", "1100px" ]} className="App">
      
      <Heading as="h1" py={4}>CNN Visualization</Heading>
      
      <Stack spacing={4} maxW="50%" mx="auto" my={4} textAlign="left">
        <Text>
            This website illustrates how a convolutional neural network processes features in an 
            image input. It was made for the final project in the course TDT4173 Machine Learning 
            at NTNU, and uses the CNN model from our <Link href="https://github.com/tomassams/tdt4173-machine-learning-project">project repository</Link>.
            The dataset is the <Link href="https://datasets.simula.no/kvasir/">Kvasir dataset v2</Link> and contains 8000 images from the gastrointestinal 
            tract split into eight class labels representing anatomical landmarks, pathological findings
            or endoscopic features. For simplicity, we have picked one image from each class to visualize 
            predictions on this page.
        </Text>
        <Text>
          Made with the help of <Link href="https://github.com/facebook/create-react-app">Create React App</Link> and <Link href="https://github.com/philipperemy/keract">Keract</Link>
        </Text>

        {selected ? <Text>Selected: {selected.name}</Text> : <Text>Please select an image to view activations</Text> }
      </Stack>
      
      <div ref={inputSelectRef}>
        <InputSelect onSelect={setSelected} inputImages={inputImages} />
      </div>
      

      {selected && 

      <Stack spacing={4}>
        <Divider mt={4} />

        <ColorMap image={ require("./img/colormap.png").default }/>

        <InputLayer title={`input: ${selected.name}`} shape="(1, 256, 256, 3)" images={ inputImages[selected.id].layers[0] }  />

        <Layer title="Conv2D" shape="(1, 254, 254, 32)" image={inputImages[selected.id].layers[1].default } />
        <Layer title="MaxPooling2D" shape="(1, 127, 127, 32)" image={inputImages[selected.id].layers[2].default } />
        <Layer title="Conv2D" shape="(1, 125, 125, 64)" image={inputImages[selected.id].layers[3].default } />
        <Layer title="MaxPooling2D" shape="(1, 62, 62, 64)<" image={inputImages[selected.id].layers[4].default } />
        <Layer title="Conv2D" shape="(1, 60, 60, 64)" image={inputImages[selected.id].layers[5].default } />
        
        {/* <Heading as="h3">Flatten</Heading> */}

        <Layer title="Dense" shape="(1, 64)" image={inputImages[selected.id].layers[6].default } />

        <OutputLayer title="Dense" shape="(1, 8)" outputs={inputImages[selected.id].output} labels={inputImages.map((i) => i.name)} />

      </Stack>
      }
    </Box>
  );
}

export default App;
