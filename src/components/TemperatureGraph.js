import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function TemperatureGraph({hourlyData}){
    const data={
        labels: hourlyData.map(hour=>hour.time.split(' ')[1]),
        datasets:[
            {
                data: hourlyData.map(hour=>hour.temp_c),
                fill: true,
                backgroundColor: 'rgba(143, 29, 225, 0.43)',
                borderColor: 'rgba(143, 29, 225, 0.843)',
                borderWidth: 2,
                tension: 0.5,
            },
        ],
    };
    console.log(data);
    const options={
        plugins:{
            legend:{
                display:false,
            },
        },
        scales:{
            x:{
                grid:{
                    display:false,
                },
                title:{
                    display: false,
                },
            },
            y:{
                display: false,
                grid:{
                    display:false,
                },
            },
        },
    };
    
    return <Line data={data} options={options} width={700}/>;
}