import '../App.css'

function StatCard({label,value}){
    return (
        <div className="bg-blue-200 rounded-xl shadow p-5 min-w-[140px">
            <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                {label}
            </p>
            <h2 className="text-2xl text-gray-900 font-bold">
                {value}
            </h2>
        </div>
    );
}
export default StatCard;

// import '../App.css';
// function StatCard({label, value}){
//     return (
//         <div className="bg-blue-200 rounded-xl shadow p-5 min-w-[140px]">
//             <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">
//                 {label}
//             </p>
//             <h2 className="text-2xl font-bold text-gray-900">
//                 {value}
//             </h2>
//         </div>
//     );
// }

// export default StatCard;

// Day 9
// tailwind
// import '../App.css';
// function StatCard({label, value}){
//     return (
//         <div className="bg-white rounded-xl shadow p-5 min-w-[140px]">
//             <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
//                 {label}
//             </p>
//             <h2 className="text-2xl font-bold text-gray-900">
//                 {value}
//             </h2>
//         </div>
//     );
// }

// export default StatCard;

// import '../App.css';

// function StatCard({ label, value }) {
//   return (
//     <div className="stat-card">
//       <p className="stat-label">{label}</p>
//       <h2 className="stat-value">{value}</h2>
//     </div>
//   );
// }

// export default StatCard;

// function StatCard({label,value}) {
//     return (
//         <div style={{border:'1px #ccc', padding:'16px'}}>
//             <p style={{margin:'0',fontSize:'12px', color:'#666'}}>{label}</p>
//             <h2 style={{margin:'4px 00'}}>{value}</h2>
//         </div>

//     );
// }
// export default StatCard;

// function StatCard({label, value}) {
//     return (
//         <div style={{border:'1px solid #ccc', padding:'16px'}}>
//             <p>{label}</p>
//             <h2>{value}</h2>
//         </div>
//     );
// }
// export default StatCard;