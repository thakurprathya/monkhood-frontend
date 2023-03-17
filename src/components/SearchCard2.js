import React from 'react';

import { ReactComponent as FavIcon } from '../assets/saved-small-gray.svg';
import { ReactComponent as LocationIcon } from '../assets/location-black.svg';
import { ReactComponent as RatingStar } from '../assets/ratingStar.svg';
import { ReactComponent as BedIcon } from '../assets/bed.svg';

const SearchCard2 = ({name, location, rating, rent, img, card, roomCount}) => {
    const HandleSaved = (event)=>{
        const btn = document.querySelector(`#${event.target.closest('button').id} > svg > path`);
        if(btn.classList.contains('selected-fav-btn')){ btn.classList.remove('selected-fav-btn'); }
        else{ btn.classList.add('selected-fav-btn'); }
    }

    return (
        <div className='my-2 flex items-center justify-start w-[326px] h-20 shadow-[1.35417px_1.78208px_5.34625px_rgba(0,0,0,0.1),-1.35417px_1.08333px_67.7083px_-10.8333px_rgba(0,0,0,0.05)] rounded-[10px] bg-[#fbfafa]'>
            <div className='mx-2 my-2 w-[85px] h-[66px]'>{img}</div>
            <div className='mx-0 my-2 flex flex-col justify-center items-center'>
                <div className='flex items-center'>
                    <p className='w-[140px] text-left not-italic font-medium text-[11px] leading-4'>{name}</p>
                    <div className='flex text-left items-center not-italic font-medium text-[10px] leading-[15px]'>₹{rent} <p className='text-[#808385]'>/month</p> </div>
                </div>

                <div className='my-1 flex items-center justify-between w-full'>
                    <div className='flex items-center'>
                        <LocationIcon />
                        <p className='mx-1 not-italic font-medium text-[8px] leading-3 text-[#808385]'>{location}</p>
                    </div>
                    <div className='flex items-center'>
                        <RatingStar />
                        <p className='mx-1 not-italic font-medium text-[10px] leading-[15px] text-[#F69F17]'>{rating}</p>
                    </div>
                </div>

                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center'>
                        <BedIcon />
                        <p className='mx-1 not-italic font-medium text-[8px] leading-3 text-[#808385]'>{roomCount} bedrooms</p>
                    </div>
                    <button className='w-[16px] h-[16px] rounded-[23px] bg-[#f2f2f2] flex items-center justify-center shadow-[1.35417px_1.78208px_5px_rgba(0,0,0,0.15),-1.35417px_1.08333px_67.7083px_-10.8333px_rgba(0,0,0,0.15)]' id={`fav2-btn`+card} onClick={HandleSaved}>{<FavIcon />}</button>
                </div>
            </div>
        </div>
    );
}

export default SearchCard2;
