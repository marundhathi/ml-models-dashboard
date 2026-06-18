import { useState } from "react";
import ModelTable from "../components/ModelTable";
import { models } from "../data/models";

function Models() {
    const [query, setQuery] = useState('');
    const [typeFilter, setTypeFilter] = useState('All');

    const filtered = models
      .filter(m=> typeFilter === 'All'||m.type === typeFilter)
      .filter(m=> m.name.toLowerCase().includes(query.toLowerCase()));

    return(
        <div>
            <h1 className="text-2xl font-bold mb-4">Models</h1>
            <input
              value={query}
              onChange={e=> setQuery(e.target.value)}
              placeholder="Search models..."
              className="border rounded px-3 py-2 mr-2"
            />
            <select
              value={typeFilter}
              onChange={e=>setTypeFilter(e.target.value)}
              className="bg-gray-600 text-white border rounded px-3 py-2"
            >
              <option>All</option>
              <option>Classification</option>
              <option>Regression</option>
            </select>
            <p className="my-2 text-sm">Showing {filtered.length} of {models.length} models</p>
            <ModelTable models={filtered}/>
        </div>
    );
}
export default Models;


