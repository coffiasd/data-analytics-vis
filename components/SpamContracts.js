import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


export default function SpamContracts() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );


    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Top100 Spam Contracts',
            },
        },
        responsive: true,
    };

    const labels = ['0x**80', '0x**97', '0x**ed', '0x**df', '0x**c5', '0x**7b', '0x**f0', '0x**5e', '0x**77', '0x**76', '0x**85', '0x**88', '0x**91', '0x**31', '0x**76', '0x**d6', '0x**ae', '0x**e1', '0x**0d', '0x**16', '0x**97', '0x**c4', '0x**03', '0x**80', '0x**bf', '0x**4e', '0x**c2', '0x**12', '0x**16', '0x**4c', '0x**e6', '0x**c3', '0x**7d', '0x**fb', '0x**89', '0x**c7', '0x**da', '0x**87', '0x**d9', '0x**b1', '0x**e9', '0x**b5', '0x**e3', '0x**ed', '0x**5b', '0x**51', '0x**31', '0x**1a', '0x**f5', '0x**10', '0x**c8', '0x**09', '0x**ec', '0x**04', '0x**21', '0x**41', '0x**a9', '0x**ea', '0x**b4', '0x**ce', '0x**63', '0x**ed', '0x**d4', '0x**f0', '0x**c7', '0x**c1', '0x**d3', '0x**5f', '0x**9e', '0x**34', '0x**a5', '0x**a4', '0x**d8', '0x**73', '0x**ac', '0x**1c', '0x**c3', '0x**9e', '0x**1a', '0x**3c', '0x**0d', '0x**37', '0x**ae', '0x**fe', '0x**a2', '0x**d2', '0x**dd', '0x**4d', '0x**91', '0x**98', '0x**d5', '0x**b3', '0x**44', '0x**ea', '0x**32', '0x**12', '0x**05', '0x**62', '0x**3d', '0x**d6'
    ];

    const data = {
        labels,
        datasets: [
            {
                label: 'mints',
                data: [165112, 147091, 136016, 134686, 115886, 115609, 102942, 98303, 96697, 93210, 90618, 88554, 82977, 81355, 81154, 80577, 71614, 71369, 68483, 66667, 63705, 62865, 60804, 58376, 56166, 52947, 52932, 52176, 51192, 48085, 47913, 43368, 41398, 39541, 39515, 37185, 36781, 35514, 35396, 34471, 34163, 33386, 33310, 33070, 33045, 32508, 31336, 31199, 30230, 29761, 29257, 28940, 28664, 28237, 28217, 28198, 27806, 27628, 27243, 26700, 26507, 26336, 26285, 26252, 26215, 26053, 25447, 24441, 24433, 24121, 22875, 22345, 22334, 22210, 22170, 22144, 21804, 21541, 21448, 21195, 21180, 20468, 20464, 20446, 19640, 19553, 19361, 18443, 18370, 18175, 18056, 18026, 17606, 17532, 17413, 17221, 17216, 17067, 16957, 16807
                ],
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // borderWidth: 2,
                borderRadius: 10,
                borderSkipped: false,
            },
            {
                label: 'mint_address',
                data: [763, 39094, 43733, 24880, 836, 1086, 42001, 38682, 32389, 859, 29465, 30391, 29963, 32629, 1427, 3648, 32109, 1280, 3933, 27575, 28992, 5319, 50000, 23259, 44912, 871, 4375, 847, 748, 413, 838, 6078, 653, 6571, 31315, 655, 997, 1090, 210, 3953, 5040, 1633, 2463, 3135, 1279, 828, 134, 503, 4650, 2824, 5438, 3414, 3490, 4066, 4629, 1647, 527, 2805, 3278, 737, 2949, 4886, 2637, 2776, 2222, 1833, 104, 510, 3008, 366, 8232, 10000, 6657, 3386, 2355, 3079, 2492, 3560, 122, 910, 113, 1143, 2896, 226, 275, 288, 7121, 2005, 1970, 327, 3923, 225, 153, 5399, 611, 713, 690, 2576, 1317, 3966
                ],
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgb(255, 99, 132)',
                // borderWidth: 2,
                borderRadius: 10,
                borderSkipped: false,
            }
        ],
    };

    return (
        <div className='bg-white m-auto w-7/12 p-6 rounded-2xl'>
            <Bar options={options} data={data} />
        </div>
    )
}