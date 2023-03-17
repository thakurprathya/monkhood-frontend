import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Features from "./components/Features";
import Collection from "./components/Collection";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import TopSearch from "./components/TopSearch";

function App() {
    const [page, setPage] = useState('flat');
    // const [location, setLocation] = useState({latitude: null, longitude: null});
    const [locAccess, setLocAccess] = useState(true);

    useEffect(()=>{
        document.body.classList.add('bg-[#f5f5f5]');
        document.body.classList.add('font-poppins');
        document.querySelectorAll('*[id*="fav1"] > svg > path').forEach((el) => el.classList.add('stroke-white'));

        //asking for user location
        // try {
        //     navigator.geolocation.getCurrentPosition((position) => {
        //         console.log(position);  
        //         setLocation({latitude: position.coords.latitude, longitude: position.coords.longitude}); 
        //         setLocAccess(true); 
        //     });
        //     console.log(location, locAccess);
        // } catch (error) {
        //     console.log('Could not get user location:', error.message);
        // }
    },[])

    return (
        <div>
            <Navbar />
            <Header page={page} setPage={setPage} />
            <Services />
            {locAccess ? <TopSearch/> : ""}
            <Features />
            <Collection page={page} />
            <Testimonial />
            <Footer/>
        </div>
    );
}

export default App;
