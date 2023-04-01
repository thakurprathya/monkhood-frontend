import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import flat from '../assets/flat.png';
import { ReactComponent as WhiteArrow } from "../assets/whiteArrow.svg";
import { ReactComponent as ShareIcon } from "../assets/share.svg";
import { ReactComponent as FavIcon } from '../assets/saved-small-white.svg';
import { ReactComponent as CarouselBtn } from '../assets/carousel-btn.svg';
import { ReactComponent as CarouselBtnDisabled } from '../assets/carousel-btn-disabled.svg';
import { ReactComponent as RatingStar } from '../assets/ratingStar.svg';
import { ReactComponent as LocationIcon } from '../assets/location.svg';
import { ReactComponent as BedIcon } from '../assets/bed.svg';
import { ReactComponent as BathIcon } from '../assets/bathTub.svg';
import { ReactComponent as DistanceIcon } from '../assets/distance.svg';
import { ReactComponent as DownArrowIcon } from '../assets/downArrowOrange.svg';

const DiscriptionCard = ({icon, content}) =>{
    return (
        <div className='mx-[7.5px] w-[94px] h-[38px] flex items-center justify-center border rounded-[6.47059px] border-solid border-[#DEDEDE] bg-white'>
            <div>{icon}</div>
            <p className='mx-2 not-italic font-medium text-[10px] leading-[15px] text-[#767676]'>{content}</p>
        </div>
    );
}

const Listing = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [image, setImage] = useState('img1');

    const HandleSaved = (event)=>{
        const btn = document.querySelector(`#${event.target.closest('svg').id} > path`);
        if(btn.classList.contains('selected-fav-btn')){ btn.classList.remove('selected-fav-btn'); }
        else{ btn.classList.add('selected-fav-btn'); }
    }

    return (
        <div>
            {/* Header */}
            <div className='relative'>
                <img src={flat} alt="head_img" className='min-w-[100vw] h-[267px]'/>
                <div className='absolute inset-0 flex justify-center'>
                    <div className='mt-[13px] min-w-[100vw] flex justify-between'>
                        <WhiteArrow onClick={()=>navigate('/')} className='ml-[26px] w-[25px] h-[25px] p-[4px] rounded-[5px] bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm cursor-pointer' />
                        <div className='mr-[25px] flex'>
                            <ShareIcon className='w-[25px] h-[25px] p-[4px] rounded-[5px] bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm cursor-pointer' />
                            <FavIcon id={`fav3-btn`+id} onClick={HandleSaved} className='ml-[8px] w-[25px] h-[25px] p-[4px] rounded-[5px] bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm cursor-pointer'/>
                        </div>
                    </div>
                    <div className='absolute flex items-center left-[] top-[90%]'>
                        <button className='mx-[5.5px]' onClick={()=>setImage('img1')}>{(image==='img1'?<CarouselBtn/>:<CarouselBtnDisabled/>)}</button>
                        <button className='mx-[5.5px]' onClick={()=>setImage('img2')}>{(image==='img2'?<CarouselBtn/>:<CarouselBtnDisabled/>)}</button>
                        <button className='mx-[5.5px]' onClick={()=>setImage('img3')}>{(image==='img3'?<CarouselBtn/>:<CarouselBtnDisabled/>)}</button>
                        <button className='mx-[5.5px]' onClick={()=>setImage('img4')}>{(image==='img4'?<CarouselBtn/>:<CarouselBtnDisabled/>)}</button>
                        <button className='mx-[5.5px]' onClick={()=>setImage('img5')}>{(image==='img5'?<CarouselBtn/>:<CarouselBtnDisabled/>)}</button>
                        <button className='mx-[5.5px]' onClick={()=>setImage('img6')}>{(image==='img6'?<CarouselBtn/>:<CarouselBtnDisabled/>)}</button>
                    </div>
                </div>
            </div>

            {/* Discription */}
            <div className='mt-[19px] flex flex-col justify-center items-center'>
                <div className='flex items-center'>
                    <p className='not-italic font-medium text-sm leading-[21px]'>Devta Homes</p>
                    <div className='ml-[186px] flex items-center justify-center w-[51.18px] h-[20.71px] shadow-[0px_4.87396px_17.0589px_rgba(0,0,0,0.05)] rounded-[6.09245px] bg-white'>
                        <RatingStar className='w-[13.26px] h-[13.52px]'/>
                        <p className='mx-1 not-italic font-medium text-[14.6219px] leading-[22px]'>4.5</p>
                    </div>
                </div>
                <div className='mt-[12px] mr-[228px] flex items-center'>
                    <LocationIcon />
                    <p className='mx-1 not-italic font-normal text-[11px] leading-4 text-[#808385]'>Sector 17, Rohini</p>
                </div>
                <div className='mt-[19px] flex'>
                    <DiscriptionCard icon={<BedIcon />} content="2 beds"/>
                    <DiscriptionCard icon={<BathIcon />} content="1 bath"/>
                    <DiscriptionCard icon={<DistanceIcon />} content="1,250 sqft"/>
                </div>
                <div className='mt-[20px]'>
                    <p className='not-italic font-medium text-sm leading-[21px]'>Description</p>
                    <p className='mt-[19px] w-[330px] not-italic font-normal text-[11px] leading-4 text-[#808385]'>This fully furnished 2 BHK is available for rent in Rohini with space for car and bike parking. This home is 1,250 sqft & is situated on the 3rd floor of the building.</p>
                </div>
            </div>

            {/* Details */}
            <div className='mt-[25px] flex flex-col justify-center items-center'>
                <p className='mr-[281px] not-italic font-medium text-sm leading-[21px]'>Details</p>
                <div className='mt-[19px] flex'>
                    <div>
                        <p className='not-italic font-normal text-[11px] leading-4 text-[#808385]'>Carpet Area</p>
                        <p className='not-italic font-normal text-[11px] leading-4'>180 sqft</p>
                        <p className='mt-[15px] not-italic font-normal text-[11px] leading-4 text-[#808385]'>Furnishing</p>
                        <p className='not-italic font-normal text-[11px] leading-4'>Semifurnished</p>
                        <p className='mt-[15px] not-italic font-normal text-[11px] leading-4 text-[#808385]'>Availability</p>
                        <p className='not-italic font-normal text-[11px] leading-4'>Immediately</p>
                        <p className='mt-[15px] not-italic font-normal text-[11px] leading-4 text-[#808385]'>Security Deposit</p>
                        <p className='not-italic font-normal text-[11px] leading-4'>10,000</p>
                    </div>
                    <div className='ml-[126px]'>
                        <p className='not-italic font-normal text-[11px] leading-4 text-[#808385]'>Parking</p>
                        <p className='not-italic font-normal text-[11px] leading-4'>2-wheeler</p>
                        <p className='mt-[15px] not-italic font-normal text-[11px] leading-4 text-[#808385]'>Furnishing</p>
                        <p className='not-italic font-normal text-[11px] leading-4'>Semifurnished</p>
                        <p className='mt-[15px] not-italic font-normal text-[11px] leading-4 text-[#808385]'>Availability</p>
                        <p className='not-italic font-normal text-[11px] leading-4'>Immediately</p>
                        <p className='mt-[15px] not-italic font-normal text-[11px] leading-4 text-[#808385]'>Security Deposit</p>
                        <p className='not-italic font-normal text-[11px] leading-4'>10,000</p>
                    </div>                  
                </div>
            </div>

            {/* Amenities */}
            <div className='mt-[27px] flex flex-col justify-center items-center'>
                <p className='mr-[255px] not-italic font-medium text-sm leading-[21px]'>Amenities</p>
                <div className='mt-[19px]'>

                </div>
                <button className='mt-[33px]'>
                    <p>Show more</p>
                    <DownArrowIcon/>
                </button>
            </div>
        </div>
    );
}

export default Listing;
