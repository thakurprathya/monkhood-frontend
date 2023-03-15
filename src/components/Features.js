import React from 'react';

import FeatureCard from './FeatureCard';

import { ReactComponent as FeatureIcon } from "../assets/feature.svg";

const Features = () => {
    const head1 = "Freedom and flexibility";
    const head2 = "No brokerage fees";
    const para1 = "Live independently and make your own choices with no stress about owner's rules or restrictions";
    const para2 = "Save time and money without the interference of middleman and transparent pricing";

    return (
        <div className='mt-7 flex flex-col justify-center items-center'>
            <p className='font-medium text-sm leading-[21px]'>Book your perfect home</p>
            <p className='font-normal text-[9px] leading-[14px] text-center text-[#808385] mb-5'>Say goodbye to brokerage fees and endless searching</p>

            <div className='grid grid-cols-2 gap-7'>
                <FeatureCard svg={<FeatureIcon />} head={head1} para={para1} />
                <FeatureCard svg={<FeatureIcon />} head={head2} para={para2} />
                <FeatureCard svg={<FeatureIcon />} head={head1} para={para1} />
                <FeatureCard svg={<FeatureIcon />} head={head2} para={para2} />
            </div>
        </div>
    );
}

export default Features;
