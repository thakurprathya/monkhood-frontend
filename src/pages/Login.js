import React, { useState } from 'react';

import {isValidPhoneNumber} from 'react-phone-number-input';
import PhoneInput2 from 'react-phone-input-2';
import OtpInput from 'react-otp-input';
import 'react-phone-input-2/lib/bootstrap.css';

import loginBG from '../assets/loginBG.png';
import { ReactComponent as BackArrow } from "../assets/backArrow.svg";

const Login = () => {
    const [comp, setComp] = useState('login');
    const [signup_name, setSignupName] = useState("");
    const [signup_email, setSignupEmail] = useState("");
    const [signup_phone, setSignupPhone] = useState();
    const [phone, setPhone] = useState();
    const [otp, setOtp] = useState('');
    const isValidPhone = isValidPhoneNumber(`+${phone}`);  //validating login phone number
    const isValidSignupPhone = isValidPhoneNumber(`+${signup_phone}`);   //validating the signup phone number
    const isValidEmail = signup_email ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signup_email) : false;  //validating the email

    return (
        <div className='flex flex-col justify-center items-center overflow-hidden'>
            <div className='relative'>
                <img src={loginBG} alt="loginBG" className={`min-w-[100vw]` + (comp==='signUp'?' h-[255px] ':' h-[354px] ')}/>
                <div className={`absolute inset-0 bg-black bg-opacity-30` + (comp==='signUp'?' h-[255px] ':' h-[354px] ')}>
                    {(comp === 'signUp') ? <BackArrow onClick={()=>setComp('login')} className='m-5 cursor-pointer'/> : ""}
                </div>
            </div>

            {/* Signup Component */}
            {(comp === 'signUp')?
                <div className='flex flex-col justify-center items-center absolute top-[225px] w-[390px] sm-360:w-[320px] sm-360:h-[550px] h-[626px] bg-white shadow-[0px_4px_30px_black] rounded-[40px_40px_0px_0px]'>
                    <p className='font-lora not-italic font-bold text-[26.697px] leading-[34px]'>Sign Up to Monkhood</p>
                    <div className='flex flex-col mt-[55px]'>
                        <label htmlFor="name" className='not-italic font-medium text-sm leading-[21px]'>Name*</label>
                        <input value={signup_name} onChange={(e)=>setSignupName(e.target.value)} className='px-3 mb-4 not-italic font-normal text-sm leading-[21px] text-[#707070] focus:outline-none w-[275.96px] h-[29.87px] rounded-[3.55619px] border-[1.06686px] border-solid border-[#B8BDBF]' placeholder='Enter your name' name='name'/>
                        <label htmlFor="email" className='not-italic font-medium text-sm leading-[21px]'>Email*</label>
                        <input value={signup_email} onChange={(e)=>setSignupEmail(e.target.value)} className='px-3 mb-4 not-italic font-normal text-sm leading-[21px] text-[#707070] focus:outline-none w-[275.96px] h-[29.87px] rounded-[3.55619px] border-[1.06686px] border-solid border-[#B8BDBF]' placeholder='Enter your email' name='email'/>
                        <label htmlFor="phone" className='not-italic font-medium text-sm leading-[21px]'>Phone*</label>
                        <PhoneInput2 value={signup_phone} onChange={setSignupPhone} country={'in'} inputStyle={{width:'275.96px', height:'20px', fontSize:"14px", color:'#707070'}} containerStyle={{marginTop:'5px', width:'275.96px', height:'29px', outline:"none", display:'flex', alignItems:"center", borderRadius:'3.55px'}} placeholder="Enter your phone no." name="phone"/>
                    </div>
                    <button disabled={(signup_name.length < 5 || !isValidEmail || !isValidSignupPhone)?true:false} className='mt-[41px] flex justify-center items-center w-[275.96px] h-[29.87px] shadow-[0px_1.87172px_3.74343px_rgba(235,147,9,0.2),0px_4.67929px_14.0379px_rgba(235,147,9,0.15)] px-[29.9475px] py-[14.9737px] rounded-[3.74343px] bg-[#eb9309] disabled:bg-[#f1b048] text-white'><p className='font-semibold text-sm leading-[21px]'>Create my account</p></button>
                    <div className='mt-[28px] flex items-center not-italic font-normal text-xs leading-[18px] text-center text-[#707070]'>
                        Already have an account?
                        <p onClick={()=>setComp('login')} className='text-[#eb9309] mx-1 cursor-pointer'>Log in</p>
                    </div>
                </div>
            :
                <div className='flex flex-col justify-center items-center absolute top-[320px] w-[390px] sm-360:w-[320px] h-[542px] bg-white shadow-[0px_4px_30px_black] rounded-[40px_40px_0px_0px]'>
                    {
                        (comp === 'login')?
                            <>
                                {/* Login Component */}
                                <div className='flex flex-col justify-center items-center'>
                                    <p className='font-lora not-italic font-bold text-[28.4599px] leading-[36px]'>Welcome Back</p>
                                    <p className='not-italic font-normal text-sm leading-[21px] text-[#707070]'>To your ultimate student housing solution!</p>
                                    <div className='mt-[56px]'>
                                        <label htmlFor="phoneno" className='not-italic font-medium text-sm leading-[21px]'>Phone</label>
                                        <PhoneInput2 value={phone} onChange={setPhone} country={'in'} inputStyle={{width:'275.96px', height:'20px', fontSize:"14px", color:'#707070'}} containerStyle={{marginTop:'5px', width:'275.96px', height:'29px', outline:"none", display:'flex', alignItems:"center", borderRadius:'3.55px'}} placeholder="Enter your phone no." name="phoneno"/>
                                    </div>
                                    <button disabled={(!isValidPhone)?true:false} className='mt-[41px] flex justify-center items-center w-[275.96px] h-[29.87px] shadow-[0px_1.87172px_3.74343px_rgba(235,147,9,0.2),0px_4.67929px_14.0379px_rgba(235,147,9,0.15)] px-[29.9475px] py-[14.9737px] rounded-[3.74343px] bg-[#eb9309] disabled:bg-[#f1b048] text-white'><p className='font-semibold text-sm leading-[21px]'>Log in</p></button>
                                    <div className='mt-[28px] flex items-center not-italic font-normal text-xs leading-[18px] text-center text-[#707070]'>
                                        Don't have an account yet?
                                        <p onClick={()=>setComp('signUp')} className='text-[#eb9309] mx-1 cursor-pointer'>Sign up</p>
                                    </div>
                                    <div className='mt-[43px] text-center not-italic font-normal text-[10px] leading-[15px] text-[#707070]'>
                                        By continuing, you agree to the
                                        <div className='flex'>
                                            <p className='underline mx-1 cursor-pointer'>Terms & Conditions</p>
                                            of Monkhood Living.
                                        </div>
                                    </div>
                                </div>
                            </>   
                        : 
                            <>
                                {/* OTP Component */}
                                <div className='flex flex-col justify-center items-center'>
                                    <p className='font-lora not-italic font-bold text-[28.4599px] leading-[36px]'>OTP Verification</p>
                                    <p className='not-italic font-normal text-sm leading-[21px] text-[#707070]'>Enter the code sent to your phone number</p>
                                    <OtpInput value={otp} onChange={setOtp} numInputs={4} containerStyle={{marginTop:'68px'}} inputStyle={{margin:'0 12.5px 0 12.5px', width:'57px', height:'57px', boxShadow:'0px 1.87172px 3.74343px rgba(0, 0, 0, 0.1), 0px 4.67929px 14.0379px rgba(0, 0, 0, 0.1)'}} renderInput={(props) => <input {...props} />}/>
                                    <p className='mt-[70px] not-italic font-normal text-xs leading-[18px] text-[#707070]'>If you haven’t received the OTP code, click below</p>
                                    <button className='mt-[25px] not-italic font-semibold text-base leading-6 text-[#F69F17]'>Resend OTP</button>
                                    <button className='mt-[44px] flex justify-center items-center w-[275.96px] h-[29.87px] shadow-[0px_1.87172px_3.74343px_rgba(235,147,9,0.2),0px_4.67929px_14.0379px_rgba(235,147,9,0.15)] px-[29.9475px] py-[14.9737px] rounded-[3.74343px] bg-[#eb9309] disabled:bg-[#f1b048] text-white'><p className='font-semibold text-sm leading-[21px]'>Verify</p></button>
                                </div>  
                            </>
                    }
                </div>
            }
        </div>
    )
}

export default Login;
