import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
import OnBoarding from "./pages/OnBoarding";
import Listing from "./pages/Listing";

function App() {
    const [User, setUser] = useState({});
    const [location, setLocation] = useState({latitude: null, longitude: null});
    const [locAccess, setLocAccess] = useState(true);
    const [onBoard, setOnBoard] = useState(false);

    useEffect(()=>{
        document.body.classList.add('bg-[#f5f5f5]');
        document.body.classList.add('font-poppins');
        document.getElementById('root').classList.add('overflow-hidden');

        //asking for user location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const Latitude = position.coords.latitude;
                    const Longitude = position.coords.longitude;
                    setLocation({latitude: Latitude, longitude: Longitude});
                    setLocAccess(true); 
                },
                (error) => { console.log(error); }
            );
        } else {
            console.log('Geolocation not supported for browser');
        }
        // eslint-disable-next-line
    },[])

    console.log(location);
    return (
        <Router>
            {!User ?
                <Login setUser={setUser} setOnBoard={setOnBoard} />
            :
                <>
                    {onBoard ?
                        <OnBoarding setOnBoard={setOnBoard} />
                    :
                        <Routes>
                            <Route path='/' element={<Main locAccess={locAccess} />} />
                            <Route path='/listing/:id' element={<Listing />} />
                        </Routes>
                    }
                </>
            }
        </Router>
    );
}

export default App;
