import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    plugins
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function RainGraph({hourlyData}){
    // console.log(hourlyData);
    const backgroundColors = hourlyData.map(hour => {
        if (hour.precip_mm >= 9) {
            return 'rgb(10, 42, 89)';
        }
        if (hour.precip_mm >= 2) {
            return 'rgba(111, 22, 174, 0.843)';
        }
        return 'rgba(143, 29, 225, 0.43)';
    });
    
    const data={
        labels: hourlyData.map(hour=>hour.time.split(' ')[1]),
        datasets:[
            {
                data: hourlyData.map(hour=>hour.precip_mm),
                backgroundColor: backgroundColors,
                borderColor: 'rgba(143, 29, 225, 0.43)',
                borderWidth: 0,
                barThickness:10,
                borderRadius:10,
            }
        ],
    };
    console.log(data.labels);
    const options={
        indexAxis:'y',
        plugins:{
            legend:{
                display:false,
            },
        },
        scales:{
            y:{
                grid:{
                    display:false,
                    drawBorder:false,
                },
                title:{
                    display:false,
                },
                categoryPercentage:0.8,
                barPercentage:0.9,
            },
            x:{
                min:0,
                max:10,
                grid:{
                    display:false,
                    drawBorder:false,
                },
                title:{
                    display: false,
                },
                ticks:{
                    callback: function(value){
                        if(value===0)
                            return 'Sunny';
                        if(value===2)
                            return 'Rainy';
                        if(value===9)
                            return 'Heavy Rain';
                        return '';
                    }
                }
            },
        }
    };
    return <Bar data={data} options={options} height={220}/>;
}