import React from 'react';

import { ReactComponent as FavIcon } from '../assets/saved-small-gray.svg';
import { ReactComponent as LocationIcon } from '../assets/location-black.svg';
import { ReactComponent as RatingStar } from '../assets/ratingStar.svg';

const SearchCard1 = ({name, location, rating, rent, img, card}) => {
    const HandleSaved = (event)=>{
        const btn = document.querySelector(`#${event.target.closest('button').id} > svg > path`);
        if(btn.classList.contains('selected-fav-btn')){ btn.classList.remove('selected-fav-btn'); }
        else{ btn.classList.add('selected-fav-btn'); }
    }

    return (
        <div className='w-[157px] h-[166px] shadow-[1.35417px_1.78208px_5.34625px_rgba(0,0,0,0.1),-1.35417px_1.08333px_67.7083px_-10.8333px_rgba(0,0,0,0.05)] rounded-[10px] bg-[#fbfafa]'>
            <div className='relative mt-3 mb-2 mx-[10px]'>
                <div className='w-[137px] h-[106px] rounded-[10px]'>{img}</div>
                <div className='absolute w-[137px] h-[106px] rounded-[10px] top-0'>
                    <button className='w-[16px] h-[16px] mt-[7px] ml-[115px] rounded-[9px] bg-white flex items-center justify-center bg-opacity-30 backdrop-filter backdrop-blur-sm' id={`fav1-btn`+card} onClick={HandleSaved}>{<FavIcon />}</button>
                    <p className='w-[65px] h-[16px] mt-[58px] ml-[7px] rounded-[8px] flex items-center justify-center font-medium text-[8px] leading-3 text-white bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm'>₹{rent}/month</p>
                </div>
            </div>
            <p className='mx-[10px] not-italic font-medium text-[11px] leading-4 text-black text-left'>{name}</p>
            <div className='mx-[10px] flex items-center justify-between'>
                <div className='flex items-center'>
                    <LocationIcon />
                    <p className='mx-1 not-italic font-medium text-[8px] leading-3 text-[#808385]'>{location}</p>
                </div>
                <div className='flex items-center'>
                    <RatingStar />
                    <p className='mx-1 not-italic font-medium text-[10px] leading-[15px] text-[#F69F17]'>{rating}</p>
                </div>
            </div>
        </div>
    );
}

export default SearchCard1;
