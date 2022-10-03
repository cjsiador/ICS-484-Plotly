var figure = {
    "data": [
        {
            "meta": {
                "columnNames": {
                    "x": "# Naples in the Time of Cholera 1884-1911 p119",
                    "y": "B"
                }
            },
            "name": "Male",
            "type": "bar",
            "xsrc": "cjsiador:4:77e599",
            "x": [
                "0-1",
                "2-5",
                "6-10",
                "11-15",
                "16-20",
                "21-40",
                "41-60",
                "61-80",
                "over 80"
            ],
            "ysrc": "cjsiador:4:09b1d2",
            "y": [
                "8.2",
                "14.0",
                "12.1",
                "7.8",
                "7.2",
                "12.1",
                "13.7",
                "20.5",
                "39.6"
            ],
            "orientation": "v"
        },
        {
            "meta": {
                "columnNames": {
                    "x": "# Naples in the Time of Cholera 1884-1911 p119",
                    "y": "C",
                    "cells": {
                        "values": "C"
                    },
                    "header": {
                        "values": "# Naples in the Time of Cholera 1884-1911 p119"
                    }
                }
            },
            "name": "Female",
            "type": "bar",
            "xsrc": "cjsiador:4:77e599",
            "x": [
                "0-1",
                "2-5",
                "6-10",
                "11-15",
                "16-20",
                "21-40",
                "41-60",
                "61-80",
                "over 80"
            ],
            "ysrc": "cjsiador:4:0cc985",
            "y": [
                "8.9",
                "14.7",
                "11.2",
                "7.1",
                "7.2",
                "11.8",
                "12.9",
                "20.5",
                "37.8"
            ],
            "cells": {
                "meta": {
                    "columnNames": {
                        "values": "C"
                    }
                },
                "valuessrc": "cjsiador:4:0cc985*",
                "values": [
                    [
                        "8.9",
                        "14.7",
                        "11.2",
                        "7.1",
                        "7.2",
                        "11.8",
                        "12.9",
                        "20.5",
                        "37.8"
                    ]
                ]
            },
            "header": {
                "meta": {
                    "columnNames": {
                        "values": "# Naples in the Time of Cholera 1884-1911 p119"
                    }
                },
                "valuessrc": "cjsiador:4:77e599",
                "values": [
                    "0-1",
                    "2-5",
                    "6-10",
                    "11-15",
                    "16-20",
                    "21-40",
                    "41-60",
                    "61-80",
                    "over 80"
                ]
            },
            "orientation": "v"
        },
        {
            "meta": {
                "columnNames": {
                    "x": "# Naples in the Time of Cholera 1884-1911 p119",
                    "cells": {
                        "values": "# Naples in the Time of Cholera 1884-1911 p119 - B - C"
                    },
                    "header": {
                        "values": "F"
                    }
                }
            },
            "mode": "lines",
            "type": "table",
            "xsrc": "cjsiador:4:77e599",
            "x": [
                "0-1",
                "2-5",
                "6-10",
                "11-15",
                "16-20",
                "21-40",
                "41-60",
                "61-80",
                "over 80"
            ],
            "cells": {
                "meta": {
                    "columnNames": {
                        "values": "# Naples in the Time of Cholera 1884-1911 p119 - B - C"
                    }
                },
                "align": "right",
                "valuessrc": "cjsiador:4:77e599,09b1d2,0cc985*",
                "values": [
                    [
                        "0-1",
                        "2-5",
                        "6-10",
                        "11-15",
                        "16-20",
                        "21-40",
                        "41-60",
                        "61-80",
                        "over 80"
                    ],
                    [
                        "8.2",
                        "14.0",
                        "12.1",
                        "7.8",
                        "7.2",
                        "12.1",
                        "13.7",
                        "20.5",
                        "39.6"
                    ],
                    [
                        "8.9",
                        "14.7",
                        "11.2",
                        "7.1",
                        "7.2",
                        "11.8",
                        "12.9",
                        "20.5",
                        "37.8"
                    ]
                ]
            },
            "domain": {
                "x": [
                    0,
                    0.625
                ],
                "y": [
                    0.625,
                    1
                ]
            },
            "header": {
                "meta": {
                    "columnNames": {
                        "values": "F"
                    }
                },
                "align": "right",
                "valuessrc": "cjsiador:4:c00fa2",
                "values": [
                    "Age",
                    "Male",
                    "Female"
                ]
            },
            "orientation": "v"
        }
    ],
    "layout": {
        "title": {
            "x": 0.06,
            "font": {
                "size": 30
            },
            "text": "Male and Female Population"
        },
        "xaxis": {
            "type": "category",
            "range": [
                -0.5,
                8.5
            ],
            "domain": [
                0,
                0.625
            ],
            "autorange": true
        },
        "yaxis": {
            "type": "linear",
            "range": [
                0,
                41.68421052631579
            ],
            "title": {
                "text": ""
            },
            "domain": [
                0,
                0.5
            ],
            "autorange": true
        },
        "legend": {
            "x": 0.37866087583295344,
            "y": 0.26464646464646463
        },
        "modebar": {
            "bgcolor": "rgba(240, 240, 240, 0)"
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
                                "color": "#506784"
                            },
                            "line": {
                                "color": "rgb(17,17,17)"
                            }
                        },
                        "header": {
                            "fill": {
                                "color": "#2a3f5f"
                            },
                            "line": {
                                "color": "rgb(17,17,17)"
                            }
                        }
                    }
                ],
                "carpet": [
                    {
                        "type": "carpet",
                        "aaxis": {
                            "gridcolor": "#506784",
                            "linecolor": "#506784",
                            "endlinecolor": "#A2B1C6",
                            "minorgridcolor": "#506784",
                            "startlinecolor": "#A2B1C6"
                        },
                        "baxis": {
                            "gridcolor": "#506784",
                            "linecolor": "#506784",
                            "endlinecolor": "#A2B1C6",
                            "minorgridcolor": "#506784",
                            "startlinecolor": "#A2B1C6"
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
                    "bgcolor": "rgb(17,17,17)",
                    "showland": true,
                    "lakecolor": "rgb(17,17,17)",
                    "landcolor": "rgb(17,17,17)",
                    "showlakes": true,
                    "subunitcolor": "#506784"
                },
                "font": {
                    "color": "#f2f5fa"
                },
                "polar": {
                    "bgcolor": "rgb(17,17,17)",
                    "radialaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "linecolor": "#506784"
                    },
                    "angularaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "linecolor": "#506784"
                    }
                },
                "scene": {
                    "xaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "gridwidth": 2,
                        "linecolor": "#506784",
                        "zerolinecolor": "#C8D4E3",
                        "showbackground": true,
                        "backgroundcolor": "rgb(17,17,17)"
                    },
                    "yaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "gridwidth": 2,
                        "linecolor": "#506784",
                        "zerolinecolor": "#C8D4E3",
                        "showbackground": true,
                        "backgroundcolor": "rgb(17,17,17)"
                    },
                    "zaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "gridwidth": 2,
                        "linecolor": "#506784",
                        "zerolinecolor": "#C8D4E3",
                        "showbackground": true,
                        "backgroundcolor": "rgb(17,17,17)"
                    }
                },
                "title": {
                    "x": 0.05
                },
                "xaxis": {
                    "ticks": "",
                    "gridcolor": "#283442",
                    "linecolor": "#506784",
                    "automargin": true,
                    "zerolinecolor": "#283442",
                    "zerolinewidth": 2
                },
                "yaxis": {
                    "ticks": "",
                    "gridcolor": "#283442",
                    "linecolor": "#506784",
                    "automargin": true,
                    "zerolinecolor": "#283442",
                    "zerolinewidth": 2
                },
                "ternary": {
                    "aaxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "linecolor": "#506784"
                    },
                    "baxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "linecolor": "#506784"
                    },
                    "caxis": {
                        "ticks": "",
                        "gridcolor": "#506784",
                        "linecolor": "#506784"
                    },
                    "bgcolor": "rgb(17,17,17)"
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
                "plot_bgcolor": "rgb(17,17,17)",
                "paper_bgcolor": "rgb(17,17,17)",
                "shapedefaults": {
                    "line": {
                        "width": 0
                    },
                    "opacity": 0.4,
                    "fillcolor": "#f2f5fa"
                },
                "sliderdefaults": {
                    "bgcolor": "#C8D4E3",
                    "tickwidth": 0,
                    "bordercolor": "rgb(17,17,17)",
                    "borderwidth": 1
                },
                "annotationdefaults": {
                    "arrowhead": 0,
                    "arrowcolor": "#f2f5fa",
                    "arrowwidth": 1
                },
                "updatemenudefaults": {
                    "bgcolor": "#506784",
                    "borderwidth": 0
                }
            },
            "themeRef": "PLOTLY_DARK"
        },
        "plot_bgcolor": "rgb(9, 9, 25)",
        "paper_bgcolor": "rgba(1, 1, 11, 0)"
    },
    "frames": []
}