import React, { useState, useRef } from 'react';

import {isValidPhoneNumber} from 'react-phone-number-input';
import PhoneInput2 from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

import loginBG from '../assets/loginBG.png';
import { ReactComponent as BackArrow } from "../assets/backArrow.svg";

const Login = () => {
    const [comp, setComp] = useState('login');
    const [signup_name, setSignupName] = useState("");
    const [signup_email, setSignupEmail] = useState("");
    const [signup_phone, setSignupPhone] = useState();
    const [phone, setPhone] = useState();
    const [otp, setOTP] = useState(["", "", "", "", "", ""]);

    const isValidPhone = isValidPhoneNumber(`+${phone}`);  //validating login phone number
    const isValidSignupPhone = isValidPhoneNumber(`+${signup_phone}`);   //validating the signup phone number
    const isValidEmail = signup_email ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signup_email) : false;  //validating the email
    const inputRefs = useRef([]);

// OTP BOX Functions
    const handleInputChange = (index, event) => {
        const value = event.target.value;
        if(!isNaN(value)) {
            const newOTP = [...otp];
            newOTP[index] = value;
            setOTP(newOTP);
            if (index < 5 && value !== ""){ inputRefs.current[index + 1].focus(); }
        }
    };
    const handlePaste = (event) => {
        event.preventDefault();
        const pastedData = event.clipboardData.getData("text/plain");
        const newOTP = [...otp];
        for (let i = 0; i < pastedData.length && i < 6; i++){
            const char = pastedData.charAt(i);
            if(!isNaN(char)){ newOTP[i] = char; }
        }
        setOTP(newOTP);
        inputRefs.current[5].focus();
    };
    const handleKeyDown = (event, index) => {
        if (event.key === "Backspace" && index > 0 && otp[index] === "") {
            inputRefs.current[index - 1].focus();
        }
    };
    const otpValue = parseInt(otp.join(""), 10);

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
                <div className='flex flex-col justify-center items-center absolute top-[225px] min-w-[100vw] min-h-[75vh] bg-white shadow-[0px_4px_30px_black] rounded-[40px_40px_0px_0px]'>
                    <p className='mt-[50px] font-lora not-italic font-bold text-[26.697px] leading-[34px]'>Sign Up to Monkhood</p>
                    <div className='flex flex-col mt-[55px]'>
                        <label htmlFor="name" className='not-italic font-medium text-sm leading-[21px]'>Name*</label>
                        <input value={signup_name} onChange={(e)=>setSignupName(e.target.value)} className='px-3 mb-4 not-italic font-normal text-sm leading-[21px] text-[#707070] focus:outline-none w-[275.96px] h-[29.87px] rounded-[3.55619px] border-[1.06686px] border-solid border-[#B8BDBF]' placeholder='Enter your name' name='name'/>
                        <label htmlFor="email" className='not-italic font-medium text-sm leading-[21px]'>Email*</label>
                        <input value={signup_email} onChange={(e)=>setSignupEmail(e.target.value)} className='px-3 mb-4 not-italic font-normal text-sm leading-[21px] text-[#707070] focus:outline-none w-[275.96px] h-[29.87px] rounded-[3.55619px] border-[1.06686px] border-solid border-[#B8BDBF]' placeholder='Enter your email' name='email'/>
                        <label htmlFor="phone" className='not-italic font-medium text-sm leading-[21px]'>Phone*</label>
                        <PhoneInput2 value={signup_phone} onChange={setSignupPhone} country={'in'} inputStyle={{width:'275.96px', height:'20px', fontSize:"14px", color:'#707070'}} containerStyle={{marginTop:'5px', width:'275.96px', height:'29px', outline:"none", display:'flex', alignItems:"center", borderRadius:'3.55px'}} placeholder="Enter your phone no." name="phone"/>
                    </div>
                    <button disabled={(signup_name.length < 5 || !isValidEmail || !isValidSignupPhone)?true:false} className='mt-[41px] flex justify-center items-center w-[275.96px] h-[29.87px] shadow-[0px_1.87172px_3.74343px_rgba(235,147,9,0.2),0px_4.67929px_14.0379px_rgba(235,147,9,0.15)] px-[29.9475px] py-[14.9737px] rounded-[3.74343px] bg-[#eb9309] disabled:bg-[#f1b048] text-white'><p className='font-semibold text-sm leading-[21px]'>Create my account</p></button>
                    <div className='mt-[28px] mb-[50px] flex items-center not-italic font-normal text-xs leading-[18px] text-center text-[#707070]'>
                        Already have an account?
                        <p onClick={()=>setComp('login')} className='text-[#eb9309] mx-1 cursor-pointer'>Log in</p>
                    </div>
                </div>
            :
                <div className='flex flex-col justify-center items-center absolute top-[320px] min-w-[100vw] min-h-[70vh] bg-white shadow-[0px_4px_30px_black] rounded-[40px_40px_0px_0px]'>
                    {
                        (comp === 'login')?
                            <>
                                {/* Login Component */}
                                <div className='flex flex-col justify-center items-center'>
                                    <p className='mt-[50px] font-lora not-italic font-bold text-[28.4599px] leading-[36px]'>Welcome Back</p>
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
                                    <div className='mt-[43px] mb-[50px] text-center not-italic font-normal text-[10px] leading-[15px] text-[#707070]'>
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
                                    <p className='mt-[50px] font-lora not-italic font-bold text-[28.4599px] leading-[36px]'>OTP Verification</p>
                                    <p className='not-italic font-normal text-sm leading-[21px] text-[#707070]'>Enter the code sent to your phone number</p>
                                    <div className='flex mt-[60px]'>
                                        {otp.map((digit, index) => (
                                            <div key={index}>
                                                <input type="text" maxLength={1} value={digit} ref={(ref) => (inputRefs.current[index] = ref)} onChange={(event) => handleInputChange(index, event)} onPaste={handlePaste} onKeyDown={(event) => handleKeyDown(event, index)} className='inp-num' />
                                            </div>
                                        ))}
                                    </div>
                                    <p className='mt-[60px] not-italic font-normal text-xs leading-[18px] text-[#707070]'>If you haven’t received the OTP code, click below</p>
                                    <button className='mt-[25px] not-italic font-semibold text-base leading-6 text-[#F69F17]'>Resend OTP</button>
                                    <button disabled={(otpValue.toString().length < 6)?true:false} className='mt-[44px] mb-[50px] flex justify-center items-center w-[275.96px] h-[29.87px] shadow-[0px_1.87172px_3.74343px_rgba(235,147,9,0.2),0px_4.67929px_14.0379px_rgba(235,147,9,0.15)] px-[29.9475px] py-[14.9737px] rounded-[3.74343px] bg-[#eb9309] disabled:bg-[#f1b048] text-white'><p className='font-semibold text-sm leading-[21px]'>Verify</p></button>
                                </div>  
                            </>
                    }
                </div>
            }
        </div>
    )
}

export default Login;
