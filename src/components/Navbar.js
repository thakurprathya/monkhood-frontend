import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Navbar = () => {
    const HandleOnClick = (event)=>{
        document.getElementById('home').classList.remove('selected');
        document.getElementById('saved').classList.remove('selected');
        document.getElementById('inbox').classList.remove('selected');
        document.getElementById('profile').classList.remove('selected');
        document.getElementById(event.target.closest('a[id]').id).classList.add('selected');
    }

    return (
        <nav className='bg-[#ffffff] flex p-2 absolute bottom-0 rounded-t-[10px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]'>
            <ul>
                <a href='#' id='home' className='nav-comp selected' onClick={(event) => HandleOnClick(event)}>
                    <HomeIcon sx={{ fontSize: 30 }}/>
                    <p>Home</p>
                </a>
            </ul>
            <ul>
                <a href="#Saved" id='saved' className='nav-comp' onClick={HandleOnClick}>
                    <FavoriteBorderIcon sx={{ fontSize: 30 }}/>
                    <p>Saved</p>
                </a>
            </ul>
            <ul>
                <a href="#Inbox" id='inbox' className='nav-comp' onClick={HandleOnClick}>
                    <SmsOutlinedIcon sx={{ fontSize: 30 }}/>
                    <p>Inbox</p>
                </a>
            </ul>
            <ul>
                <a href="#Profile" id='profile' className='nav-comp' onClick={HandleOnClick}>
                    <PersonOutlineIcon sx={{ fontSize: 30 }}/>
                    <p>Profile</p>
                </a>
            </ul>
        </nav>
    );
}

export default Navbar;