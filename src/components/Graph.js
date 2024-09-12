import { Line } from 'react-chartjs-2'
import  { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js/auto'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export const Graph = (lineChartData) => {

    const option = {}

    return <Line options={option} data={lineChartData} />
}