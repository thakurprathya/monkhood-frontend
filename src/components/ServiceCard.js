import React from 'react';

const ServiceCard = ({img, label}) => {
    return (
        <div className='w-20 h-20 rounded-[10px] text-center relative shadow-md filter drop-shadow-md'>
            <div>{img}</div>
            <div className='absolute inset-0 bg-black bg-opacity-20 rounded-[10px]'>
                <p className='font-medium text-[10px] leading-[15px] text-white mt-[60px]'>{label}</p>
            </div>
        </div>
    );
}

export default ServiceCard;
