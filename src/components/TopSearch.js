import React from 'react';

import SearchCard1 from './SearchCard1';
import SearchCard2 from './SearchCard2';

import room1 from '../assets/room1.svg';
import room2 from '../assets/room2.svg';
import { ReactComponent as ArrowIcon } from "../assets/arrow.svg";

const TopSearch = ({locAccess}) => {
    const HandleClick = ()=>{
        document.getElementById('all-btn2').classList.add('selected-btn');
        document.getElementById('all-btn2-p').classList.remove('text-[#F69F17]');
        document.querySelector('#all-btn2 > svg > path').classList.add('arrow-white');
        setTimeout(() => {
            document.getElementById('all-btn2').classList.remove('selected-btn');
            document.getElementById('all-btn2-p').classList.add('text-[#F69F17]');
            document.querySelector('#all-btn2 > svg > path').classList.remove('arrow-white');
        }, 1500);
    }

    return (
        <>
            {locAccess?
                <div className='mt-7 flex flex-col items-center justify-center'>
                    <p className='mb-5 w-[196px] h-[19px] font-medium text-sm leading-[21px] text-center text-black'>Discover nearby properties</p>
        
                    <div className='grid grid-cols-2 gap-5'>
                        <SearchCard1 name="Devta Homes" rating={4.5} location="Rohini" rent={5000} card="1" img={<img src={room1} alt="room-img"/>} />
                        <SearchCard1 name="Nature's Nest" rating={3.9} location="Kamla Nagar" rent={8000} card="2" img={<img src={room2} alt="room-img" />} />
                    </div>
        
                    <p className='mt-5 mb-5 w-[196px] h-[19px] font-medium text-sm leading-[21px] text-center text-black'>Top searches</p>
        
                    <div className='flex flex-col items-center justify-center'>
                        <SearchCard2 name="Devta Homes" rating={4.5} location="Rohini" rent={5000} card="1" roomCount={2} img={<img src={room1} alt="room-img"/>} />
                        <SearchCard2 name="Nature's Nest" rating={3.9} location="Kamla Nagar" rent={8000} card="2" roomCount={2} img={<img src={room2} alt="room-img" />} />
                        <SearchCard2 name="Devta Homes" rating={4.5} location="Rohini" rent={5000} card="3" roomCount={2} img={<img src={room1} alt="room-img"/>} />
                        <SearchCard2 name="Nature's Nest" rating={3.9} location="Kamla Nagar" rent={8000} card="4" roomCount={2} img={<img src={room2} alt="room-img" />} />
                    </div>
        
                    <button onClick={HandleClick} id='all-btn2' className='my-2 w-[76px] h-[26px] flex justify-center items-center border rounded-lg border-solid border-[#F69F17]'>
                        <p id='all-btn2-p' className='font-normal text-[10px] leading-[15px] text-[#F69F17] mr-2'>View All </p>
                        <ArrowIcon/>
                    </button>
                </div>
            :
                ""
            }
        </>
    );
}

export default TopSearch;
