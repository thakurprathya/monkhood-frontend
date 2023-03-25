import React, { useState } from 'react';

import { ReactComponent as Boarding1 } from "../assets/boarding1.svg";
import { ReactComponent as Boarding2 } from "../assets/boarding2.svg";
import { ReactComponent as Boarding3 } from "../assets/boarding3.svg";

const OnBoarding = (props) => {
    const [page, setPage] = useState('page1');

    const HandleClick = () =>{
        if(page === 'page1'){ setPage('page2'); }
        else if(page === 'page2'){ setPage('page3'); }
        else{ props.setOnBoard(false); }
    }
    const HandleSkip = () =>{
        props.setOnBoard(false);
    }

    return (
        <div className='bg-white w-[100vw] min-h-[100vh] flex flex-col justify-center items-center overflow-hidden'>
            <div>
                {(page === 'page1') ?
                    <div>
                        <Boarding1 className='mt-[107px] mx-auto' />
                        <div className='mt-[65px] w-[328px] h-[66px] text-center text-lora not-italic font-medium text-[26px] leading-[33px] text-black'>
                            Make your housing search simple and
                            <p className='text-[#F69F17]'>stress-free</p>
                        </div>
                    </div>
                : "" }
                {(page === 'page2') ?
                    <div>
                        <Boarding2 className='mt-[87px] mx-auto' />
                        <div className='mt-[65px] w-[328px] h-[66px] text-center text-lora not-italic font-medium text-[26px] leading-[33px] text-black'>Simply create your profile and start browsing</div>
                    </div>
                : "" }
                {(page === 'page3') ?
                    <div>
                        <Boarding3 className='mt-[92px] mx-auto' />
                        <div className='mt-[65px] w-[328px] h-[66px] text-center text-lora not-italic font-medium text-[26px] leading-[33px] text-black'>
                            List your property
                            <p className='text-[#F69F17]'>without</p>
                            any brokerage fees
                        </div>
                    </div>
                : "" }
            </div>
            <div className='mt-[69px] flex justify-center items-center'>
                <button onClick={()=>setPage('page1')} className={(page === 'page1')?'board-btn':'board-btn-disabled'}></button>
                <button onClick={()=>setPage('page2')} className={(page === 'page2')?'board-btn':'board-btn-disabled'}></button>
                <button onClick={()=>setPage('page3')} className={(page === 'page3')?'board-btn':'board-btn-disabled'}></button>
            </div>
            <div className='mt-[102px] flex justify-center items-center'>
                <button onClick={HandleSkip} className='mx-3 w-[133px] h-[35px] rounded-lg border-[1.5px] border-solid border-[#F69F17] bg-white'><p className='not-italic font-medium text-sm leading-[21px] text-[#F69F17]'>Skip</p></button>
                <button onClick={HandleClick} className='mx-3 w-[133px] h-[35px] rounded-lg border-[1.5px] border-solid bg-[#EB9309]'>
                    <p className='not-italic font-medium text-sm leading-[21px] text-white'>
                        {(page === 'page1')?'Get Started':'Next'}
                    </p>
                </button>
            </div>
        </div>
    )
}

export default OnBoarding;
