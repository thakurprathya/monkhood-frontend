import React, { useState } from 'react';

import { ReactComponent as DownArrowIcon } from "../assets/downarrow.svg";

const Accordion = ({head, data, count}) => {
    const [state, setState] = useState(false);

    const HandleClick = ()=>{
        if(state === false){ setState(true); }
        else{ setState(false); }
    }

    return (
        <div className='mb-2'>
            <button onClick={HandleClick} className='w-[326px] h-[42px] sm-360:w-[300px] px-3 flex items-center justify-between rounded-[10px] border-[0.5px] border-solid border-[#D8D8D8] bg-[#fbfafa]'>
                <p className='font-normal text-[12px] leading-[18px] text-center text-[#161616]'>{count}</p>
                <p className='font-normal text-[12px] leading-[18px] text-[#161616]'>{head}</p>
                <DownArrowIcon/>
            </button>
            {state?
                <div className='w-[326px] sm-360:w-[300px] py-2 px-4 bg-white rounded-[10px] border-[0.5px] border-solid border-[#f9f8f8]'>
                    <p className='font-normal text-[9px] leading-[14px] text-[#808385]'>{data}</p>
                </div>
            :
            ""}
        </div>
    );
}

export default Accordion;
