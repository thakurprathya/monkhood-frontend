import React from 'react';

import ServiceCard from './ServiceCard';

import { ReactComponent as ArrowIcon } from "../assets/arrow.svg";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";

const Services = () => {
    const HandleClick = ()=>{
        document.getElementById('all-btn').classList.add('selected-btn');
        document.getElementById('all-btn-p').classList.remove('text-[#F69F17]');
        document.querySelector('#all-btn > svg > path').classList.add('arrow-white');
        setTimeout(() => {
            document.getElementById('all-btn').classList.remove('selected-btn');
            document.getElementById('all-btn-p').classList.add('text-[#F69F17]');
            document.querySelector('#all-btn > svg > path').classList.remove('arrow-white');
        }, 1500);
    }

    return (
        <div className='mt-[70px] flex flex-col justify-center items-center'>
            <p className='font-medium text-[14px] leading-[21px]'>Services For You</p>
            <p className='font-normal text-[9px] leading-[14px] text-[#808385] mb-5'>One-stop solution to all your home needs</p>

            <div className='grid grid-cols-3 gap-6 mb-5'>
                <ServiceCard img={<img src={service1} alt="__img"/>} label="Flats"/>
                <ServiceCard img={<img src={service2} alt="__img"/>} label="PG Homes"/>
                <ServiceCard img={<img src={service1} alt="__img"/>} label="Furnishing"/>
                <ServiceCard img={<img src={service2} alt="__img"/>} label="Cleaning"/>
                <ServiceCard img={<img src={service1} alt="__img"/>} label="Kitchen Aid"/>
                <ServiceCard img={<img src={service2} alt="__img"/>} label="Online Listing"/>
            </div>

            <button onClick={HandleClick} id='all-btn' className='w-[76px] h-[26px] flex justify-center items-center border rounded-lg border-solid border-[#F69F17]'>
                <p id='all-btn-p' className='font-normal text-[10px] leading-[15px] text-[#F69F17] mr-2'>View All </p>
                <ArrowIcon/>
            </button>
        </div>
    );
}

export default Services;
