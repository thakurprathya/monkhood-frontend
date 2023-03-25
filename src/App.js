import { useState, useEffect } from "react";

import Login from "./pages/Login";
import Main from "./pages/Main";
import OnBoarding from "./pages/OnBoarding";

function App() {
    const [User, setUser] = useState(null);
    const [location, setLocation] = useState({latitude: null, longitude: null});
    const [locAccess, setLocAccess] = useState(false);
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
        <div>
            {!User ?
                <Login setUser={setUser} setOnBoard={setOnBoard} />
            :
                <>
                    {onBoard ?
                        <OnBoarding setOnBoard={setOnBoard} />
                    :
                        <Main locAccess={locAccess} />
                    }
                </>
            }
        </div>
    );
}

export default App;
