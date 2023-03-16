import React from 'react';

import Accordion from './Accordion';

import IphoneSVG from '../assets/iphone.svg'
import { ReactComponent as PlayStoreIcon } from "../assets/playstore.svg";
import { ReactComponent as AppStoreIcon } from "../assets/appstore.svg";

const Footer = () => {
    const head = "Do you list houses in other cities?";
    const data = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos temporibus tempore, necessitatibus beatae dolore quasi illo magni libero. Rem maiores similique itaque! Officia explicabo ipsam dignissimos distinctio modi pariatur consectetur!"

    return (
        <div className='mt-[76px] mb-[80px] flex flex-col items-center justify-center'>
            <p className='font-semibold text-sm leading-[21px] text-black'>FAQs</p>
            <p className='mb-[32px] font-normal text-[9px] leading-[14px] text-[#808385]'>Do you have questions? It's probably been answered</p>

            <div>
                <Accordion count="01." head={head} data={data} />
                <Accordion count="02." head={head} data={data} />
                <Accordion count="03." head={head} data={data} />
                <Accordion count="04." head={head} data={data} />
            </div>

            <div className='mt-[10px] flex flex-col items-center justify-center'>
                <img src={IphoneSVG} alt="iphone" />
                <p className='mt-1 mb-1 font-medium text-[14px] leading-[21px]'>Download our mobile app</p>
                <p className='w-[241px] font-normal text-[9px] leading-[14px] text-[#808385] text-center'>Visit your google play store and download our mobile app to keep searching for your perfect home.</p>
                <div className='w-[122px] mt-1 flex items-center justify-around'>
                    <PlayStoreIcon className='h-[25px] cursor-pointer'/>
                    <AppStoreIcon className='h-[25px] cursor-pointer'/>
                </div>
            </div>
        </div>
    );
}

export default Footer;
