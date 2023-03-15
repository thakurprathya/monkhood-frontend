import React from 'react';

import CollectionCard from './CollectionCard';

import flat1 from '../assets/flat1.png';
import flat2 from '../assets/flat2.png';
import pg1 from '../assets/pg1.png';
import pg2 from '../assets/pg2.png';

const Collection = ({page}) => {
    return (
        <div className='mt-7 flex flex-col justify-center items-center'>
            <p className='font-medium text-sm leading-[21px] mb-5'>Handpicked collection of {(page==='flat')?"Rental Flats":"PG Homes"}</p>

            <div className='grid grid-cols-2 gap-4'>
                {(page==='flat')?
                    <>
                        <CollectionCard img={<img src={flat1} alt="__img"/>} label="Furnished" />
                        <CollectionCard img={<img src={flat2} alt="__img"/>} label="Readily Available" />
                    </>
                :
                    <>
                        <CollectionCard img={<img src={pg1} alt="__img"/>} label="For Boys" />
                        <CollectionCard img={<img src={pg2} alt="__img"/>} label="For Girls" />
                    </>
                }
            </div>
        </div>
    );
}

export default Collection;
