import React, { useState, useRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import { auth, db } from '../firebase.js';

import loginBG from '../assets/loginBG.png';
import { ReactComponent as BackArrow } from "../assets/backArrow.svg";
import { ReactComponent as VerifBanner } from "../assets/verifBanner.svg";

const Login = (props) => {
    const [comp, setComp] = useState('login');
    const [signup_name, setSignupName] = useState("");
    const [signup_email, setSignupEmail] = useState("");
    const [signup_phone, setSignupPhone] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOTP] = useState(["", "", "", "", "", ""]);
    const [verif, setVerif] = useState(null);

    const validatePhoneNumber = (num) => {
        let regex = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;
        return regex.test(num);
    }
    const isValidPhone = validatePhoneNumber(`+${phone}`);  //validating login phone number
    const isValidSignupPhone = validatePhoneNumber(`+${signup_phone}`);   //validating the signup phone number
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
    const otpValue = otp.join("");

// Firebase connectivity and Other Handlers
    const generateReCaptcha = (id) =>{
        try {
            window.recaptchaVerifier = new RecaptchaVerifier(id, {
                'size': 'invisible',
                'callback': (response) => {},
                'expired-callback': () => { alert("reCAPTCHA expired, Try Again!!!"); }
            }, auth);
        } catch (error) {
            alert(error.message);
            window.location.reload();
        }
    }
    const handleLogin = () => {
        db.collection('users').where("Phone", "==", `+${phone}`).get()
        .then((querySnapshot) => {
            if (querySnapshot.empty){
                alert('User does not exists in our Database!!!\nTry Signing Up');
                setComp('signUp');
            }
            else{
                generateReCaptcha('login-btn');
                let appVerifier = window.recaptchaVerifier;
                signInWithPhoneNumber(auth, `+${phone}`, appVerifier)
                .then((confirmationResult) => {
                    window.confirmationResult = confirmationResult;
                    console.log('OTP sent'); 
                    setComp('verif'); 
                })
                .catch((error) => { console.log(error); });
            }
        })
        .catch((error) => { console.log(error); });
    }
    const HandleSignUp = () => {
        generateReCaptcha('signup-btn');
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, `+${signup_phone}`, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            console.log('OTP sent'); 
            setComp('verif'); 
            db.collection('users').add({ Name: signup_name, Email: signup_email, Phone: `+${signup_phone}` });
            props.setOnBoard(true);
        })
        .catch((error) => { console.log(error); });
    }
    const HandleOtpVerif = () =>{
        let confirmationResult = window.confirmationResult;
        confirmationResult.confirm(otpValue)
        .then((result) => { setVerif(result.user); setComp('success'); })
        .catch((error) => { alert("Invalid Code!!!"); console.log(error); });
    }
    const HandleResend = () =>{
        const num = (phone==='')? `+${signup_phone}` : `+${phone}`;
        generateReCaptcha('resend-btn');
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, num, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            console.log('New OTP sent'); 
        })
        .catch((error) => { console.log(error); });
    }
    const HandleDone = () =>{
        props.setUser(verif);
        setComp('login');
    }

    return (
        <>  
            {/* Verification Success component */}
            {(comp === 'success')?
                <div className='bg-white w-[100vw] min-h-[100vh] flex flex-col justify-center items-center overflow-hidden'>
                    <VerifBanner className='mt-[106px]'/>
                    <p className='mt-[81px] text-lora not-italic font-bold text-[28.4599px] leading-9 text-black'>Successfully Verified!</p>
                    <div className='mt-[58px] w-[336px] h-[96px] text-center not-italic font-semibold text-base leading-6 text-[#707070]'>
                        Thank you for choosing Monkhood Living for your student housing needs.
                        <p className='mt-5'>Let's get started!</p>
                    </div>
                    <button onClick={HandleDone} className='mt-[130px] mb-[54px] flex justify-center items-center w-[276.06px] h-[35px] shadow-[0px_1.87172px_3.74343px_rgba(235,147,9,0.2),0px_4.67929px_14.0379px_rgba(235,147,9,0.15)] px-[29.9475px] py-[14.9737px] rounded-[3.74343px] bg-[#eb9309] text-white'><p className='font-semibold text-sm leading-[21px]'>Done</p></button>
                </div> 
            : 
                <div className='flex flex-col justify-center items-center overflow-hidden'>
                    <div className='relative'>
                        <img src={loginBG} alt="loginBG" className={`min-w-[100vw]` + (comp==='signUp'?' h-[255px] ':' h-[354px] ')}/>
                        <div className={`absolute inset-0 bg-black bg-opacity-30` + (comp==='signUp'?' h-[255px] ':' h-[354px] ')}>
                            {(comp === 'signUp') ? <BackArrow onClick={()=>setComp('login')} className='m-5 cursor-pointer'/> : ""}
                        </div>
                    </div>

                    {/* Signup Component */}
                    {(comp === 'signUp')?
                        <div className='flex flex-col justify-center items-center absolute top-[225px] min-w-[100vw] min-h-[77vh] bg-white shadow-[0px_4px_30px_black] rounded-[40px_40px_0px_0px]'>
                            <p className='mt-[50px] font-lora not-italic font-bold text-[26.697px] leading-[34px]'>Sign Up to Monkhood</p>
                            <div className='flex flex-col mt-[55px]'>
                                <label htmlFor="name" className='not-italic font-medium text-sm leading-[21px]'>Name*</label>
                                <input value={signup_name} onChange={(e)=>setSignupName(e.target.value)} className='px-3 mb-4 not-italic font-normal text-sm leading-[21px] text-[#707070] focus:outline-none w-[275.96px] h-[29.87px] rounded-[3.55619px] border-[1.06686px] border-solid border-[#B8BDBF]' placeholder='Enter your name' name='name'/>
                                <label htmlFor="email" className='not-italic font-medium text-sm leading-[21px]'>Email*</label>
                                <input value={signup_email} onChange={(e)=>setSignupEmail(e.target.value)} className='px-3 mb-4 not-italic font-normal text-sm leading-[21px] text-[#707070] focus:outline-none w-[275.96px] h-[29.87px] rounded-[3.55619px] border-[1.06686px] border-solid border-[#B8BDBF]' placeholder='Enter your email' name='email'/>
                                <label htmlFor="phone" className='not-italic font-medium text-sm leading-[21px]'>Phone*</label>
                                <PhoneInput value={signup_phone} onChange={setSignupPhone} country={'in'} inputStyle={{width:'275.96px', height:'20px', fontSize:"14px", color:'#707070'}} containerStyle={{marginTop:'5px', width:'275.96px', height:'29px', outline:"none", display:'flex', alignItems:"center", borderRadius:'3.55px'}} placeholder="Enter your phone no." name="phone"/>
                            </div>
                            <button id='signup-btn' onClick={HandleSignUp} disabled={(signup_name.length < 5 || !isValidEmail || !isValidSignupPhone)?true:false} className='mt-[41px] flex justify-center items-center w-[275.96px] h-[29.87px] shadow-[0px_1.87172px_3.74343px_rgba(235,147,9,0.2),0px_4.67929px_14.0379px_rgba(235,147,9,0.15)] px-[29.9475px] py-[14.9737px] rounded-[3.74343px] bg-[#eb9309] disabled:bg-[#f1b048] text-white'><p className='font-semibold text-sm leading-[21px]'>Create my account</p></button>
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
                                                <PhoneInput value={phone} onChange={setPhone} country={'in'} inputStyle={{width:'275.96px', height:'20px', fontSize:"14px", color:'#707070'}} containerStyle={{marginTop:'5px', width:'275.96px', height:'29px', outline:"none", display:'flex', alignItems:"center", borderRadius:'3.55px'}} placeholder="Enter your phone no." name="phoneno"/>
                                            </div>
                                            <button id='login-btn' onClick={handleLogin} disabled={(!isValidPhone)?true:false} className='mt-[41px] flex justify-center items-center w-[275.96px] h-[29.87px] shadow-[0px_1.87172px_3.74343px_rgba(235,147,9,0.2),0px_4.67929px_14.0379px_rgba(235,147,9,0.15)] px-[29.9475px] py-[14.9737px] rounded-[3.74343px] bg-[#eb9309] disabled:bg-[#f1b048] text-white'><p className='font-semibold text-sm leading-[21px]'>Log in</p></button>
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
                                            <button id='resend-btn' onClick={HandleResend} className='mt-[25px] not-italic font-semibold text-base leading-6 text-[#eb9309] disabled:text-[#f1b048]'>Resend OTP</button>
                                            <button id='otp-btn' onClick={HandleOtpVerif} disabled={(otpValue.toString().length < 6)?true:false} className='mt-[44px] mb-[50px] flex justify-center items-center w-[275.96px] h-[35px] shadow-[0px_1.87172px_3.74343px_rgba(235,147,9,0.2),0px_4.67929px_14.0379px_rgba(235,147,9,0.15)] px-[29.9475px] py-[14.9737px] rounded-[3.74343px] bg-[#eb9309] disabled:bg-[#f1b048] text-white'><p className='font-semibold text-sm leading-[21px]'>Verify</p></button>
                                        </div> 
                                    </>
                            }
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default Login;
