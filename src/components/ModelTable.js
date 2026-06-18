
function ModelTable({models}) {
    return (
        <div style={{marginTop:'160px', background:'#b2c0db', borderRadius:'12px', overflow:'hidden'}}>
            <table style={{width:'100%', borderCollapse:'collapse'}}>
                <thead>
                    <tr style={{background:'#8c9cbb'}}>
                        <th style={{padding:'10px', textAlign:'left'}}>Model</th>
                        <th style={{padding:'10px', textAlign:'left'}}>Type</th>
                        <th style={{padding:'10px', textAlign:'left'}}>Accuracy</th>
                        <th style={{padding:'10px', textAlign:'left'}}>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {models.map(m=> (
                        <tr key={m.id} className="table-row-hover" style={{borderBottom:'1px solid #eee'}}>
                            <td style={{padding:'10px'}}>{m.name}</td>
                            <td style={{padding:'10px'}}>{m.type}</td>
                            <td style={{padding:'10px'}}>{m.accuracy}</td>
                            <td style={{padding:'10px'}}>
                                {m.accuracy >= 90
                                ? <span style={{background:'#E1F5EE',color:'#085041',padding:'2px 10px',borderRadius:'20px', fontSize:'12px'}}>High</span>
                                : <span style={{background:'#FAECE7',color:'#712B13',padding:'2px 10px',borderRadius:'20px', fontSize:'12px'}}>Low</span>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        );
}
export default ModelTable;



// function ModelTable ({models}) {
//     return (
//         <table style={{width:'100%', borderCollapse:'collapse', marginTop:'160px'}}>
//             <thead>
//                 <tr style={{background:'#f5f5f5'}}>
//                     <th style={{padding:'10px', textAlign:'left'}}>Model</th>
//                     <th style={{padding:'10px', textAlign:'left'}}>Type</th>
//                     <th style={{padding:'10px', textAlign:'left'}}>Accuracy</th>
//                     <th style={{padding:'10px', textAlign:'left'}}>Grade</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {models.map(m=> (
//                     <tr key={m.id} style={{borderBottom:'1px solid #eee'}}>
//                         <td style={{padding:'10px'}}>{m.name}</td>
//                         <td style={{padding:'10px'}}>{m.type}</td>
//                         <td style={{padding:'10px'}}>{m.accuracy}%</td>
//                         <td style={{padding:'10px'}}>
//                             {m.accuracy >=90
//                                ? <span style={{background:'#E1F5EE', color:'#085041', padding:'2px 10px', borderRadius:'20px', fontSize:'12px'}}>High</span>
//                                : < span style={{background:'#FAECE7', color:'#712B13', padding:'2px 10px', borderRadius:'20px', fontSize:'12px'}}>Low</span>
//                             }
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>

//         </table>
//     );
// }
// export default ModelTable;