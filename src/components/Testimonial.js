import React from 'react';

import { ReactComponent as GrpIcon } from "../assets/testimonial_grp.svg";
import { ReactComponent as ArrowIcon } from "../assets/arrow.svg";

const Testimonial = () => {
    const HandleClick = ()=>{
        document.getElementById('read-btn').classList.add('selected-btn');
        document.getElementById('read-btn-p').classList.remove('text-[#F69F17]');
        document.querySelector('#read-btn > svg > path').classList.add('arrow-white');
        setTimeout(() => {
            document.getElementById('read-btn').classList.remove('selected-btn');
            document.getElementById('read-btn-p').classList.add('text-[#F69F17]');
            document.querySelector('#read-btn > svg > path').classList.remove('arrow-white');
        }, 1500);
    }

    return (
        <div className='mt-7 flex items-center'>
            <div className='w-[40%] mx-8 flex flex-col'>
                <p className='font-medium text-[15px] leading-[22px]'>What they say</p>
                <p className='mt-4 font-normal text-[8px] leading-3 text-[#808385]'>Whether you're looking for a new home or just want to make a little renovations to your existing place, we'll make sure you find what you're looking for.</p>
                <GrpIcon className='my-4' />
                <button onClick={HandleClick} id='read-btn' className='w-[92px] h-[26px] flex justify-center items-center border rounded-[8px] border-solid border-[#F69F17]'>
                    <p id='read-btn-p' className='font-normal text-[10px] leading-[15px] text-[#F69F17] mr-2'>Read More</p>
                    <ArrowIcon/>
                </button>
            </div>

            <div className='w-[60%] mx-8 flex flex-col'>
                
            </div>
        </div>
    );
}

export default Testimonial;
