import React from 'react';

const CollectionCard = ({img, label}) => {
    return (
        <div className='w-[120px] h-[90px] rounded-[10px] relative shadow-md filter drop-shadow-md'>
            <div>{img}</div>
            <div className='flex justify-center items-center absolute inset-0 bg-black bg-opacity-40 rounded-[10px]'>
                <p className='font-medium text-[10px] leading-[15px] text-white'>{label}</p>
            </div>
        </div>
    );
}

export default CollectionCard;
