
import StatCard from "../components/StatCard";
import { models } from "../data/models";

function Overview() {
    const avgAccuracy= (models.reduce((sum,m)=> sum+m.accuracy,0)/models.length).toFixed(1)
    const bestModel= models.reduce((best,m)=> m.accuracy>best.accuracy ? m: best).name;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Overview</h1>
            <div className="flex flex-wrap gap-4">
                <StatCard label="Total Models" value={models.length}/>
                <StatCard label="Avg Accuracy" value={avgAccuracy+'%'}/>
                <StatCard label="Best Model" value={bestModel}/>
            </div>
        </div>
    );
}
export default Overview;