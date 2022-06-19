import Laptop from "../assests/laptop.jpg"

export const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            {/* by default grid is 1col */}
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img src={Laptop} className="w-[500px] mx-auto my-4" alt="laptop" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="text-2xl font-bold py-2 md:text-4xl sm:text-3xl">Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis iure maiores, totam, assumenda eos magni velit molestiae itaque deserunt exercitationem vitae! Odio corrupti reprehenderit, alias expedita illum officia minima debitis?</p>
                    <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 bg-black md:mx-0'>Get Started</button>
                </div>
            </div>
        </div>
    )
}
