"use client"
import React, { useEffect, useState } from 'react'
import Logo from './logo';
import Navigation from './navigation';
import CommonButton from './commonButton';
// import Navigation from './navigation'


const Header = () => {
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`'flex justify-center fixed w-full ${scrolled ? 'bg-white shadow-2xl left-0 top-0 z-50' : 'bg-transparent left-0 top-8 max-lg:top-4 z-50 max-md:px-5'} `}>
            <div className={`max-w-300 mx-auto flex items-center justify-between  ${scrolled ? "bg-transparent p-[30px_0px] max-xl:p-[30px_40px] max-md:p-[20px_20px]" : "bg-white/10 backdrop-blur-md p-[14px_20px] max-xl:p-[14px_20px] max-md:p-[10px_12px] rounded-full"}`}>
                <Logo color={scrolled ? 'black' : 'white'} />
                <Navigation type={scrolled ? 'scroll' : 'transparent'} />
                <CommonButton text="Get Started" model={scrolled ? "secondary" : "primary"} icon />
            </div>
        </div>
    )
}

export default Header
