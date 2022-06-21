import {
    FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare
} from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat iure amet placeat modi eligendi, hic nemo quis, quas non et architecto porro, voluptates reprehenderit deserunt facere ipsa natus harum earum.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30}></FaFacebookSquare>
                    <FaInstagramSquare size={30}></FaInstagramSquare>
                    <FaTwitterSquare size={30}></FaTwitterSquare>
                    <FaGithubSquare size={30}></FaGithubSquare>
                    <FaDribbbleSquare size={30}></FaDribbbleSquare>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between my-auto'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketting</li>
                        <li className='py-2 text-sm'>ECommerece</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketting</li>
                        <li className='py-2 text-sm'>ECommerece</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketting</li>
                        <li className='py-2 text-sm'>ECommerece</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketting</li>
                        <li className='py-2 text-sm'>ECommerece</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
