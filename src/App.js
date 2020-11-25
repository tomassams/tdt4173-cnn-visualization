import { Box, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { ColorMap } from './components/ColorMap';
import { InputLayer } from './components/InputLayer';
import { InputSelect } from './components/InputSelect';
import { Layer } from './components/Layer';
import { OutputLayer } from './components/OutputLayer';

const initialInputImages = [
  {
    id: 0,
    name: "dyed lifted polyps",
    inputImage: require("./img/dyed-lifted-polyps/input.png"),
    layers: [
      [
        require("./img/dyed-lifted-polyps/input_layer/input_layer0.png"),
        require("./img/dyed-lifted-polyps/input_layer/input_layer1.png"),
        require("./img/dyed-lifted-polyps/input_layer/input_layer2.png")
      ],
      require("./img/dyed-lifted-polyps/conv2d_0.png"),
      require("./img/dyed-lifted-polyps/max_pooling2d_0.png"),
      require("./img/dyed-lifted-polyps/conv2d_1.png"),
      require("./img/dyed-lifted-polyps/max_pooling2d_1.png"),
      require("./img/dyed-lifted-polyps/conv2d_2.png"),
      require("./img/dyed-lifted-polyps/dense_0.png"),
    ],
    output: [
      "#7f0000",
      "#00008d",
      "#00007f",
      "#00007f",
      "#00007f",
      "#00007f",
      "#00007f",
      "#00007f",
    ]
  },
  {
    id: 1,
    name: "dyed resection margins",
    inputImage: require("./img/dyed-resection-margins/input.png"),
    layers: [
      [
        require("./img/dyed-resection-margins/input_layer/0.png"),
        require("./img/dyed-resection-margins/input_layer/1.png"),
        require("./img/dyed-resection-margins/input_layer/2.png")
      ],
      require("./img/dyed-resection-margins/conv2d_0.png"),
      require("./img/dyed-resection-margins/max_pooling2d_0.png"),
      require("./img/dyed-resection-margins/conv2d_1.png"),
      require("./img/dyed-resection-margins/max_pooling2d_1.png"),
      require("./img/dyed-resection-margins/conv2d_2.png"),
      require("./img/dyed-resection-margins/dense_0.png"),
    ],
    output: [
      "#00007f",
      "#7f0000",
      "#00007f",
      "#00007f",
      "#00007f",
      "#00007f",
      "#00007f",
      "#00007f",
    ]
  },
  {
    id: 2,
    name: "esophagitis",
    inputImage: require("./img/esophagitis/input.png"),
    layers: [
      [
        require("./img/esophagitis/input_layer/0.png"),
        require("./img/esophagitis/input_layer/1.png"),
        require("./img/esophagitis/input_layer/2.png")
      ],
      require("./img/esophagitis/conv2d_0.png"),
      require("./img/esophagitis/max_pooling2d_0.png"),
      require("./img/esophagitis/conv2d_1.png"),
      require("./img/esophagitis/max_pooling2d_1.png"),
      require("./img/esophagitis/conv2d_2.png"),
      require("./img/esophagitis/dense_0.png"),
    ],
    output: [
      "#00007f",
      "#00007f",
      "#7f0000",
      "#00007f",
      "#00007f",
      "#001cff",
      "#00007f",
      "#00007f",
    ]
  },
  {
    id: 3,
    name: "normal cecum",
    inputImage: require("./img/normal-cecum/input.png"),
    layers: [
      [
        require("./img/normal-cecum/input_layer/0.png"),
        require("./img/normal-cecum/input_layer/1.png"),
        require("./img/normal-cecum/input_layer/2.png")
      ],
      require("./img/normal-cecum/conv2d_0.png"),
      require("./img/normal-cecum/max_pooling2d_0.png"),
      require("./img/normal-cecum/conv2d_1.png"),
      require("./img/normal-cecum/max_pooling2d_1.png"),
      require("./img/normal-cecum/conv2d_2.png"),
      require("./img/normal-cecum/dense_0.png"),
    ],
    output: [
      "#00007f",
      "#00007f",
      "#00007f",
      "#7f0000",
      "#00007f",
      "#00007f",
      "#001cff",
      "#00007f",
    ]
  },
  {
    id: 4,
    name: "normal pylorus",
    inputImage: require("./img/normal-pylorus/input.png"),
    layers: [
      [
        require("./img/normal-pylorus/input_layer/0.png"),
        require("./img/normal-pylorus/input_layer/1.png"),
        require("./img/normal-pylorus/input_layer/2.png")
      ],
      require("./img/normal-pylorus/conv2d_0.png"),
      require("./img/normal-pylorus/max_pooling2d_0.png"),
      require("./img/normal-pylorus/conv2d_1.png"),
      require("./img/normal-pylorus/max_pooling2d_1.png"),
      require("./img/normal-pylorus/conv2d_2.png"),
      require("./img/normal-pylorus/dense_0.png"),
    ],
    output: [
      "#00007f",
      "#00007f",
      "#00007f",
      "#00007f",
      "#7f0000",
      "#00007f",
      "#00007f",
      "#00007f",
    ]
  },
  {
    id: 5,
    name: "normal z-line",
    inputImage: require("./img/normal-z-line/input.png"),
    layers: [
      [
        require("./img/normal-z-line/input_layer/0.png"),
        require("./img/normal-z-line/input_layer/1.png"),
        require("./img/normal-z-line/input_layer/2.png")
      ],
      require("./img/normal-z-line/conv2d_0.png"),
      require("./img/normal-z-line/max_pooling2d_0.png"),
      require("./img/normal-z-line/conv2d_1.png"),
      require("./img/normal-z-line/max_pooling2d_1.png"),
      require("./img/normal-z-line/conv2d_2.png"),
      require("./img/normal-z-line/dense_0.png"),
    ],
    output: [
      "#00007f",
      "#00007f",
      "#0000c8",
      "#00007f",
      "#00007f",
      "#7f0000",
      "#00007f",
      "#00007f",
    ]
  },
  {
    id: 6,
    name: "polyps",
    inputImage: require("./img/polyps/input.png"),
    layers: [
      [
        require("./img/polyps/input_layer/0.png"),
        require("./img/polyps/input_layer/1.png"),
        require("./img/polyps/input_layer/2.png")
      ],
      require("./img/polyps/conv2d_0.png"),
      require("./img/polyps/max_pooling2d_0.png"),
      require("./img/polyps/conv2d_1.png"),
      require("./img/polyps/max_pooling2d_1.png"),
      require("./img/polyps/conv2d_2.png"),
      require("./img/polyps/dense_0.png"),
    ],
    output: [
      "#0048ff",
      "#00007f",
      "#00007f",
      "#0000e8",
      "#00007f",
      "#00007f",
      "#7f0000",
      "#00007f",
    ]
  },
  {
    id: 7,
    name: "ulcerative colitis",
    inputImage: require("./img/ulcerative-colitis/input.png"),
    layers: [
      [
        require("./img/ulcerative-colitis/input_layer/0.png"),
        require("./img/ulcerative-colitis/input_layer/1.png"),
        require("./img/ulcerative-colitis/input_layer/2.png")
      ],
      require("./img/ulcerative-colitis/conv2d_0.png"),
      require("./img/ulcerative-colitis/max_pooling2d_0.png"),
      require("./img/ulcerative-colitis/conv2d_1.png"),
      require("./img/ulcerative-colitis/max_pooling2d_1.png"),
      require("./img/ulcerative-colitis/conv2d_2.png"),
      require("./img/ulcerative-colitis/dense_0.png"),
    ],
    output: [
      "#00007f",
      "#00007f",
      "#00007f",
      "#0000ba",
      "#00007f",
      "#00007f",
      "#0050ff",
      "#7f0000",
    ]
  },
]

function App() {
  const [inputImages] = useState(initialInputImages);
  const [selected, setSelected] = useState(null)

  const inputSelectRef = useRef(null)
  const executeScroll = () => inputSelectRef.current.scrollIntoView()

  useEffect(() => {
    executeScroll()
  }, [selected])

  return (
    <Box textAlign="center" m="auto" py={4} maxW={[ "100%", "100%", "80%", "1100px" ]} className="App">
      
      <Heading as="h1" py={4}>CNN Activation Maps</Heading>
      
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
          Activation maps were extracted with <Link href="https://github.com/philipperemy/keract">Keract</Link>
        </Text>

        {selected ? <Text>Selected: {selected.name}</Text> : <Text>Please select an image to view activations</Text> }
      </Stack>
      
      <div ref={inputSelectRef}>
        <InputSelect onSelect={setSelected} inputImages={inputImages} />
      </div>
      

      {selected && 
      <Box>
      <ColorMap image={ require("./img/colormap.png").default }/>

      <InputLayer title={`input: ${selected.name}`} shape="(1, 256, 256, 3)" images={ inputImages[selected.id].layers[0] }  />

      <Stack>

        <Layer title="Conv2D" shape="(1, 254, 254, 32)" image={inputImages[selected.id].layers[1].default } />
        <Layer title="MaxPooling2D" shape="(1, 127, 127, 32)" image={inputImages[selected.id].layers[2].default } />
        <Layer title="Conv2D" shape="(1, 125, 125, 64)" image={inputImages[selected.id].layers[3].default } />
        <Layer title="MaxPooling2D" shape="(1, 62, 62, 64)<" image={inputImages[selected.id].layers[4].default } />
        <Layer title="Conv2D" shape="(1, 60, 60, 64)" image={inputImages[selected.id].layers[5].default } />
        
        <Heading as="h3">Flatten</Heading>

        <Layer title="Dense" shape="(1, 64)" image={inputImages[selected.id].layers[6].default } />

        <OutputLayer title="Dense" shape="(1, 8)" outputs={inputImages[selected.id].output} labels={inputImages.map((i) => i.name)} />

      </Stack>
      </Box>
      }
    </Box>
  );
}

export default App;
