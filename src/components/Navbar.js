import React from 'react';

import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as SavedIcon } from "../assets/saved.svg";
import { ReactComponent as InboxIcon } from "../assets/inbox.svg";
import { ReactComponent as ProfileIcon } from "../assets/profile.svg";

const Navbar = () => {
    const HandleOnClick = (event)=>{
        document.getElementById('home').classList.remove('selected-nav-comp');
        document.getElementById('saved').classList.remove('selected-nav-comp');
        document.getElementById('inbox').classList.remove('selected-nav-comp');
        document.getElementById('profile').classList.remove('selected-nav-comp');
        document.getElementById(event.target.closest('a[id]').id).classList.add('selected-nav-comp');

        const compArr = document.querySelectorAll('.nav-comp > svg > path');
        compArr[0].classList.remove('nav-home');
        compArr[0].classList.add('nav-home-base');
        compArr[1].classList.remove('nav-other');
        compArr[2].classList.remove('nav-other');
        compArr[3].classList.remove('nav-other');
        compArr[4].classList.remove('nav-other');
        if(event.target.closest('a[id]').id === 'home'){ compArr[0].classList.add('nav-home'); compArr[0].classList.remove('nav-home-base'); }
        else if(event.target.closest('a[id]').id === 'saved'){ compArr[1].classList.add('nav-other'); }
        else if(event.target.closest('a[id]').id === 'profile'){ compArr[4].classList.add('nav-other'); }
        else{ compArr[2].classList.add('nav-other');  compArr[3].classList.add('nav-other'); }
    }

    return (
        <nav className='bg-[#ffffff] flex p-2 py-3 fixed w-full bottom-0 rounded-[8px_8px_0px_0px] shadow-[0px_-2px_23px_-15px_rgba(0,0,0,0.25)]'>
            <ul>
                <a href='#' id='home' className='nav-comp selected-nav-comp' onClick={(event) => HandleOnClick(event)}>
                    <HomeIcon/>
                    <p>Home</p>
                </a>
            </ul>
            <ul>
                <a href="#Saved" id='saved' className='nav-comp' onClick={HandleOnClick}>
                    <SavedIcon/>
                    <p>Saved</p>
                </a>
            </ul>
            <ul>
                <a href="#Inbox" id='inbox' className='nav-comp' onClick={HandleOnClick}>
                    <InboxIcon/>
                    <p>Inbox</p>
                </a>
            </ul>
            <ul>
                <a href="#Profile" id='profile' className='nav-comp' onClick={HandleOnClick}>
                    <ProfileIcon/>
                    <p>Profile</p>
                </a>
            </ul>
        </nav>
    );
}

export default Navbar;