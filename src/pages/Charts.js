// import AccuracyChart from '../components/AccuracyChart';
// import {models} from '../data/models';

// function Charts() {
//     return (
//         <div>
//             <h1 className="text-2xl font-bold mb-4">Charts</h1>
//             <AccuracyChart models={models}/>
//         </div>
//     );
// }
// export default Charts;

import AccuracyChart from '../components/AccuracyChart'
import {models} from '../data/models';

function Charts() {
    return(
        <div>
            <h1 className=''>Charts</h1>
            <AccuracyChart models={models}/>
        </div>
    );
}
export default Charts;