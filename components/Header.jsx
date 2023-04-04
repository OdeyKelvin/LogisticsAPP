import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faClock } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
function Header() {
    const email = <FontAwesomeIcon icon={faEnvelope} className="text-primary1 text-xl p-2.5" />
    const phone = <FontAwesomeIcon icon={faPhone} className="text-primary1 text-xl p-2.5" />
    const countdown = <FontAwesomeIcon icon={faClock} className="text-primary1 text-xl p-2.5" />
    return (
        <div className='bg-primary2 text-white flex justify-around h-[120px] w-full font-krub'>
            <div className='self-center'>
                <img src='/assets/Logo.svg' alt='logo' />
            </div>
            <ul className='flex space-x-10 self-center'>
                <li className="flex space-x-2">
                    <h1 className='rounded-full w-10 h-10 bg-[#273270]'>{countdown}</h1>
                    <div>
                        Mon - Sat 9.00 - 18.00 <br /> Sunday Closed
                    </div>
                </li>
                <li className="flex space-x-2">
                    <h1 className='rounded-full w-10 h-10 bg-[#273270]'>{email}</h1>
                    <div>
                        Email
                        <br />
                        contact@logistics.com
                    </div>
                </li>
                <li className="flex space-x-2">
                    <h1 className='rounded-full w-10 h-10 bg-[#273270]'>{phone}</h1>
                    <div>
                        Call Us <br></br>
                        (00) 112 365 489
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Header