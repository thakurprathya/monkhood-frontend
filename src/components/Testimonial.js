import React from 'react';

import { ReactComponent as GrpIcon } from "../assets/testimonial_grp.svg";
import { ReactComponent as ArrowIcon } from "../assets/arrow.svg";
import { ReactComponent as AvatarIcon } from "../assets/avatar.svg";
import { ReactComponent as RatingIcon } from "../assets/rating.svg";
import advert1 from "../assets/advert1.jpg";
import advert2 from "../assets/advert2.jpg";
import advert3 from "../assets/advert3.jpg";

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
    const HandleAdvClick = ()=>{
        document.getElementById('ad-btn').classList.add('selected-btn');
        document.getElementById('ad-btn-p').classList.remove('text-[#F69F17]');
        setTimeout(() => {
            document.getElementById('ad-btn').classList.remove('selected-btn');
            document.getElementById('ad-btn-p').classList.add('text-[#F69F17]');
        }, 1500);
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='mt-7 flex items-center'>
                <div className='w-[40%] mx-8 sm-360:mx-2 flex flex-col'>
                    <p className='font-medium text-[15px] leading-[22px]'>What they say</p>
                    <p className='mt-4 w-[110px] font-normal text-[8px] leading-3 text-[#808385]'>Whether you're looking for a new home or just want to make a little renovations to your existing place, we'll make sure you find what you're looking for.</p>
                    <GrpIcon className='my-4' />
                    <button onClick={HandleClick} id='read-btn' className='w-[92px] h-[26px] flex justify-center items-center border rounded-[8px] border-solid border-[#F69F17]'>
                        <p id='read-btn-p' className='font-normal text-[10px] leading-[15px] text-[#F69F17] mr-2'>Read More</p>
                        <ArrowIcon/>
                    </button>
                </div>

                <div className='w-[60%] mx-5 sm-360:mx-2 flex flex-col justify-center items-center'>
                    <div className='p-3 w-[183px] h-[122px] bg-[#fbfafa] shadow-[1.35417px_1.78208px_5.34625px_rgba(0,0,0,0.1),-1.35417px_1.08333px_67.7083px_-10.8333px_rgba(0,0,0,0.05)] rounded-[10px] border-solid border-[#D8D8D8]'>
                        <div className='flex items-center justify-between mb-2'>
                            <div>
                                <p className='font-medium text-[10px] leading-[15px] text-[#181818]'>Urvi Suhane</p>
                                <RatingIcon/>
                            </div>
                            <AvatarIcon/>
                        </div>
                        <p className='italic font-normal text-[8px] leading-3 text-[#808385]'>Monkhood living has been helpful in finding me the house I wanted. The owner is sweet. I got pretty much all the facilities under my budget. I will suggest to every student.</p>
                    </div>

                    <div className='relative p-3 mt-5 w-[183px] h-[110px] bg-[#fbfafa] shadow-[1.35417px_1.78208px_5.34625px_rgba(0,0,0,0.1),-1.35417px_1.08333px_67.7083px_-10.8333px_rgba(0,0,0,0.05)] rounded-[10px] border-solid border-[#D8D8D8]'>
                        <div className='flex items-center justify-between mb-2'>
                            <div>
                                <p className='font-medium text-[10px] leading-[15px] text-[#181818]'>Gitansh Mehta</p>
                                <RatingIcon/>
                            </div>
                            <AvatarIcon/>
                        </div>
                        <p className='italic font-normal text-[8px] leading-3 text-[#808385]'>Monkhood living has been helpful in finding me the house I wanted. The owner is sweet. I got pretty much all the facilities under my budget. I will suggest to every student.</p>
                    </div>
                    <div className='absolute w-[183px] h-[105px] rounded-[10px] mt-[160px] bg-gradient-to-b from-transparent to-white'></div>
                </div>
            </div>

            {/* Advertisment box */}
            <div className='relative'>
                <img src={advert1} alt="ad__img" className='absolute z-10 top-[83px] left-[98px] rounded-2' />
                <img src={advert2} alt="ad__img" className='absolute z-10 top-[60px] left-[22px] rounded-2' />
                <img src={advert3} alt="ad__img" className='absolute z-10 top-[140px] left-[10px] rounded-2'/>
        
                <div className='relative mt-[76px] w-[326px] sm-360:w-[315px] h-[111px] rounded-[10px] bg-[#1a1a1a]'>
                    <div className='absolute right-5 top-4 w-[134px] sm-360:right-1 flex flex-col'>
                        <div>
                            <p className='text-[12px] rounded-[10px] leading-[18px] text-white'>Looking to sell or rent</p>
                            <p className='text-[12px] rounded-[10px] leading-[18px] text-white'>your property?</p>
                        </div>
                        <button onClick={HandleAdvClick} id='ad-btn' className='w-[110px] h-[24px] mt-5 flex justify-center items-center border rounded-[3px] border-solid border-[#F69F17]'>
                            <p id='ad-btn-p' className='font-medium text-[8px] leading-3 text-[#F69F17] mr-2'>Post property for FREE</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
