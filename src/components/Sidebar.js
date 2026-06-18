

import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <nav className="w-40 bg-gray-700 h-screen p-4 flex flex-col gap-2">
            <h2 className="font-bold mb-4 text-white">ML Dashboard</h2>
            <Link to="/" className="px-3 py-2 rounded text-white hover:bg-gray-500">
              Overview
            </Link>
            <Link to="/models" className="px-3 py-2 rounded text-white hover:bg-gray-500">
              Models
            </Link>
            <Link to="/charts" className="px-3 py-2 rounded text-white hover:bg-gray-500">
              Charts
            </Link>
        </nav>
    );
}
export default Sidebar;