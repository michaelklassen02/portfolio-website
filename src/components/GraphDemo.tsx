import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { graphDemoData } from "../constants/chartdata";
import '../styles/Modal.css'

export default function GraphDemo () {
    const data = graphDemoData;
    data.sort((a, b) => 
        a.x > b.x ? 1 : -1
    )

    return (
        <div>
            <LineChart width={800} height={400} data={data} margin={{ top: 10, right: 20, bottom: 5, left: 0 }}>
                <Line type='monotone' dataKey='y' stroke='#8884d8' />
                <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
                <XAxis dataKey='x' type='number'/>
                <YAxis />
                <Tooltip />
            </LineChart>
            <p className='job-description'>
                This is a sample chart to illustrate the process of making a chart with arbitrary data. This chart was made using the Recharts library for React.
            </p>
        </div>
    )
}