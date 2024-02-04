import React from 'react'
import logo from '/ft2.png'
import {MdNightsStay, MdWbSunny} from 'react-icons/md'


export default function Header(){

    const social = [
        {
            id: 1,
            title: 'Home',
        },
        {
            id: 2,
            title: 'About',
        },
        {
            id: 3,
            title: 'Projects',
        },
        {
            id: 4,
            title: 'Contact',
        },
      
    ]


    return ( 
    <header className='bg-white w-full z-40  text-gray-900 top-0 left-0 right-0 sticky'>
        <nav className='flex justify-between items-center p-5'>
            <img src='/pinkTransp.png' width={70} height={70} className='animate-bounce'/>
            <div>
                <nav className='flex'>
                    <ul className='flex'>
                        <li>
                        {social.map(({id, title}) => (
                            <a 
                            key={id} 
                            target = '_blank'
                            rel='noopener noreferrer'
                            className='cursor-pointer text-[18px] m-5 
                            duration-300 hover:text-rose-600 hover:-translate-y-5'> {title}</a>
                        ))}
                        </li>
                    </ul>
                    <button className='text-rose-600 font-bold text-[18px] ml-5'>RESUME</button>
                </nav>
            </div>
            {/* <div onClick={() => setDarkMode(!darkMode)}>
                {
                    darkMode ? (
                    <MdNightsStay className='text-2xl cursor-pointer'/>)
                    :
                    (<MdWbSunny className='text-2xl cursor-pointer'/>)
                } 
            </div> */}


        </nav>
    </header>
    );
}

