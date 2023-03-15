import React from 'react';

const FeatureCard = ({svg, head, para}) => {
    return (
        <div className='w-[150px] h-[166px] flex flex-col justify-center items-center text-center'>
            <div>{svg}</div>
            <p className='font-medium text-[11px] leading-4 text-[#263238]'>{head}</p>
            <p className='font-normal text-[8px] leading-3 text-[#808385]'>{para}</p>
        </div>
    );
}

export default FeatureCard;
