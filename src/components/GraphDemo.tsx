import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { graphDemoData } from "../constants/chartdata";

export default function GraphDemo () {
    return (
        <LineChart width={800} height={400} data={graphDemoData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type='monotone' dataKey='y' stroke='#8884d8' />
            <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
            <XAxis dataKey='x' />
            <YAxis />
            <Tooltip />
        </LineChart>
    )
}