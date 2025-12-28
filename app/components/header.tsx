"use client"
import React, { useEffect, useState, useRef } from 'react'
import Logo from './logo';
import Navigation from './navigation';
import CommonButton from './commonButton';
// import Navigation from './navigation'


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const lastScrollY = useRef(0);


    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY || 0;
            const isAtTop = currentY <= 10;
            const isScrollingDown = currentY > lastScrollY.current;
            const isScrollingUp = currentY < lastScrollY.current;

            setScrolled(!isAtTop);

            if (isAtTop) {
                setShowHeader(true);
            } else if (isScrollingDown) {
                setShowHeader(false);
            } else if (isScrollingUp) {
                setShowHeader(true);
            }

            lastScrollY.current = currentY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Only show header when scrolling up or at top
    if (!showHeader) return null;

    return (
        <div className={`fixed w-full bg-transparent left-0 top-8 max-lg:top-4 z-50 max-md:px-5`}>
        {/* <div className={`fixed w-full ${scrolled ? 'bg-white shadow-2xl left-0 top-0 z-50' : 'bg-transparent left-0 top-8 max-lg:top-4 z-50 max-md:px-5'} `}> */}
            <div className={`max-w-300 mx-auto flex items-center justify-between ${scrolled ? "bg-black/50":"bg-white/10"}  backdrop-blur-md p-[14px_20px] max-xl:p-[14px_20px] max-md:p-[10px_12px] rounded-full`}>
            {/* <div className={`max-w-300 mx-auto flex items-center justify-between  ${scrolled ? "bg-transparent p-[30px_0px] max-xl:p-[30px_40px] max-md:p-[20px_20px]" : "bg-white/10 backdrop-blur-md p-[14px_20px] max-xl:p-[14px_20px] max-md:p-[10px_12px] rounded-full"}`}> */}
                <Logo color={'white'} />
                <Navigation type={'transparent'} />
                <CommonButton text="Get Started" model={scrolled ? "secondary" : "primary"} icon />
            </div>
        </div>
    )
}

export default Header
