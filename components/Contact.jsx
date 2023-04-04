import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faClock } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
function Contact() {
    const email = <FontAwesomeIcon icon={faEnvelope} className="text-primary1 text-2xl p-4" />
    const phone = <FontAwesomeIcon icon={faPhone} className="text-primary1 text-2xl p-4" />
    const countdown = <FontAwesomeIcon icon={faClock} className="text-primary1 text-2xl p-4" />
    return (
        <div className='bg-primary2 p-40 my-20 text-white'>
            <div className='flex'>

                <div className='font-rubik px-10'>
                    <p className='bg-secondary1 text-headingfont inline px-2 py-1 border-l-4 border-primary1'>What We Do</p>
                    <h1 className='text-5xl font-semibold py-2 '>Get in touch with us</h1>
                    <p className='font-krub'>
                        Leverage agile frameworks to provide a robust synopsis
                        for strategy foster collaborative
                        thinking to further the overall value.
                    </p>
                    <ul className='space-y-6 self-center my-6'>

                        <li className="flex space-x-2">
                            <h1 className='rounded-full w-14 h-14 bg-[#273270]'>{email}</h1>
                            <div>
                                Email
                                <br />
                                contact@logistics.com
                            </div>
                        </li>
                        <li className="flex space-x-2">
                            <h1 className='rounded-full w-14 h-14 bg-[#273270]'>{phone}</h1>
                            <div>
                                Call Us <br></br>
                                (00) 112 365 489
                            </div>
                        </li>
                        <li className="flex space-x-2">
                            <h1 className='rounded-full w-14 h-14 bg-[#273270]'>{countdown}</h1>
                            <div>
                                Mon - Sat 9.00 - 18.00 <br /> Sunday Closed
                            </div>
                        </li>
                    </ul>
                </div>
                <form className='w-full my-10 px-10 space-y-8 font-leaguespartan '>
                    <div className='flex space-x-5'>
                        <input type="text" placeholder="Your name*" className='bg-inherit border px-5 p-3 w-1/2' />
                        <input type="text" placeholder="Email*" className='bg-inherit border px-5 p-3 w-1/2' />
                    </div>
                    <div className='flex space-x-5'>
                        <input type="text" placeholder="Phone Number*" className='bg-inherit border px-5 p-3 w-1/2' />
                        <input type="text" placeholder="City*" className='bg-inherit border px-5 p-3 w-1/2' />
                    </div>
                    <textarea className='bg-inherit border px-5 p-4 w-full h-40' placeholder='Your Message*' />
                    <button className="px-10 py-4 text-primary2 font-semibold bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">Submit Message</button>
                </form>
            </div>
            <div className="grid grid-cols-4 w-full border">
                <img src="/assets/1.png" alt="" className='w-full' />
                <img src="/assets/2.png" alt="" className='w-full' />
                <img src="/assets/3.png" alt="" className='w-full' />
                <img src="/assets/4.png" alt="" className='w-full' />
            </div>
        </div>
    )
}

export default Contact