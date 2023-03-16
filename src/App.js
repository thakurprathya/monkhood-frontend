import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Features from "./components/Features";
import Collection from "./components/Collection";
import Testimonial from "./components/Testimonial";

function App() {
    const [page, setPage] = useState('flat');

    return (
        <div>
            {/* <Navbar /> */}
            <Header page={page} setPage={setPage} />
            <Services />
            <Features />
            <Collection page={page} />
            <Testimonial />
        </div>
    );
}

export default App;
