export interface Region {
    id: string
    name: string
    location: {
        longitude: number
        latitude: number
        country: {
            name: string
            code: string
        }
    }
}

export interface RegionsByCountry {
    [country: string]: Region[]
}

export const regionsByCountry: RegionsByCountry = {
    Austria: [
        {
            id: '1715',
            name: 'Amstetten',
            location: {
                longitude: 14.878154,
                latitude: 48.121815,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '1735',
            name: 'Attnang-Puchheim',
            location: {
                longitude: 13.720969,
                latitude: 48.012714,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '1364',
            name: 'Braunau',
            location: {
                longitude: 13.04073,
                latitude: 48.25725,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '1021',
            name: 'Bregenz',
            location: {
                longitude: 9.739115,
                latitude: 47.501994,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '1514',
            name: 'Dornbirn',
            location: {
                longitude: 9.738781,
                latitude: 47.417086,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '23208',
            name: 'Freistadt',
            location: {
                longitude: 14.50201,
                latitude: 48.50217,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '1605',
            name: 'Graz',
            location: {
                longitude: 15.445671,
                latitude: 47.069336,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '19048',
            name: 'Gröbming',
            location: {
                longitude: 13.9019755918,
                latitude: 47.4427928946,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '1001',
            name: 'Innsbruck',
            location: {
                longitude: 11.399168,
                latitude: 47.266784,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '1895',
            name: 'Klagenfurt',
            location: {
                longitude: 14.311549,
                latitude: 46.616335,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '8618',
            name: 'Liezen',
            location: {
                longitude: 14.24315,
                latitude: 47.56741,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '541',
            name: 'Linz',
            location: {
                longitude: 14.302886,
                latitude: 48.294047,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '9818',
            name: 'Parndorf Designer Outlet',
            location: {
                longitude: 16.8575696,
                latitude: 47.9948905,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '7918',
            name: 'Pinggau',
            location: {
                longitude: 16.0664641,
                latitude: 47.4455644,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '8638',
            name: 'Radstadt',
            location: {
                longitude: 13.465823,
                latitude: 47.3861944,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '1554',
            name: 'Salzburg',
            location: {
                longitude: 13.048003,
                latitude: 47.813956,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '2115',
            name: 'Sankt Pölten',
            location: {
                longitude: 15.624651,
                latitude: 48.207934,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '8628',
            name: 'Schladming',
            location: {
                longitude: 13.6854397,
                latitude: 47.3942027,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '991',
            name: 'Seefeld',
            location: {
                longitude: 11.198802,
                latitude: 47.331683,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '7898',
            name: 'St. Michael',
            location: {
                longitude: 15.009532,
                latitude: 47.346958,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '1394',
            name: 'Vienna',
            location: {
                longitude: 16.369974,
                latitude: 48.200297,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '2988',
            name: 'Vienna Airport',
            location: {
                longitude: 16.5665751,
                latitude: 48.1158333,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '8308',
            name: 'Villach',
            location: {
                longitude: 13.85062,
                latitude: 46.60856,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
        {
            id: '2185',
            name: 'Wels',
            location: {
                longitude: 14.026837,
                latitude: 48.165806,
                country: {
                    name: 'Austria',
                    code: 'AT',
                },
            },
        },
    ],
    'Bosnia & Herzegovina': [
        {
            id: '13228',
            name: 'Brod',
            location: {
                longitude: 18.0038484204,
                latitude: 45.1470545023,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '17958',
            name: 'Brčko',
            location: {
                longitude: 18.8106276,
                latitude: 44.8726563,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '13168',
            name: 'Derventa',
            location: {
                longitude: 17.9070412,
                latitude: 44.9764185,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '13178',
            name: 'Doboj',
            location: {
                longitude: 18.0602921,
                latitude: 44.8004192,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '9168',
            name: 'Grude',
            location: {
                longitude: 17.4096253,
                latitude: 43.3746502,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '13198',
            name: 'Kakanj',
            location: {
                longitude: 18.1178262,
                latitude: 44.128014,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '16238',
            name: 'Kiseljak',
            location: {
                longitude: 18.0786274,
                latitude: 43.9399783,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '9178',
            name: 'Ljubuški',
            location: {
                longitude: 17.5466671,
                latitude: 43.1989428,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '13218',
            name: 'Maglaj',
            location: {
                longitude: 18.1033619,
                latitude: 44.5454847,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '9188',
            name: 'Međugorje',
            location: {
                longitude: 17.6629672,
                latitude: 43.200913,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '9228',
            name: 'Mostar',
            location: {
                longitude: 17.8077578,
                latitude: 43.3437748,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '17968',
            name: 'Orašje',
            location: {
                longitude: 18.698341,
                latitude: 45.02779,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '9198',
            name: 'Posušje',
            location: {
                longitude: 17.3296617,
                latitude: 43.4719941,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '13158',
            name: 'Sarajevo',
            location: {
                longitude: 18.4130763,
                latitude: 43.8562586,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '17948',
            name: 'Srebrenik',
            location: {
                longitude: 18.4918915,
                latitude: 44.7074706,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '17938',
            name: 'Tuzla',
            location: {
                longitude: 18.65755,
                latitude: 44.534492,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '16228',
            name: 'Visoko',
            location: {
                longitude: 18.1798837,
                latitude: 43.9887651,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '13188',
            name: 'Zenica',
            location: {
                longitude: 17.9077432,
                latitude: 44.2034392,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '9238',
            name: 'Čapljina',
            location: {
                longitude: 17.7054838,
                latitude: 43.1118267,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '9158',
            name: 'Čitluk',
            location: {
                longitude: 17.6955277,
                latitude: 43.2262492,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '9208',
            name: 'Široki Brijeg',
            location: {
                longitude: 17.592739,
                latitude: 43.3831419,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
        {
            id: '13208',
            name: 'Žepče',
            location: {
                longitude: 18.0379461,
                latitude: 44.428684,
                country: {
                    name: 'Bosnia & Herzegovina',
                    code: 'BA',
                },
            },
        },
    ],
    Belgium: [
        {
            id: '2468',
            name: 'Antwerp',
            location: {
                longitude: 4.4024643,
                latitude: 51.2194475,
                country: {
                    name: 'Belgium',
                    code: 'BE',
                },
            },
        },
        {
            id: '10397',
            name: 'Arlon',
            location: {
                longitude: 5.8104804,
                latitude: 49.6851364,
                country: {
                    name: 'Belgium',
                    code: 'BE',
                },
            },
        },
        {
            id: '8608',
            name: 'Bastogne',
            location: {
                longitude: 5.709641,
                latitude: 49.999779,
                country: {
                    name: 'Belgium',
                    code: 'BE',
                },
            },
        },
        {
            id: '3318',
            name: 'Bruges',
            location: {
                longitude: 3.2246995,
                latitude: 51.209348,
                country: {
                    name: 'Belgium',
                    code: 'BE',
                },
            },
        },
        {
            id: '1785',
            name: 'Brussels',
            location: {
                longitude: 4.3517103,
                latitude: 50.8503396,
                country: {
                    name: 'Belgium',
                    code: 'BE',
                },
            },
        },
        {
            id: '23711',
            name: 'Brussels Airport',
            location: {
                longitude: 4.4855744,
                latitude: 50.900999,
                country: {
                    name: 'Belgium',
                    code: 'BE',
                },
            },
        },
        {
            id: '3348',
            name: 'Charleroi',
            location: {
                longitude: 4.444643,
                latitude: 50.4108095,
                country: {
                    name: 'Belgium',
                    code: 'BE',
                },
            },
        },
        {
            id: '3368',
            name: 'De Panne',
            location: {
                longitude: 2.600981,
                latitude: 51.077399,
                country: {
                    name: 'Belgium',
                    code: 'BE',
                },
            },
        },
        {
            id: '2738',
            name: 'Ghent',
            location: {
                longitude: 3.7174243,
                latitude: 51.0543422,
                country: {
                    name: 'Belgium',
                    code: 'BE',
                },
            },
        },
        {
            id: '10377',
            name: 'Hasselt',
            location: {
                longitude: 5.33248,
                latitude: 50.93069,
                country: {
                    name: 'Belgium',
                    code: 'BE',
                },
            },
        },
        {
            id: '19038',
            name: 'Kortrijk',
            location: {
                longitude: 3.276925,
                latitude: 50.805027,
                country: {
                    name: 'Belgium',
                    code: 'BE',
                },
            },
        },
        {
            id: '3488',
            name: 'Leuven',
            location: {
                longitude: 4.7002953,
                latitude: 50.8779545,
                country: {
                    name: 'Belgium',
                    code: 'BE',
                },
            },
        },
        {
            id: '1935',
            name: 'Liège',
            location: {
                longitude: 5.5796662,
                latitude: 50.6325574,
                country: {
                    name: 'Belgium',
                    code: 'BE',
                },
            },
        },
        {
            id: '3538',
            name: 'Mons',
            location: {
                longitude: 3.956659,
                latitude: 50.4542408,
                country: {
                    name: 'Belgium',
                    code: 'BE',
                },
            },
        },
        {
            id: '3558',
            name: 'Namur',
            location: {
                longitude: 4.8719854,
                latitude: 50.4673883,
                country: {
                    name: 'Belgium',
                    code: 'BE',
                },
            },
        },
        {
            id: '12368',
            name: 'Ostend',
            location: {
                longitude: 2.928656,
                latitude: 51.21543,
                country: {
                    name: 'Belgium',
                    code: 'BE',
                },
            },
        },
        {
            id: '16257',
            name: 'Ottignies-Louvain-la-Neuve',
            location: {
                longitude: 4.5868116,
                latitude: 50.6657252,
                country: {
                    name: 'Belgium',
                    code: 'BE',
                },
            },
        },
    ],
    Bulgaria: [
        {
            id: '18998',
            name: 'Montana',
            location: {
                longitude: 23.225729,
                latitude: 43.408516,
                country: {
                    name: 'Bulgaria',
                    code: 'BG',
                },
            },
        },
        {
            id: '12308',
            name: 'Plovdiv',
            location: {
                longitude: 24.7452904,
                latitude: 42.1354079,
                country: {
                    name: 'Bulgaria',
                    code: 'BG',
                },
            },
        },
        {
            id: '12318',
            name: 'Razgrad',
            location: {
                longitude: 26.5411165,
                latitude: 43.5336719,
                country: {
                    name: 'Bulgaria',
                    code: 'BG',
                },
            },
        },
        {
            id: '12328',
            name: 'Ruse',
            location: {
                longitude: 25.9656554,
                latitude: 43.8355713,
                country: {
                    name: 'Bulgaria',
                    code: 'BG',
                },
            },
        },
        {
            id: '12338',
            name: 'Shumen',
            location: {
                longitude: 26.9361286,
                latitude: 43.2712398,
                country: {
                    name: 'Bulgaria',
                    code: 'BG',
                },
            },
        },
        {
            id: '5348',
            name: 'Sofia',
            location: {
                longitude: 23.3218675,
                latitude: 42.6977082,
                country: {
                    name: 'Bulgaria',
                    code: 'BG',
                },
            },
        },
        {
            id: '12348',
            name: 'Varna',
            location: {
                longitude: 27.9147333,
                latitude: 43.2140504,
                country: {
                    name: 'Bulgaria',
                    code: 'BG',
                },
            },
        },
        {
            id: '19008',
            name: 'Vidin',
            location: {
                longitude: 22.8679302,
                latitude: 43.996159,
                country: {
                    name: 'Bulgaria',
                    code: 'BG',
                },
            },
        },
        {
            id: '19018',
            name: 'Vratsa',
            location: {
                longitude: 23.559739,
                latitude: 43.207164,
                country: {
                    name: 'Bulgaria',
                    code: 'BG',
                },
            },
        },
    ],
    Belarus: [
        {
            id: '23218',
            name: 'Brest (BY)',
            location: {
                longitude: 23.7340503,
                latitude: 52.0976214,
                country: {
                    name: 'Belarus',
                    code: 'BY',
                },
            },
        },
        {
            id: '8028',
            name: 'Minsk',
            location: {
                longitude: 27.5615244,
                latitude: 53.9045398,
                country: {
                    name: 'Belarus',
                    code: 'BY',
                },
            },
        },
    ],
    Switzerland: [
        {
            id: '1504',
            name: 'Basel',
            location: {
                longitude: 7.587787,
                latitude: 47.546306,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
        {
            id: '1524',
            name: 'Bellinzona',
            location: {
                longitude: 9.024799,
                latitude: 46.19507,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
        {
            id: '3158',
            name: 'Bern',
            location: {
                longitude: 7.4446085,
                latitude: 46.9479222,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
        {
            id: '1494',
            name: 'Chur',
            location: {
                longitude: 9.529625,
                latitude: 46.853051,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
        {
            id: '362',
            name: 'Fribourg (Suisse)',
            location: {
                longitude: 7.150106,
                latitude: 46.803228,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
        {
            id: '3298',
            name: 'Geneva',
            location: {
                longitude: 6.1422961,
                latitude: 46.1983922,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
        {
            id: '16158',
            name: 'Interlaken',
            location: {
                longitude: 7.8632049,
                latitude: 46.6863481,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
        {
            id: '3148',
            name: 'Lausanne',
            location: {
                longitude: 6.6335971,
                latitude: 46.5199617,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
        {
            id: '1484',
            name: 'Lugano',
            location: {
                longitude: 8.963673,
                latitude: 46.022753,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
        {
            id: '11378',
            name: 'Luzern',
            location: {
                longitude: 8.3093072,
                latitude: 47.0501682,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
        {
            id: '16018',
            name: 'Montreux',
            location: {
                longitude: 6.9106799,
                latitude: 46.4312213,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
        {
            id: '12398',
            name: 'Schaffhausen',
            location: {
                longitude: 8.6380488,
                latitude: 47.6958897,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
        {
            id: '2105',
            name: 'St. Gallen',
            location: {
                longitude: 9.371231,
                latitude: 47.424407,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
        {
            id: '17248',
            name: 'Thun',
            location: {
                longitude: 7.6279881,
                latitude: 46.7579868,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
        {
            id: '16008',
            name: 'Vevey',
            location: {
                longitude: 6.8419192,
                latitude: 46.4628333,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
        {
            id: '3768',
            name: 'Winterthur',
            location: {
                longitude: 8.7375646,
                latitude: 47.49995,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
        {
            id: '16038',
            name: 'Yverdon les Bains',
            location: {
                longitude: 6.641183,
                latitude: 46.7784736,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
        {
            id: '89',
            name: 'Zurich',
            location: {
                longitude: 8.541694,
                latitude: 47.3768866,
                country: {
                    name: 'Switzerland',
                    code: 'CH',
                },
            },
        },
    ],
    Czechia: [
        {
            id: '16938',
            name: 'Benesov',
            location: {
                longitude: 14.6760564,
                latitude: 49.7839125,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '6048',
            name: 'Bohumín',
            location: {
                longitude: 18.3569743,
                latitude: 49.9043259,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '9638',
            name: 'Brno',
            location: {
                longitude: 16.6068371,
                latitude: 49.1950602,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '25131',
            name: 'Brtnice',
            location: {
                longitude: 15.6764224,
                latitude: 49.3069471,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '6098',
            name: 'Bystřice',
            location: {
                longitude: 18.717465,
                latitude: 49.63654,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '5368',
            name: 'Cheb',
            location: {
                longitude: 12.3796930313,
                latitude: 50.0746116638,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '23168',
            name: 'Chomutov',
            location: {
                longitude: 13.410737,
                latitude: 50.4634975,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '25811',
            name: 'Frýdek Místek',
            location: {
                longitude: 18.3673216,
                latitude: 49.6819305,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '24621',
            name: 'Harrachov',
            location: {
                longitude: 15.4314213,
                latitude: 50.7720863,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '17638',
            name: 'Horní Planá',
            location: {
                longitude: 14.0325721,
                latitude: 48.7673652,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '15868',
            name: 'Hradec Králové',
            location: {
                longitude: 15.825211,
                latitude: 50.2103605,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '5998',
            name: 'Hranice na Moravě',
            location: {
                longitude: 17.734922,
                latitude: 49.5496635,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '5968',
            name: 'Hulín',
            location: {
                longitude: 17.4637476,
                latitude: 49.3168925,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '25111',
            name: 'Humpolec',
            location: {
                longitude: 15.3593232,
                latitude: 49.5415238,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '24661',
            name: 'Jablonec nad Nisou',
            location: {
                longitude: 15.1703135,
                latitude: 50.7220528,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '6248',
            name: 'Jihlava',
            location: {
                longitude: 15.5870415,
                latitude: 49.3983782,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '25991',
            name: 'Jindřichův Hradec',
            location: {
                longitude: 15.0061389,
                latitude: 49.1444823,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '23178',
            name: 'Jirkov',
            location: {
                longitude: 13.4487847,
                latitude: 50.5005272,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '5358',
            name: 'Karlovy Vary',
            location: {
                longitude: 12.8639812469,
                latitude: 50.2299880981,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '6068',
            name: 'Karviná',
            location: {
                longitude: 18.5477977,
                latitude: 49.8958649,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '5918',
            name: 'Kolín',
            location: {
                longitude: 15.2027277,
                latitude: 50.027329,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '24641',
            name: 'Kořenov',
            location: {
                longitude: 15.3653237,
                latitude: 50.7592589,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '23188',
            name: 'Kroměříž',
            location: {
                longitude: 17.39938,
                latitude: 49.2916582,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '9258',
            name: 'Liberec',
            location: {
                longitude: 15.0543387,
                latitude: 50.76628,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '25121',
            name: 'Loket u Čechtic',
            location: {
                longitude: 15.1168952,
                latitude: 49.655492,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '23198',
            name: 'Louny',
            location: {
                longitude: 13.8033551,
                latitude: 50.3539812,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '16958',
            name: 'Lubenec',
            location: {
                longitude: 13.3132014,
                latitude: 50.1320822,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '23158',
            name: 'Most',
            location: {
                longitude: 13.6329122,
                latitude: 50.5015549,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '18868',
            name: 'Náchod',
            location: {
                longitude: 16.1703119,
                latitude: 50.4174422,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '25151',
            name: 'Okřísky',
            location: {
                longitude: 15.769589,
                latitude: 49.2453928,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '5948',
            name: 'Olomouc',
            location: {
                longitude: 17.282171,
                latitude: 49.588847,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '6038',
            name: 'Ostrava',
            location: {
                longitude: 18.2625243,
                latitude: 49.8209226,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '5978',
            name: 'Otrokovice',
            location: {
                longitude: 17.5307761,
                latitude: 49.2099156,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '5928',
            name: 'Pardubice',
            location: {
                longitude: 15.7811994,
                latitude: 50.0343092,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '16948',
            name: 'Pisek',
            location: {
                longitude: 14.158029,
                latitude: 49.303454,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '2025',
            name: 'Plzeň',
            location: {
                longitude: 13.362379,
                latitude: 49.746502,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '1374',
            name: 'Prague',
            location: {
                longitude: 14.440946,
                latitude: 50.089617,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '5958',
            name: 'Přerov',
            location: {
                longitude: 17.445821,
                latitude: 49.44747,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '25801',
            name: 'Příbram',
            location: {
                longitude: 13.9989449,
                latitude: 49.685432,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '24651',
            name: 'Smržovka',
            location: {
                longitude: 15.2464022,
                latitude: 50.7382006,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '18118',
            name: 'Soběslav',
            location: {
                longitude: 14.7172022,
                latitude: 49.2555756,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '18858',
            name: 'Sokolov',
            location: {
                longitude: 12.6598918,
                latitude: 50.1745286,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '5988',
            name: 'Staré Město u Uh. Hr.',
            location: {
                longitude: 17.433388,
                latitude: 49.0751484,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '18888',
            name: 'Starý Smokovec',
            location: {
                longitude: 20.222377,
                latitude: 49.139155,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '6018',
            name: 'Studénka',
            location: {
                longitude: 18.0785342,
                latitude: 49.7234162,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '6008',
            name: 'Suchdol nad Odrou',
            location: {
                longitude: 17.9281633,
                latitude: 49.6557203,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '24631',
            name: 'Tanvald',
            location: {
                longitude: 15.3078824,
                latitude: 50.7375286,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '25821',
            name: 'Telč',
            location: {
                longitude: 15.4542731,
                latitude: 49.1832383,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '7818',
            name: 'Tábor',
            location: {
                longitude: 14.6774664,
                latitude: 49.4129888,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '22708',
            name: 'Třeboň',
            location: {
                longitude: 14.7721233,
                latitude: 49.0041957,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '25101',
            name: 'Třebíč',
            location: {
                longitude: 15.8795516,
                latitude: 49.2147869,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '6088',
            name: 'Třinec',
            location: {
                longitude: 18.6707901,
                latitude: 49.677631,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '21608',
            name: 'Uherské Hradište',
            location: {
                longitude: 17.4958501,
                latitude: 49.0597969,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '21598',
            name: 'Uherský Brod',
            location: {
                longitude: 17.6498377,
                latitude: 49.0302725,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '25141',
            name: 'Zašovice',
            location: {
                longitude: 15.7256805,
                latitude: 49.2582372,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '8718',
            name: 'Zlín',
            location: {
                longitude: 17.6627635,
                latitude: 49.2244365,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '6258',
            name: 'Znojmo',
            location: {
                longitude: 16.0542676,
                latitude: 48.8559107,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '5938',
            name: 'Zábřeh na Moravě',
            location: {
                longitude: 16.8871728,
                latitude: 49.8724709,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '1805',
            name: 'České Budějovice',
            location: {
                longitude: 14.487246,
                latitude: 48.972887,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '7838',
            name: 'Český Krumlov',
            location: {
                longitude: 14.3174657,
                latitude: 48.8127354,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
        {
            id: '6078',
            name: 'Český Těšín',
            location: {
                longitude: 18.6237961,
                latitude: 49.7470441,
                country: {
                    name: 'Czechia',
                    code: 'CZ',
                },
            },
        },
    ],
    Germany: [
        {
            id: '243',
            name: 'Aachen',
            location: {
                longitude: 6.102988,
                latitude: 50.780919,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '244',
            name: 'Aalen',
            location: {
                longitude: 10.092956,
                latitude: 48.835296,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '10878',
            name: 'Achim',
            location: {
                longitude: 9.0510401,
                latitude: 53.0092,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2248',
            name: 'Ahlbeck',
            location: {
                longitude: 14.1874733,
                latitude: 53.9406282,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2498',
            name: 'Ahrenshoop',
            location: {
                longitude: 12.4212516,
                latitude: 54.3807146,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '3778',
            name: 'Aichach',
            location: {
                longitude: 11.1359857,
                latitude: 48.4577035,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '8278',
            name: 'Albstadt-Ebingen',
            location: {
                longitude: 9.0316735,
                latitude: 48.2103655,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '116',
            name: 'Alsfeld',
            location: {
                longitude: 9.261227,
                latitude: 50.744911,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '941',
            name: 'Altenbüren',
            location: {
                longitude: 8.506352,
                latitude: 51.386086,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1725',
            name: 'Amberg',
            location: {
                longitude: 11.85398,
                latitude: 49.448144,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2238',
            name: 'Anklam',
            location: {
                longitude: 13.6959731,
                latitude: 53.8502906,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '255',
            name: 'Ansbach',
            location: {
                longitude: 10.5719357,
                latitude: 49.3004246,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '256',
            name: 'Arnsberg',
            location: {
                longitude: 8.066429,
                latitude: 51.405015,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '258',
            name: 'Aschaffenburg',
            location: {
                longitude: 9.14962,
                latitude: 49.977752,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1164',
            name: 'Aschersleben',
            location: {
                longitude: 11.462988,
                latitude: 51.758059,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '137',
            name: 'Augsburg',
            location: {
                longitude: 10.882896,
                latitude: 48.383046,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1244',
            name: 'Baabe',
            location: {
                longitude: 13.704913,
                latitude: 54.361697,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '3188',
            name: 'Bad Arolsen',
            location: {
                longitude: 9.0125506,
                latitude: 51.3798641,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '800',
            name: 'Bad Doberan',
            location: {
                longitude: 11.9086,
                latitude: 54.1028317,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1184',
            name: 'Bad Harzburg',
            location: {
                longitude: 10.556421,
                latitude: 51.887109,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '117',
            name: 'Bad Hersfeld',
            location: {
                longitude: 9.722872,
                latitude: 50.863034,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '23661',
            name: 'Bad Homburg',
            location: {
                longitude: 8.6210829465,
                latitude: 50.2196783918,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '279',
            name: 'Bad Oeynhausen',
            location: {
                longitude: 8.79963,
                latitude: 52.205381,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '283',
            name: 'Bad Salzuflen',
            location: {
                longitude: 8.7521109,
                latitude: 52.0765209,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '23541',
            name: 'Bad Schandau',
            location: {
                longitude: 14.1535713,
                latitude: 50.9207406,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '286',
            name: 'Bad Segeberg',
            location: {
                longitude: 10.309166,
                latitude: 53.934446,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '3818',
            name: 'Bad Urach',
            location: {
                longitude: 9.3948749,
                latitude: 48.4968956,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '289',
            name: 'Bad Wörishofen',
            location: {
                longitude: 10.5949358,
                latitude: 48.0051291,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1464',
            name: 'Bad Zwesten',
            location: {
                longitude: 9.175395,
                latitude: 51.051932,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '291',
            name: 'Baden-Baden',
            location: {
                longitude: 8.165347,
                latitude: 48.764275,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '7528',
            name: 'Balingen',
            location: {
                longitude: 8.8495298,
                latitude: 48.2748206,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '149',
            name: 'Bamberg',
            location: {
                longitude: 10.898663,
                latitude: 49.900581,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '18168',
            name: 'Bannemin',
            location: {
                longitude: 13.8531323,
                latitude: 54.0660299,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2258',
            name: 'Bansin',
            location: {
                longitude: 14.1376025,
                latitude: 53.9681233,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '133',
            name: 'Barsinghausen',
            location: {
                longitude: 9.415509,
                latitude: 52.332912,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1044',
            name: 'Bautzen',
            location: {
                longitude: 14.4237749,
                latitude: 51.182293,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '124',
            name: 'Bayreuth',
            location: {
                longitude: 11.584071,
                latitude: 49.94085,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '12428',
            name: 'Berchtesgaden',
            location: {
                longitude: 13.0000742,
                latitude: 47.6301796,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '20938',
            name: 'Berg',
            location: {
                longitude: 11.7891970616,
                latitude: 50.3718561153,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '122',
            name: 'Bergen (Celle)',
            location: {
                longitude: 9.95944,
                latitude: 52.812018,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1224',
            name: 'Bergen auf Rügen',
            location: {
                longitude: 13.43144,
                latitude: 54.41165,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '25391',
            name: 'Bernau bei Berlin',
            location: {
                longitude: 13.5672765,
                latitude: 52.6874845,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '299',
            name: 'Bernburg (Saale)',
            location: {
                longitude: 11.7342099,
                latitude: 51.797014,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '861',
            name: 'Bestwig',
            location: {
                longitude: 8.4013281,
                latitude: 51.3619591,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2808',
            name: 'Beverstedt',
            location: {
                longitude: 8.8211116,
                latitude: 53.4317865,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '302',
            name: 'Bielefeld',
            location: {
                longitude: 8.528143,
                latitude: 52.01847,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1204',
            name: 'Binz',
            location: {
                longitude: 13.600996,
                latitude: 54.405138,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '5398',
            name: 'Bischofsgrün',
            location: {
                longitude: 11.806513,
                latitude: 50.056723,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '15908',
            name: 'Bispingen',
            location: {
                longitude: 10.0001897,
                latitude: 53.0778389,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1174',
            name: 'Blankenburg',
            location: {
                longitude: 10.960557,
                latitude: 51.79521,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '307',
            name: 'Bocholt',
            location: {
                longitude: 6.6150917,
                latitude: 51.8384277,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '132',
            name: 'Bochum',
            location: {
                longitude: 7.22485,
                latitude: 51.47931,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '17198',
            name: 'Boltenhagen',
            location: {
                longitude: 11.2084363,
                latitude: 53.9853967,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '309',
            name: 'Bonn',
            location: {
                longitude: 7.108202,
                latitude: 50.724542,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '312',
            name: 'Borken',
            location: {
                longitude: 6.8594477,
                latitude: 51.8482714,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2508',
            name: 'Born (Darß)',
            location: {
                longitude: 12.526667,
                latitude: 54.385833,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '314',
            name: 'Bottrop',
            location: {
                longitude: 6.936545,
                latitude: 51.510187,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '169',
            name: 'Bremen',
            location: {
                longitude: 8.810576,
                latitude: 53.082179,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '319',
            name: 'Bremerhaven',
            location: {
                longitude: 8.599862,
                latitude: 53.536707,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '320',
            name: 'Bremervörde',
            location: {
                longitude: 9.1399785,
                latitude: 53.4871321,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '851',
            name: 'Brilon',
            location: {
                longitude: 8.574988,
                latitude: 51.398429,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '123',
            name: 'Brunswick',
            location: {
                longitude: 10.536665,
                latitude: 52.251194,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '325',
            name: 'Brühl (Phantasialand)',
            location: {
                longitude: 6.900167,
                latitude: 50.8268726,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '119',
            name: 'Celle',
            location: {
                longitude: 10.063048,
                latitude: 52.620029,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '170',
            name: 'Chemnitz',
            location: {
                longitude: 12.926912,
                latitude: 50.840744,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '24551',
            name: 'Clausthal-Zellerfeld',
            location: {
                longitude: 10.3407069,
                latitude: 51.8080063,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '339',
            name: 'Cloppenburg',
            location: {
                longitude: 8.0530158,
                latitude: 52.844198,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '135',
            name: 'Coblenz',
            location: {
                longitude: 7.589689,
                latitude: 50.349442,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '148',
            name: 'Coburg',
            location: {
                longitude: 10.958315,
                latitude: 50.262207,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '107',
            name: 'Cologne',
            location: {
                longitude: 6.958693,
                latitude: 50.935933,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '90',
            name: 'Constance',
            location: {
                longitude: 9.175545,
                latitude: 47.674693,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '340',
            name: 'Cottbus',
            location: {
                longitude: 14.3328679,
                latitude: 51.7563108,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '341',
            name: 'Cuxhaven',
            location: {
                longitude: 8.6930424,
                latitude: 53.8632464,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2288',
            name: 'Dahme',
            location: {
                longitude: 11.0847549,
                latitude: 54.2202208,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '97',
            name: 'Darmstadt',
            location: {
                longitude: 8.6286074,
                latitude: 49.8709188,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '343',
            name: 'Deggendorf',
            location: {
                longitude: 12.949842,
                latitude: 48.838567,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '921',
            name: 'Delmenhorst',
            location: {
                longitude: 8.65375,
                latitude: 53.03158,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '8468',
            name: 'Dessau',
            location: {
                longitude: 12.2424516,
                latitude: 51.8222436,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2478',
            name: 'Dierhagen',
            location: {
                longitude: 12.360556,
                latitude: 54.291389,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '349',
            name: 'Dillenburg',
            location: {
                longitude: 8.294339,
                latitude: 50.734063,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '131',
            name: 'Dortmund',
            location: {
                longitude: 7.458759,
                latitude: 51.519636,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '355',
            name: 'Dresden',
            location: {
                longitude: 13.740843,
                latitude: 51.053157,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '200',
            name: 'Duisburg',
            location: {
                longitude: 6.772041,
                latitude: 51.429636,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '108',
            name: 'Düsseldorf',
            location: {
                longitude: 6.7954195,
                latitude: 51.2228649,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '361',
            name: 'Eisenach',
            location: {
                longitude: 10.326067,
                latitude: 50.978598,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '363',
            name: 'Emden',
            location: {
                longitude: 7.2060095,
                latitude: 53.3594029,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2448',
            name: 'Engen',
            location: {
                longitude: 8.7737404,
                latitude: 47.854144,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '372',
            name: 'Erfurt',
            location: {
                longitude: 11.040066,
                latitude: 50.973748,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '150',
            name: 'Erlangen',
            location: {
                longitude: 11.00006,
                latitude: 49.596497,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '134',
            name: 'Essen',
            location: {
                longitude: 7.01461,
                latitude: 51.450253,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '382',
            name: 'Flensburg',
            location: {
                longitude: 9.437478,
                latitude: 54.780814,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '383',
            name: 'Forchheim',
            location: {
                longitude: 11.0698834,
                latitude: 49.7213064,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '384',
            name: 'Frankenberg (Eder)',
            location: {
                longitude: 8.789681,
                latitude: 51.054012,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '96',
            name: 'Frankfurt',
            location: {
                longitude: 8.639118,
                latitude: 50.080616,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '120',
            name: 'Frankfurt Airport',
            location: {
                longitude: 8.588125,
                latitude: 50.052538,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1855',
            name: 'Frankfurt Hahn',
            location: {
                longitude: 7.270911,
                latitude: 49.946788,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '92',
            name: 'Freiburg (i.Br.)',
            location: {
                longitude: 7.838946,
                latitude: 47.990907,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '93',
            name: 'Friedrichshafen',
            location: {
                longitude: 9.473237,
                latitude: 47.652758,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '389',
            name: 'Fulda',
            location: {
                longitude: 9.666109,
                latitude: 50.555891,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2568',
            name: 'Fürstenberg',
            location: {
                longitude: 13.1442839,
                latitude: 53.1807699,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '8318',
            name: 'Fürth',
            location: {
                longitude: 10.988667,
                latitude: 49.4771169,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '292',
            name: 'Füssen',
            location: {
                longitude: 10.680501,
                latitude: 47.568053,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '8228',
            name: 'Garding',
            location: {
                longitude: 8.78241,
                latitude: 54.33189,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '971',
            name: 'Garmisch-Partenkirchen',
            location: {
                longitude: 11.098409,
                latitude: 47.491094,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2858',
            name: 'Gelnhausen',
            location: {
                longitude: 9.1863725,
                latitude: 50.2045664,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1144',
            name: 'Gelsenkirchen',
            location: {
                longitude: 7.0857172,
                latitude: 51.517744,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1084',
            name: 'Gera',
            location: {
                longitude: 12.078006,
                latitude: 50.882649,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '407',
            name: 'Gießen',
            location: {
                longitude: 8.685109,
                latitude: 50.578162,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2978',
            name: 'Gladenbach',
            location: {
                longitude: 8.5778368,
                latitude: 50.7647016,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '414',
            name: 'Goslar',
            location: {
                longitude: 10.421527,
                latitude: 51.910958,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2728',
            name: 'Gotha',
            location: {
                longitude: 10.7092884,
                latitude: 50.9469188,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '808',
            name: 'Graal-Müritz',
            location: {
                longitude: 12.25,
                latitude: 54.25,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2578',
            name: 'Gransee',
            location: {
                longitude: 13.192189,
                latitude: 53.037369,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '417',
            name: 'Greifswald',
            location: {
                longitude: 13.390949,
                latitude: 54.091898,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2898',
            name: 'Groß Särchen',
            location: {
                longitude: 14.305556,
                latitude: 51.366667,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2298',
            name: 'Grömitz',
            location: {
                longitude: 10.9578956,
                latitude: 54.1493258,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1264',
            name: 'Göhren',
            location: {
                longitude: 13.738809,
                latitude: 54.345507,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '413',
            name: 'Göppingen',
            location: {
                longitude: 9.6512491,
                latitude: 48.7054382,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '3408',
            name: 'Görlitz',
            location: {
                longitude: 14.977648,
                latitude: 51.148141,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '128',
            name: 'Göttingen',
            location: {
                longitude: 9.926666,
                latitude: 51.534104,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '428',
            name: 'Günzburg',
            location: {
                longitude: 10.2775127,
                latitude: 48.4528412,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '429',
            name: 'Gütersloh',
            location: {
                longitude: 8.3857535,
                latitude: 51.9032375,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2308',
            name: 'Haffkrug',
            location: {
                longitude: 10.748889,
                latitude: 54.051111,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '431',
            name: 'Hagen',
            location: {
                longitude: 7.4806015,
                latitude: 51.384315,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '235',
            name: 'Halberstadt',
            location: {
                longitude: 11.073671,
                latitude: 51.898274,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '11648',
            name: 'Halblech',
            location: {
                longitude: 10.8201512,
                latitude: 47.6316531,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '152',
            name: 'Halle',
            location: {
                longitude: 11.984598,
                latitude: 51.477501,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '118',
            name: 'Hamburg',
            location: {
                longitude: 10.011657,
                latitude: 53.551767,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '25181',
            name: 'Hamburg Airport',
            location: {
                longitude: 9.9974128,
                latitude: 53.633622,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '436',
            name: 'Hamm',
            location: {
                longitude: 7.806419,
                latitude: 51.67647,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2698',
            name: 'Hamminkeln',
            location: {
                longitude: 6.5954892,
                latitude: 51.7328603,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '437',
            name: 'Hanau',
            location: {
                longitude: 8.931168,
                latitude: 50.121412,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '146',
            name: 'Hanover',
            location: {
                longitude: 9.742019,
                latitude: 52.379398,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '18278',
            name: 'Haselünne',
            location: {
                longitude: 7.4809826,
                latitude: 52.6763414,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '8368',
            name: 'Heide',
            location: {
                longitude: 9.1019015,
                latitude: 54.1951764,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '98',
            name: 'Heidelberg',
            location: {
                longitude: 8.676674,
                latitude: 49.403805,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '444',
            name: 'Heidenheim',
            location: {
                longitude: 10.1544437,
                latitude: 48.6835077,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '110',
            name: 'Heilbronn',
            location: {
                longitude: 9.219901,
                latitude: 49.168435,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '10868',
            name: 'Heiligenhafen',
            location: {
                longitude: 10.97561,
                latitude: 54.3696799,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '448',
            name: 'Helmstedt',
            location: {
                longitude: 11.009544,
                latitude: 52.228966,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2268',
            name: 'Heringsdorf',
            location: {
                longitude: 14.1425523,
                latitude: 53.9446357,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '455',
            name: 'Herne',
            location: {
                longitude: 7.218346,
                latitude: 51.544482,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '145',
            name: 'Herzberg',
            location: {
                longitude: 10.333833,
                latitude: 51.655975,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '3438',
            name: 'Herzhausen (Vöhl)',
            location: {
                longitude: 8.893463,
                latitude: 51.184677,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '129',
            name: 'Hildesheim',
            location: {
                longitude: 9.955595,
                latitude: 52.149715,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1574',
            name: 'Himmelkron',
            location: {
                longitude: 11.60227,
                latitude: 50.0612012,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '17498',
            name: 'Hinterzarten',
            location: {
                longitude: 8.1055964,
                latitude: 47.9057159,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1104',
            name: 'Hof',
            location: {
                longitude: 11.924546,
                latitude: 50.308397,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '23681',
            name: 'Hohnstein',
            location: {
                longitude: 14.0554074729,
                latitude: 50.9857833083,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '5388',
            name: 'Hollfeld',
            location: {
                longitude: 11.29089,
                latitude: 49.936505,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '471',
            name: 'Homburg',
            location: {
                longitude: 7.33821,
                latitude: 49.327597,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '3458',
            name: 'Hoyerswerda',
            location: {
                longitude: 14.2536419,
                latitude: 51.4388605,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '17458',
            name: 'Husum',
            location: {
                longitude: 9.0600628,
                latitude: 54.4837642,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '3468',
            name: 'Ilmenau',
            location: {
                longitude: 10.9254728,
                latitude: 50.6843502,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1024',
            name: 'Immenstadt',
            location: {
                longitude: 10.221071,
                latitude: 47.559478,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '479',
            name: 'Ingolstadt',
            location: {
                longitude: 11.434459,
                latitude: 48.758363,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1344',
            name: 'Isselburg',
            location: {
                longitude: 6.445954,
                latitude: 51.819194,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '8268',
            name: 'Itzehoe',
            location: {
                longitude: 9.5051475,
                latitude: 53.9317752,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '484',
            name: 'Jena',
            location: {
                longitude: 11.590522,
                latitude: 50.906927,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '3098',
            name: 'Kahla',
            location: {
                longitude: 11.5825357,
                latitude: 50.8073892,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '174',
            name: 'Kaiserslautern',
            location: {
                longitude: 7.769372,
                latitude: 49.436536,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '961',
            name: 'Kaltenkirchen',
            location: {
                longitude: 9.936476,
                latitude: 53.843998,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '109',
            name: 'Karlsruhe',
            location: {
                longitude: 8.4004533,
                latitude: 48.9914681,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '491',
            name: 'Kassel',
            location: {
                longitude: 9.508962,
                latitude: 51.303273,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '105',
            name: 'Kehl',
            location: {
                longitude: 7.8080607,
                latitude: 48.5765787,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2328',
            name: 'Kellenhusen',
            location: {
                longitude: 11.0604118,
                latitude: 54.1921911,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '495',
            name: 'Kempten',
            location: {
                longitude: 10.317048,
                latitude: 47.719819,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '498',
            name: 'Kiel',
            location: {
                longitude: 10.130618,
                latitude: 54.310865,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2878',
            name: 'Kleinwelka',
            location: {
                longitude: 14.3911157,
                latitude: 51.2109535,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '17348',
            name: 'Klink',
            location: {
                longitude: 12.6210697,
                latitude: 53.476887,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '17208',
            name: 'Klütz',
            location: {
                longitude: 11.1645932,
                latitude: 53.9654908,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '508',
            name: 'Korbach',
            location: {
                longitude: 8.8709876,
                latitude: 51.2774069,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '25401',
            name: 'Korswandt',
            location: {
                longitude: 14.1618466,
                latitude: 53.9186211,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '18058',
            name: 'Koserow',
            location: {
                longitude: 14.0032864,
                latitude: 54.0508721,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '509',
            name: 'Krefeld',
            location: {
                longitude: 6.569202,
                latitude: 51.324327,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '18028',
            name: 'Kölpinsee',
            location: {
                longitude: 14.0233734,
                latitude: 54.0386609,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2888',
            name: 'Königswartha',
            location: {
                longitude: 14.3310113,
                latitude: 51.3107087,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '8458',
            name: 'Köthen',
            location: {
                longitude: 11.9802357,
                latitude: 51.7505762,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '805',
            name: 'Kühlungsborn',
            location: {
                longitude: 11.7420026,
                latitude: 54.1468513,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '522',
            name: 'Landau',
            location: {
                longitude: 8.125738,
                latitude: 49.196735,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '208',
            name: 'Landsberg am Lech',
            location: {
                longitude: 10.8703515,
                latitude: 48.050783,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '530',
            name: 'Leer',
            location: {
                longitude: 7.4679018,
                latitude: 53.235657,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '113',
            name: 'Leipzig',
            location: {
                longitude: 12.396152,
                latitude: 51.367887,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '25201',
            name: 'Leipzig / Halle Airport',
            location: {
                longitude: 12.2203805,
                latitude: 51.4220814,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '536',
            name: 'Leutkirch',
            location: {
                longitude: 10.017229,
                latitude: 47.826803,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1114',
            name: 'Limburg (Lahn)',
            location: {
                longitude: 8.0795783,
                latitude: 50.3986005,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '142',
            name: 'Lindau',
            location: {
                longitude: 9.703958,
                latitude: 47.552786,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '17898',
            name: 'Linstow',
            location: {
                longitude: 12.3712165,
                latitude: 53.618935,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '542',
            name: 'Lippstadt',
            location: {
                longitude: 8.3406481,
                latitude: 51.6712278,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2748',
            name: 'Lubmin',
            location: {
                longitude: 13.6175969,
                latitude: 54.1345649,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '102',
            name: 'Ludwigshafen',
            location: {
                longitude: 8.4360945,
                latitude: 49.4776962,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '18258',
            name: 'Löningen',
            location: {
                longitude: 7.7587838,
                latitude: 52.736526,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '100',
            name: 'Lörrach',
            location: {
                longitude: 7.6661047,
                latitude: 47.6159293,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2588',
            name: 'Löwenberg',
            location: {
                longitude: 13.1530451,
                latitude: 52.896798,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '547',
            name: 'Lübeck',
            location: {
                longitude: 10.669183,
                latitude: 53.866181,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '548',
            name: 'Lüdenscheid',
            location: {
                longitude: 7.63126,
                latitude: 51.2191038,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '151',
            name: 'Magdeburg',
            location: {
                longitude: 11.624748,
                latitude: 52.131618,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '554',
            name: 'Mainz',
            location: {
                longitude: 8.2577,
                latitude: 50.00332,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '17368',
            name: 'Malchow',
            location: {
                longitude: 12.42169,
                latitude: 53.4784568,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '103',
            name: 'Mannheim',
            location: {
                longitude: 8.4728193,
                latitude: 49.4780796,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1454',
            name: 'Marburg',
            location: {
                longitude: 8.774438,
                latitude: 50.817354,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2438',
            name: 'Markdorf',
            location: {
                longitude: 9.3925019,
                latitude: 47.7193839,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '557',
            name: 'Marktredwitz',
            location: {
                longitude: 12.0899816,
                latitude: 50.0035483,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '22688',
            name: 'Marktschellenberg',
            location: {
                longitude: 13.0450592,
                latitude: 47.6959328,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '881',
            name: 'Marsberg',
            location: {
                longitude: 8.855189,
                latitude: 51.462507,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1274',
            name: 'Medebach',
            location: {
                longitude: 8.689732,
                latitude: 51.206534,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '91',
            name: 'Meersburg',
            location: {
                longitude: 9.271471,
                latitude: 47.695249,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '841',
            name: 'Melle',
            location: {
                longitude: 8.351577,
                latitude: 52.190812,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '566',
            name: 'Mellrichstadt',
            location: {
                longitude: 10.3029567,
                latitude: 50.4279343,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '568',
            name: 'Memmingen',
            location: {
                longitude: 10.219948,
                latitude: 47.985423,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '24671',
            name: 'Memmingen Airport',
            location: {
                longitude: 10.234349,
                latitude: 47.9875422,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '8298',
            name: 'Mendig',
            location: {
                longitude: 7.2753403,
                latitude: 50.373592,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '3518',
            name: 'Meppen',
            location: {
                longitude: 7.2994007,
                latitude: 52.6953479,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '3828',
            name: 'Merklingen',
            location: {
                longitude: 9.7553839,
                latitude: 48.5103542,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '571',
            name: 'Merseburg',
            location: {
                longitude: 11.991271,
                latitude: 51.355965,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '572',
            name: 'Merzig',
            location: {
                longitude: 6.6437843,
                latitude: 49.4489588,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '871',
            name: 'Meschede',
            location: {
                longitude: 8.280059,
                latitude: 51.349065,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '574',
            name: 'Metzingen',
            location: {
                longitude: 9.2864061,
                latitude: 48.5398997,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '3528',
            name: 'Mittenwald',
            location: {
                longitude: 11.2640301,
                latitude: 47.4413018,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '11738',
            name: 'Moers',
            location: {
                longitude: 6.6408148,
                latitude: 51.4516041,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '11548',
            name: 'Montabaur',
            location: {
                longitude: 7.8257953,
                latitude: 50.4358385,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '94',
            name: 'Munich',
            location: {
                longitude: 11.581981,
                latitude: 48.135124,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '585',
            name: 'Munich International Airport',
            location: {
                longitude: 11.79021,
                latitude: 48.355832,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '217',
            name: 'Mönchengladbach',
            location: {
                longitude: 6.446858,
                latitude: 51.198242,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '8188',
            name: 'Mühldorf',
            location: {
                longitude: 12.520208,
                latitude: 48.260632,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '584',
            name: 'Mülheim an der Ruhr',
            location: {
                longitude: 6.888282,
                latitude: 51.429704,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '125',
            name: 'Münchberg',
            location: {
                longitude: 11.777464,
                latitude: 50.20334,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '587',
            name: 'Münster',
            location: {
                longitude: 7.632169,
                latitude: 51.953303,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '25191',
            name: 'Münster / Osnabrück Airport',
            location: {
                longitude: 7.685923,
                latitude: 52.133725,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '8348',
            name: 'Nassenheide',
            location: {
                longitude: 13.2197081,
                latitude: 52.8199972,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '588',
            name: 'Neckarsulm',
            location: {
                longitude: 9.2287089,
                latitude: 49.1922581,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '931',
            name: 'Neheim-Hüsten',
            location: {
                longitude: 7.970046,
                latitude: 51.438485,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2908',
            name: 'Neschwitz',
            location: {
                longitude: 14.3292549,
                latitude: 51.269463,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1034',
            name: 'Neu-Ulm',
            location: {
                longitude: 10.00318,
                latitude: 48.392066,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '591',
            name: 'Neubrandenburg',
            location: {
                longitude: 13.2779269,
                latitude: 53.5678292,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '598',
            name: 'Neumünster',
            location: {
                longitude: 9.980308,
                latitude: 54.075243,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '599',
            name: 'Neunkirchen',
            location: {
                longitude: 7.178235,
                latitude: 49.353448,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '602',
            name: 'Neustadt in Holstein',
            location: {
                longitude: 10.8153384,
                latitude: 54.1018029,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2338',
            name: 'Neustadt-Glewe',
            location: {
                longitude: 11.5913601,
                latitude: 53.374297,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2558',
            name: 'Neustrelitz',
            location: {
                longitude: 13.0730197,
                latitude: 53.3601147,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2398',
            name: 'Nienhagen',
            location: {
                longitude: 11.9530619,
                latitude: 54.1614237,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '154',
            name: 'Norddeich',
            location: {
                longitude: 7.158151,
                latitude: 53.624249,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '153',
            name: 'Norden',
            location: {
                longitude: 7.21732,
                latitude: 53.588964,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '147',
            name: 'Nordhausen',
            location: {
                longitude: 10.789948,
                latitude: 51.493702,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '608',
            name: 'Nordhorn',
            location: {
                longitude: 7.0685708,
                latitude: 52.4295801,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '610',
            name: 'Northeim',
            location: {
                longitude: 9.9959057,
                latitude: 51.7001785,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '17538',
            name: 'Nossen',
            location: {
                longitude: 13.2948865,
                latitude: 51.058317,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '104',
            name: 'Nuremberg',
            location: {
                longitude: 11.0855001,
                latitude: 49.4477152,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '611',
            name: 'Nürtingen',
            location: {
                longitude: 9.3469069,
                latitude: 48.624421,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '203',
            name: 'Oberhausen',
            location: {
                longitude: 6.864293,
                latitude: 51.48289,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '811',
            name: 'Oberstdorf',
            location: {
                longitude: 10.27776,
                latitude: 47.41217,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '617',
            name: 'Offenburg',
            location: {
                longitude: 7.937914,
                latitude: 48.472013,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '168',
            name: 'Oldenburg',
            location: {
                longitude: 8.222081,
                latitude: 53.145696,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '8488',
            name: 'Olpe',
            location: {
                longitude: 7.8502943,
                latitude: 51.0282107,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '891',
            name: 'Olsberg',
            location: {
                longitude: 8.482936,
                latitude: 51.360339,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '3108',
            name: 'Orlamünde',
            location: {
                longitude: 11.5161408,
                latitude: 50.7737899,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '621',
            name: 'Osnabrück',
            location: {
                longitude: 8.057886,
                latitude: 52.273961,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '144',
            name: 'Osterode',
            location: {
                longitude: 10.246371,
                latitude: 51.72597,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '626',
            name: 'Paderborn',
            location: {
                longitude: 8.75029,
                latitude: 51.717374,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '7798',
            name: 'Pasewalk',
            location: {
                longitude: 13.989123,
                latitude: 53.514662,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '628',
            name: 'Passau',
            location: {
                longitude: 13.452241,
                latitude: 48.574352,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '629',
            name: 'Peine',
            location: {
                longitude: 10.243267,
                latitude: 52.3204095,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '632',
            name: 'Pforzheim',
            location: {
                longitude: 8.6932927,
                latitude: 48.8926378,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '635',
            name: 'Pirmasens',
            location: {
                longitude: 7.598198,
                latitude: 49.206369,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '23531',
            name: 'Pirna',
            location: {
                longitude: 13.9419168,
                latitude: 50.9625175,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1534',
            name: 'Plauen',
            location: {
                longitude: 12.1368679,
                latitude: 50.4976133,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '12098',
            name: 'Polch',
            location: {
                longitude: 7.3132187,
                latitude: 50.3015713,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2528',
            name: 'Prerow',
            location: {
                longitude: 12.5652072,
                latitude: 54.4439319,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2045',
            name: 'Puttgarden',
            location: {
                longitude: 11.216667,
                latitude: 54.5,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '643',
            name: 'Quedlinburg',
            location: {
                longitude: 11.151809,
                latitude: 51.785194,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '646',
            name: 'Radolfzell',
            location: {
                longitude: 8.9669098,
                latitude: 47.745237,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '651',
            name: 'Ravensburg',
            location: {
                longitude: 9.607538,
                latitude: 47.785192,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2055',
            name: 'Recklinghausen',
            location: {
                longitude: 7.203693,
                latitude: 51.617629,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '653',
            name: 'Regensburg',
            location: {
                longitude: 12.098899,
                latitude: 49.012473,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '8198',
            name: 'Remscheid',
            location: {
                longitude: 7.1896962,
                latitude: 51.1787418,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2638',
            name: 'Rendsburg',
            location: {
                longitude: 9.6606993,
                latitude: 54.3080869,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '158',
            name: 'Reutlingen',
            location: {
                longitude: 9.210813,
                latitude: 48.49704,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2838',
            name: 'Rheda-Wiedenbrück',
            location: {
                longitude: 8.2997425,
                latitude: 51.8458575,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '17488',
            name: 'Riegel am Kaiserstuhl',
            location: {
                longitude: 7.7474463,
                latitude: 48.1559072,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '669',
            name: 'Rosenheim',
            location: {
                longitude: 12.1181047,
                latitude: 47.8571272,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '139',
            name: 'Rostock',
            location: {
                longitude: 12.126587,
                latitude: 54.114857,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2948',
            name: 'Rudolstadt',
            location: {
                longitude: 11.3336548,
                latitude: 50.7182972,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '99',
            name: 'Rust (Europa-Park)',
            location: {
                longitude: 7.7213824,
                latitude: 48.2697332,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '3678',
            name: 'Saalfeld',
            location: {
                longitude: 11.3661502,
                latitude: 50.6492736,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '674',
            name: 'Saarbrücken',
            location: {
                longitude: 7.000758,
                latitude: 49.241926,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '676',
            name: 'Salzgitter',
            location: {
                longitude: 10.326798,
                latitude: 52.155954,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '25601',
            name: 'Sassnitz',
            location: {
                longitude: 13.6331916,
                latitude: 54.5159131,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2348',
            name: 'Scharbeutz',
            location: {
                longitude: 10.7544158,
                latitude: 54.0224961,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1544',
            name: 'Schleiz',
            location: {
                longitude: 11.789977,
                latitude: 50.551969,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2628',
            name: 'Schleswig',
            location: {
                longitude: 9.563227,
                latitude: 54.5239312,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '17378',
            name: 'Schlüchtern',
            location: {
                longitude: 9.5255493,
                latitude: 50.3493544,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1304',
            name: 'Schmallenberg (Bödefeld)',
            location: {
                longitude: 8.394026,
                latitude: 51.249772,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '17128',
            name: 'Schongau',
            location: {
                longitude: 10.8942968,
                latitude: 47.8150246,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '686',
            name: 'Schwandorf',
            location: {
                longitude: 12.102584,
                latitude: 49.32723,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '11668',
            name: 'Schwangau Neuschwanstein',
            location: {
                longitude: 10.7363804,
                latitude: 47.5556743,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '689',
            name: 'Schweinfurt',
            location: {
                longitude: 10.211078,
                latitude: 50.036072,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '690',
            name: 'Schwerin',
            location: {
                longitude: 11.408746,
                latitude: 53.634596,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '115',
            name: 'Schwetzingen',
            location: {
                longitude: 8.5781,
                latitude: 49.384075,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '685',
            name: 'Schwäbisch Gmünd',
            location: {
                longitude: 9.8045704,
                latitude: 48.7994019,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '12418',
            name: 'Schönau am Königssee',
            location: {
                longitude: 12.9483501,
                latitude: 47.5251713,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '692',
            name: 'Seesen',
            location: {
                longitude: 10.173321,
                latitude: 51.887847,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1154',
            name: 'Selb',
            location: {
                longitude: 12.126129,
                latitude: 50.173767,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1254',
            name: 'Sellin',
            location: {
                longitude: 13.690455,
                latitude: 54.376064,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1294',
            name: 'Siedlinghausen',
            location: {
                longitude: 8.472049,
                latitude: 51.252743,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '694',
            name: 'Siegen',
            location: {
                longitude: 8.015708,
                latitude: 50.871749,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2648',
            name: 'Sierksdorf',
            location: {
                longitude: 10.7719279,
                latitude: 54.0682451,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2318',
            name: 'Sierksdorf (Hansa Park)',
            location: {
                longitude: 10.77757,
                latitude: 54.07508,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '7558',
            name: 'Sigmaringen',
            location: {
                longitude: 9.2286121,
                latitude: 48.0912921,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1354',
            name: 'Simbach',
            location: {
                longitude: 13.024632,
                latitude: 48.263654,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2095',
            name: 'Singen',
            location: {
                longitude: 8.851794,
                latitude: 47.764702,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '697',
            name: 'Sinsheim',
            location: {
                longitude: 8.8884905,
                latitude: 49.2488637,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '483',
            name: 'Sittensen',
            location: {
                longitude: 9.50483,
                latitude: 53.293261,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '698',
            name: 'Soest',
            location: {
                longitude: 8.105754,
                latitude: 51.5711476,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2928',
            name: 'Soltau',
            location: {
                longitude: 9.842125,
                latitude: 52.9846914,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '701',
            name: 'Sonthofen',
            location: {
                longitude: 10.272957,
                latitude: 47.517663,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '227',
            name: 'Spremberg',
            location: {
                longitude: 14.376813,
                latitude: 51.5696303,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '21938',
            name: 'St. Gangloff',
            location: {
                longitude: 11.8612773,
                latitude: 50.8557682,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '709',
            name: 'Stade',
            location: {
                longitude: 9.4709494,
                latitude: 53.5928618,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '11628',
            name: 'Steingaden',
            location: {
                longitude: 10.8608513,
                latitude: 47.7025337,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '17098',
            name: 'Stockach',
            location: {
                longitude: 9.0091528,
                latitude: 47.8531635,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1214',
            name: 'Stralsund',
            location: {
                longitude: 13.08856,
                latitude: 54.308535,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '716',
            name: 'Straubing',
            location: {
                longitude: 12.5801538,
                latitude: 48.8777333,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '101',
            name: 'Stuttgart',
            location: {
                longitude: 9.259216,
                latitude: 48.749923,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '8238',
            name: 'Tating',
            location: {
                longitude: 8.7056332,
                latitude: 54.324719,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '8328',
            name: 'Teschendorf',
            location: {
                longitude: 13.173014,
                latitude: 52.850777,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2358',
            name: 'Timmendorfer Strand',
            location: {
                longitude: 10.7789388,
                latitude: 53.9920636,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '95',
            name: 'Titisee-Neustadt',
            location: {
                longitude: 8.1593764,
                latitude: 47.9077198,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '173',
            name: 'Trier',
            location: {
                longitude: 6.651889,
                latitude: 49.757534,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '8218',
            name: 'Tönning',
            location: {
                longitude: 8.9381144,
                latitude: 54.3157227,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '159',
            name: 'Tübingen',
            location: {
                longitude: 9.056696,
                latitude: 48.516633,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2958',
            name: 'Uhlstaedt',
            location: {
                longitude: 11.466389,
                latitude: 50.741944,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '733',
            name: 'Ulm',
            location: {
                longitude: 10.010422,
                latitude: 48.425855,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '23148',
            name: 'Unna',
            location: {
                longitude: 7.6853114,
                latitude: 51.5426349,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1414',
            name: 'Uplengen',
            location: {
                longitude: 7.755616,
                latitude: 53.263037,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2278',
            name: 'Usedom',
            location: {
                longitude: 14.083275,
                latitude: 53.933869,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '737',
            name: 'Vaihingen',
            location: {
                longitude: 8.961208,
                latitude: 48.9334357,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '740',
            name: 'Vechta',
            location: {
                longitude: 8.2838761,
                latitude: 52.7292252,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '747',
            name: 'Villingen-Schwenningen',
            location: {
                longitude: 8.538705,
                latitude: 48.063944,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1564',
            name: 'Wangen',
            location: {
                longitude: 9.830971,
                latitude: 47.6874999,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '140',
            name: 'Warnemünde',
            location: {
                longitude: 12.071847,
                latitude: 54.173325,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '761',
            name: 'Weiden in der Oberpfalz',
            location: {
                longitude: 12.154855,
                latitude: 49.670404,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '763',
            name: 'Weimar',
            location: {
                longitude: 11.327605,
                latitude: 50.98827,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '17928',
            name: 'Weinheim (Bergstraße)',
            location: {
                longitude: 8.6698645,
                latitude: 49.5563433,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1124',
            name: 'Weißenfels',
            location: {
                longitude: 11.967903,
                latitude: 51.199882,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '772',
            name: 'Wernigerode',
            location: {
                longitude: 10.790655,
                latitude: 51.840653,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '773',
            name: 'Wertheim',
            location: {
                longitude: 9.5128511,
                latitude: 49.7586035,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2708',
            name: 'Wesel',
            location: {
                longitude: 6.6295679,
                latitude: 51.6643079,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '10988',
            name: 'Westerstede',
            location: {
                longitude: 7.926366,
                latitude: 53.2550728,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '3758',
            name: 'Wetter (Hessen)',
            location: {
                longitude: 8.727849,
                latitude: 50.905246,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '8408',
            name: 'Wetzlar',
            location: {
                longitude: 8.5081646,
                latitude: 50.5589802,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2518',
            name: 'Wieck (Darß)',
            location: {
                longitude: 12.5809999,
                latitude: 54.4093936,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '779',
            name: 'Wiesbaden',
            location: {
                longitude: 8.246166,
                latitude: 50.070865,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '167',
            name: 'Wilhelmshaven',
            location: {
                longitude: 8.118387,
                latitude: 53.519004,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '10788',
            name: 'Willingen (Upland)',
            location: {
                longitude: 8.6327185,
                latitude: 51.3020791,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1284',
            name: 'Winterberg',
            location: {
                longitude: 8.532895,
                latitude: 51.19585,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2195',
            name: 'Wismar',
            location: {
                longitude: 11.465178,
                latitude: 53.89728,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2868',
            name: 'Wittichenau',
            location: {
                longitude: 14.296199,
                latitude: 51.397285,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '788',
            name: 'Wittlich',
            location: {
                longitude: 6.883333,
                latitude: 49.983333,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '130',
            name: 'Wolfenbüttel',
            location: {
                longitude: 10.534392,
                latitude: 52.156361,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '790',
            name: 'Wolfsburg',
            location: {
                longitude: 10.7865461,
                latitude: 52.4226503,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '18078',
            name: 'Wolgast',
            location: {
                longitude: 13.76676,
                latitude: 54.049749,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '11288',
            name: 'Wolpertshausen',
            location: {
                longitude: 9.8475077,
                latitude: 49.1672227,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '791',
            name: 'Worms',
            location: {
                longitude: 8.3507182,
                latitude: 49.6341372,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '171',
            name: 'Wuppertal',
            location: {
                longitude: 7.224487,
                latitude: 51.275083,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2488',
            name: 'Wustrow',
            location: {
                longitude: 12.3962673,
                latitude: 54.3486911,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '111',
            name: 'Würzburg',
            location: {
                longitude: 9.9325526,
                latitude: 49.8013138,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '1134',
            name: 'Zeitz',
            location: {
                longitude: 12.133106,
                latitude: 51.055855,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '112',
            name: 'Zella-Mehlis (Suhl/Oberhof)',
            location: {
                longitude: 10.6748378,
                latitude: 50.6465828,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '18158',
            name: 'Zempin',
            location: {
                longitude: 13.953624,
                latitude: 54.0675076,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '2538',
            name: 'Zingst',
            location: {
                longitude: 12.6888015,
                latitude: 54.4357158,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '18068',
            name: 'Zinnowitz',
            location: {
                longitude: 13.9084743,
                latitude: 54.0754408,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '18088',
            name: 'Zirchow',
            location: {
                longitude: 14.128105,
                latitude: 53.887268,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '795',
            name: 'Zweibrücken',
            location: {
                longitude: 7.357167,
                latitude: 49.247358,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '796',
            name: 'Zwickau',
            location: {
                longitude: 12.493709,
                latitude: 50.711126,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '730',
            name: 'Überlingen',
            location: {
                longitude: 9.163279,
                latitude: 47.769278,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
        {
            id: '18098',
            name: 'Ückeritz',
            location: {
                longitude: 14.0467221,
                latitude: 54.0120552,
                country: {
                    name: 'Germany',
                    code: 'DE',
                },
            },
        },
    ],
    Denmark: [
        {
            id: '11767',
            name: 'Aabenraa',
            location: {
                longitude: 9.4151589,
                latitude: 55.040852,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '7078',
            name: 'Aalborg',
            location: {
                longitude: 9.921747,
                latitude: 57.0488195,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '5338',
            name: 'Aarhus',
            location: {
                longitude: 10.203921,
                latitude: 56.162939,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '27241',
            name: 'Billund Airport',
            location: {
                longitude: 9.112366,
                latitude: 55.728449,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '7158',
            name: 'Billund Legoland',
            location: {
                longitude: 9.112366,
                latitude: 55.728449,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '1905',
            name: 'Copenhagen',
            location: {
                longitude: 12.565516,
                latitude: 55.670109,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '22268',
            name: 'Copenhagen Airport (Kastrup)',
            location: {
                longitude: 12.6507628,
                latitude: 55.6180236,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '12548',
            name: 'Ebeltoft',
            location: {
                longitude: 10.677857,
                latitude: 56.196327,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '7118',
            name: 'Esbjerg',
            location: {
                longitude: 8.459405,
                latitude: 55.476466,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '7058',
            name: 'Fredericia',
            location: {
                longitude: 9.749517,
                latitude: 55.5689298,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '12568',
            name: 'Grenaa',
            location: {
                longitude: 10.894919,
                latitude: 56.411808,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '7488',
            name: 'Haderslev',
            location: {
                longitude: 9.48911,
                latitude: 55.250072,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '7108',
            name: 'Helsingör',
            location: {
                longitude: 12.592127,
                latitude: 56.030787,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '7188',
            name: 'Herning',
            location: {
                longitude: 8.967322,
                latitude: 56.138557,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '7088',
            name: 'Hirtshals',
            location: {
                longitude: 9.9668379,
                latitude: 57.586953,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '7128',
            name: 'Hjørring',
            location: {
                longitude: 9.9957635,
                latitude: 57.4567788,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '16418',
            name: 'Holstebro',
            location: {
                longitude: 8.621727,
                latitude: 56.361534,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '7048',
            name: 'Horsens',
            location: {
                longitude: 9.8475881,
                latitude: 55.8581302,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '5318',
            name: 'Kolding',
            location: {
                longitude: 9.4730519,
                latitude: 55.495973,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '5308',
            name: 'Krusa',
            location: {
                longitude: 9.401548,
                latitude: 54.848754,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '28221',
            name: 'Maribo',
            location: {
                longitude: 11.50737,
                latitude: 54.774717,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '11777',
            name: 'Middelfart',
            location: {
                longitude: 9.747172,
                latitude: 55.497204,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '28211',
            name: 'Nakskov',
            location: {
                longitude: 11.143724,
                latitude: 54.833406,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '16438',
            name: 'Nyborg',
            location: {
                longitude: 10.809367,
                latitude: 55.307772,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '20828',
            name: 'Nykøbing Falster',
            location: {
                longitude: 11.875492,
                latitude: 54.765422,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '12618',
            name: 'Nykøbing Mors',
            location: {
                longitude: 8.8574417,
                latitude: 56.7955597,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '28241',
            name: 'Næstved',
            location: {
                longitude: 11.759207,
                latitude: 55.224613,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '7138',
            name: 'Odense',
            location: {
                longitude: 10.40237,
                latitude: 55.403756,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '7068',
            name: 'Randers',
            location: {
                longitude: 10.036539,
                latitude: 56.460584,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '16398',
            name: 'Ringsted',
            location: {
                longitude: 11.791372,
                latitude: 55.442952,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '16428',
            name: 'Rudkøbing',
            location: {
                longitude: 10.721751,
                latitude: 54.94085,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '12628',
            name: 'Rønde',
            location: {
                longitude: 10.476545,
                latitude: 56.300275,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '28231',
            name: 'Sakskøbing',
            location: {
                longitude: 11.631226,
                latitude: 54.798236,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '11787',
            name: 'Silkeborg',
            location: {
                longitude: 9.5549216,
                latitude: 56.176362,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '12638',
            name: 'Skanderborg',
            location: {
                longitude: 9.9297989,
                latitude: 56.037247,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '11807',
            name: 'Skive',
            location: {
                longitude: 9.0309083,
                latitude: 56.5651232,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '26321',
            name: 'Skjern',
            location: {
                longitude: 8.500266,
                latitude: 55.944128,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '12648',
            name: 'Slagelse',
            location: {
                longitude: 11.355257,
                latitude: 55.403692,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '16968',
            name: 'Svendborg',
            location: {
                longitude: 10.607282,
                latitude: 55.067434,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '16408',
            name: 'Sønderborg',
            location: {
                longitude: 9.794143,
                latitude: 54.910648,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '12658',
            name: 'Thisted',
            location: {
                longitude: 8.703492,
                latitude: 56.959168,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '12668',
            name: 'Tirstrup',
            location: {
                longitude: 10.687407,
                latitude: 56.300462,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '11817',
            name: 'Vejen',
            location: {
                longitude: 9.0756715,
                latitude: 55.4659847,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '5328',
            name: 'Vejle',
            location: {
                longitude: 9.5363541,
                latitude: 55.7113112,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '7228',
            name: 'Viborg',
            location: {
                longitude: 9.396347,
                latitude: 56.452027,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
        {
            id: '28201',
            name: 'Vordingborg',
            location: {
                longitude: 11.909363,
                latitude: 55.008925,
                country: {
                    name: 'Denmark',
                    code: 'DK',
                },
            },
        },
    ],
    Spain: [
        {
            id: '25301',
            name: 'Alicante',
            location: {
                longitude: -0.4906855,
                latitude: 38.3459963,
                country: {
                    name: 'Spain',
                    code: 'ES',
                },
            },
        },
        {
            id: '15998',
            name: 'Badajoz',
            location: {
                longitude: -6.9706535,
                latitude: 38.8794495,
                country: {
                    name: 'Spain',
                    code: 'ES',
                },
            },
        },
        {
            id: '5178',
            name: 'Barcelona',
            location: {
                longitude: 2.1734035,
                latitude: 41.3850639,
                country: {
                    name: 'Spain',
                    code: 'ES',
                },
            },
        },
        {
            id: '27551',
            name: 'Benidorm',
            location: {
                longitude: -0.1224937,
                latitude: 38.5410566,
                country: {
                    name: 'Spain',
                    code: 'ES',
                },
            },
        },
        {
            id: '5188',
            name: 'Bilbao',
            location: {
                longitude: -2.9349852,
                latitude: 43.2630126,
                country: {
                    name: 'Spain',
                    code: 'ES',
                },
            },
        },
        {
            id: '27531',
            name: 'Castellon de la Plana',
            location: {
                longitude: -0.0513246,
                latitude: 39.9863563,
                country: {
                    name: 'Spain',
                    code: 'ES',
                },
            },
        },
        {
            id: '27541',
            name: 'Gandia',
            location: {
                longitude: -0.1844671,
                latitude: 38.968032,
                country: {
                    name: 'Spain',
                    code: 'ES',
                },
            },
        },
        {
            id: '23791',
            name: 'Girona Airport',
            location: {
                longitude: 2.7629694,
                latitude: 41.9027295,
                country: {
                    name: 'Spain',
                    code: 'ES',
                },
            },
        },
        {
            id: '5238',
            name: 'Lloret de Mar',
            location: {
                longitude: 2.84235,
                latitude: 41.701087,
                country: {
                    name: 'Spain',
                    code: 'ES',
                },
            },
        },
        {
            id: '13508',
            name: 'Madrid',
            location: {
                longitude: -3.7037902,
                latitude: 40.4167754,
                country: {
                    name: 'Spain',
                    code: 'ES',
                },
            },
        },
        {
            id: '23801',
            name: 'Madrid Barajas Airport',
            location: {
                longitude: -3.5675982,
                latitude: 40.4983322,
                country: {
                    name: 'Spain',
                    code: 'ES',
                },
            },
        },
        {
            id: '25291',
            name: 'Murcia ',
            location: {
                longitude: -1.1306544,
                latitude: 37.9922399,
                country: {
                    name: 'Spain',
                    code: 'ES',
                },
            },
        },
        {
            id: '28731',
            name: 'Port Aventura',
            location: {
                longitude: 1.1572475,
                latitude: 41.0878286,
                country: {
                    name: 'Spain',
                    code: 'ES',
                },
            },
        },
        {
            id: '5268',
            name: 'San Sebastián',
            location: {
                longitude: -1.9812313,
                latitude: 43.318334,
                country: {
                    name: 'Spain',
                    code: 'ES',
                },
            },
        },
        {
            id: '22618',
            name: 'Valencia',
            location: {
                longitude: -0.3762881,
                latitude: 39.4699075,
                country: {
                    name: 'Spain',
                    code: 'ES',
                },
            },
        },
    ],
    France: [
        {
            id: '8528',
            name: 'Agen',
            location: {
                longitude: 0.606235,
                latitude: 44.165376,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3878',
            name: 'Aix-en-Provence',
            location: {
                longitude: 5.447427,
                latitude: 43.529742,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3898',
            name: 'Amiens',
            location: {
                longitude: 2.308391,
                latitude: 49.891103,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3908',
            name: 'Angers',
            location: {
                longitude: -0.559297,
                latitude: 47.464959,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3928',
            name: 'Annecy',
            location: {
                longitude: 6.129384,
                latitude: 45.899247,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3958',
            name: 'Arras',
            location: {
                longitude: 2.777535,
                latitude: 50.291002,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '22578',
            name: 'Auray',
            location: {
                longitude: -2.983767,
                latitude: 47.666491,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3978',
            name: 'Auxerre',
            location: {
                longitude: 3.573781,
                latitude: 47.798202,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4018',
            name: 'Avignon',
            location: {
                longitude: 4.803392,
                latitude: 43.95192,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4028',
            name: 'Avranches',
            location: {
                longitude: -1.36166,
                latitude: 48.686843,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '9548',
            name: 'Bapaume',
            location: {
                longitude: 2.868175,
                latitude: 50.105376,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '8148',
            name: 'Basel EuroAirport',
            location: {
                longitude: 7.531714,
                latitude: 47.600729,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3238',
            name: 'Bayonne',
            location: {
                longitude: -1.474841,
                latitude: 43.492949,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '16208',
            name: 'Beaune',
            location: {
                longitude: 4.840004,
                latitude: 47.02603,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4058',
            name: 'Belfort',
            location: {
                longitude: 6.856852,
                latitude: 47.628642,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '12468',
            name: 'Bellegarde-sur-Valserine',
            location: {
                longitude: 5.7949052,
                latitude: 46.115109,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4068',
            name: 'Besançon',
            location: {
                longitude: 6.022417,
                latitude: 47.246911,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3268',
            name: 'Biarritz',
            location: {
                longitude: -1.552868,
                latitude: 43.477163,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '16308',
            name: 'Blois',
            location: {
                longitude: 1.3359475,
                latitude: 47.5860921,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3288',
            name: 'Bordeaux',
            location: {
                longitude: -0.555155,
                latitude: 44.829085,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4078',
            name: 'Boulogne',
            location: {
                longitude: 1.613334,
                latitude: 50.725231,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4088',
            name: 'Bourg-en-Bresse',
            location: {
                longitude: 5.2255007,
                latitude: 46.2051675,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3808',
            name: 'Bourges',
            location: {
                longitude: 2.398782,
                latitude: 47.081012,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '14328',
            name: 'Bourgoin',
            location: {
                longitude: 5.27212,
                latitude: 45.597108,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '5018',
            name: 'Brive-la-Gaillarde',
            location: {
                longitude: 1.509149,
                latitude: 45.153197,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '6268',
            name: 'Béthune',
            location: {
                longitude: 2.641188,
                latitude: 50.521377,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3258',
            name: 'Béziers',
            location: {
                longitude: 3.215795,
                latitude: 43.344233,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4138',
            name: 'Caen',
            location: {
                longitude: -0.35683,
                latitude: 49.183859,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4158',
            name: 'Calais',
            location: {
                longitude: 1.848083,
                latitude: 50.953887,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4178',
            name: 'Cannes',
            location: {
                longitude: 7.014887,
                latitude: 43.570678,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4198',
            name: 'Chalon-sur-Saône',
            location: {
                longitude: 4.853947,
                latitude: 46.780764,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3338',
            name: 'Chambéry',
            location: {
                longitude: 5.917781,
                latitude: 45.564601,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '13088',
            name: 'Chamonix-Mont-Blanc',
            location: {
                longitude: 6.869433,
                latitude: 45.923697,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4208',
            name: 'Charleville-Mézières',
            location: {
                longitude: 4.724556,
                latitude: 49.767887,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4248',
            name: 'Cholet',
            location: {
                longitude: -0.872033,
                latitude: 47.066761,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4188',
            name: 'Châlons-en-champagne',
            location: {
                longitude: 4.34392,
                latitude: 48.990319,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4218',
            name: 'Châteauroux',
            location: {
                longitude: 1.69861,
                latitude: 46.809625,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4228',
            name: 'Châtellerault',
            location: {
                longitude: 0.534398,
                latitude: 46.833426,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3138',
            name: 'Clermont-Ferrand',
            location: {
                longitude: 3.082965,
                latitude: 45.770515,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3358',
            name: 'Colmar',
            location: {
                longitude: 7.347802,
                latitude: 48.073754,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '17018',
            name: 'Cosne-Cours-sur-Loire',
            location: {
                longitude: 2.9252801,
                latitude: 47.3824086,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4268',
            name: 'Dieppe',
            location: {
                longitude: 1.077483,
                latitude: 49.922992,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3398',
            name: 'Dijon',
            location: {
                longitude: 5.0279,
                latitude: 47.323534,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '9538',
            name: 'Dole',
            location: {
                longitude: 5.447277,
                latitude: 47.064098,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4308',
            name: 'Dunkerque',
            location: {
                longitude: 2.372007,
                latitude: 51.040059,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '8868',
            name: 'Etaples-Le Touquet',
            location: {
                longitude: 1.63879,
                latitude: 50.516087,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '5848',
            name: 'Forbach',
            location: {
                longitude: 6.89909,
                latitude: 49.188141,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3988',
            name: 'Grenoble',
            location: {
                longitude: 5.74481,
                latitude: 45.190572,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '18738',
            name: 'Incarville',
            location: {
                longitude: 1.178174,
                latitude: 49.234538,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '13138',
            name: 'La Roche sur Yon',
            location: {
                longitude: -1.426442,
                latitude: 46.670511,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3478',
            name: 'La Rochelle',
            location: {
                longitude: -1.151139,
                latitude: 46.160329,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '19428',
            name: 'Langres',
            location: {
                longitude: 5.334297,
                latitude: 47.86683,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '16118',
            name: 'Laon',
            location: {
                longitude: 3.61989,
                latitude: 49.564133,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '16858',
            name: 'Lapalisse',
            location: {
                longitude: 3.639317,
                latitude: 46.250194,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4428',
            name: 'Laval',
            location: {
                longitude: -0.7669906,
                latitude: 48.0785146,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4438',
            name: 'Le Havre',
            location: {
                longitude: 0.107929,
                latitude: 49.49437,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4448',
            name: 'Le Mans',
            location: {
                longitude: 0.199556,
                latitude: 48.00611,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4458',
            name: 'Lens',
            location: {
                longitude: 2.820134,
                latitude: 50.433843,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '23841',
            name: 'Les Herbiers (Puy du Fou)',
            location: {
                longitude: -1.013388,
                latitude: 46.86919,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '13148',
            name: 'Les Sables d’Olonne',
            location: {
                longitude: -1.795493,
                latitude: 46.492958,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '2215',
            name: 'Lille',
            location: {
                longitude: 3.057256,
                latitude: 50.62925,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4468',
            name: 'Limoges',
            location: {
                longitude: 1.261105,
                latitude: 45.833619,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '5288',
            name: 'Lons-le-Saunier',
            location: {
                longitude: 5.550796,
                latitude: 46.671361,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4478',
            name: 'Lorient',
            location: {
                longitude: -3.363452,
                latitude: 47.755254,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3498',
            name: 'Lyon',
            location: {
                longitude: 4.844977,
                latitude: 45.755561,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '23721',
            name: 'Lyon Saint-Exupéry Airport',
            location: {
                longitude: 5.0887768,
                latitude: 45.7234181,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3508',
            name: 'Marseille',
            location: {
                longitude: 5.374354,
                latitude: 43.308273,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '1965',
            name: 'Metz',
            location: {
                longitude: 6.1757156,
                latitude: 49.1193089,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4548',
            name: 'Montargis',
            location: {
                longitude: 2.677124,
                latitude: 47.992301,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4558',
            name: 'Montauban',
            location: {
                longitude: 1.331707,
                latitude: 43.981611,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4568',
            name: 'Montbéliard',
            location: {
                longitude: 6.801914,
                latitude: 47.509508,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3548',
            name: 'Montpellier',
            location: {
                longitude: 3.876939,
                latitude: 43.610612,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '9578',
            name: 'Montélimar',
            location: {
                longitude: 4.745104,
                latitude: 44.560003,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4598',
            name: 'Moulins',
            location: {
                longitude: 3.338828,
                latitude: 46.56235,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3998',
            name: 'Mulhouse',
            location: {
                longitude: 7.341938,
                latitude: 47.742085,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4498',
            name: 'Mâcon',
            location: {
                longitude: 4.826976,
                latitude: 46.303398,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4618',
            name: 'Nancy',
            location: {
                longitude: 6.184417,
                latitude: 48.692054,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3568',
            name: 'Nantes',
            location: {
                longitude: -1.553621,
                latitude: 47.218371,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4628',
            name: 'Narbonne',
            location: {
                longitude: 3.003596,
                latitude: 43.18829,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4638',
            name: 'Nevers',
            location: {
                longitude: 3.150369,
                latitude: 46.988998,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '6608',
            name: 'Nice',
            location: {
                longitude: 7.204862,
                latitude: 43.660214,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '8598',
            name: 'Niort',
            location: {
                longitude: -0.485253,
                latitude: 46.307289,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4658',
            name: 'Noyelles-Godault',
            location: {
                longitude: 2.988308,
                latitude: 50.413602,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3838',
            name: 'Nîmes',
            location: {
                longitude: 4.360054,
                latitude: 43.836699,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4668',
            name: 'Orléans',
            location: {
                longitude: 1.906311,
                latitude: 47.910929,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '8138',
            name: 'Ouistreham',
            location: {
                longitude: -0.249723,
                latitude: 49.283652,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '2015',
            name: 'Paris',
            location: {
                longitude: 2.380503,
                latitude: 48.835334,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3618',
            name: 'Perpignan',
            location: {
                longitude: 2.8898659,
                latitude: 42.6971176,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '9248',
            name: 'Plailly (Parc Astérix)',
            location: {
                longitude: 2.569371,
                latitude: 49.137161,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '19578',
            name: 'Ploermel',
            location: {
                longitude: -2.396846,
                latitude: 47.929254,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3628',
            name: 'Poitiers',
            location: {
                longitude: 0.357159,
                latitude: 46.628013,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4718',
            name: 'Quimper',
            location: {
                longitude: -4.093783,
                latitude: 47.994691,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '2608',
            name: 'Reims',
            location: {
                longitude: 4.031696,
                latitude: 49.258329,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3638',
            name: 'Rennes',
            location: {
                longitude: -1.670621,
                latitude: 48.103897,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '18838',
            name: 'Rive de Gier',
            location: {
                longitude: 4.615349,
                latitude: 45.527692,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '7928',
            name: 'Roanne',
            location: {
                longitude: 4.064353,
                latitude: 46.055284,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4738',
            name: 'Rouen',
            location: {
                longitude: 1.099971,
                latitude: 49.443232,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '9568',
            name: 'Roye',
            location: {
                longitude: 2.769223,
                latitude: 49.706844,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4778',
            name: 'Saint-Dizier',
            location: {
                longitude: 4.92947,
                latitude: 48.638246,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '12458',
            name: 'Saint-Julien-en-Genevois',
            location: {
                longitude: 6.081338,
                latitude: 46.144516,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4828',
            name: 'Saint-Quentin',
            location: {
                longitude: 3.29848,
                latitude: 49.840973,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4808',
            name: 'Saint-Étienne',
            location: {
                longitude: 4.3871779,
                latitude: 45.439695,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '22528',
            name: 'Salbris',
            location: {
                longitude: 2.053595,
                latitude: 47.425029,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '16128',
            name: 'Sarrebourg',
            location: {
                longitude: 7.052587,
                latitude: 48.732663,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '12998',
            name: 'Saverne',
            location: {
                longitude: 7.390701,
                latitude: 48.761041,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '9558',
            name: 'Sedan',
            location: {
                longitude: 4.930709,
                latitude: 49.695071,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '106',
            name: 'Strasbourg',
            location: {
                longitude: 7.7542663,
                latitude: 48.5741794,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '24511',
            name: "Tain-l'Hermitage",
            location: {
                longitude: 4.847654,
                latitude: 45.072641,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4888',
            name: 'Thionville',
            location: {
                longitude: 6.168426,
                latitude: 49.357571,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4908',
            name: 'Toulon',
            location: {
                longitude: 5.928,
                latitude: 43.124228,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '3728',
            name: 'Toulouse',
            location: {
                longitude: 1.452405,
                latitude: 43.613382,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4928',
            name: 'Tours',
            location: {
                longitude: 0.68484,
                latitude: 47.394144,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4938',
            name: 'Troyes',
            location: {
                longitude: 4.0744009,
                latitude: 48.2973451,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '11118',
            name: 'Tulle',
            location: {
                longitude: 1.758596,
                latitude: 45.260448,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4958',
            name: 'Valence (France)',
            location: {
                longitude: 4.892386,
                latitude: 44.926909,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4968',
            name: 'Valenciennes',
            location: {
                longitude: 3.512696,
                latitude: 50.320047,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4988',
            name: 'Vannes',
            location: {
                longitude: -2.751431,
                latitude: 47.66492,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '12988',
            name: 'Verdun',
            location: {
                longitude: 5.3844231,
                latitude: 49.1598764,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '5888',
            name: 'Vierzon',
            location: {
                longitude: 2.062291,
                latitude: 47.221484,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '8568',
            name: 'Villefranche-sur-Saône',
            location: {
                longitude: 4.721783,
                latitude: 46.021096,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
        {
            id: '4328',
            name: 'Épinal',
            location: {
                longitude: 6.449403,
                latitude: 48.172402,
                country: {
                    name: 'France',
                    code: 'FR',
                },
            },
        },
    ],
    'United Kingdom': [
        {
            id: '3848',
            name: 'London',
            location: {
                longitude: -0.1277583,
                latitude: 51.5073509,
                country: {
                    name: 'United Kingdom',
                    code: 'GB',
                },
            },
        },
    ],
    Croatia: [
        {
            id: '27181',
            name: 'Babina Greda',
            location: {
                longitude: 18.5370162,
                latitude: 45.1167332,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '25161',
            name: 'Baska Voda',
            location: {
                longitude: 16.9520477,
                latitude: 43.3572645,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9988',
            name: 'Baška',
            location: {
                longitude: 14.7522269,
                latitude: 44.9710827,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '19088',
            name: 'Beli Manastir',
            location: {
                longitude: 18.6107524,
                latitude: 45.7728664,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '24841',
            name: 'Berinovac',
            location: {
                longitude: 17.105221,
                latitude: 43.439343,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9858',
            name: 'Bibinje',
            location: {
                longitude: 15.2838313,
                latitude: 44.0731738,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '6338',
            name: 'Biograd',
            location: {
                longitude: 15.4435586,
                latitude: 43.9373047,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '27191',
            name: 'Borovo',
            location: {
                longitude: 18.9729156,
                latitude: 45.4020118,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9828',
            name: 'Bosiljevo',
            location: {
                longitude: 15.2885483,
                latitude: 45.4130941,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9998',
            name: 'Bršadin',
            location: {
                longitude: 18.9109059,
                latitude: 45.3614839,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '24711',
            name: 'Cista Provo',
            location: {
                longitude: 16.9430967,
                latitude: 43.5129249,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '6388',
            name: 'Crikvenica',
            location: {
                longitude: 14.6915049,
                latitude: 45.173583,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '14648',
            name: 'Delnice',
            location: {
                longitude: 14.7955136,
                latitude: 45.3929244,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10158',
            name: 'Donji Miholjac',
            location: {
                longitude: 18.1651379,
                latitude: 45.762142,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '24701',
            name: 'Drvenik',
            location: {
                longitude: 17.2463201,
                latitude: 43.1560519,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9698',
            name: 'Dubrovnik',
            location: {
                longitude: 18.0944238,
                latitude: 42.6506606,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '29691',
            name: 'Gajac',
            location: {
                longitude: 14.8979436,
                latitude: 44.5324333,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '29701',
            name: 'Gorica',
            location: {
                longitude: 16.0752431,
                latitude: 45.7142122,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9708',
            name: 'Gospić',
            location: {
                longitude: 15.3750495,
                latitude: 44.5469337,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10008',
            name: 'Gradište',
            location: {
                longitude: 18.7067344,
                latitude: 45.1494771,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '29721',
            name: 'Greda',
            location: {
                longitude: 18.5370162,
                latitude: 45.1167332,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '24831',
            name: 'Grubine',
            location: {
                longitude: 17.1624899,
                latitude: 43.4342538,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '27171',
            name: 'Ilok',
            location: {
                longitude: 19.3752331,
                latitude: 45.2220448,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9068',
            name: 'Imotski',
            location: {
                longitude: 17.2139989,
                latitude: 43.4471085,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '24861',
            name: 'Kamenjak',
            location: {
                longitude: 17.04972,
                latitude: 43.464724,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '24821',
            name: 'Kamenmost',
            location: {
                longitude: 17.1859573,
                latitude: 43.4249522,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '6418',
            name: 'Karlovac',
            location: {
                longitude: 15.5552683,
                latitude: 45.4928973,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '20878',
            name: 'Kaštela',
            location: {
                longitude: 16.383333,
                latitude: 43.55,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '24851',
            name: 'Kljenovac',
            location: {
                longitude: 17.066529,
                latitude: 43.457079,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9088',
            name: 'Knin',
            location: {
                longitude: 16.1964988,
                latitude: 44.0407757,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '26721',
            name: 'Kolan',
            location: {
                longitude: 14.959172,
                latitude: 44.4965817,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10208',
            name: 'Koprivnica',
            location: {
                longitude: 16.8334752,
                latitude: 46.1639381,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9098',
            name: 'Korenica',
            location: {
                longitude: 15.7066013,
                latitude: 44.743965,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '24741',
            name: 'Krivodol',
            location: {
                longitude: 17.1229218,
                latitude: 43.4362882,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9968',
            name: 'Krk',
            location: {
                longitude: 14.5752114,
                latitude: 45.0278995,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '8998',
            name: 'Kutina',
            location: {
                longitude: 16.7763267,
                latitude: 45.4792811,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '27071',
            name: 'Lekenik',
            location: {
                longitude: 16.2100771,
                latitude: 45.5853414,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '24751',
            name: 'Lovrec',
            location: {
                longitude: 16.9858967,
                latitude: 43.4880875,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9108',
            name: 'Makarska',
            location: {
                longitude: 17.0215239,
                latitude: 43.2937769,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9958',
            name: 'Malinska',
            location: {
                longitude: 14.5288239,
                latitude: 45.1250642,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '29771',
            name: 'Maslenica',
            location: {
                longitude: 15.5428388,
                latitude: 44.221311,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9728',
            name: 'Metković',
            location: {
                longitude: 17.6493431,
                latitude: 43.0532801,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '22018',
            name: 'Modrič',
            location: {
                longitude: 15.4706179,
                latitude: 46.4099291,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '29811',
            name: 'Mohovo',
            location: {
                longitude: 19.2166728,
                latitude: 45.2490369,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10028',
            name: 'Murter',
            location: {
                longitude: 15.6002024,
                latitude: 43.8083553,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '15838',
            name: 'Nin',
            location: {
                longitude: 15.183695,
                latitude: 44.2423373,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9058',
            name: 'Nova Gradiška',
            location: {
                longitude: 17.3839626,
                latitude: 45.2581558,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '26711',
            name: 'Novalja',
            location: {
                longitude: 14.8854242,
                latitude: 44.5561811,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10058',
            name: 'Nuštar',
            location: {
                longitude: 18.8414917,
                latitude: 45.3325281,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '13498',
            name: 'Omiš',
            location: {
                longitude: 16.6929175,
                latitude: 43.4433559,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '6458',
            name: 'Opatija',
            location: {
                longitude: 14.305196,
                latitude: 45.3376197,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '29821',
            name: 'Opatovac',
            location: {
                longitude: 19.170648,
                latitude: 45.2604317,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10088',
            name: 'Opuzen',
            location: {
                longitude: 17.5644335,
                latitude: 43.0172612,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10138',
            name: 'Osijek',
            location: {
                longitude: 18.6955144,
                latitude: 45.5549624,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '26731',
            name: 'Pag',
            location: {
                longitude: 14.9916875,
                latitude: 44.4672189,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9738',
            name: 'Pakoštane',
            location: {
                longitude: 15.5088842,
                latitude: 43.9071991,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '14988',
            name: 'Pazin',
            location: {
                longitude: 13.9373092,
                latitude: 45.2397599,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '27161',
            name: 'Perušić',
            location: {
                longitude: 15.383109,
                latitude: 44.6488611,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9048',
            name: 'Pirovac',
            location: {
                longitude: 15.6678522,
                latitude: 43.8205874,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10188',
            name: 'Pitomača',
            location: {
                longitude: 17.2326521,
                latitude: 45.9501067,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10258',
            name: 'Plitvice Lakes (Plitvička Jezera)',
            location: {
                longitude: 15.6210837,
                latitude: 44.8807696,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '24811',
            name: 'Ploce',
            location: {
                longitude: 17.4310249,
                latitude: 43.0563106,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9848',
            name: 'Poličnik',
            location: {
                longitude: 15.3747275,
                latitude: 44.1775584,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9038',
            name: 'Poreč',
            location: {
                longitude: 13.5947399,
                latitude: 45.2271652,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9838',
            name: 'Posedarje',
            location: {
                longitude: 15.4790862,
                latitude: 44.2120433,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '26741',
            name: 'Povljana',
            location: {
                longitude: 15.1128014,
                latitude: 44.3461794,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '20898',
            name: 'Prgomet',
            location: {
                longitude: 16.221477,
                latitude: 43.607838,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '15848',
            name: 'Privlaka',
            location: {
                longitude: 15.1185858,
                latitude: 44.262375,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '8988',
            name: 'Pula',
            location: {
                longitude: 13.8495788,
                latitude: 44.8666232,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9978',
            name: 'Punat',
            location: {
                longitude: 14.6315962,
                latitude: 45.020739,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '14958',
            name: 'Ravna Gora',
            location: {
                longitude: 14.937389,
                latitude: 45.37403,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '6478',
            name: 'Rijeka',
            location: {
                longitude: 14.442176,
                latitude: 45.3270631,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9908',
            name: 'Rovanjska',
            location: {
                longitude: 15.5405769,
                latitude: 44.2515492,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '8978',
            name: 'Rovinj',
            location: {
                longitude: 13.6387067,
                latitude: 45.0811661,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '20888',
            name: 'Seget Donji',
            location: {
                longitude: 16.2286983,
                latitude: 43.5189655,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '22008',
            name: 'Seline',
            location: {
                longitude: 15.4773794,
                latitude: 44.276323,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '16688',
            name: 'Senj',
            location: {
                longitude: 14.9036052,
                latitude: 44.9893604,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9118',
            name: 'Sinj',
            location: {
                longitude: 16.6375286,
                latitude: 43.702943,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '24571',
            name: 'Sisak',
            location: {
                longitude: 16.3731156,
                latitude: 45.4850767,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '25311',
            name: 'Slano',
            location: {
                longitude: 17.8925994,
                latitude: 42.7872022,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10168',
            name: 'Slatina (HR)',
            location: {
                longitude: 17.701144,
                latitude: 45.701932,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '8958',
            name: 'Slavonski Brod',
            location: {
                longitude: 18.002985,
                latitude: 45.163837,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '24801',
            name: 'Solin',
            location: {
                longitude: 16.4919632,
                latitude: 43.5422549,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '29911',
            name: 'Sotin',
            location: {
                longitude: 19.0966,
                latitude: 45.2961258,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '6558',
            name: 'Split',
            location: {
                longitude: 16.4401935,
                latitude: 43.5081323,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9788',
            name: 'Stankovci',
            location: {
                longitude: 15.6950431,
                latitude: 43.9067083,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9948',
            name: 'Starigrad',
            location: {
                longitude: 15.4386463,
                latitude: 44.296009,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '24691',
            name: 'Ston',
            location: {
                longitude: 17.6963235,
                latitude: 42.8386685,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9868',
            name: 'Sukošan',
            location: {
                longitude: 15.3150024,
                latitude: 44.0470411,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9888',
            name: 'Sveti Filip i Jakov',
            location: {
                longitude: 15.4284425,
                latitude: 43.9621868,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '14968',
            name: 'Svetvinčenat',
            location: {
                longitude: 13.8818032,
                latitude: 45.0881811,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10068',
            name: 'Tisno',
            location: {
                longitude: 15.6421092,
                latitude: 43.7974664,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10018',
            name: 'Tribunj',
            location: {
                longitude: 15.7475655,
                latitude: 43.7569503,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '6528',
            name: 'Trogir',
            location: {
                longitude: 16.2501894,
                latitude: 43.516387,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9148',
            name: 'Udbina',
            location: {
                longitude: 15.7659518,
                latitude: 44.5309868,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '8938',
            name: 'Umag',
            location: {
                longitude: 13.5257205,
                latitude: 45.4372062,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10148',
            name: 'Valpovo',
            location: {
                longitude: 18.4155529,
                latitude: 45.6590169,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10218',
            name: 'Varaždin',
            location: {
                longitude: 16.3366066,
                latitude: 46.305746,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '27061',
            name: 'Velika Gorica',
            location: {
                longitude: 16.0752431,
                latitude: 45.7142122,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '8898',
            name: 'Vinkovci',
            location: {
                longitude: 18.8056781,
                latitude: 45.2879058,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '15858',
            name: 'Vir',
            location: {
                longitude: 15.07794,
                latitude: 44.304894,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10178',
            name: 'Virovitica',
            location: {
                longitude: 17.3855429,
                latitude: 45.8316463,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '29951',
            name: 'Vlašići',
            location: {
                longitude: 15.2070907,
                latitude: 44.3255932,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '8918',
            name: 'Vodice',
            location: {
                longitude: 15.7787599,
                latitude: 43.7611122,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '9608',
            name: 'Vodnjan',
            location: {
                longitude: 13.855971,
                latitude: 44.961668,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10128',
            name: 'Vukovar',
            location: {
                longitude: 19.0010204,
                latitude: 45.3452377,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '6538',
            name: 'Zadar',
            location: {
                longitude: 15.2313648,
                latitude: 44.119371,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '2205',
            name: 'Zagreb',
            location: {
                longitude: 15.992278,
                latitude: 45.803417,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10658',
            name: 'Čakovec',
            location: {
                longitude: 16.4379653,
                latitude: 46.3897383,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '18138',
            name: 'Đakovo',
            location: {
                longitude: 18.409782,
                latitude: 45.3099969,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '10198',
            name: 'Đurđevac',
            location: {
                longitude: 17.0714503,
                latitude: 46.0398758,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '29891',
            name: 'Šarengrad',
            location: {
                longitude: 19.2800337,
                latitude: 45.2311027,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '6498',
            name: 'Šibenik',
            location: {
                longitude: 15.8952045,
                latitude: 43.7350196,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '29901',
            name: 'Šimuni',
            location: {
                longitude: 14.9602736,
                latitude: 44.4686417,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '14978',
            name: 'Žminj',
            location: {
                longitude: 13.9064529,
                latitude: 45.142806,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
        {
            id: '8878',
            name: 'Županja',
            location: {
                longitude: 18.6945072,
                latitude: 45.072074,
                country: {
                    name: 'Croatia',
                    code: 'HR',
                },
            },
        },
    ],
    Hungary: [
        {
            id: '18718',
            name: 'Balatonföldvár',
            location: {
                longitude: 17.8807976,
                latitude: 46.8485621,
                country: {
                    name: 'Hungary',
                    code: 'HU',
                },
            },
        },
        {
            id: '1795',
            name: 'Budapest',
            location: {
                longitude: 19.0985,
                latitude: 47.474306,
                country: {
                    name: 'Hungary',
                    code: 'HU',
                },
            },
        },
        {
            id: '25271',
            name: 'Budapest Airport',
            location: {
                longitude: 19.2522958,
                latitude: 47.4384587,
                country: {
                    name: 'Hungary',
                    code: 'HU',
                },
            },
        },
        {
            id: '1875',
            name: 'Györ',
            location: {
                longitude: 17.636528,
                latitude: 47.681389,
                country: {
                    name: 'Hungary',
                    code: 'HU',
                },
            },
        },
        {
            id: '11688',
            name: 'Siofok',
            location: {
                longitude: 18.0746239,
                latitude: 46.9090603,
                country: {
                    name: 'Hungary',
                    code: 'HU',
                },
            },
        },
        {
            id: '12358',
            name: 'Szeged',
            location: {
                longitude: 20.1414253,
                latitude: 46.2530102,
                country: {
                    name: 'Hungary',
                    code: 'HU',
                },
            },
        },
    ],
    Italy: [
        {
            id: '13358',
            name: 'Alba',
            location: {
                longitude: 8.029092,
                latitude: 44.701538,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '5868',
            name: 'Alessandria',
            location: {
                longitude: 8.608076,
                latitude: 44.908637,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '3018',
            name: 'Ancona',
            location: {
                longitude: 13.518915,
                latitude: 43.6158299,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '9518',
            name: 'Aosta',
            location: {
                longitude: 7.324412,
                latitude: 45.735249,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '10367',
            name: 'Assisi',
            location: {
                longitude: 12.607273,
                latitude: 43.072237,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '5858',
            name: 'Asti',
            location: {
                longitude: 8.208986,
                latitude: 44.895892,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '19698',
            name: 'Bardolino',
            location: {
                longitude: 10.6914197,
                latitude: 45.5453076,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '3048',
            name: 'Bari',
            location: {
                longitude: 16.8718715,
                latitude: 41.1171432,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '5438',
            name: 'Bergamo',
            location: {
                longitude: 9.6772698,
                latitude: 45.6982642,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '23671',
            name: 'Bergamo Orio al Serio Airport',
            location: {
                longitude: 9.7036313,
                latitude: 45.6695707,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '2998',
            name: 'Bologna',
            location: {
                longitude: 11.310864,
                latitude: 44.493211,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '10508',
            name: 'Borca di Cadore',
            location: {
                longitude: 12.21939,
                latitude: 46.4357507,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '1675',
            name: 'Bozen (Bolzano)',
            location: {
                longitude: 11.356073,
                latitude: 46.494083,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '13348',
            name: 'Bra',
            location: {
                longitude: 7.848289,
                latitude: 44.694029,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '2918',
            name: 'Brescia',
            location: {
                longitude: 10.2118019,
                latitude: 45.5415526,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '19568',
            name: 'Bressanone',
            location: {
                longitude: 11.6572436,
                latitude: 46.7177048,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '20118',
            name: 'Busto Arsizio',
            location: {
                longitude: 8.8531265,
                latitude: 45.611892,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '18458',
            name: 'Cariati',
            location: {
                longitude: 16.9240554,
                latitude: 39.4963532,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '11468',
            name: 'Carisolo',
            location: {
                longitude: 10.7568656,
                latitude: 46.167276,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '8668',
            name: 'Cerignola',
            location: {
                longitude: 15.907776,
                latitude: 41.260371,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '12978',
            name: 'Cesenatico',
            location: {
                longitude: 12.4052023,
                latitude: 44.200847,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '13428',
            name: 'Chivasso',
            location: {
                longitude: 7.888927,
                latitude: 45.208634,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '18468',
            name: 'Cirò Marina',
            location: {
                longitude: 17.1277751,
                latitude: 39.3676141,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '19708',
            name: 'Cisano',
            location: {
                longitude: 10.7272055,
                latitude: 45.528962,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '11538',
            name: 'Cles',
            location: {
                longitude: 11.0355046,
                latitude: 46.3645084,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '12388',
            name: 'Como',
            location: {
                longitude: 9.072903,
                latitude: 45.809327,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '10528',
            name: "Cortina d'Ampezzo",
            location: {
                longitude: 12.1356524,
                latitude: 46.5404711,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '9508',
            name: 'Courmayeur',
            location: {
                longitude: 6.9689626,
                latitude: 45.7969221,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '18478',
            name: 'Crotone',
            location: {
                longitude: 17.1271102,
                latitude: 39.0807932,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '13788',
            name: 'Cuneo',
            location: {
                longitude: 7.5426711,
                latitude: 44.3844766,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '1845',
            name: 'Florence',
            location: {
                longitude: 11.2480006,
                latitude: 43.7710332,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '3038',
            name: 'Foggia',
            location: {
                longitude: 15.5446302,
                latitude: 41.4621984,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '11508',
            name: 'Folgarida',
            location: {
                longitude: 10.8674088,
                latitude: 46.2977508,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '19688',
            name: 'Garda',
            location: {
                longitude: 10.6351414,
                latitude: 45.6049385,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '9468',
            name: 'Gardaland',
            location: {
                longitude: 10.714955,
                latitude: 45.452609,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '3118',
            name: 'Genoa',
            location: {
                longitude: 8.919045,
                latitude: 44.41599,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '13068',
            name: 'Gorizia',
            location: {
                longitude: 13.6201754,
                latitude: 45.9401812,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '12838',
            name: 'Imperia',
            location: {
                longitude: 8.039517,
                latitude: 43.8896857,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '19178',
            name: 'Jesolo',
            location: {
                longitude: 12.640006,
                latitude: 45.508669,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '1685',
            name: 'Klausen (Chiusa)',
            location: {
                longitude: 11.572782,
                latitude: 46.641651,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '7948',
            name: 'La Spezia',
            location: {
                longitude: 9.826717,
                latitude: 44.104471,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '1645',
            name: 'Lana',
            location: {
                longitude: 11.175297,
                latitude: 46.608785,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '19718',
            name: 'Lazise',
            location: {
                longitude: 10.7350941,
                latitude: 45.5059447,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '5468',
            name: 'Livorno',
            location: {
                longitude: 10.3105674,
                latitude: 43.548473,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '10488',
            name: 'Longarone',
            location: {
                longitude: 12.3005812,
                latitude: 46.2723568,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '11488',
            name: 'Madonna di Campiglio',
            location: {
                longitude: 10.826401,
                latitude: 46.2302584,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '11528',
            name: 'Malè',
            location: {
                longitude: 10.9129136,
                latitude: 46.3529816,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '1625',
            name: 'Marling (Marlengo)',
            location: {
                longitude: 11.145823,
                latitude: 46.647845,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '1615',
            name: 'Meran (Merano)',
            location: {
                longitude: 11.159333,
                latitude: 46.668917,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '27811',
            name: 'Metaponto',
            location: {
                longitude: 16.8136507,
                latitude: 40.370601,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '1194',
            name: 'Milan',
            location: {
                longitude: 9.199735,
                latitude: 45.48812,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '23008',
            name: 'Milan Linate Airport',
            location: {
                longitude: 9.276308,
                latitude: 45.452176,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '10778',
            name: 'Milan Malpensa Airport',
            location: {
                longitude: 8.712595,
                latitude: 45.627388,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '22808',
            name: 'Mirto Crosia',
            location: {
                longitude: 16.7676967,
                latitude: 39.6025302,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '5508',
            name: 'Modena',
            location: {
                longitude: 10.9252269,
                latitude: 44.647128,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '5408',
            name: 'Naples',
            location: {
                longitude: 14.2681244,
                latitude: 40.8517746,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '5428',
            name: 'Novara',
            location: {
                longitude: 8.6221612,
                latitude: 45.44693,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '16988',
            name: 'Oulx',
            location: {
                longitude: 6.8336307,
                latitude: 45.0333391,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '2005',
            name: 'Padua',
            location: {
                longitude: 11.8767611,
                latitude: 45.4064349,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '8818',
            name: 'Perugia',
            location: {
                longitude: 12.387675,
                latitude: 43.105858,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '3028',
            name: 'Pescara',
            location: {
                longitude: 14.2160898,
                latitude: 42.4617902,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '9458',
            name: 'Peschiera del Garda',
            location: {
                longitude: 10.702388,
                latitude: 45.438872,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '11458',
            name: 'Pinzolo',
            location: {
                longitude: 10.7650269,
                latitude: 46.1597701,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '5478',
            name: 'Pisa',
            location: {
                longitude: 10.4016888,
                latitude: 43.7228386,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '18518',
            name: 'Policoro',
            location: {
                longitude: 16.6796558,
                latitude: 40.2141054,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '7788',
            name: 'Ravenna',
            location: {
                longitude: 12.22566,
                latitude: 44.421943,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '12888',
            name: 'Riccione',
            location: {
                longitude: 12.6503292,
                latitude: 43.9921085,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '3008',
            name: 'Rimini',
            location: {
                longitude: 12.5695158,
                latitude: 44.0678288,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '2075',
            name: 'Rome',
            location: {
                longitude: 12.4963655,
                latitude: 41.9027835,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '18528',
            name: 'Rossano',
            location: {
                longitude: 16.6342882,
                latitude: 39.5763309,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '11108',
            name: 'Rovereto',
            location: {
                longitude: 11.0401399,
                latitude: 45.89096,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '8658',
            name: 'San Severo',
            location: {
                longitude: 15.391742,
                latitude: 41.684741,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '10518',
            name: 'San Vito di Cadore',
            location: {
                longitude: 12.2068564,
                latitude: 46.4592116,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '12848',
            name: 'Sanremo',
            location: {
                longitude: 7.7760567,
                latitude: 43.8159671,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '13248',
            name: 'Santhià',
            location: {
                longitude: 8.171368,
                latitude: 45.3669315,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '9498',
            name: 'Savona',
            location: {
                longitude: 8.471265,
                latitude: 44.307903,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '23078',
            name: 'Schiavonea',
            location: {
                longitude: 16.5318919,
                latitude: 39.6522415,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '14888',
            name: 'Sibari',
            location: {
                longitude: 16.4532199,
                latitude: 39.7478528,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '6298',
            name: 'Siena',
            location: {
                longitude: 11.3307574,
                latitude: 43.318809,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '19728',
            name: 'Sirmione',
            location: {
                longitude: 10.6173207,
                latitude: 45.47602,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '1705',
            name: 'Sterzing (Vipiteno)',
            location: {
                longitude: 11.432178,
                latitude: 46.890787,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '10498',
            name: 'Tai di Cadore',
            location: {
                longitude: 12.3647498,
                latitude: 46.4237518,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '9338',
            name: 'Taranto',
            location: {
                longitude: 17.224168,
                latitude: 40.481128,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '3738',
            name: 'Trento',
            location: {
                longitude: 11.1217486,
                latitude: 46.0747793,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '10478',
            name: 'Treviso',
            location: {
                longitude: 12.2430437,
                latitude: 45.6668893,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '2145',
            name: 'Trieste',
            location: {
                longitude: 13.772278,
                latitude: 45.657722,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '23771',
            name: 'Trieste Airport',
            location: {
                longitude: 13.4700888,
                latitude: 45.8266437,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '2618',
            name: 'Turin',
            location: {
                longitude: 7.673565,
                latitude: 45.054988,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '9268',
            name: 'Udine',
            location: {
                longitude: 13.242765,
                latitude: 46.057273,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '2155',
            name: 'Venice',
            location: {
                longitude: 12.3155151,
                latitude: 45.4408474,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '23238',
            name: 'Venice Airport',
            location: {
                longitude: 12.3480704,
                latitude: 45.505556,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '2165',
            name: 'Verona',
            location: {
                longitude: 10.9916215,
                latitude: 45.4383842,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '7968',
            name: 'Viareggio',
            location: {
                longitude: 10.244692,
                latitude: 43.866894,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
        {
            id: '7858',
            name: 'Vicenza',
            location: {
                longitude: 11.538943,
                latitude: 45.542114,
                country: {
                    name: 'Italy',
                    code: 'IT',
                },
            },
        },
    ],
    Luxembourg: [
        {
            id: '172',
            name: 'Luxembourg',
            location: {
                longitude: 6.150216,
                latitude: 49.611391,
                country: {
                    name: 'Luxembourg',
                    code: 'LU',
                },
            },
        },
    ],
    Netherlands: [
        {
            id: '7808',
            name: 'Amersfoort',
            location: {
                longitude: 5.3878266,
                latitude: 52.1561113,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '1334',
            name: 'Amsterdam',
            location: {
                longitude: 4.836406,
                latitude: 52.389053,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '5048',
            name: 'Apeldoorn',
            location: {
                longitude: 5.9699231,
                latitude: 52.211157,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '1314',
            name: 'Arnhem',
            location: {
                longitude: 5.899044,
                latitude: 51.985643,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '3308',
            name: 'Breda',
            location: {
                longitude: 4.757207,
                latitude: 51.592327,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '3378',
            name: 'Delft',
            location: {
                longitude: 4.3570677,
                latitude: 52.0115769,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '3388',
            name: 'Deventer',
            location: {
                longitude: 6.1552165,
                latitude: 52.2660751,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '8118',
            name: 'Drachten',
            location: {
                longitude: 6.0586373,
                latitude: 53.0925814,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '5078',
            name: 'Eindhoven',
            location: {
                longitude: 5.4697225,
                latitude: 51.441642,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '16888',
            name: 'Emmen',
            location: {
                longitude: 6.9557767,
                latitude: 52.7132367,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '1835',
            name: 'Enschede',
            location: {
                longitude: 6.8767,
                latitude: 52.230435,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '26451',
            name: 'Franeker',
            location: {
                longitude: 5.5564857,
                latitude: 53.1888206,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '1404',
            name: 'Groningen',
            location: {
                longitude: 6.57495,
                latitude: 53.193301,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '10438',
            name: 'Harlingen',
            location: {
                longitude: 5.4251517,
                latitude: 53.1746381,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '11368',
            name: 'Heerlen',
            location: {
                longitude: 5.9794988,
                latitude: 50.8881742,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '5088',
            name: 'Hengelo',
            location: {
                longitude: 6.7927725,
                latitude: 52.2574121,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '26471',
            name: 'Hoorn',
            location: {
                longitude: 5.0602124,
                latitude: 52.6423654,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '19188',
            name: 'Kaatsheuvel (De Efteling)',
            location: {
                longitude: 5.0497462,
                latitude: 51.6506518,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '26461',
            name: 'Kop Afsluitdijk',
            location: {
                longitude: 5.384388,
                latitude: 53.098289,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '10428',
            name: 'Leeuwarden',
            location: {
                longitude: 5.7999133,
                latitude: 53.2012334,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '1945',
            name: 'Maastricht',
            location: {
                longitude: 5.6909725,
                latitude: 50.8513682,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '3578',
            name: 'Nijmegen',
            location: {
                longitude: 5.855311,
                latitude: 51.843691,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '3668',
            name: 'Roermond',
            location: {
                longitude: 5.9877715,
                latitude: 51.1913202,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '2548',
            name: 'Rotterdam',
            location: {
                longitude: 4.507227,
                latitude: 51.906564,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '1825',
            name: 'The Hague',
            location: {
                longitude: 4.325237,
                latitude: 52.080136,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '3718',
            name: 'Tilburg',
            location: {
                longitude: 5.0919143,
                latitude: 51.560596,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '1324',
            name: 'Utrecht',
            location: {
                longitude: 5.106394,
                latitude: 52.088973,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '5148',
            name: 'Venlo',
            location: {
                longitude: 6.1724031,
                latitude: 51.3703748,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '680',
            name: 'Vianen',
            location: {
                longitude: 5.103685,
                latitude: 51.992231,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
        {
            id: '20908',
            name: 'Wieringerwerf',
            location: {
                longitude: 5.024066,
                latitude: 52.8501776,
                country: {
                    name: 'Netherlands',
                    code: 'NL',
                },
            },
        },
    ],
    Norway: [
        {
            id: '7268',
            name: 'Moss',
            location: {
                longitude: 10.6583833,
                latitude: 59.4340914,
                country: {
                    name: 'Norway',
                    code: 'NO',
                },
            },
        },
        {
            id: '7238',
            name: 'Oslo',
            location: {
                longitude: 10.7522454,
                latitude: 59.9138688,
                country: {
                    name: 'Norway',
                    code: 'NO',
                },
            },
        },
        {
            id: '24381',
            name: 'Oslo Airport (Gardermoen)',
            location: {
                longitude: 11.1004152,
                latitude: 60.1975501,
                country: {
                    name: 'Norway',
                    code: 'NO',
                },
            },
        },
        {
            id: '7248',
            name: 'Sarpsborg',
            location: {
                longitude: 11.1094028,
                latitude: 59.2840729,
                country: {
                    name: 'Norway',
                    code: 'NO',
                },
            },
        },
        {
            id: '11878',
            name: 'Ås',
            location: {
                longitude: 10.7930108,
                latitude: 59.6864303,
                country: {
                    name: 'Norway',
                    code: 'NO',
                },
            },
        },
    ],
    Poland: [
        {
            id: '25671',
            name: 'Augustów',
            location: {
                longitude: 22.9796024,
                latitude: 53.8434431,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '20098',
            name: 'Bełchatów',
            location: {
                longitude: 19.3564248,
                latitude: 51.3687535,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '26351',
            name: 'Białogard',
            location: {
                longitude: 15.9921375,
                latitude: 54.0029007,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '25731',
            name: 'Białystok',
            location: {
                longitude: 23.1688403,
                latitude: 53.1324886,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '15088',
            name: 'Bielsko-Biała',
            location: {
                longitude: 19.0583845,
                latitude: 49.8223768,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '28581',
            name: 'Bircza',
            location: {
                longitude: 22.4858847,
                latitude: 49.6923166,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '24321',
            name: 'Blachownia',
            location: {
                longitude: 18.96224,
                latitude: 50.78505,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '23108',
            name: 'Bolesławiec',
            location: {
                longitude: 15.5657397,
                latitude: 51.2658553,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '24291',
            name: 'Brzeg',
            location: {
                longitude: 17.466831,
                latitude: 50.8608509,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22108',
            name: 'Busko-Zdrój',
            location: {
                longitude: 20.7191757,
                latitude: 50.470362,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '1775',
            name: 'Bydgoszcz',
            location: {
                longitude: 18.0084378,
                latitude: 53.1234804,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '21958',
            name: 'Bytom',
            location: {
                longitude: 18.9157176,
                latitude: 50.3483816,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '21948',
            name: 'Chorzów',
            location: {
                longitude: 18.9545728,
                latitude: 50.2974884,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '26931',
            name: 'Chłapowo',
            location: {
                longitude: 18.37338,
                latitude: 54.80342,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '21818',
            name: 'Ciechocinek',
            location: {
                longitude: 18.7948147,
                latitude: 52.8790493,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22128',
            name: 'Cieszyn',
            location: {
                longitude: 18.6354709,
                latitude: 49.7497638,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27271',
            name: 'Cisna',
            location: {
                longitude: 22.3285103,
                latitude: 49.2112335,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '26361',
            name: 'Czaplinek',
            location: {
                longitude: 16.233519,
                latitude: 53.55802,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '28601',
            name: 'Czarna Górna',
            location: {
                longitude: 22.668617,
                latitude: 49.3241114,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '28171',
            name: 'Czorsztyn',
            location: {
                longitude: 20.3270231,
                latitude: 49.4374074,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '9798',
            name: 'Częstochowa',
            location: {
                longitude: 19.1203094,
                latitude: 50.8118195,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '21568',
            name: 'Dabki',
            location: {
                longitude: 16.319694,
                latitude: 54.380639,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '21578',
            name: 'Darlowo',
            location: {
                longitude: 16.405056,
                latitude: 54.417278,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '24301',
            name: 'Dobrodzień',
            location: {
                longitude: 18.44502,
                latitude: 50.72875,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '24361',
            name: 'Duszniki-Zdrój',
            location: {
                longitude: 16.3904406,
                latitude: 50.404284,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '18578',
            name: 'Elblag',
            location: {
                longitude: 19.4044897,
                latitude: 54.1560613,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '25631',
            name: 'Ełk',
            location: {
                longitude: 22.3646629,
                latitude: 53.8280529,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '1815',
            name: 'Gdańsk',
            location: {
                longitude: 18.6466384,
                latitude: 54.3520252,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '7578',
            name: 'Gdynia',
            location: {
                longitude: 18.5305409,
                latitude: 54.5188898,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '7608',
            name: 'Gliwice',
            location: {
                longitude: 18.6713802,
                latitude: 50.2944923,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '24251',
            name: 'Gniezno',
            location: {
                longitude: 17.5826575,
                latitude: 52.5349253,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '19448',
            name: 'Gorlice',
            location: {
                longitude: 21.1596321,
                latitude: 49.6546159,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22198',
            name: 'Gorzów Wielkopolski',
            location: {
                longitude: 15.2369305,
                latitude: 52.7325285,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '25611',
            name: 'Gołdap',
            location: {
                longitude: 22.3034477,
                latitude: 54.3069111,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '25641',
            name: 'Grajewo',
            location: {
                longitude: 22.455217,
                latitude: 53.6471559,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '23128',
            name: 'Grudziądz',
            location: {
                longitude: 18.7535649,
                latitude: 53.4837486,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '24311',
            name: 'Herby',
            location: {
                longitude: 18.8783173,
                latitude: 50.7478709,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '24261',
            name: 'Inowrocław',
            location: {
                longitude: 18.2562032,
                latitude: 52.7993317,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '24281',
            name: 'Iłowa',
            location: {
                longitude: 15.1996268,
                latitude: 51.5000229,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '21588',
            name: 'Jaroslawiec',
            location: {
                longitude: 16.5453544,
                latitude: 54.5403402,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '26921',
            name: 'Jastrzębia Góra',
            location: {
                longitude: 18.31288,
                latitude: 54.83117,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22148',
            name: 'Jastrzębie-Zdrój',
            location: {
                longitude: 18.6101103,
                latitude: 49.9454207,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '19458',
            name: 'Jasło',
            location: {
                longitude: 21.4722875,
                latitude: 49.7445663,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '11718',
            name: 'Jelenia Góra',
            location: {
                longitude: 15.7193616,
                latitude: 50.9044171,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22748',
            name: 'Karpacz',
            location: {
                longitude: 15.7555976,
                latitude: 50.7758815,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '26911',
            name: 'Karwia',
            location: {
                longitude: 18.20996,
                latitude: 54.83083,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '1885',
            name: 'Katowice',
            location: {
                longitude: 19.0237815,
                latitude: 50.2648919,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22188',
            name: 'Katowice Airport',
            location: {
                longitude: 19.0428325,
                latitude: 50.4614333,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '18628',
            name: 'Kielce',
            location: {
                longitude: 20.6285676,
                latitude: 50.8660773,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '28161',
            name: 'Kluszkowce',
            location: {
                longitude: 20.3099192,
                latitude: 49.4540988,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '7698',
            name: 'Kolobrzeg',
            location: {
                longitude: 15.5832667,
                latitude: 54.1759173,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22218',
            name: 'Konin',
            location: {
                longitude: 18.251073,
                latitude: 52.2230334,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '7628',
            name: 'Koszalin',
            location: {
                longitude: 16.1714908,
                latitude: 54.1943219,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '1915',
            name: 'Kraków',
            location: {
                longitude: 19.9449799,
                latitude: 50.0646501,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '24591',
            name: 'Kraków Airport',
            location: {
                longitude: 19.800947,
                latitude: 50.071778,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '28571',
            name: 'Krasiczyn',
            location: {
                longitude: 22.6525426,
                latitude: 49.7762204,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '19468',
            name: 'Kraśnik',
            location: {
                longitude: 22.2269571,
                latitude: 50.9232831,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27381',
            name: 'Krosno',
            location: {
                longitude: 21.7660531,
                latitude: 49.6824761,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '28591',
            name: 'Krościenko ',
            location: {
                longitude: 20.4329165,
                latitude: 49.4368364,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '28141',
            name: 'Krościenko nad Dunajcem',
            location: {
                longitude: 20.4329165,
                latitude: 49.4368364,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '18678',
            name: 'Krynica-Zdroj',
            location: {
                longitude: 20.9594208,
                latitude: 49.4215158,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '24371',
            name: 'Kudowa-Zdrój',
            location: {
                longitude: 16.2426605,
                latitude: 50.4427156,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27611',
            name: 'Kwidzyn',
            location: {
                longitude: 18.9323043,
                latitude: 53.7263529,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '21558',
            name: 'Lazy',
            location: {
                longitude: 16.195083,
                latitude: 54.306889,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '7648',
            name: 'Legnica',
            location: {
                longitude: 16.1553231,
                latitude: 51.2070067,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27301',
            name: 'Lesko',
            location: {
                longitude: 22.3304325,
                latitude: 49.4701205,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '18658',
            name: 'Leszno',
            location: {
                longitude: 16.5937545,
                latitude: 51.8419861,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '21618',
            name: 'Lubin',
            location: {
                longitude: 16.2095788,
                latitude: 51.397722,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '18638',
            name: 'Lublin',
            location: {
                longitude: 22.5684463,
                latitude: 51.2464536,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '18648',
            name: 'Lubliniec',
            location: {
                longitude: 18.6846192,
                latitude: 50.6687353,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '28611',
            name: 'Lutowiska',
            location: {
                longitude: 22.6952648,
                latitude: 49.2513639,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '7708',
            name: 'Lębork',
            location: {
                longitude: 17.7532511,
                latitude: 54.544642,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27581',
            name: 'Malbork',
            location: {
                longitude: 19.0379763,
                latitude: 54.0361319,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27561',
            name: 'Medyka ',
            location: {
                longitude: 22.9345026,
                latitude: 49.8049161,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '21628',
            name: 'Mielno',
            location: {
                longitude: 16.0622067,
                latitude: 54.25998,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '18568',
            name: 'Mlawa',
            location: {
                longitude: 20.3837208,
                latitude: 53.1122632,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22238',
            name: 'Modlin Airport',
            location: {
                longitude: 20.6512374,
                latitude: 52.4492645,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '12088',
            name: 'Myślenice',
            location: {
                longitude: 19.93965,
                latitude: 49.83347,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27442',
            name: 'Nidzica',
            location: {
                longitude: 20.4274873,
                latitude: 53.360814,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '21408',
            name: 'Nowa Sól',
            location: {
                longitude: 15.71707,
                latitude: 51.80344,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27601',
            name: 'Nowa Wieś',
            location: {
                longitude: 17.7948189,
                latitude: 50.6411215,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '20088',
            name: 'Nowy Sącz',
            location: {
                longitude: 20.7153325,
                latitude: 49.6174535,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22568',
            name: 'Nowy Targ',
            location: {
                longitude: 20.032096,
                latitude: 49.4774647,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '28711',
            name: 'Nysa',
            location: {
                longitude: 17.3295861,
                latitude: 50.4822855,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '25621',
            name: 'Olecko',
            location: {
                longitude: 22.5069432,
                latitude: 54.0337279,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27452',
            name: 'Olsztyn ',
            location: {
                longitude: 20.4801192,
                latitude: 53.778422,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '1995',
            name: 'Opole',
            location: {
                longitude: 17.9212976,
                latitude: 50.6751067,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '18548',
            name: 'Ostroda',
            location: {
                longitude: 19.9647952,
                latitude: 53.6963007,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27371',
            name: 'Oświęcim',
            location: {
                longitude: 19.2097782,
                latitude: 50.0343982,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '20078',
            name: 'Piotrków Trybunalski',
            location: {
                longitude: 19.7030244,
                latitude: 51.4051721,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '19498',
            name: 'Piła',
            location: {
                longitude: 16.73782,
                latitude: 53.15145,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '18558',
            name: 'Plock',
            location: {
                longitude: 19.7065364,
                latitude: 52.5463446,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '24351',
            name: 'Polanica-Zdrój',
            location: {
                longitude: 16.5148115,
                latitude: 50.4119089,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27321',
            name: 'Polańczyk',
            location: {
                longitude: 22.4212003,
                latitude: 49.3696768,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '21398',
            name: 'Polkowice',
            location: {
                longitude: 16.0620494,
                latitude: 51.5024848,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '2035',
            name: 'Poznań',
            location: {
                longitude: 16.9251681,
                latitude: 52.406374,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '19478',
            name: 'Połczyn Zdrój',
            location: {
                longitude: 16.100159,
                latitude: 53.763105,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22118',
            name: 'Przemyśl',
            location: {
                longitude: 22.7677908,
                latitude: 49.7838623,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '20068',
            name: 'Przysucha',
            location: {
                longitude: 20.6317957,
                latitude: 51.3578773,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '19488',
            name: 'Puławy',
            location: {
                longitude: 21.969309,
                latitude: 51.4164431,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27761',
            name: 'Rabka-Zdrój',
            location: {
                longitude: 19.9671769,
                latitude: 49.6090128,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '18588',
            name: 'Radom',
            location: {
                longitude: 21.1471334,
                latitude: 51.4027236,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27051',
            name: 'Rozewie',
            location: {
                longitude: 18.3471,
                latitude: 54.81974,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22318',
            name: 'Rybnik',
            location: {
                longitude: 18.5462847,
                latitude: 50.1021742,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '8728',
            name: 'Rzeszów',
            location: {
                longitude: 21.9991196,
                latitude: 50.0411867,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27291',
            name: 'Sanok',
            location: {
                longitude: 22.2060658,
                latitude: 49.5550187,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22668',
            name: 'Sarbinowo',
            location: {
                longitude: 15.9560304,
                latitude: 54.2489618,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22738',
            name: 'Sieradz',
            location: {
                longitude: 18.7302994,
                latitude: 51.5956014,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '18668',
            name: 'Skarzysko-Kamienna',
            location: {
                longitude: 20.8477827,
                latitude: 51.114294,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27311',
            name: 'Solina',
            location: {
                longitude: 22.4677303,
                latitude: 49.3993322,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '7768',
            name: 'Sopot',
            location: {
                longitude: 18.5600956,
                latitude: 54.441581,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22168',
            name: 'Sosnowiec',
            location: {
                longitude: 19.1040791,
                latitude: 50.2862638,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '25661',
            name: 'Suwałki',
            location: {
                longitude: 22.9307881,
                latitude: 54.1115218,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '18178',
            name: 'Swinoujscie',
            location: {
                longitude: 14.2475775,
                latitude: 53.9100327,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '28151',
            name: 'Szczawnica',
            location: {
                longitude: 20.4829529,
                latitude: 49.4230451,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '2125',
            name: 'Szczecin',
            location: {
                longitude: 14.532483,
                latitude: 53.406949,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '28791',
            name: 'Szczecin Lotnisko Goleniów',
            location: {
                longitude: 14.902781,
                latitude: 53.5858774,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '19528',
            name: 'Szczecinek',
            location: {
                longitude: 16.6993602,
                latitude: 53.7100713,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '24611',
            name: 'Szklarska Poręba',
            location: {
                longitude: 15.5261477,
                latitude: 50.8274316,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27591',
            name: 'Sztum',
            location: {
                longitude: 19.0295929,
                latitude: 53.9208518,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '7658',
            name: 'Słupsk',
            location: {
                longitude: 17.0284824,
                latitude: 54.464148,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '15098',
            name: 'Tarnów',
            location: {
                longitude: 20.9858407,
                latitude: 50.0121011,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '7598',
            name: 'Toruń',
            location: {
                longitude: 18.5984437,
                latitude: 53.0137902,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '19538',
            name: 'Ustronie Morskie',
            location: {
                longitude: 15.7499382,
                latitude: 54.2019837,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27361',
            name: 'Ustrzyki Dolne',
            location: {
                longitude: 22.5942366,
                latitude: 49.4303242,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27331',
            name: 'Ustrzyki Górne',
            location: {
                longitude: 22.6505256,
                latitude: 49.1079977,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '7568',
            name: 'Warsaw',
            location: {
                longitude: 21.00335,
                latitude: 52.228895,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '23068',
            name: 'Wałbrzych',
            location: {
                longitude: 16.2843553,
                latitude: 50.7840092,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '19548',
            name: 'Wałcz',
            location: {
                longitude: 16.4752847,
                latitude: 53.2734739,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27281',
            name: 'Wetlina',
            location: {
                longitude: 22.4847705,
                latitude: 49.1433611,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27351',
            name: 'Wieliczka',
            location: {
                longitude: 20.0647971,
                latitude: 49.9870619,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '20058',
            name: 'Wieluń',
            location: {
                longitude: 18.56892,
                latitude: 51.2186,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '20048',
            name: 'Wieruszów',
            location: {
                longitude: 18.1547499,
                latitude: 51.29486,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '18618',
            name: 'Wloclawek',
            location: {
                longitude: 19.0677357,
                latitude: 52.6483303,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '20838',
            name: 'Wroclaw Airport',
            location: {
                longitude: 16.8809331,
                latitude: 51.1041654,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '1765',
            name: 'Wrocław',
            location: {
                longitude: 17.0385376,
                latitude: 51.1078852,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '19518',
            name: 'Wysowa Zdrój',
            location: {
                longitude: 21.1779985,
                latitude: 49.4354709,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '19508',
            name: 'Władysławowo',
            location: {
                longitude: 18.403,
                latitude: 54.79074,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22308',
            name: 'Zabrze',
            location: {
                longitude: 18.7857186,
                latitude: 50.3249278,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27261',
            name: 'Zagórz',
            location: {
                longitude: 22.26707,
                latitude: 49.5143,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '8738',
            name: 'Zakopane',
            location: {
                longitude: 19.9495621,
                latitude: 49.299181,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27491',
            name: 'Zator',
            location: {
                longitude: 19.4374699,
                latitude: 49.99621,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22138',
            name: 'Zebrzydowice',
            location: {
                longitude: 18.6111048,
                latitude: 49.8777353,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22208',
            name: 'Zgierz',
            location: {
                longitude: 19.4060704,
                latitude: 51.8550576,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '12508',
            name: 'Zgorzelec',
            location: {
                longitude: 15.0065645,
                latitude: 51.1496361,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '7618',
            name: 'Zielona Góra',
            location: {
                longitude: 15.5061862,
                latitude: 51.9356214,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '28701',
            name: 'Złoty Stok',
            location: {
                longitude: 16.87578,
                latitude: 50.44459,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '26241',
            name: 'Łeba',
            location: {
                longitude: 17.5563117,
                latitude: 54.760117,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '25651',
            name: 'Łomża',
            location: {
                longitude: 22.0590321,
                latitude: 53.1781197,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '28531',
            name: 'Łowicz',
            location: {
                longitude: 19.9453743,
                latitude: 52.1067916,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '7588',
            name: 'Łódź',
            location: {
                longitude: 19.4559833,
                latitude: 51.7592485,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '23088',
            name: 'Świdnica',
            location: {
                longitude: 16.475679,
                latitude: 50.8498434,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22288',
            name: 'Świebodzin',
            location: {
                longitude: 15.5335722,
                latitude: 52.2472962,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '27631',
            name: 'Świecie',
            location: {
                longitude: 18.4473863,
                latitude: 53.4093843,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '24331',
            name: 'Żnin',
            location: {
                longitude: 17.719477,
                latitude: 52.8493847,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '22158',
            name: 'Żory',
            location: {
                longitude: 18.7006401,
                latitude: 50.0447236,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
        {
            id: '26341',
            name: 'Żywiec',
            location: {
                longitude: 19.1823983,
                latitude: 49.6912999,
                country: {
                    name: 'Poland',
                    code: 'PL',
                },
            },
        },
    ],
    Portugal: [
        {
            id: '21898',
            name: 'Evora',
            location: {
                longitude: -7.913502,
                latitude: 38.571431,
                country: {
                    name: 'Portugal',
                    code: 'PT',
                },
            },
        },
        {
            id: '13938',
            name: 'Lisbon',
            location: {
                longitude: -9.1393366,
                latitude: 38.7222524,
                country: {
                    name: 'Portugal',
                    code: 'PT',
                },
            },
        },
    ],
    Romania: [
        {
            id: '15128',
            name: 'Adjud',
            location: {
                longitude: 27.1821895,
                latitude: 46.0961957,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15148',
            name: 'Alexandria',
            location: {
                longitude: 25.329841,
                latitude: 43.962514,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15138',
            name: 'Aleșd',
            location: {
                longitude: 22.3980649,
                latitude: 47.0590191,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '6318',
            name: 'Arad',
            location: {
                longitude: 21.3122677,
                latitude: 46.1865606,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15158',
            name: 'Bacău',
            location: {
                longitude: 26.9145748,
                latitude: 46.5670437,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '12128',
            name: 'Baia Mare',
            location: {
                longitude: 23.5849881,
                latitude: 47.6567387,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15178',
            name: 'Balș',
            location: {
                longitude: 24.0956725,
                latitude: 44.3533537,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15188',
            name: 'Beclean',
            location: {
                longitude: 24.1704031,
                latitude: 47.1800681,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '22478',
            name: 'Bicaz',
            location: {
                longitude: 26.0853919,
                latitude: 46.909583,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15108',
            name: 'Bistrița',
            location: {
                longitude: 24.4890979,
                latitude: 47.1392617,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15208',
            name: 'Botoșani',
            location: {
                longitude: 26.6658127,
                latitude: 47.7406537,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '6358',
            name: 'Brașov',
            location: {
                longitude: 25.6011977,
                latitude: 45.6579755,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15218',
            name: 'Brăila',
            location: {
                longitude: 27.9594714,
                latitude: 45.2652463,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '6378',
            name: 'Bucharest',
            location: {
                longitude: 26.1025384,
                latitude: 44.4267674,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15298',
            name: 'Bumbești-Jiu',
            location: {
                longitude: 23.3856157,
                latitude: 45.1776245,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15238',
            name: 'Buzău',
            location: {
                longitude: 26.8171122,
                latitude: 45.1371109,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15198',
            name: 'Bârlad',
            location: {
                longitude: 27.6692265,
                latitude: 46.2276613,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15168',
            name: 'Băile Herculane',
            location: {
                longitude: 22.4085127,
                latitude: 44.8681802,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '25321',
            name: 'Calafat',
            location: {
                longitude: 22.934115,
                latitude: 43.9897523,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15268',
            name: 'Caracal',
            location: {
                longitude: 24.3424754,
                latitude: 44.1157446,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15278',
            name: 'Caransebeș',
            location: {
                longitude: 22.2218641,
                latitude: 45.413619,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '12138',
            name: 'Carei',
            location: {
                longitude: 22.462143,
                latitude: 47.6814513,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15288',
            name: 'Cernavodă',
            location: {
                longitude: 28.0306028,
                latitude: 44.3276037,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15308',
            name: 'Constanța',
            location: {
                longitude: 28.6348138,
                latitude: 44.1598013,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15118',
            name: 'Craiova',
            location: {
                longitude: 23.7948808,
                latitude: 44.3301785,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '22468',
            name: 'Cristuru Secuiesc',
            location: {
                longitude: 25.0317145,
                latitude: 46.2924526,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15248',
            name: 'Câmpia Turzii',
            location: {
                longitude: 23.8706676,
                latitude: 46.5586485,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15258',
            name: 'Câmpulung Moldovenesc',
            location: {
                longitude: 25.5707495,
                latitude: 47.5257007,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15228',
            name: 'Călărași',
            location: {
                longitude: 27.3137439,
                latitude: 44.2085144,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15318',
            name: 'Dej',
            location: {
                longitude: 23.8787342,
                latitude: 47.1415878,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '6398',
            name: 'Deva',
            location: {
                longitude: 22.9143737,
                latitude: 45.8662574,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15328',
            name: 'Drobeta-Turnu Severin',
            location: {
                longitude: 22.6597342,
                latitude: 44.6369227,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15348',
            name: 'Fetești',
            location: {
                longitude: 27.8285646,
                latitude: 44.3687237,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15368',
            name: 'Filiași',
            location: {
                longitude: 23.5200088,
                latitude: 44.554523,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15358',
            name: 'Focșani',
            location: {
                longitude: 27.184043,
                latitude: 45.6964745,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '6408',
            name: 'Făgăraș',
            location: {
                longitude: 24.9730954,
                latitude: 45.8416403,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15338',
            name: 'Fălticeni',
            location: {
                longitude: 26.3015288,
                latitude: 47.4615626,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15398',
            name: 'Galați',
            location: {
                longitude: 28.0079945,
                latitude: 45.4353208,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '22488',
            name: 'Gheorgheni',
            location: {
                longitude: 25.5855275,
                latitude: 46.7212112,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15388',
            name: 'Gherla',
            location: {
                longitude: 23.909253,
                latitude: 47.0317645,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '12158',
            name: 'Giurgiu',
            location: {
                longitude: 25.9699265,
                latitude: 43.9037076,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15408',
            name: 'Gura Humorului',
            location: {
                longitude: 25.8855848,
                latitude: 47.5525146,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15378',
            name: 'Găești',
            location: {
                longitude: 25.3162139,
                latitude: 44.719706,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '12168',
            name: 'Huedin',
            location: {
                longitude: 23.0218215,
                latitude: 46.8623427,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15428',
            name: 'Hunedoara',
            location: {
                longitude: 22.9072331,
                latitude: 45.7678128,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15438',
            name: 'Iași',
            location: {
                longitude: 27.6014418,
                latitude: 47.1584549,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15448',
            name: 'Iernut',
            location: {
                longitude: 24.2290151,
                latitude: 46.4507604,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15458',
            name: 'Lipova',
            location: {
                longitude: 21.6950506,
                latitude: 46.0887169,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15468',
            name: 'Luduș',
            location: {
                longitude: 24.0933922,
                latitude: 46.476045,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '6438',
            name: 'Lugoj',
            location: {
                longitude: 21.9034608,
                latitude: 45.6909898,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15478',
            name: 'Medgidia',
            location: {
                longitude: 28.2777338,
                latitude: 44.2416271,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15518',
            name: 'Mediaș',
            location: {
                longitude: 24.3471665,
                latitude: 46.1572828,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '12178',
            name: 'Miercurea Ciuc',
            location: {
                longitude: 25.7953655,
                latitude: 46.3695574,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '12188',
            name: 'Odorheiu Secuiesc',
            location: {
                longitude: 25.2926479,
                latitude: 46.3049996,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15488',
            name: 'Onești',
            location: {
                longitude: 26.782587,
                latitude: 46.2647012,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '12198',
            name: 'Oradea',
            location: {
                longitude: 21.9189438,
                latitude: 47.0465005,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15638',
            name: 'Orăștie',
            location: {
                longitude: 23.2019265,
                latitude: 45.8451246,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15498',
            name: 'Orșova',
            location: {
                longitude: 22.3943257,
                latitude: 44.7284621,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15648',
            name: 'Pașcani',
            location: {
                longitude: 26.7233832,
                latitude: 47.2411237,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15508',
            name: 'Petroșani',
            location: {
                longitude: 23.3754021,
                latitude: 45.4088946,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15538',
            name: 'Piatra Neamț',
            location: {
                longitude: 26.3779793,
                latitude: 46.9299616,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15528',
            name: 'Pitești',
            location: {
                longitude: 24.8691824,
                latitude: 44.8564798,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '6468',
            name: 'Ploiești',
            location: {
                longitude: 26.0128616,
                latitude: 44.936664,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15568',
            name: 'Reghin',
            location: {
                longitude: 24.700762,
                latitude: 46.7710931,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15578',
            name: 'Reșița',
            location: {
                longitude: 21.8821033,
                latitude: 45.3049703,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15588',
            name: 'Roman',
            location: {
                longitude: 26.920658,
                latitude: 46.934875,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15828',
            name: 'Rovinari',
            location: {
                longitude: 23.1543463,
                latitude: 44.9000027,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15598',
            name: 'Roșiorii de Vede',
            location: {
                longitude: 24.9949784,
                latitude: 44.1085569,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15548',
            name: 'Râmnicu Sărat',
            location: {
                longitude: 27.0462219,
                latitude: 45.3864635,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15558',
            name: 'Râmnicu Vâlcea',
            location: {
                longitude: 24.3693179,
                latitude: 45.0996753,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15608',
            name: 'Salonta',
            location: {
                longitude: 21.6489829,
                latitude: 46.8052877,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '12208',
            name: 'Satu Mare',
            location: {
                longitude: 22.8575926,
                latitude: 47.8016702,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '6488',
            name: 'Sebeș',
            location: {
                longitude: 23.5663758,
                latitude: 45.9595588,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15618',
            name: 'Sfântu Gheorghe',
            location: {
                longitude: 25.7885796,
                latitude: 45.8609375,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '6508',
            name: 'Sibiu',
            location: {
                longitude: 24.1255826,
                latitude: 45.7983273,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15628',
            name: 'Sighetu Marmației',
            location: {
                longitude: 23.8976506,
                latitude: 47.927707,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '12218',
            name: 'Sighișoara',
            location: {
                longitude: 24.7963878,
                latitude: 46.2197025,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15658',
            name: 'Sinaia',
            location: {
                longitude: 25.5623504,
                latitude: 45.3310429,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15668',
            name: 'Slatina (RO)',
            location: {
                longitude: 24.3716904,
                latitude: 44.4301677,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15678',
            name: 'Slobozia',
            location: {
                longitude: 27.3613656,
                latitude: 44.5628889,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15688',
            name: 'Suceava',
            location: {
                longitude: 26.2732302,
                latitude: 47.6634521,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '22498',
            name: 'Tarnaveni',
            location: {
                longitude: 24.2935777,
                latitude: 46.3293137,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15748',
            name: 'Tecuci',
            location: {
                longitude: 27.4241268,
                latitude: 45.8490923,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15758',
            name: 'Teiuș',
            location: {
                longitude: 23.678038,
                latitude: 46.2024166,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '6518',
            name: 'Timișoara',
            location: {
                longitude: 21.2086793,
                latitude: 45.7488716,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15818',
            name: 'Tulcea',
            location: {
                longitude: 28.7914439,
                latitude: 45.1716165,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15718',
            name: 'Târgoviște',
            location: {
                longitude: 25.4558274,
                latitude: 44.9118218,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15728',
            name: 'Târgu Frumos',
            location: {
                longitude: 27.0083561,
                latitude: 47.2085397,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15738',
            name: 'Târgu Jiu',
            location: {
                longitude: 23.2689393,
                latitude: 45.0314279,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '12228',
            name: 'Târgu Mureș',
            location: {
                longitude: 24.5514392,
                latitude: 46.5385862,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15798',
            name: 'Târgu Neamț',
            location: {
                longitude: 26.3757306,
                latitude: 47.2097877,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15808',
            name: 'Târgu Secuiesc',
            location: {
                longitude: 26.1345785,
                latitude: 46.0006001,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15708',
            name: 'Tălmaciu',
            location: {
                longitude: 24.2626411,
                latitude: 45.6696594,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15768',
            name: 'Vaslui',
            location: {
                longitude: 27.7276468,
                latitude: 46.6406915,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15778',
            name: 'Vatra Dornei',
            location: {
                longitude: 25.3521039,
                latitude: 47.3447576,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15788',
            name: 'Zalău',
            location: {
                longitude: 23.0573324,
                latitude: 47.1854562,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
        {
            id: '15698',
            name: 'Țăndărei',
            location: {
                longitude: 27.6438672,
                latitude: 44.6488718,
                country: {
                    name: 'Romania',
                    code: 'RO',
                },
            },
        },
    ],
    Serbia: [
        {
            id: '16768',
            name: 'Belgrade',
            location: {
                longitude: 20.4489216,
                latitude: 44.786568,
                country: {
                    name: 'Serbia',
                    code: 'RS',
                },
            },
        },
        {
            id: '23851',
            name: 'Mačvanska Mitrovica',
            location: {
                longitude: 19.5966291,
                latitude: 44.9642547,
                country: {
                    name: 'Serbia',
                    code: 'RS',
                },
            },
        },
        {
            id: '16818',
            name: 'Novi Sad',
            location: {
                longitude: 19.8335496,
                latitude: 45.2671352,
                country: {
                    name: 'Serbia',
                    code: 'RS',
                },
            },
        },
    ],
    Sweden: [
        {
            id: '23318',
            name: 'Alfta',
            location: {
                longitude: 16.0604207,
                latitude: 61.3444468,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '26091',
            name: 'Arboga',
            location: {
                longitude: 15.8381748,
                latitude: 59.3936883,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '23338',
            name: 'Arbrå',
            location: {
                longitude: 16.3793236,
                latitude: 61.4702685,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '22378',
            name: 'Blankaholm',
            location: {
                longitude: 16.5259238,
                latitude: 57.5905702,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '23308',
            name: 'Bollnäs',
            location: {
                longitude: 16.3942685,
                latitude: 61.3483795,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '26181',
            name: 'Borlänge',
            location: {
                longitude: 15.433969,
                latitude: 60.484304,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6648',
            name: 'Borås',
            location: {
                longitude: 12.939819,
                latitude: 57.721035,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '25471',
            name: 'Bromölla',
            location: {
                longitude: 14.477659,
                latitude: 56.0743618,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '26131',
            name: 'Djurås',
            location: {
                longitude: 15.1318034,
                latitude: 60.5607539,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '23328',
            name: 'Edsbyn',
            location: {
                longitude: 15.8182725,
                latitude: 61.3750274,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '22338',
            name: 'Enköping',
            location: {
                longitude: 17.0778227,
                latitude: 59.6356909,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6658',
            name: 'Eskilstuna',
            location: {
                longitude: 16.5098045,
                latitude: 59.3712486,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '22398',
            name: 'Fårbo',
            location: {
                longitude: 16.4838604,
                latitude: 57.3832253,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '22368',
            name: 'Gamleby',
            location: {
                longitude: 16.4060887,
                latitude: 57.8931603,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6638',
            name: 'Gothenburg',
            location: {
                longitude: 11.97456,
                latitude: 57.70887,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '16898',
            name: 'Gothenburg Airport (Landvetter)',
            location: {
                longitude: 12.292314,
                latitude: 57.668799,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '11868',
            name: 'Grums',
            location: {
                longitude: 13.143185,
                latitude: 59.367771,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '22448',
            name: 'Gränna',
            location: {
                longitude: 14.4700948,
                latitude: 58.0250234,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '11858',
            name: 'Gävle',
            location: {
                longitude: 17.1412726,
                latitude: 60.6748796,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6668',
            name: 'Halmstad',
            location: {
                longitude: 12.8577884,
                latitude: 56.6743748,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '26121',
            name: 'Hedemora',
            location: {
                longitude: 15.985892,
                latitude: 60.2775453,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6678',
            name: 'Helsingborg',
            location: {
                longitude: 12.6945121,
                latitude: 56.0464674,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '27141',
            name: 'Hofors',
            location: {
                longitude: 16.2841,
                latitude: 60.54595,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '25421',
            name: 'Hörby',
            location: {
                longitude: 13.7238934,
                latitude: 55.8396104,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '26141',
            name: 'Insjön',
            location: {
                longitude: 15.0854559,
                latitude: 60.6765665,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '23358',
            name: 'Järvsö',
            location: {
                longitude: 16.1721867,
                latitude: 61.7135286,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6688',
            name: 'Jönköping',
            location: {
                longitude: 14.1617876,
                latitude: 57.7826137,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6818',
            name: 'Kalmar',
            location: {
                longitude: 16.356779,
                latitude: 56.6634447,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6968',
            name: 'Karlshamn',
            location: {
                longitude: 14.863073,
                latitude: 56.170303,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '11908',
            name: 'Karlskoga',
            location: {
                longitude: 14.536414,
                latitude: 59.328634,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6838',
            name: 'Karlskrona',
            location: {
                longitude: 15.5869,
                latitude: 56.161224,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6698',
            name: 'Karlstad',
            location: {
                longitude: 13.5114977,
                latitude: 59.4021806,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '23298',
            name: 'Kilafors',
            location: {
                longitude: 16.5635885,
                latitude: 61.2299391,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '11918',
            name: 'Knöstad',
            location: {
                longitude: 12.816667,
                latitude: 59.25,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6848',
            name: 'Kristianstad',
            location: {
                longitude: 14.1566778,
                latitude: 56.0293936,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '11928',
            name: 'Kristinehamn',
            location: {
                longitude: 14.1089192,
                latitude: 59.3100677,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '27121',
            name: 'Kungsgården',
            location: {
                longitude: 16.60293,
                latitude: 60.6074379,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '26151',
            name: 'Leksand',
            location: {
                longitude: 14.9998922,
                latitude: 60.7303082,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6708',
            name: 'Linköping',
            location: {
                longitude: 15.6213727,
                latitude: 58.410807,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '23368',
            name: 'Ljusdal',
            location: {
                longitude: 16.0817502,
                latitude: 61.8308392,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6718',
            name: 'Lund',
            location: {
                longitude: 13.1910073,
                latitude: 55.7046601,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '26001',
            name: 'Läggesta',
            location: {
                longitude: 14.883333,
                latitude: 58.916667,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '1064',
            name: 'Malmö',
            location: {
                longitude: 13.003346,
                latitude: 55.608987,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '22388',
            name: 'Misterhult',
            location: {
                longitude: 16.5496304,
                latitude: 57.4632217,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '22428',
            name: 'Mjölby',
            location: {
                longitude: 15.1335348,
                latitude: 58.3226908,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '26171',
            name: 'Mora',
            location: {
                longitude: 14.537003,
                latitude: 61.004878,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '22418',
            name: 'Mönsterås',
            location: {
                longitude: 16.4431199,
                latitude: 57.0415797,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6728',
            name: 'Norrköping',
            location: {
                longitude: 16.192421,
                latitude: 58.587745,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6878',
            name: 'Nyköping',
            location: {
                longitude: 17.0091593,
                latitude: 58.7528439,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '22408',
            name: 'Oskarshamn',
            location: {
                longitude: 16.4473984,
                latitude: 57.2656993,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '25461',
            name: 'Ronneby',
            location: {
                longitude: 15.2760229,
                latitude: 56.210434,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '26161',
            name: 'Rättvik',
            location: {
                longitude: 15.1233731,
                latitude: 60.889025,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '27111',
            name: 'Sandviken',
            location: {
                longitude: 16.7759179,
                latitude: 60.621607,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '3798',
            name: 'Stockholm',
            location: {
                longitude: 18.0685808,
                latitude: 59.3293235,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '24531',
            name: 'Stockholm Arlanda T 2/3',
            location: {
                longitude: 17.928869,
                latitude: 59.644023,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '24521',
            name: 'Stockholm Arlanda T 4',
            location: {
                longitude: 17.9286329,
                latitude: 59.6478284,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '16908',
            name: 'Stockholm Arlanda T 5',
            location: {
                longitude: 17.9237807,
                latitude: 59.6497622,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '27081',
            name: 'Stockholm Skavsta Airport',
            location: {
                longitude: 16.9153649,
                latitude: 58.7890201,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '27131',
            name: 'Storvik',
            location: {
                longitude: 16.5293196,
                latitude: 60.5842246,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '26011',
            name: 'Strängnäs',
            location: {
                longitude: 17.0321193,
                latitude: 59.3774523,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '22348',
            name: 'Söderköping',
            location: {
                longitude: 16.3234307,
                latitude: 58.4759013,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '11998',
            name: 'Töcksfors',
            location: {
                longitude: 11.8425511,
                latitude: 59.5075308,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6898',
            name: 'Uddevalla',
            location: {
                longitude: 11.935649,
                latitude: 58.3498003,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '22458',
            name: 'Ulricehamn',
            location: {
                longitude: 13.4205162,
                latitude: 57.7947889,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6768',
            name: 'Uppsala',
            location: {
                longitude: 17.6389267,
                latitude: 59.8585638,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '27101',
            name: 'Valbo',
            location: {
                longitude: 17.0082511,
                latitude: 60.6430311,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '22358',
            name: 'Valdemarsvik',
            location: {
                longitude: 16.6013625,
                latitude: 58.2024514,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '23348',
            name: 'Vallsta',
            location: {
                longitude: 16.3633657,
                latitude: 61.516635,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6918',
            name: 'Västervik',
            location: {
                longitude: 16.6369759,
                latitude: 57.7577156,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6778',
            name: 'Västerås',
            location: {
                longitude: 16.5448091,
                latitude: 59.6099005,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '11827',
            name: 'Årjäng',
            location: {
                longitude: 12.132717,
                latitude: 59.3891592,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
        {
            id: '6738',
            name: 'Örebro',
            location: {
                longitude: 15.2134105,
                latitude: 59.2752626,
                country: {
                    name: 'Sweden',
                    code: 'SE',
                },
            },
        },
    ],
    Slovenia: [
        {
            id: '8888',
            name: 'Bled',
            location: {
                longitude: 14.1145798,
                latitude: 46.3683266,
                country: {
                    name: 'Slovenia',
                    code: 'SI',
                },
            },
        },
        {
            id: '23028',
            name: 'Izola',
            location: {
                longitude: 13.6600802,
                latitude: 45.5374048,
                country: {
                    name: 'Slovenia',
                    code: 'SI',
                },
            },
        },
        {
            id: '8968',
            name: 'Koper',
            location: {
                longitude: 13.7301877,
                latitude: 45.548059,
                country: {
                    name: 'Slovenia',
                    code: 'SI',
                },
            },
        },
        {
            id: '1925',
            name: 'Ljubljana',
            location: {
                longitude: 14.510167,
                latitude: 46.057722,
                country: {
                    name: 'Slovenia',
                    code: 'SI',
                },
            },
        },
        {
            id: '1955',
            name: 'Maribor',
            location: {
                longitude: 15.655222,
                latitude: 46.558917,
                country: {
                    name: 'Slovenia',
                    code: 'SI',
                },
            },
        },
        {
            id: '27231',
            name: 'Piran',
            location: {
                longitude: 13.5682895,
                latitude: 45.528319,
                country: {
                    name: 'Slovenia',
                    code: 'SI',
                },
            },
        },
        {
            id: '9018',
            name: 'Portorož',
            location: {
                longitude: 13.5908455,
                latitude: 45.5142898,
                country: {
                    name: 'Slovenia',
                    code: 'SI',
                },
            },
        },
        {
            id: '10228',
            name: 'Ptuj',
            location: {
                longitude: 15.8696884,
                latitude: 46.4199535,
                country: {
                    name: 'Slovenia',
                    code: 'SI',
                },
            },
        },
    ],
    Slovakia: [
        {
            id: '12058',
            name: 'Banská Bystrica',
            location: {
                longitude: 19.1461917,
                latitude: 48.736277,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '18878',
            name: 'Bardejov',
            location: {
                longitude: 21.282134,
                latitude: 49.297147,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '1745',
            name: 'Bratislava',
            location: {
                longitude: 17.169165,
                latitude: 48.145669,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25241',
            name: 'Bratislava Airport',
            location: {
                longitude: 17.2105238,
                latitude: 48.1702634,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '28691',
            name: 'Bánovce nad Bebravou',
            location: {
                longitude: 18.2603402,
                latitude: 48.7188444,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '12078',
            name: 'Dolný Kubín',
            location: {
                longitude: 19.2968746,
                latitude: 49.212679,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '12068',
            name: 'Donovaly',
            location: {
                longitude: 19.2221295,
                latitude: 48.8804029,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25791',
            name: 'Handlová',
            location: {
                longitude: 18.7598695,
                latitude: 48.7290079,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25691',
            name: 'Hliník nad Hronom',
            location: {
                longitude: 18.7819667,
                latitude: 48.5410574,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25571',
            name: 'Koňárovce',
            location: {
                longitude: 18.0933019,
                latitude: 48.4299586,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '6208',
            name: 'Košice',
            location: {
                longitude: 21.2577999,
                latitude: 48.7210053,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '6198',
            name: 'Kysak',
            location: {
                longitude: 21.2214489,
                latitude: 48.8534553,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '28681',
            name: 'Levoča',
            location: {
                longitude: 20.5843112,
                latitude: 49.0202097,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '6148',
            name: 'Liptovský Mikuláš',
            location: {
                longitude: 19.6181196,
                latitude: 49.0825785,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25981',
            name: 'Lučenec',
            location: {
                longitude: 19.6690601,
                latitude: 48.3286673,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25431',
            name: 'Nitra',
            location: {
                longitude: 18.076376,
                latitude: 48.3061414,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25711',
            name: 'Nová Báňa',
            location: {
                longitude: 18.6421894,
                latitude: 48.4216874,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25751',
            name: 'Nové Mesto',
            location: {
                longitude: 17.8253958,
                latitude: 48.7568395,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25771',
            name: 'Partizánske',
            location: {
                longitude: 18.3768911,
                latitude: 48.628493,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25761',
            name: 'Piešťany',
            location: {
                longitude: 17.827155,
                latitude: 48.5917973,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '6168',
            name: 'Poprad (High Tatras)',
            location: {
                longitude: 20.3014328,
                latitude: 49.055188,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '12878',
            name: 'Považská Bystrica',
            location: {
                longitude: 18.447663,
                latitude: 49.1131198,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25551',
            name: 'Preselany',
            location: {
                longitude: 18.0990805,
                latitude: 48.4500164,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '6188',
            name: 'Prešov',
            location: {
                longitude: 21.2396073,
                latitude: 48.9979058,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25781',
            name: 'Prievidza',
            location: {
                longitude: 18.6245384,
                latitude: 48.7745206,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25971',
            name: 'Rimavská Sobota',
            location: {
                longitude: 20.0195452,
                latitude: 48.3812295,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25961',
            name: 'Rožnava',
            location: {
                longitude: 20.5323841,
                latitude: 48.6561405,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '6138',
            name: 'Ružomberok',
            location: {
                longitude: 19.304323,
                latitude: 49.0815474,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25521',
            name: 'Sereď',
            location: {
                longitude: 17.7338455,
                latitude: 48.2850786,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '6178',
            name: 'Spišská Nová Ves',
            location: {
                longitude: 20.567981,
                latitude: 48.9435269,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '18918',
            name: 'Tatranska Lomnica',
            location: {
                longitude: 20.2813070151,
                latitude: 49.1653889013,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25531',
            name: 'Topolčany',
            location: {
                longitude: 18.1700065,
                latitude: 48.5589454,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '12868',
            name: 'Trenčín',
            location: {
                longitude: 18.0335209,
                latitude: 48.884936,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '18928',
            name: 'Trnava',
            location: {
                longitude: 17.584396466,
                latitude: 48.3707271716,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '6128',
            name: 'Vrútky',
            location: {
                longitude: 18.9244472,
                latitude: 49.1114021,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25561',
            name: 'Výčapy',
            location: {
                longitude: 18.0857047,
                latitude: 48.4076985,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25721',
            name: 'Zlaté Moravce',
            location: {
                longitude: 18.3912685,
                latitude: 48.3851703,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '12048',
            name: 'Zvolen',
            location: {
                longitude: 19.1371155,
                latitude: 48.5761806,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '6108',
            name: 'Čadca',
            location: {
                longitude: 18.7913236,
                latitude: 49.4383046,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '6158',
            name: 'Štrba',
            location: {
                longitude: 20.0799302,
                latitude: 49.0589648,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25701',
            name: 'Žarnovica',
            location: {
                longitude: 18.7217034,
                latitude: 48.4833487,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '18898',
            name: 'Ždiar',
            location: {
                longitude: 20.26677,
                latitude: 49.26955,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '25681',
            name: 'Žiar nad Hronom',
            location: {
                longitude: 18.8548946,
                latitude: 48.5905012,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
        {
            id: '6118',
            name: 'Žilina',
            location: {
                longitude: 18.7419519,
                latitude: 49.2215903,
                country: {
                    name: 'Slovakia',
                    code: 'SK',
                },
            },
        },
    ],
    Ukraine: [
        {
            id: '15898',
            name: 'Kyiv / Kiev',
            location: {
                longitude: 30.5234,
                latitude: 50.4501,
                country: {
                    name: 'Ukraine',
                    code: 'UA',
                },
            },
        },
        {
            id: '9808',
            name: 'Lviv',
            location: {
                longitude: 24.029717,
                latitude: 49.839683,
                country: {
                    name: 'Ukraine',
                    code: 'UA',
                },
            },
        },
        {
            id: '15878',
            name: 'Rivne',
            location: {
                longitude: 26.251617,
                latitude: 50.6199,
                country: {
                    name: 'Ukraine',
                    code: 'UA',
                },
            },
        },
        {
            id: '8698',
            name: 'Užhorod',
            location: {
                longitude: 22.287883,
                latitude: 48.6208,
                country: {
                    name: 'Ukraine',
                    code: 'UA',
                },
            },
        },
        {
            id: '15888',
            name: 'Zhytomyr',
            location: {
                longitude: 28.6586669,
                latitude: 50.25465,
                country: {
                    name: 'Ukraine',
                    code: 'UA',
                },
            },
        },
    ],
}
