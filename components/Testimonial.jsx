import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Testimonial() {
    const left = <FontAwesomeIcon icon={faArrowLeft} className="text-4xl p-2.5" />
    const right = <FontAwesomeIcon icon={faArrowRight} className="text-4xl p-2.5 text-white" />
    return (
        <div className='mx-auto w-9/12'>
            <div className='font-rubik text-headingfont px-10 my-8'>
                <p className='bg-secondary1 inline px-2 py-1 border-l-4 border-primary1'>Testimonial</p>
                <div className='flex justify-between'>
                    <h1 className='text-4xl font-semibold py-2 '>What Our Customer Say</h1>
                    <div className="flex space-x-10">
                        <div className='rounded-full w-14 h-14 bg-primary1'>{left}</div>
                        <div className='rounded-full w-14 h-14 bg-primary2'>{right}</div>
                    </div>
                </div>
            </div>
            <div className='flex pt-10 pb-20'>
                <div className='w-1/2 bg-secondary1 p-10'>
                    <div className='flex justify-between'>
                        <div className='flex space-x-2'>
                            <img src="/assets/whiteMan.png" alt="" className='rounded-full' />
                            <div className='self-center'>
                                <h3 className='font-semibold font-headingfont font-rubik text-xl'>Kathleen Smith</h3>
                                <p className='font-normal font-paragraphfont font-krub text-lg'>Fuel Company</p>
                            </div>
                        </div>
                        <img src='/assets/quote.png' className='self-center bg-primary1 rounded-full py-6 px-4' />

                    </div>
                    <p className='py-4 text-lg font-krub'>
                        Leverage agile frameworks to provide a robust synopsis for strategy
                        foster collaborative thinking to further the overall value proposition.
                        Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    </p>
                    <div className='flex pt-5 space-x-2'>
                        <img src="/assets/Star.png" alt='star' />
                        <img src="/assets/Star.png" alt='star' />
                        <img src="/assets/Star.png" alt='star' />
                        <img src="/assets/Star.png" alt='star' />
                        <img src="/assets/Star.png" alt='star' />
                    </div>

                </div>

                <div className='w-1/2 bg-primary2 text-secondary1 p-10'>
                    <div className='flex justify-between'>
                        <div className='flex space-x-2'>
                            <img src="/assets/fairMan.png" alt="" className='rounded-full' />
                            <div className='self-center'>
                                <h3 className='font-semibold font-headingfont font-rubik text-xl'>John Martin</h3>
                                <p className='font-normal font-paragraphfont font-krub text-lg'>Restoration Company</p>
                            </div>
                        </div>
                        <img src='/assets/quote.png' className='self-center bg-primary1 rounded-full py-6 px-4' />

                    </div>
                    <p className='py-4 text-lg font-krub'>
                        Leverage agile frameworks to provide a robust synopsis for strategy
                        foster collaborative thinking to further the overall value proposition.
                        Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    </p>

                    <div className='flex pt-5 space-x-2'>
                        <img src="/assets/Star.png" alt='star' />
                        <img src="/assets/Star.png" alt='star' />
                        <img src="/assets/Star.png" alt='star' />
                        <img src="/assets/Star.png" alt='star' />
                        <img src="/assets/Star.png" alt='star' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonial