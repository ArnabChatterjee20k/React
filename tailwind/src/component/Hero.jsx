import Typed from 'react-typed';
export const Hero = () => {
    return (
        <div className='text-white'>
            <div className='flex flex-col max-w-[800px] w-full h-screen mt-[96px] mx-auto text-center'>
                
                <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                
                <h1 className='text-4xl md:text-7xl md:py-6 sm:text-6xl'>Grow with data</h1>
                
                <div className='py-5 flex justify-center items-center space-x-2'>
                    <p className='text-xl font-bold md:text-5xl sm:text-4xl'>fast,flexible,financing for</p>
                    <Typed className='text-xl font-bold md:text-5xl sm:text-4xl'
                    strings={["BTB","BTC","SASS"]}
                    typeSpeed={120}
                    backSpeed={40}
                    loop
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Get Started</button>
            </div>
        </div>
    )
}
