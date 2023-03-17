import React from 'react';
import CountUp from 'react-countup';

const FloatingCard = ({svg, value, label}) => {
    return (
        <div className='w-[89px] h-[104px] rounded-[10px] mx-3 flex flex-col justify-center items-center bg-[#fbfafa] shadow-[1.35417px_1.78208px_5.34625px_rgba(0,0,0,0.1),-1.35417px_1.08333px_67.7083px_-10.8333px_rgba(0,0,0,0.05)]'>
            <div className='mb-3'>{svg}</div>
            <div className='flex items-center'>
                <CountUp start={0} end={value} duration={2} className='text-[#263238] mb-0 font-medium text-base leading-6 text-center'>+</CountUp>
                <p className='text-[#263238] mb-0 font-medium text-base leading-6 text-center'>+</p>
            </div>
            <p className='text-[#808385] mt-0 font-normal text-[10px] leading-[15px]'>{label}</p>
        </div>
    );
}

export default FloatingCard;
