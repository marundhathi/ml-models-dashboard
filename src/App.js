// Day 13


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Overview from "./pages/Overview";
import Models from "./pages/Models";
import Charts from "./pages/Charts";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar/>
        <main className="flex-1 p-6 bg-blue-100 text-black min-h-screen">
          <Routes>
            <Route path="/" element={<Overview/>}/>
            <Route path="/models" element={<Models/>}/>
            <Route path="/charts" element={<Charts/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;

// Day 12

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function Overview() {
//   return<h1>Overview page</h1>
// }

// function Models() {
//   return<h1>Models page</h1>
// }

// function Charts() {
//   return<h1>Charts page</h1>
// }

// function Sidebar() {
//   return(
//     <nav className="w-40 bg-blue-300 h-screen p-4 flex flex-col gap-2">
//       <h2 className="font-bold mb-4">ML Dashboard</h2>
//       <Link to="/" className="px-3 py-2 rounded text-black hover:bg-blue-200">
//         Overview
//       </Link>
//       <Link to="/models" className="px-3 py-2 rounded text-black hover:bg-blue-200">
//         Models
//       </Link>
//       <Link to="/charts" className="px-3 py-2 rounded text-black hover:bg-blue-200">
//         Charts
//       </Link>
//     </nav>
//   );
// }
// function App() {
//   return(
//     <BrowserRouter>
//       <div className="flex">
//         <Sidebar/>
//         <main className="flex-1 p-6 bg-blue-100 font-bold min-h-screen">
//           <Routes>
//             <Route path="/" element={<Overview/>}/>
//             <Route path="/models" element={<Models/>}/>
//             <Route path="/charts" element={<Charts/>}/>
//           </Routes>
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// }
// export default App;

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function Overview() {
//   return <h1>Overview page</h1>
// }

// function Models() {
//   return <h1>Model page</h1>
// }

// function Charts() {
//   return <h1>Charts page</h1>
// }
// function Sidebar() {
//   return (
//     <nav className="w-40 bg-blue-300 h-screen p-4 flex flex-col gap-2">
//       <h2 className="font-bold mb-4 text-black">ML Dashboard</h2>
//       <Link to="/" className="px-3 py-2 rounded text-black hover:bg-blue-200">
//          Overview
//       </Link>
//       <Link to="/models" className="px-3 py-2 rounded text-black hover:bg-blue-200">
//          Models
//       </Link>
//       <Link to="/charts" className="px-3 py-2 rounded text-black hover:bg-blue-200">
//          Charts
//       </Link>
//     </nav>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//     <div className="flex">
//       <Sidebar/>
//       <main className="flex-1 p-6 bg-blue-100 font-bold text-black min-h-screen">
//         <Routes>
//           <Route path="/" element={<Overview/>}/>
//           <Route path="/models" element={<Models/>}/>
//           <Route path="/charts" element={<Charts/>}/>
//         </Routes>
//       </main>
//     </div>
//     </BrowserRouter>
//   );
// }
// export default App;

// Day 11

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function Overview() {
//   return <h1>Overview page</h1>
// }
// function Models() {
//   return <h1>Models page</h1>
// }

// function App() {
//   return (
//     <BrowserRouter>
//     <nav style={{display:'flex', gap:'16px', padding:'16px'}}>
//       <Link to="/">Overview</Link>
//       <Link to="/models">Models</Link>
//     </nav>

//     <Routes>
//       <Route path="/" element={<Overview/>}/>
//       <Route path="/models" element={<Models/>}/>
//     </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;

// Day 10

// import { useState, useEffect } from "react";

// function App() {
//   const [posts, setPosts]=useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(()=> {
//     fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//       .then(res=>res.json())
//       .then(data => {
//         setPosts(data);
//         setLoading(false);
//       })
//       .catch(err=> {
//         setError('Failed to load posts');
//         setLoading(false);
//       });
//   },[]);

//   if(loading) return <p>Loading posts...</p>;
//   if(error) return <p style={{color:'red'}}>{error}</p>;

//   return (
//     <div classNmae="p-6">
//       <h1>Live Posts</h1>
//       {posts.map(post => (
//         <div key={post.id} className="bg-white rounded-xl shadow p-4 mb-2">
//           <h3 className="font-bold">{post.title}</h3>
//           <p className="text-gray-500 text-sm">{post.body}</p>
//           </div>
//         ))}
//     </div>
//   );
// }

// Day 9

// import { useState } from "react";
// import './App.css';
// import StatCard from "./components/StatCard";
// import ModelTable from './components/ModelTable';

// const models = [
//   {id:1, name:'Random Forest', type:'Classification', accuracy:92},
//   {id:2, name:'Logistic Regression', type:'Classification', accuracy:85},
//   {id:3, name:'Linear Regression', type:'Regression', accuracy:78},
//   {id:4, name:'SVM', type:'Classification', accuracy:89},
//   {id:5, name:'Neural Net', type:'Classification', accuracy:96},
//   {id:6, name:'Decision Tree', type:'Regression', accuracy:81},
// ];

// function App() {
//   const [query, setQuery] = useState('');
//   const[typeFilter, setTypeFilter] = useState('All');

//   const filtered = models
//     .filter(m=> typeFilter ==='All'||m.type === typeFilter)
//     .filter(m=> m.name.toLowerCase().includes(query.toLowerCase()));

//   const avgAccuracy = (models.reduce((sum, m)=> sum+m.accuracy,0)/models.length).toFixed(1);
//   const bestModel = models.reduce((best, m)=> m.accuracy > best.accuracy ? m: best).name;

//   return (
//     <div style={{padding:'24px', fontFamily:'sans-serif'}}>
//       <h1>ML Models Dashboard</h1>

//       <div style={{display:'flex', flexWrap:'wrap', gap:'16px'}}>
//         <StatCard label="Total Models" value={models.length}/>
//         <StatCard label="Avg Accuracy" value={avgAccuracy + '%'}/>
//         <StatCard label="Best Model" value={bestModel}/>
//       </div>
      

//       <input
//          value={query}
//          onChange={e => setQuery(e.target.value)}
//          placeholder="Search Models..."
//          style={{padding:'8px', marginRight:'8px', marginTop:'16px'}}
//       />

//       <select
//          value={typeFilter}
//          onChange={e=> setTypeFilter(e.target.value)}
//          style={{padding:'8px'}}
//       >
//         <option>All</option>
//         <option>Classification</option>
//         <option>Regression</option>
//       </select>

//       <p>Showing {filtered.length} of {models.length} models</p>
//       <ModelTable models={filtered}/>
//      </div>
//   );
// }
// export default App;

// Day 8
// PIE CHART

// import { PieChart,Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// const modelTypes = [
//   {name:'Classification', value:4},
//   {name:'Regression', value:2},
// ];
// const COLORS=['#534AB7','#0F6E56'];

// function App() {
//   return(
//     <ResponsiveContainer width="100%" height={300}>
//       <PieChart>
//         <Pie data={modelTypes} datakey="value" nameKey="name" label>
//           {modelTypes.map((entry, index) => (
//             <Cell key={index} fill={COLORS[index]}/>
//           ))}
//         </Pie>
//         <Tooltip/>
//       </PieChart>
//     </ResponsiveContainer>
//   );
// }
// export default App;

// LINE CHART

// import { LineChart, Line, XAxis,YAxis, Tooltip, ResponsiveContainer } from "recharts";

// const trainingHistory=[
//   {epoch:1, accuracy:60},
//   {epoch:2, accuracy:74},
//   {epoch:3, accuracy:82},
//   {epoch:4, accuracy:88},
//   {epoch:5, accuracy:93},
// ];
// function App() {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <LineChart data={trainingHistory}>
//         <XAxis dataKey="epoch"/>
//         <YAxis/>
//         <Tooltip/>
//         <Line type="monotone" datakey="accuracy" stroke="#0F6E56"/>
//       </LineChart>
//     </ResponsiveContainer>

//   );
// }
// export default App;
// BAR CHART
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// const models = [
//     {name:'Random Forest', accuracy:92},
//     {name:'Logistic Regression', accuracy: 85},
//     {name:'SVM', accuracy:89},
//     {name:'Neural Net', accuracy:96},
// ];
// function App() {
//     return (
//         <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={models}>
//                 <XAxis datakey="name"/>
//                 <YAxis/>
//                 <Tooltip/>
//                 <Bar datakey="accuracy" fill="#534AB7"/>
//             </BarChart>
//         </ResponsiveContainer>
//     );
// }
// export default App;

// import { useState } from "react";
// import StatCard from './components/StatCard';
// import ModelTable from './components/ModelTable';

// const models = [
//   {id:1, name:'Random Forest',  type:'Classification', accuracy:92},
//   {id:2, name:'Logistic Regression',  type:'Classification', accuracy:85},
//   {id:3, name:'Linear Regression', type:'Regression', accuracy:78},
//   {id:4, name:'SVM', type:'Classification', accuracy:89},
//   {id:5, name:'Neural Net', type:'Classification', accuracy:96},
//   {id:6, name:'Decision Tree', type:'Regression', accuracy:81}
// ];
// function App() {
//   const [query,setQuery]=useState('');
//   const[typeFilter, setTypeFilter]= useState('All');

//   const filtered=models
//      .filter(m=> typeFilter=== 'All' || m.type=== typeFilter)
//      .filter(m=> m.name.toLowerCase().includes(query.toLowerCase()))

//   const avgAccuracy = (models.reduce((sum,m)=> sum+m.accuracy,0)/models.length).toFixed(1)
//   const bestModel = models.reduce((best,m)=> m.accuracy>best.accuracy ? m:best).name

//   return (
//   <div style={{padding:'24px', fontFamily:'sans-serif'}}>
//     <h1>ML Models Dashboard</h1>
//     <div style={{display:'flex', flexWrap:'wrap'}}>
//       <StatCard label="Total Models" value={models.length}/>
//       <StatCard label="Avg Accuracy" value={avgAccuracy +'%'}/>
//       <StatCard label="Best Model" value={bestModel}/>
//     </div>

//     <input
//        value={query}
//        onChange={e=>setQuery(e.target.value)}
//        placeholder="Search models..."
//        style={{padding:'8px', marginRight:'8px', marginTop:'16px'}}
//     />

//     <select
//        value={typeFilter}
//        onChange={e=>setTypeFilter(e.target.value)}
//        style={{padding:'8px'}}
//     >
//        <option>All</option>
//        <option>Classification</option>
//        <option>Regression</option>
//     </select>

//     <p>Showing {filtered.length} of {models.length}</p>
//     <ModelTable models={filtered}/>
//   </div>
//   );
// }
// export default App;


// Day 7

// import { useState } from "react";
// import StatCard from './components/StatCard';
// import ModelTable from './components/ModelTable';

// const models = [
//   {id:1, name:'Random Forest', type:'Classification', accuracy:92},
//   {id:2, name:'Logistic Regression', type:'Classification', accuracy:85},
//   {id:3, name:'Linear Regression', type:'Regression', accuracy:78},
//   {id:4, name:'SVM', type:'Classification', accuracy:89},
//   {id:5, name:'Neural Net', type:'Classification', accuracy:96},
//   {id:6, name:'Decision Tree', type:'Regression', accuracy:81},
// ];

// function App() {
//   const[query, setQuery] = useState('');
//   const[typeFilter, setTypeFilter] = useState('All');

//   const filtered = models
//    .filter(m=> typeFilter === 'All' || m.type === typeFilter)
//    .filter(m => m.name.toLowerCase().includes(query.toLowerCase()));

//   const avgAccuracy = (models.reduce((sum,m) => sum + m.accuracy, 0)/models.length).toFixed(1);
//   const bestModel = models.reduce((best, m) => m.accuracy > best.accuracy ? m : best).name;
  
//   return(
//     <div style={{padding:'24px', fontFamily:'sans-serif'}}>
//       <h1> ML Models Dashboard</h1>

//       <div style={{display:'flex', flexWrap:'wrap'}}>
//         <StatCard label="Total Models" value={models.length}/>
//         <StatCard label="Avg Accuracy" value={avgAccuracy+ '%'}/>
//         <StatCard label="Best Model" value={bestModel}/>
//       </div>

//       <input
//         value={query}
//         onChange={e => setQuery(e.target.value)}
//         placeholder="Search Models..."
//         style={{padding:'8px', marginRight:'8px', marginTop:'16px'}}
//       />

//       <select
//         value={typeFilter}
//         onChange={e => setTypeFilter(e.target.value)}
//         style={{padding:'8px'}}
//       >
//         <option>All</option>
//         <option>Classification</option>
//         <option>Regression</option>
//       </select>

//       <p>Showing {filtered.length} of {models.length} models</p>
//       <ModelTable models={filtered}/>
//     </div>
//   );
// }

// export default App;

// Day 6

// import {useState} from 'react';
// import StatCard from './components/StatCard';
// import DataTable from './components/DataTable';

// const datasets = [
//   {id:1, name:'Iris', rows:150, task:'Classification'},
//   {id:2, name:'Titanic', rows:891, task:'Classification'},
//   {id:3, name:'Boston', rows:506, task:'Regression'},
// ];

// function App() {
//   const [query, setQuery] = useState('');
//   const filtered=datasets.filter(d=>
//     d.name.toLowerCase().includes(query.toLowerCase())
//   );
//   return (
//     <div>
//       <h1>My Dashboard</h1>
//       <div style={{display:'flex'}}>
//         <StatCard label="Total Datasets" value={datasets.length}/>
//         <StatCard label="Showing" value={filtered.length}/>
//       </div>
//       <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..."/>
//       <DataTable datasets={filtered}/>
//       </div>
// // The full flow: user types → onChange fires → 
// // setQuery updates state → React re-renders → filtered recalculates 
// // → DataTable updates. All instant.
//   );
// }
// export default App;

// index.js
// → loads App.js and puts it on screen
// App.js
// → sends label+value to StatCard, sends filtered array to DataTable
// StatCard
// → receives props, draws a box, done. Sends nothing back.
// DataTable
// → receives array, draws table rows, done. Sends nothing back.



// function StatCard({label, value}) {
//   return (
//     <div style={{border:'1px solid #ccc', padding:'12px', margin:'8px'}}>
//       <p style={{margin:0, fontSize:'12px', color:'#666'}}>{label}</p>   
//       <h2 style={{margin:0}}>{value}</h2>   
//     </div>
//   );
// }
// export default StatCard;

// import {useState} from 'react';
// import StatCard from './components/StatCard';
// // dot and slash means same folder
// function App() {
//   return (
//     <div>
//       <StatCard label="Mean" value="42.3"/>
//       <StatCard lebl="Std" value="8.1"/>
//       <StatCard label="Median" value="40.0"/>
//     </div>
//   );
// }
// export default App;


// Day 5- useEffect- Data is fetched from a real API when the page loads. 
// Fresh every time. No hardcoding needed.

// import {useState, useEffect} from 'react';

// function App() {
//   const[countries, setCountries] = useState([]);
//   const[loading, setLoading] = useState(true);
//   const[error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/region/asia')
//       .then(res => res.json())
//       .then(data => {
//         setCountries(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError('Failed to load data');
//         setLoading(false);
//       });
  
//   },[]);
//   if(loading) return <p>Loading...</p>;
//   if(error) return <p style={{color:'red'}}>{error} </p>
//   return (
//     <div>
//       {countries.map(c=> (
//         <p key={c.cca3}>
//           {c.name.common} - {c.population.toLocaleString()}
//         </p>
//       ))}
//     </div>
//   );
// }
// export default App;

// Day 4- events and forms

// import {useState} from 'react';
// const datasets = [
//   {id: 1, name:'Iris', task:'Classification'},
//   {id: 2, name:'Titanic', task:'Classification'},
//   {id: 3, name:'Boston', task:'Regression'},
//   {id: 4, name:'MNIST', task:'Classification'},
// ];

// function App() {
//   const [query,setQuery] = useState('');
//   const[taskFilter, setTaskFilter] = useState('All');


//   const filtered = datasets
//      .filter(d => taskFilter === 'All' || d.task === taskFilter)
//      .filter(d => d.name.toLowerCase().includes(query.toLowerCase()));

//   return (
//     <div>
//       <h1>Dataset Search</h1>
//       <input
//         value={query}
//         onChange={e => setQuery(e.target.value)}
//         placeholder="Search datasets..."
//       />
  

//       <select
//         value={taskFilter}
//         onChange={e => setTaskFilter(e.target.value)}
//       >
//         <option>All</option>
//         <option>Classification</option>
//         <option>Regression</option>
//       </select>

//       <p>{filtered.length} results</p>
//       {filtered.length === 0
//         ? <p>No results found</p>
//         : filtered.map(d => (
//           <p key={d.id}>{d.name} - {d.task}</p>
//         ))
//       }
//     </div>
//   );
// }

// export default App;


// DAY 3 - .map()- works like function, just like all items are passed into a function.

// const models = [
//   {id: 1, name:'Random Forest', accuracy:92},
//   {id: 2, name:'Logistic Regression', accuracy:85},
//   {id: 3, name:'SVM', accuracy:89},
//   {id: 4, name:'Neural Net', accuracy:96},
// ];

// function App() {
//   return (
//     <div>
//       <h1>Model Comparison</h1>
//       {models.map(m => (
//         <div key={m.id} style={{border: '1px solid #ccc', padding:'10px', marginBottom: '8px'}}>
//           <p>{m.name}</p>
//           <p>Accuracy: {m.accuracy}%</p>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default App();

// const datasets = [
//   {id: 1, name: 'Iris', rows:150, task:'Classification'},
//   {id: 2, name: 'Titanic', rows:891, task:'Classification'},
//   {id: 3, name:'Boston', rows: 506, task:'Regression'},
//   {id: 4, name:'MNIST', rows: 70000, task:'Classification'},

// ];
// function App() {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Rows</th>
//           <th>task</th>
//           <th>Size</th>
//         </tr>
//       </thead>
//       <tbody>
//         {datasets.map(d => (
//           <tr key={d.id}>
//             <td>{d.name}</td>
//             <td>{d.rows}</td>
//             <td>{d.task}</td>
//             <td>
//               {d.rows > 10000
//                 ? <span style={{color: 'red'}}>Large</span>
//                 : <span style={{color: 'green'}}>Small</span>
//               }
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
// export default App;

// day 2 - useState - do this again tomorrow


// import {useState} from 'react';

// const datasets = {
//     iris: {mean: '5.84', std: '0.83', rows:'150'},
//     titanic: {mean: '29.70', std: '0.83', rows:'891'},
//     boston: {mean: '22.50', std: '9.20', rows: '506'},
// };

// function Counter() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <p>Samples added: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Add sample</button>
//             <button onClick={() => setCount(0)}>Reset</button>
//         </div>
//     );
// }
// function App() {
//     const [selected, setSelected] = useState('iris');
//     const stats = datasets[selected];

//     return (
//         <div>
//             <h1>My Dashboard</h1>
//             <Counter/>

//             <button onClick={() => setSelected('iris')}>Iris</button>
//             <button onClick={() => setSelected('titanic')}>Titanic</button>
//             <button onClick={() => setSelected('boston')}>Boston</button>

//             <p>Dataset: {selected}</p>
//             <p>Mean: {stats.mean}</p>
//             <p>Std: {stats.std}</p>
//             <p>Rows: {stats.rows}</p>
//         </div>
//     );
// }

// export default App;


// function App() {
//   const [selected, setSelected] = useState('iris');
//   const stats = datasets[selected];

//   return(
//     <div>
//       <h1>My Dashboard</h1>
//       <Counter />
//       <button onClick={() => setSelected('iris')}>Iris</button>
//       <button onClick={() => setSelected('titanic')}>Titanic</button>
//       <button onClick={() => setSelected('boston')}>Boston</button>

//       <p>Dataset: {selected}</p>
//       <p>Mean: {stats.mean}</p>
//       <p>Std: {stats.std}</p>
//       <p>Rows: {stats.rows}</p>
//     </div>
//   );
// }
// export default App;





// Day 1- Beginner

// function StatCard() {
//   return (
//     <div style={{ border: '1px solid #ccc', padding: '16px'}}>
//       <p>Mean</p>
//       <h2>42.3</h2>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>My Data Dashboard</h1>
//       <StatCard />
//       <StatCard />
//     </div>

//   );
// }
// export default App;



// function StatCard({ label, value}) {
//   return (
//     <div style={{ border: '1px solid #ccc', padding: '16px'}}>
//       <p>{label}</p>
//       <h2>{value}</h2>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <StatCard label="Mean" value="42.3"/>
//       <StatCard label="Min" value="18.0"/>
//       <StatCard label="Max" value="91.5"/>
//     </div>
//   );
// }
// export default App;






// function StatCard( {label,value}) {
//   return(
//     <div style={{border: '1px solid #ccc', padding:'16px'}}>
//       <p>{label}</p>
//       <h3>{value}</h3>

//     </div>
  
//   );
// }

// function App() {
//   return (
//     <div>
//       <StatCard label="stdev" value="30"/>
//       <StatCard label="correlation" value="10"/>
//       <StatCard label="kurtosis" value="1"/>
//     </div>
//   );
// }
// export default App;