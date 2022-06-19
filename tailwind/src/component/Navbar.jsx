import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
export const Navbar = () => {
    const [Nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!Nav)
    }

    return (
        <div className='text-white flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React</h1>
            {/* NavBar */}
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Content</li>
            </ul>

            {/* Nav Toggle */}
            <div onClick={handleNav} className='cursor-pointer block md:hidden'>
                {!Nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
            </div>

            {/* Mobile Nav */}
            <div className={!Nav ?
                'ease-in-out duration-500 fixed left-0 top-0 h-full w-[60%] bg-[#000300] border-r border-r-gray-900'
                : 'ease-in duration-500 fixed left-[-100%]'}>
                <h1 className='m-4 w-full text-3xl font-bold text-[#00df9a]'>React</h1>
                <ul className='uppercase'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4'>Content</li>
                </ul>
            </div>
        </div>
    )
}
