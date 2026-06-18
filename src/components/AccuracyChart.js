import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function AccuracyChart({models}) {
    return(
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={models}>
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip/>
                <Bar dataKey="accuracy" fill='#2f3043'/>
            </BarChart>
        </ResponsiveContainer>
    );
}
export default AccuracyChart;

