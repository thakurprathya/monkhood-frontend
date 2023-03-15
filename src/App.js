import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Features from "./components/Features";

function App() {
    const [page, setPage] = useState('flat');

    return (
        <div>
            <Navbar />
            <Header page={page} setPage={setPage} />
            <Services />
            <Features />
        </div>
    );
}

export default App;
