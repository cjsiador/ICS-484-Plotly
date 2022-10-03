var figure = {
    "data": [
        {
            "meta": {
                "columnNames": {
                    "labels": "# UK census 1851",
                    "values": "B"
                }
            },
            "mode": "markers",
            "name": "Male",
            "type": "pie",
            "title": {
                "text": "Male Deaths"
            },
            "domain": {
                "x": [
                    0.5,
                    0.75
                ],
                "y": [
                    0.5,
                    1
                ]
            },
            "labelssrc": "cjsiador:10:18e0ed",
            "labels": [
                "0 to 9",
                "10 to 19",
                "20 to 29",
                "30 to 39",
                "40 to 49",
                "50 to 59",
                "60 to 69",
                "70 to 79",
                "80+"
            ],
            "valuessrc": "cjsiador:10:b1be40",
            "values": [
                "2075391",
                "1711664",
                "1395091",
                "1073914",
                "810979",
                "560534",
                "351893",
                "166194",
                "40772"
            ],
            "legendgroup": ""
        },
        {
            "hole": 0,
            "meta": {
                "columnNames": {
                    "labels": "# UK census 1851",
                    "values": "C"
                }
            },
            "name": "Female Deaths",
            "type": "pie",
            "title": {
                "text": "Female Deaths"
            },
            "domain": {
                "x": [
                    0.75,
                    1
                ],
                "y": [
                    0.5,
                    1
                ]
            },
            "labelssrc": "cjsiador:10:18e0ed",
            "labels": [
                "0 to 9",
                "10 to 19",
                "20 to 29",
                "30 to 39",
                "40 to 49",
                "50 to 59",
                "60 to 69",
                "70 to 79",
                "80+"
            ],
            "valuessrc": "cjsiador:10:7b197d",
            "values": [
                "2065096",
                "1711627",
                "1542876",
                "1140383",
                "845260",
                "592970",
                "399019",
                "199326",
                "55704"
            ]
        },
        {
            "meta": {
                "columnNames": {
                    "x": "# UK census 1851",
                    "y": "B"
                }
            },
            "name": "Male",
            "type": "bar",
            "xsrc": "cjsiador:10:18e0ed",
            "x": [
                "0 to 9",
                "10 to 19",
                "20 to 29",
                "30 to 39",
                "40 to 49",
                "50 to 59",
                "60 to 69",
                "70 to 79",
                "80+"
            ],
            "ysrc": "cjsiador:10:b1be40",
            "y": [
                "2075391",
                "1711664",
                "1395091",
                "1073914",
                "810979",
                "560534",
                "351893",
                "166194",
                "40772"
            ],
            "orientation": "v"
        },
        {
            "meta": {
                "columnNames": {
                    "x": "# UK census 1851",
                    "y": "C"
                }
            },
            "name": "Female",
            "type": "bar",
            "xsrc": "cjsiador:10:18e0ed",
            "x": [
                "0 to 9",
                "10 to 19",
                "20 to 29",
                "30 to 39",
                "40 to 49",
                "50 to 59",
                "60 to 69",
                "70 to 79",
                "80+"
            ],
            "ysrc": "cjsiador:10:7b197d",
            "y": [
                "2065096",
                "1711627",
                "1542876",
                "1140383",
                "845260",
                "592970",
                "399019",
                "199326",
                "55704"
            ],
            "orientation": "v"
        },
        {
            "meta": {
                "columnNames": {
                    "x": "",
                    "cells": {
                        "values": "# UK census 1851 - B - C"
                    },
                    "header": {
                        "values": "E"
                    }
                }
            },
            "type": "table",
            "cells": {
                "meta": {
                    "columnNames": {
                        "values": "# UK census 1851 - B - C"
                    }
                },
                "height": 20,
                "valuessrc": "cjsiador:10:18e0ed,b1be40,7b197d*",
                "values": [
                    [
                        "0 to 9",
                        "10 to 19",
                        "20 to 29",
                        "30 to 39",
                        "40 to 49",
                        "50 to 59",
                        "60 to 69",
                        "70 to 79",
                        "80+"
                    ],
                    [
                        "2075391",
                        "1711664",
                        "1395091",
                        "1073914",
                        "810979",
                        "560534",
                        "351893",
                        "166194",
                        "40772"
                    ],
                    [
                        "2065096",
                        "1711627",
                        "1542876",
                        "1140383",
                        "845260",
                        "592970",
                        "399019",
                        "199326",
                        "55704"
                    ]
                ]
            },
            "domain": {
                "x": [
                    0,
                    0.375
                ],
                "y": [
                    0.375,
                    1
                ]
            },
            "header": {
                "font": {
                    "size": 12
                },
                "meta": {
                    "columnNames": {
                        "values": "E"
                    }
                },
                "valuessrc": "cjsiador:10:e42ada",
                "values": [
                    "age",
                    "male",
                    "female"
                ]
            },
            "orientation": "v"
        }
    ],
    "layout": {
        "title": {
            "font": {
                "color": "rgb(252, 252, 252)"
            },
            "text": "1851 UK Census: Age Distribution"
        },
        "xaxis": {
            "type": "category",
            "range": [
                -0.5,
                8.5
            ],
            "domain": [
                0,
                0.375
            ],
            "autorange": true
        },
        "yaxis": {
            "type": "linear",
            "range": [
                0,
                2184622.1052631577
            ],
            "domain": [
                0,
                0.375
            ],
            "autorange": true
        },
        "legend": {
            "x": 1.007916288833543,
            "y": 1.061879475873284
        },
        "shapes": [],
        "modebar": {
            "bgcolor": "rgb(226, 226, 226)"
        },
        "autosize": true,
        "template": {
            "data": {
                "bar": [
                    {
                        "type": "bar",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "table": [
                    {
                        "type": "table",
                        "cells": {
                            "fill": {
                                "color": "#EBF0F8"
                            },
                            "line": {
                                "color": "white"
                            }
                        },
                        "header": {
                            "fill": {
                                "color": "#C8D4E3"
                            },
                            "line": {
                                "color": "white"
                            }
                        }
                    }
                ],
                "carpet": [
                    {
                        "type": "carpet",
                        "aaxis": {
                            "gridcolor": "#C8D4E3",
                            "linecolor": "#C8D4E3",
                            "endlinecolor": "#2a3f5f",
                            "minorgridcolor": "#C8D4E3",
                            "startlinecolor": "#2a3f5f"
                        },
                        "baxis": {
                            "gridcolor": "#C8D4E3",
                            "linecolor": "#C8D4E3",
                            "endlinecolor": "#2a3f5f",
                            "minorgridcolor": "#C8D4E3",
                            "startlinecolor": "#2a3f5f"
                        }
                    }
                ],
                "mesh3d": [
                    {
                        "type": "mesh3d",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "contour": [
                    {
                        "type": "contour",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "heatmap": [
                    {
                        "type": "heatmap",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "scatter": [
                    {
                        "type": "scatter",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "surface": [
                    {
                        "type": "surface",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "heatmapgl": [
                    {
                        "type": "heatmapgl",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "histogram": [
                    {
                        "type": "histogram",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "parcoords": [
                    {
                        "line": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        },
                        "type": "parcoords"
                    }
                ],
                "scatter3d": [
                    {
                        "type": "scatter3d",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scattergl": [
                    {
                        "type": "scattergl",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "choropleth": [
                    {
                        "type": "choropleth",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "scattergeo": [
                    {
                        "type": "scattergeo",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "histogram2d": [
                    {
                        "type": "histogram2d",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "scatterpolar": [
                    {
                        "type": "scatterpolar",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "contourcarpet": [
                    {
                        "type": "contourcarpet",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "scattercarpet": [
                    {
                        "type": "scattercarpet",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scattermapbox": [
                    {
                        "type": "scattermapbox",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scatterpolargl": [
                    {
                        "type": "scatterpolargl",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scatterternary": [
                    {
                        "type": "scatterternary",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "histogram2dcontour": [
                    {
                        "type": "histogram2dcontour",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ]
            },
            "layout": {
                "geo": {
                    "bgcolor": "white",
                    "showland": true,
                    "lakecolor": "white",
                    "landcolor": "white",
                    "showlakes": true,
                    "subunitcolor": "#C8D4E3"
                },
                "font": {
                    "color": "#2a3f5f"
                },
                "polar": {
                    "bgcolor": "white",
                    "radialaxis": {
                        "ticks": "",
                        "gridcolor": "#EBF0F8",
                        "linecolor": "#EBF0F8"
                    },
                    "angularaxis": {
                        "ticks": "",
                        "gridcolor": "#EBF0F8",
                        "linecolor": "#EBF0F8"
                    }
                },
                "scene": {
                    "xaxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "gridwidth": 2,
                        "linecolor": "#EBF0F8",
                        "zerolinecolor": "#EBF0F8",
                        "showbackground": true,
                        "backgroundcolor": "white"
                    },
                    "yaxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "gridwidth": 2,
                        "linecolor": "#EBF0F8",
                        "zerolinecolor": "#EBF0F8",
                        "showbackground": true,
                        "backgroundcolor": "white"
                    },
                    "zaxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "gridwidth": 2,
                        "linecolor": "#EBF0F8",
                        "zerolinecolor": "#EBF0F8",
                        "showbackground": true,
                        "backgroundcolor": "white"
                    }
                },
                "title": {
                    "x": 0.05
                },
                "xaxis": {
                    "ticks": "",
                    "gridcolor": "#EBF0F8",
                    "linecolor": "#EBF0F8",
                    "automargin": true,
                    "zerolinecolor": "#EBF0F8",
                    "zerolinewidth": 2
                },
                "yaxis": {
                    "ticks": "",
                    "gridcolor": "#EBF0F8",
                    "linecolor": "#EBF0F8",
                    "automargin": true,
                    "zerolinecolor": "#EBF0F8",
                    "zerolinewidth": 2
                },
                "ternary": {
                    "aaxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "linecolor": "#A2B1C6"
                    },
                    "baxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "linecolor": "#A2B1C6"
                    },
                    "caxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "linecolor": "#A2B1C6"
                    },
                    "bgcolor": "white"
                },
                "colorway": [
                    "#636efa",
                    "#EF553B",
                    "#00cc96",
                    "#ab63fa",
                    "#19d3f3",
                    "#e763fa",
                    "#fecb52",
                    "#ffa15a",
                    "#ff6692",
                    "#b6e880"
                ],
                "hovermode": "closest",
                "colorscale": {
                    "diverging": [
                        [
                            0,
                            "#8e0152"
                        ],
                        [
                            0.1,
                            "#c51b7d"
                        ],
                        [
                            0.2,
                            "#de77ae"
                        ],
                        [
                            0.3,
                            "#f1b6da"
                        ],
                        [
                            0.4,
                            "#fde0ef"
                        ],
                        [
                            0.5,
                            "#f7f7f7"
                        ],
                        [
                            0.6,
                            "#e6f5d0"
                        ],
                        [
                            0.7,
                            "#b8e186"
                        ],
                        [
                            0.8,
                            "#7fbc41"
                        ],
                        [
                            0.9,
                            "#4d9221"
                        ],
                        [
                            1,
                            "#276419"
                        ]
                    ],
                    "sequential": [
                        [
                            0,
                            "#0508b8"
                        ],
                        [
                            0.0893854748603352,
                            "#1910d8"
                        ],
                        [
                            0.1787709497206704,
                            "#3c19f0"
                        ],
                        [
                            0.2681564245810056,
                            "#6b1cfb"
                        ],
                        [
                            0.3575418994413408,
                            "#981cfd"
                        ],
                        [
                            0.44692737430167595,
                            "#bf1cfd"
                        ],
                        [
                            0.5363128491620112,
                            "#dd2bfd"
                        ],
                        [
                            0.6256983240223464,
                            "#f246fe"
                        ],
                        [
                            0.7150837988826816,
                            "#fc67fd"
                        ],
                        [
                            0.8044692737430168,
                            "#fe88fc"
                        ],
                        [
                            0.8938547486033519,
                            "#fea5fd"
                        ],
                        [
                            0.9832402234636871,
                            "#febefe"
                        ],
                        [
                            1,
                            "#fec3fe"
                        ]
                    ],
                    "sequentialminus": [
                        [
                            0,
                            "#0508b8"
                        ],
                        [
                            0.0893854748603352,
                            "#1910d8"
                        ],
                        [
                            0.1787709497206704,
                            "#3c19f0"
                        ],
                        [
                            0.2681564245810056,
                            "#6b1cfb"
                        ],
                        [
                            0.3575418994413408,
                            "#981cfd"
                        ],
                        [
                            0.44692737430167595,
                            "#bf1cfd"
                        ],
                        [
                            0.5363128491620112,
                            "#dd2bfd"
                        ],
                        [
                            0.6256983240223464,
                            "#f246fe"
                        ],
                        [
                            0.7150837988826816,
                            "#fc67fd"
                        ],
                        [
                            0.8044692737430168,
                            "#fe88fc"
                        ],
                        [
                            0.8938547486033519,
                            "#fea5fd"
                        ],
                        [
                            0.9832402234636871,
                            "#febefe"
                        ],
                        [
                            1,
                            "#fec3fe"
                        ]
                    ]
                },
                "plot_bgcolor": "white",
                "paper_bgcolor": "white",
                "shapedefaults": {
                    "line": {
                        "width": 0
                    },
                    "opacity": 0.4,
                    "fillcolor": "#506784"
                },
                "annotationdefaults": {
                    "arrowhead": 0,
                    "arrowcolor": "#506784",
                    "arrowwidth": 1
                }
            },
            "themeRef": "PLOTLY_WHITE"
        },
        "annotations": [],
        "piecolorway": [
            "rgb(3, 5, 18)",
            "rgb(25, 25, 51)",
            "rgb(44, 42, 87)",
            "rgb(58, 60, 125)",
            "rgb(62, 83, 160)",
            "rgb(62, 109, 178)",
            "rgb(72, 134, 187)",
            "rgb(89, 159, 196)",
            "rgb(114, 184, 205)",
            "rgb(149, 207, 216)",
            "rgb(192, 229, 232)",
            "rgb(234, 252, 253)"
        ],
        "paper_bgcolor": "rgba(205, 176, 176, 0)"
    },
    "frames": []
}