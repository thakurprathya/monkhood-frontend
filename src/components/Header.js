import React, { useState } from 'react';

import flat from '../assets/flat.jpg';
import pg from '../assets/pg.jpg';

import ViewHeadlineOutlinedIcon from '@mui/icons-material/ViewHeadlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => {
    const [page, setPage] = useState('flat');
    const [city, setCity] = useState('Delhi');
    const [dropbox, setDropbox] = useState(false);

    const HandlePageChange = (event)=>{
        document.getElementById('flat').classList.remove('selected-btn');
        document.getElementById('pg').classList.remove('selected-btn');
        document.getElementById(event.target.id).classList.add('selected-btn');
        setPage(event.target.id);
    }
    const HandleCity = (event)=>{
        setCity(event.target.value);
        setDropbox(false);
    }

    return (
        <div className="h-[286px]">
            <img src={(page==='flat')?flat:pg}/>
            <div className='h-[286px] absolute inset-0 bg-black bg-opacity-50'>
                <div className='flex justify-between items-center'>
                    <ViewHeadlineOutlinedIcon sx={{ color:'white', fontSize: 30 }} className="mx-3 cursor-pointer"/>
                    <button className='mt-3 mx-3 text-xs text-white bg-white px-3 py-1 rounded-full bg-opacity-10 backdrop-filter backdrop-blur-sm shadow'>List Property</button>
                </div>
                <div className='text-center'>
                    <p className='mt-3 text-white text-2xl'>Find your next student home</p>
                    <p className='mt-0 text-gray-200 text-sm mb-10'>A broker free student living solution</p>
                    <div className='mb-1 flex items-center justify-center'>
                        <button id='flat' className='head-btn selected-btn' onClick={HandlePageChange}>Flats</button>
                        <button id='pg' className='head-btn' onClick={HandlePageChange}>PG Homes</button>
                    </div>
                    <div className='mx-9 flex items-center justify-center rounded-lg bg-white py-4 px-3 bg-opacity-10 backdrop-filter backdrop-blur-sm shadow'>
                        <div className='border-r-2 border-white border-solid'>
                            <LocationOnIcon sx={{ color:'orange', fontSize: 22 }}/>
                            <div className="inline-block mr-3 ml-1 text-white text-sm">
                                <button onClick={()=>setDropbox(true)}>Delhi</button>
                                {dropbox?
                                    <div className="absolute z-1 left-4 w-24 p-2 mt-2 mx-2 bg-white rounded-md shadow-xlg text-left">
                                        <button id='Delhi' className="block p-2 py-1 text-gray-800" onClick={HandleCity}>Delhi</button>
                                        <button id='Mumbai' className="block p-2 py-1 text-gray-800" onClick={HandleCity}>Mumbai</button>
                                        <button id='Hyderabad' className="block p-2 py-1 text-gray-800" onClick={HandleCity}>Hyderabad</button>
                                        <button id='Chennai' className="block p-2 py-1 text-gray-800" onClick={HandleCity}>Chennai</button>
                                    </div>
                                : ""}
                            </div>
                        </div>
                        <div className='mx-2'>
                            <SearchOutlinedIcon sx={{ color:'orange', fontSize: 25 }}/>
                            <input type="text" placeholder='Search by College' className='bg-transparent mx-1 text-white text-sm outline-none placeholder:text-gray-200 placeholder:mx-1'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
