import React, { useState } from 'react';

import FloatingCard from './FloatingCard';

import flat from '../assets/flat.png';
import pg from '../assets/pg.png';
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { ReactComponent as LocationIcon } from "../assets/location.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as ResidenceIcon } from "../assets/residence.svg";
import { ReactComponent as CollegeIcon } from "../assets/college.svg";
import { ReactComponent as ClientIcon } from "../assets/client.svg";

const Header = ({page, setPage}) => {
    const [city, setCity] = useState('Delhi');
    const [dropbox, setDropbox] = useState(false);

    const HandlePageChange = (event)=>{
        document.getElementById('flat').classList.remove('selected-btn');
        document.getElementById('pg').classList.remove('selected-btn');
        document.getElementById(event.target.id).classList.add('selected-btn');
        setPage(event.target.id);
    }
    const HandleCity = (event)=>{
        setCity(event.target.id);
        setDropbox(false);
    }

    return (
        <div className="h-[286px]">
            <img src={(page==='flat')?flat:pg} alt="head-img" className='min-w-[100vw] h-[232px]'/>

            <div className='h-[234px] absolute inset-0 bg-black bg-opacity-50'>
                <div className='flex justify-between items-center'>
                    <MenuIcon className="mx-5 cursor-pointer"/>
                    <button className='mt-3 mx-5 text-[9px] text-white bg-white px-3 py-1 rounded-[13px] bg-opacity-20 backdrop-filter backdrop-blur-sm shadow'>List Property</button>
                </div>

                <div className='text-center'>
                    <p className='mt-3 text-white text-[18px]'>Find your next student home</p>
                    <p className='mt-0 text-gray-200 text-[10px] mb-8'>A broker free student living solution</p>

                    <div className='mb-1 flex items-center justify-center'>
                        <button id='flat' className='head-btn selected-btn' onClick={HandlePageChange}>Flats</button>
                        <button id='pg' className='head-btn' onClick={HandlePageChange}>PG Homes</button>
                    </div>

                    <div className='w-[329px] sm-360:w-[300px] h-[40px] relative mx-auto flex items-center justify-start text-[12px] rounded-[4px] bg-white py-4 px-3 bg-opacity-20 backdrop-filter backdrop-blur-sm shadow'>
                        <div className='flex items-center border-r-2 border-white border-solid'>
                            <LocationIcon/>
                            <div className="inline-block mx-3 text-[#FBFAFA]">
                                <button onClick={()=>setDropbox(true)}>{city}</button>
                                
                                {/* card box shifted here to maintain dropbox overlay */}
                                <div className='flex absolute inset-0 z-10 left-0 top-[60px]'>
                                    <FloatingCard svg={<ResidenceIcon/>} value={450} label='Residences' />
                                    <FloatingCard svg={<CollegeIcon/>} value={120} label='Colleges' />
                                    <FloatingCard svg={<ClientIcon/>} value={200} label='Happy clients' />
                                </div>

                                {dropbox?
                                    <div className="absolute z-20 left-0 w-24 p-2 mt-2 mx-2 bg-white rounded-md shadow-xlg text-left">
                                        <button id='Delhi' className="block p-2 py-1 text-gray-800" onClick={HandleCity}>Delhi</button>
                                        <button id='Mumbai' className="block p-2 py-1 text-gray-800" onClick={HandleCity}>Mumbai</button>
                                        <button id='Hyderabad' className="block p-2 py-1 text-gray-800" onClick={HandleCity}>Hyderabad</button>
                                        <button id='Chennai' className="block p-2 py-1 text-gray-800" onClick={HandleCity}>Chennai</button>
                                        <button id='Bangalore' className="block p-2 py-1 text-gray-800" onClick={HandleCity}>Bangalore</button>
                                    </div>
                                : ""}
                            </div>
                        </div>

                        <div className='flex items-center '>
                            <SearchIcon className='mx-3'/>
                            <input type="text" placeholder='Search by College' className='w-[165px] sm-360:w-[150px] bg-transparent text-white outline-none placeholder:text-[#ffffff] placeholder:mx-1'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
