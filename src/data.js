export const initialInputImages = [
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