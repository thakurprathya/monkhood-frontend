import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import flat from '../assets/flat.png';
import ratingBars from '../assets/ratingBars.png';
import avatar from '../assets/avatar.svg';
import { ReactComponent as WhiteArrow } from "../assets/whiteArrow.svg";
import { ReactComponent as ShareIcon } from "../assets/share.svg";
import { ReactComponent as FavIcon } from '../assets/saved-small-white.svg';
import { ReactComponent as CarouselBtn } from '../assets/carousel-btn.svg';
import { ReactComponent as CarouselBtnDisabled } from '../assets/carousel-btn-disabled.svg';
import { ReactComponent as RatingStar } from '../assets/ratingStar.svg';
import { ReactComponent as LocationIcon } from '../assets/location.svg';
import { ReactComponent as BedIcon } from '../assets/bed.svg';
import { ReactComponent as BathIcon } from '../assets/bathTub.svg';
import { ReactComponent as DistanceIcon } from '../assets/distance.svg';
import { ReactComponent as DownArrowIcon } from '../assets/downArrowOrange.svg';
import { ReactComponent as WifiIcon } from '../assets/wifi.svg';
import { ReactComponent as ACIcon } from '../assets/AC.svg';
import { ReactComponent as FridgeIcon } from '../assets/fridge.svg';
import { ReactComponent as ScooterIcon } from '../assets/scooter.svg';
import { ReactComponent as FilterIcon } from '../assets/filter.svg';
import { ReactComponent as Map } from '../assets/map.svg';
import { ReactComponent as FullScreenIcon } from '../assets/fullScreen.svg';
import { ReactComponent as PlusIcon } from '../assets/plus.svg';
import { ReactComponent as MinusIcon } from '../assets/minus.svg';
import { ReactComponent as MetroIcon } from '../assets/metro.svg';
import { ReactComponent as TrainIcon } from '../assets/railway.svg';
import { ReactComponent as BusIcon } from '../assets/bus.svg';
import { ReactComponent as PlaneIcon } from '../assets/aeroplane.svg';
import { ReactComponent as HospitalIcon } from '../assets/hospital.svg';
import { ReactComponent as BankIcon } from '../assets/bank.svg';
import { ReactComponent as BasketIcon } from '../assets/groceries.svg';
import { ReactComponent as VideoIcon } from '../assets/video.svg';
import { ReactComponent as CartIcon } from '../assets/cart.svg';
import { ReactComponent as FoodIcon } from '../assets/food.svg';
import { ReactComponent as StarIcon } from '../assets/ratingStar.svg';
import { ReactComponent as RatingIcon } from '../assets/rating.svg';
import { ReactComponent as FormAvatarIcon } from '../assets/formAvatar.svg';

const DiscriptionCard = ({icon, content}) =>{
    return (
        <div className='mx-[7.5px] w-[94px] h-[38px] flex items-center justify-center border rounded-[6.47059px] border-solid border-[#DEDEDE] bg-white'>
            <div>{icon}</div>
            <p className='mx-2 not-italic font-medium text-[10px] leading-[15px] text-[#767676]'>{content}</p>
        </div>
    );
}
const MapComponent = () =>{
    return (
        <div className='mt-[19px] relative'>
            <Map/>
            <div className='absolute flex items-center top-[10.31px] left-[32px]'>
                <div className='flex items-center justify-center w-[178px] h-5 shadow-[0px_-0.30373px_3.34103px_-1.21492px_rgba(0,0,0,0.2),1.51865px_1.99854px_5.99563px_rgba(0,0,0,0.1)] rounded-[4.55595px] bg-white'>
                    <LocationIcon className='w-[7px] h-2'/>
                    <input type="text" placeholder='Check distance from metro and more' className='px-2 w-32 h-2 not-italic font-normal text-[8px] leading-[11px] text-[#878787] focus:outline-none'/>
                    <DownArrowIcon className='ml-[14px] w-[4.25px] h-[2.68px]'/>
                </div>
                <div className='ml-[103px] flex items-center justify-center w-5 h-5 shadow-[0px_6.15385px_12.3077px_rgba(0,0,0,0.1)] rounded bg-white cursor-pointer'><FullScreenIcon /></div>
            </div>
            <div className='absolute bottom-[10px] right-[9px] flex flex-col items-center justify-center w-5 h-10 shadow-[0px_6.15385px_12.3077px_rgba(0,0,0,0.1)] rounded bg-white'>
                <PlusIcon className='w-[7px] h-[7px] cursor-pointer'/>
                <hr className='my-[6px] w-[14.02px] border-[0.769231px] border-solid border-[#D9D9D9]'/>
                <MinusIcon className='w-[7px] h-[7px] cursor-pointer'/>
            </div>
        </div>
    );
}
const ListingAccordion = ({icon, head, set1, set2}) =>{
    const [state, setState] = useState(false);
    const HandleClick = ()=>{
        if(state === false){ setState(true); }
        else{ setState(false); }
    }

    return (
        <div className='mb-2'>
            <button onClick={HandleClick} className='w-[342px] h-[32px] sm-360:w-[300px] px-3 flex items-center rounded-[10px] bg-white'>
                <p className='font-normal text-[12px] leading-[18px] text-[#161616]'>{icon}</p>
                <p className='ml-[17px] w-[205px] text-left font-normal text-[12px] leading-[18px] text-[#161616]'>{head}</p>
                <DownArrowIcon className='ml-[63px]'/>
            </button>
            {state?
                <div className='w-[342px] sm-360:w-[300px] py-2 px-4 bg-white rounded-[10px] border-[0.5px] border-solid border-[#f9f8f8]'>
                    <div className='flex'>
                        <div className='w-[177px]'>
                            {set1.map((item, index)=>
                                <p key={index} className='not-italic font-normal text-[10px] leading-[15px] text-[#9C9C9C]'>{item}</p>
                            )}
                        </div>
                        <div className='ml-[38px] w-[90px]'>
                            {set2.map((item, index)=>
                                <p key={index} className='not-italic font-normal text-[10px] leading-[15px] text-[#9C9C9C]'>{item}</p>
                            )}
                        </div>
                    </div>
                </div>
            :
            ""}
        </div>
    );
}
const Review = () =>{
    return (
        <div className='mx-3 relative p-4 min-w-[220px] h-[210px] bg-[#fbfafa] border shadow-[1.35417px_1.78208px_5.34625px_rgba(0,0,0,0.1),-1.35417px_1.08333px_67.7083px_-10.8333px_rgba(0,0,0,0.05)] rounded-[10px] border-solid border-[#D8D8D8]'>
            <div className='flex items-center justify-between mb-2'>
                <div>
                    <p className='font-medium text-[10px] leading-[15px] text-[#181818]'>Urvi Suhane</p>
                    <RatingIcon/>
                </div>
                <img src={avatar} alt="avatar-icon" />
            </div>
            <p className='italic font-normal text-[10px] leading-[15px] text-[#808385]'>Monkhood living has been helpful in finding me the house I wanted. The owner is sweet. I got pretty much all the facilities under my budget. I will suggest to every student.</p>
            <p className='absolute left-[17px] bottom-[16px] not-italic font-normal text-[8px] leading-3 text-[#808385]'>25 May, 2023</p>
        </div>
    );
}

const Listing = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [image, setImage] = useState('img1');
    const [props, setProps] = useState('commute');

    const HandleSaved = (event)=>{
        const btn = document.querySelector(`#${event.target.closest('svg').id} > path`);
        if(btn.classList.contains('selected-fav-btn')){ btn.classList.remove('selected-fav-btn'); }
        else{ btn.classList.add('selected-fav-btn'); }
    }
    const HandleClick = ()=>{
        document.getElementById('show-more-btn').classList.add('selected-btn');
        document.getElementById('show-more-btn-p').classList.remove('text-[#F69F17]');
        document.querySelector('#show-more-btn > svg > path').classList.add('stroke-white');
        setTimeout(() => {
            document.getElementById('show-more-btn').classList.remove('selected-btn');
            document.getElementById('show-more-btn-p').classList.add('text-[#F69F17]');
            document.querySelector('#show-more-btn > svg > path').classList.remove('stroke-white');
        }, 1500);
    }

    return (
        <div className='bg-[#FBFAFA]'>
            {/* Header */}
            <div className='relative'>
                <img src={flat} alt="head_img" className='min-w-[100vw] h-[267px]'/>
                <div className='absolute inset-0 flex justify-center'>
                    <div className='mt-[13px] min-w-[100vw] flex justify-between'>
                        <WhiteArrow onClick={()=>navigate('/')} className='ml-[26px] w-[25px] h-[25px] p-[4px] rounded-[5px] bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm cursor-pointer' />
                        <div className='mr-[25px] flex'>
                            <ShareIcon className='w-[25px] h-[25px] p-[4px] rounded-[5px] bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm cursor-pointer' />
                            <FavIcon id={`fav3-btn`+id} onClick={HandleSaved} className='ml-[8px] w-[25px] h-[25px] p-[4px] rounded-[5px] bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm cursor-pointer'/>
                        </div>
                    </div>
                    <div className='absolute flex items-center left-[] top-[90%]'>
                        <button className='mx-[5.5px]' onClick={()=>setImage('img1')}>{(image==='img1'?<CarouselBtn/>:<CarouselBtnDisabled/>)}</button>
                        <button className='mx-[5.5px]' onClick={()=>setImage('img2')}>{(image==='img2'?<CarouselBtn/>:<CarouselBtnDisabled/>)}</button>
                        <button className='mx-[5.5px]' onClick={()=>setImage('img3')}>{(image==='img3'?<CarouselBtn/>:<CarouselBtnDisabled/>)}</button>
                        <button className='mx-[5.5px]' onClick={()=>setImage('img4')}>{(image==='img4'?<CarouselBtn/>:<CarouselBtnDisabled/>)}</button>
                        <button className='mx-[5.5px]' onClick={()=>setImage('img5')}>{(image==='img5'?<CarouselBtn/>:<CarouselBtnDisabled/>)}</button>
                        <button className='mx-[5.5px]' onClick={()=>setImage('img6')}>{(image==='img6'?<CarouselBtn/>:<CarouselBtnDisabled/>)}</button>
                    </div>
                </div>
            </div>

            {/* Discription */}
            <div className='mt-[19px] flex flex-col justify-center items-center'>
                <div className='flex items-center'>
                    <p className='not-italic font-medium text-sm leading-[21px]'>Devta Homes</p>
                    <div className='ml-[186px] flex items-center justify-center w-[51.18px] h-[20.71px] shadow-[0px_4.87396px_17.0589px_rgba(0,0,0,0.05)] rounded-[6.09245px] bg-white'>
                        <RatingStar className='w-[13.26px] h-[13.52px]'/>
                        <p className='mx-1 not-italic font-medium text-[14.6219px] leading-[22px]'>4.5</p>
                    </div>
                </div>
                <div className='mt-[12px] mr-[228px] flex items-center'>
                    <LocationIcon />
                    <p className='mx-1 not-italic font-normal text-[11px] leading-4 text-[#808385]'>Sector 17, Rohini</p>
                </div>
                <div className='mt-[19px] flex'>
                    <DiscriptionCard icon={<BedIcon />} content="2 beds"/>
                    <DiscriptionCard icon={<BathIcon />} content="1 bath"/>
                    <DiscriptionCard icon={<DistanceIcon />} content="1,250 sqft"/>
                </div>
                <div className='mt-[20px]'>
                    <p className='not-italic font-medium text-sm leading-[21px]'>Description</p>
                    <p className='mt-[19px] w-[330px] not-italic font-normal text-[11px] leading-4 text-[#808385]'>This fully furnished 2 BHK is available for rent in Rohini with space for car and bike parking. This home is 1,250 sqft & is situated on the 3rd floor of the building.</p>
                </div>
            </div>

            {/* Details */}
            <div className='mt-[25px] flex flex-col justify-center items-center'>
                <p className='mr-[281px] not-italic font-medium text-sm leading-[21px]'>Details</p>
                <div className='mt-[19px] flex'>
                    <div>
                        <p className='not-italic font-normal text-[11px] leading-4 text-[#808385]'>Carpet Area</p>
                        <p className='not-italic font-normal text-[11px] leading-4'>180 sqft</p>
                        <p className='mt-[15px] not-italic font-normal text-[11px] leading-4 text-[#808385]'>Furnishing</p>
                        <p className='not-italic font-normal text-[11px] leading-4'>Semifurnished</p>
                        <p className='mt-[15px] not-italic font-normal text-[11px] leading-4 text-[#808385]'>Availability</p>
                        <p className='not-italic font-normal text-[11px] leading-4'>Immediately</p>
                        <p className='mt-[15px] not-italic font-normal text-[11px] leading-4 text-[#808385]'>Security Deposit</p>
                        <p className='not-italic font-normal text-[11px] leading-4'>10,000</p>
                    </div>
                    <div className='ml-[126px]'>
                        <p className='not-italic font-normal text-[11px] leading-4 text-[#808385]'>Parking</p>
                        <p className='not-italic font-normal text-[11px] leading-4'>2-wheeler</p>
                        <p className='mt-[15px] not-italic font-normal text-[11px] leading-4 text-[#808385]'>Furnishing</p>
                        <p className='not-italic font-normal text-[11px] leading-4'>Semifurnished</p>
                        <p className='mt-[15px] not-italic font-normal text-[11px] leading-4 text-[#808385]'>Availability</p>
                        <p className='not-italic font-normal text-[11px] leading-4'>Immediately</p>
                        <p className='mt-[15px] not-italic font-normal text-[11px] leading-4 text-[#808385]'>Security Deposit</p>
                        <p className='not-italic font-normal text-[11px] leading-4'>10,000</p>
                    </div>                  
                </div>
            </div>

            {/* Amenities */}
            <div className='mt-[27px] flex flex-col justify-center items-center'>
                <p className='mr-[255px] not-italic font-medium text-sm leading-[21px]'>Amenities</p>
                <div className='mt-[19px] flex items-center'>
                    <div className='mx-[16.5px] flex items-center justify-center w-10 h-10 rounded-[10px] bg-[#fff2e8]'><WifiIcon /></div>
                    <div className='mx-[16.5px] flex items-center justify-center w-10 h-10 rounded-[10px] bg-[#fff2e8]'><ACIcon /></div>
                    <div className='mx-[16.5px] flex items-center justify-center w-10 h-10 rounded-[10px] bg-[#fff2e8]'><FridgeIcon /></div>
                    <div className='mx-[16.5px] flex items-center justify-center w-10 h-10 rounded-[10px] bg-[#fff2e8]'><ScooterIcon /></div>
                    <div className='mx-[16.5px] flex items-center justify-center w-10 h-10 rounded-[10px] bg-[#fff2e8]'><FilterIcon /></div>
                </div>
                <button onClick={HandleClick} id='show-more-btn' className='mt-[33px] flex items-center justify-center w-[93px] h-[26px] border rounded-lg border-solid border-[#F69F17] bg-white'>
                    <p id='show-more-btn-p' className='not-italic font-medium text-[10px] leading-[15px] text-[#F69F17]'>Show more</p>
                    <DownArrowIcon className='mx-1 w-2 h-1'/>
                </button>
            </div>

            {/* Neighbourhood */}
            <div className='mt-[25px] flex flex-col justify-center items-center'>
                <p className='mr-[163px] not-italic font-medium text-sm leading-[21px]'>Explore Neighbourhood</p>
                <MapComponent />
                <div className='mt-[10px] flex items-center'>
                    <div className='flex flex-col items-center'>
                        <button onClick={()=>setProps('commute')} className={(props==='commute')  ?  'mx-[35.5px] not-italic font-medium text-[10px] leading-[15px] text-center text-[#F69F17]'  :  'mx-[35.5px] not-italic font-normal text-[10px] leading-[15px] text-center text-[#494949]'}>Commute</button>
                        <div className={(props==='commute')  ?  'mt-[10px] w-[30px] h-0 text-[#F69F17] border-2 border-solid border-[#F69F17]'  :  'mt-[12px] none'}></div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <button onClick={()=>setProps('essentials')} className={(props==='essentials')  ?  'mx-[35.5px] not-italic font-medium text-[10px] leading-[15px] text-center text-[#F69F17]'  :  'mx-[35.5px] not-italic font-normal text-[10px] leading-[15px] text-center text-[#494949]'}>Essentials</button>
                        <div className={(props==='essentials')  ?  'mt-[10px] w-[30px] h-0 text-[#F69F17] border-2 border-solid border-[#F69F17]'  :  'mt-[12px] none'}></div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <button onClick={()=>setProps('leisure')} className={(props==='leisure')  ?  'mx-[35.5px] not-italic font-medium text-[10px] leading-[15px] text-center text-[#F69F17]'  :  'mx-[35.5px] not-italic font-normal text-[10px] leading-[15px] text-center text-[#494949]'}>Leisure</button>
                        <div className={(props==='leisure')  ?  'mt-[10px] w-[30px] h-0 text-[#F69F17] border-2 border-solid border-[#F69F17]'  :  'mt-[12px] none'}></div>
                    </div>
                </div>
                <div className='mt-[22px]'>
                    {(props==='commute')?
                        <div>
                            <ListingAccordion icon={<MetroIcon />} head='Metro Station' set1={['Rohini Sector- 18', 'Rithala', 'Samaypur Badli', 'Rohini West', 'Haiderpur Badli Mor']} set2={['3.6 km | 11 mins', '3.9 km | 9 mins', '3.9 km | 12 mins', '3.8 km | 11 mins', '6.5 km | 18 mins']} />
                            <ListingAccordion icon={<TrainIcon />} head='Railway Station' set1={['Samaypur Badli', 'Railway Level Crossing']} set2={['3.9 km | 12 mins', '6.0 km | 16 mins']} />
                            <ListingAccordion icon={<BusIcon />} head='Bus Terminal' set1={['Rohini Depot 2', 'Rohini Sector 18 Bus Terminal', 'G.T. Karnal Depot', 'Kali Mandir', 'Alok Kunj Bus Stop Sector 15 Rohini']} set2={['1.6 km | 5 mins', '1.9 km | 6 mins', '8.7 km | 20 mins', '7.0 km | 19 mins', '2.8 km | 8 mins']} />
                            <ListingAccordion icon={<PlaneIcon />} head='Airport' set1={['IGI Airport Terminal-2']} set2={['33.6 km | 80 mins']} />
                        </div>
                    :
                        ""
                    }
                    {(props==='essentials')?
                        <div>
                            <ListingAccordion icon={<HospitalIcon />} head='Hospital & Pharmacy' set1={['ESI TB Hospital', 'Max Super Speciality Hospital', 'Akansh Hospital', 'Jaipur Golden Hospital']} set2={['3.6 km | 11 mins', '6.3 km | 18 mins', '1.2 km | 5 mins', '6.4 km | 19 mins']} />
                            <ListingAccordion icon={<BankIcon />} head='Bank ATM' set1={['Punjab National Bank ATM', 'ICICI Bank ATM', 'IndusInd Bank ATM', 'Canara Bank ATM', 'State Bank Of India (SBI) ATM']} set2={['300 m | 4 mins', '500 m | 7 mins', '500 m | 7.5 mins', '600 m | 7 mins', '600 m | 9 mins']} />
                            <ListingAccordion icon={<BasketIcon />} head='Groceries' set1={['Mahesh Store', 'Ambe Maa General Store', 'Jai Balaji Store', 'Asha Store', 'Naresh General Store']} set2={['300 m | 4 mins', '500 m | 7 mins', '500 m | 7.5 mins', '600 m | 7 mins', '600 m | 9 mins']} />
                        </div>
                    :
                        ""
                    }
                    {(props==='leisure')?
                        <div>
                            <ListingAccordion icon={<VideoIcon />} head='Movie Theatre' set1={['Movie Time Cinemas', 'PVR Prashant Vihar', 'G3S Cinemas', 'M2K Cinemas Rohini']} set2={['3.6 km | 11 mins', '6.3 km | 18 mins', '1.2 km | 5 mins', '6.4 km | 19 mins']} />
                            <ListingAccordion icon={<CartIcon />} head='Shopping Mall' set1={['Unity One']} set2={['300 m | 4 mins']} />
                            <ListingAccordion icon={<FoodIcon />} head='Restaurant & Eatery' set1={['BTW', `Domino's Pizza`, 'Punjabi Dhaba', 'Pind Balluchi', 'Runway 1 Delhi']} set2={['300 m | 4 mins', '500 m | 7 mins', '500 m | 7.5 mins', '600 m | 7 mins', '600 m | 9 mins']} />
                        </div>
                    :
                        ""
                    }
                </div>
            </div>

            {/* Reviews */}
            <div className='mt-[10px] flex flex-col justify-center items-center'>
                <p className='mr-[195px] not-italic font-medium text-sm leading-[21px]'>Reviews & Ratings</p>
                <div className='mt-[10px] flex items-center'>
                    <div className='flex flex-col items-center'>
                        <p className='not-italic font-medium text-5xl leading-[72px]'>3.8</p>
                        <div className='flex items-center'>
                            <StarIcon className='w-[10px] h-[10px] mx-[1px]'/>
                            <StarIcon className='w-[10px] h-[10px] mx-[1px]'/>
                            <StarIcon className='w-[10px] h-[10px] mx-[1px]'/>
                            <StarIcon className='w-[10px] h-[10px] mx-[1px]'/>
                            <StarIcon className='w-[10px] h-[10px] mx-[1px]'/>
                        </div>
                        <p className='mt-[9px] not-italic font-normal text-[10px] leading-[15px] text-center text-[#5C5C5C]'>27 reviews</p>
                    </div>
                    <img src={ratingBars} alt="ratings" className='w-[190px] ml-[51px]'/>
                </div>
                <div className='mt-[25px] w-[393px] flex items-center overflow-scroll'>
                    <Review />
                    <Review />
                    <Review />
                </div>
                <button className='mt-[19px] w-[342px] h-8 rounded-lg bg-[#F69F17]'> <p className='not-italic font-semibold text-xs leading-[18px] text-center text-white'>Review this property</p> </button>
            </div>

            {/* Footer */}
            <div className='mt-[25px] flex flex-col justify-center items-center'>
                <div className='w-[342px] h-[94px] flex flex-col items-center justify-center border rounded-lg border-solid border-[#D9D9D9] bg-white'>
                    <p className='not-italic font-normal text-xs leading-[18px] text-center'>Did you find something wrong with this property?</p>
                    <div className='mt-[17px] flex items-center'>
                        <button className='w-[74px] h-[21px] border rounded-lg border-solid border-[#F69F17] bg-white'><p className='font-normal text-[10px] leading-[15px] text-center text-[#F69F17]'>Yes</p></button>
                        <button className='ml-[48px] w-[74px] h-[21px] border rounded-lg border-solid border-[#F69F17] bg-[#F69F17]'><p className='font-normal text-[10px] leading-[15px] text-center text-white'>Not really</p></button>
                    </div>
                </div>
                <p className='mr-[220px] mt-[25px] not-italic font-medium text-sm leading-[21px]'>Contact Owner</p>
                <div className='mr-[185px] mt-[19px] flex items-center'>
                    <FormAvatarIcon />
                    <div className='ml-[17px]'>
                        <p className='not-italic font-medium text-[10px] leading-[15px] text-[#181818]'>Abhilash</p>
                        <p className='not-italic font-medium text-[8px] leading-[12px] text-[#787878]'>+91 98xxxxxx09</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Listing;
