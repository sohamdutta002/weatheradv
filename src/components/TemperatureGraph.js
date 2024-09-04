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
import { callback } from 'chart.js/helpers';

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
                pointBackgroundColor: 'rgb(255, 255, 255)',
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
                ticks:{
                    callback: function(value,index){
                        return (index%3===0)?((index<=12)?value+"am":value%12+"pm"):' ';
                    }
                }
            },
            y:{
                display: false,
                grid:{
                    display:false,
                },
            },
        },
    };
    
    return <Line data={data} options={options} width={650} />;
}