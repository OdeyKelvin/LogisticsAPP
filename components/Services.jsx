import React from 'react'

function Services() {
    return (
        <div className="flex mx-auto w-11/12 relative py-20">
            <div className='font-rubik text-headingfont px-5 my-8'>
                <p className='bg-secondary1 inline px-2 py-1 border-l-4 border-primary1'>What We Do</p>
                <h1 className='text-4xl font-semibold py-2 '>Safe & Reliable Cargo Solutions</h1>
            </div>
            <div className='grid grid-cols-2 space-y-8 px-10'>
                <div className='flex m-2 my-8 w-full'>
                    <img src="/assets/Hicons1.svg" alt="" className='px-4' />
                    <div className=' border-l-2 px-4 space-y-4 w-full'>
                        <h1 className='font-rubik text-headingfont text-3xl font-normal' >Sea Transport Services</h1>
                        <p className='font-krub text-paragraphfont font-medium text-lg'>
                            Following the quality of our service thus having gained trust of our many clients.
                        </p>
                    </div>
                </div>
                <div className='flex m-2 w-full'>
                    <img src="/assets/Hicons2.svg" alt="" className='px-4' />
                    <div className=' border-l-2 px-4 space-y-4 '>
                        <h1 className='font-rubik text-headingfont text-3xl font-normal' >Warehousing Services</h1>
                        <p className='font-krub text-paragraphfont font-medium text-lg'>
                            Following the quality of our service thus having gained trust of our many clients.
                        </p>
                    </div>
                </div>
                <div className='flex m-2 w-full'>
                    <img src="/assets/Hicons3.svg" alt="" className='px-4' />
                    <div className=' border-l-2 px-4 space-y-4 '>
                        <h1 className='font-rubik text-headingfont text-3xl font-normal' >Air Flight Services</h1>
                        <p className='font-krub text-paragraphfont font-medium text-lg '>
                            Following the quality of our service thus having gained trust of our many clients.
                        </p>
                    </div>
                </div>
                <div className='flex m-2 w-full'>
                    <img src="/assets/ship2.svg" alt="" className='px-4' />
                    <div className=' border-l-2 px-4 space-y-4'>
                        <h1 className='font-rubik text-headingfont text-3xl font-normal'>Local Shipping Services</h1>
                        <p className='font-krub text-paragraphfont font-medium text-lg'>
                            Following the quality of our service thus having gained trust of our many clients.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services