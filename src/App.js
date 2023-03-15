import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
    const [page, setPage] = useState('flat');

    return (
        <div>
            <Navbar />
            <Header page={page} setPage={setPage}/>
        </div>
    );
}

export default App;
