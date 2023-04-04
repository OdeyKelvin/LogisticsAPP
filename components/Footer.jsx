import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {

    const email = <FontAwesomeIcon icon={faEnvelope} className="text-primary1 text-2xl p-4" />
    const phone = <FontAwesomeIcon icon={faPhone} className="text-primary1 text-2xl p-4" />
    return (
        <div className="mt-10">
            <img src='/assets/WaterContainer.png' alt="Water Container" />

            <div className='bg-headingfont text-white flex justify-around h-[120px] px-40 font-krub'>
                <div className='self-center bg-primary2 h-full w-1/2 flex'>
                    <img src='/assets/Logo.svg' alt='logo' className='mx-auto self-center' />
                </div>
                <ul className='flex justify-around w-full self-center font-bold text-3xl '>
                    <li>Pages</li>
                    <li>Utility</li>
                    <li>Subscribe</li>
                </ul>
            </div>
            <div className='bg-primary2 px-40 flex justify-around py-10 text-white text-lg '>
                <div className='w-1/2 px-5 '>
                    <p>
                        Leverage agile frameworks to provide a robust synopsis for strategy
                        collaborative thinking to further the overall value proposition.
                    </p>
                    <ul className='space-y-6 self-center my-6'>

                        <li className="flex space-x-4">
                            <h1 className='rounded-full w-14 h-14 bg-[#273270]'>{email}</h1>
                            <div>
                                Email
                                <br />
                                contact@logistics.com
                            </div>
                        </li>
                        <li className="flex space-x-4">
                            <h1 className='rounded-full w-14 h-14 bg-[#273270]'>{phone}</h1>
                            <div>
                                Call Us <br></br>
                                (00) 112 365 489
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-around w-full'>


                    <ul className='space-y-4'>
                        <li>About Us</li>
                        <li>Our Team</li>
                        <li>Our Projects</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                    <ul className='space-y-4'>
                        <li>Style Guide</li>
                        <li>Changelog</li>
                        <li>Our Projects</li>
                        <li>Licenses</li>
                        <li>Protected</li>
                        <li>Not Found</li>
                    </ul>

                    <ul className='space-y-4'>
                        <input type="text" placeholder="Phone Number*" className='bg-inherit border block w-full px-5 p-2 w-1/2' />
                        <div className='flex space-x-4'>
                            <button className="py-4  w-1/2 text-primary2 font-semibold bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">Send Now</button>
                            <div className='flex w-1/2 space-x-4 self-center'>
                                <img src="/assets/facebook.png" alt='facebook' />
                                <img src="/assets/twitter.png" alt='twitter' />
                                <img src="/assets/linkedin.png" alt='linkedin' />
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            <div className='flex px-40 justify-between bg-primary2 py-5 text-white border-t border-[#8388A7]'>
                <p>Copyright &copy; TransitFlow | Designed by VictorFlow - Powered by Webflow.</p>
                <ul className='space-x-6 flex text-[#8388A7]'>
                    <li>About Us</li>
                    <li>Our Team</li>
                    <li>Our Projects</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div >
    )
}

export default Footer 