import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const Banner = () => {
  const arrow = <FontAwesomeIcon icon={faAngleDown} />
  return (
    <div className="Banner-container">
      <div className="bannerwrapper">
        <div className="relative">
          <img src="./assets/Hero.png" alt="" className="w-full absolute h-full" />
          <div className="h-[78px] bg-[#041C3780] w-full relative flex justify-between ">
            <ul className="font-rubik self-center text-md font-extralight px-40 text-white flex">
              <li className="py-4 cursor-pointer"><a className="px-4">Home</a></li>
              <li className="py-4 cursor-pointer"><a className="border-l px-4">About</a></li>
              <li className="py-4 cursor-pointer"><a className="border-l px-4">Pages {arrow}</a></li>
              <li className="py-4 cursor-pointer"><a className="border-l px-4">Project</a></li>
              <li className="py-4 cursor-pointer"><a className="border-l px-4">Contact</a></li>
            </ul>

            <div className="font-rubik self-center text-md px-20 text-white flex space-x-10 ">
              <div className='flex space-x-4 self-center'>
                <img src="/assets/facebook.png" alt='facebook' />
                <img src="/assets/twitter.png" alt='twitter' />
                <img src="/assets/linkedin.png" alt='linkedin' />
              </div>
              <button className="self-center bg-white text-headingfont font-semibold px-10 h-[78px]">Request Quote</button>
            </div>
          </div>
          <div className="z-20 relative w-9/12 p-20 space-y-5 text-white ">
            <p className='bg-[#041C3780] inline px-2 py-1 border-l-4'>Logistics & Supply Chain Solutions</p>
            <h5 className="font-rubik text-7xl font-bold leading-[71.1px]"> Your Gateway to any Destination in the World</h5>
            <h1 className="font-krub text-lg">In augue ligula,
              feugiat ut nulla consequat. Ut est lacus, molestie in arcu no,
              iaculis vehicula ipsum. Nunc faucibus,
              nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus.
            </h1>
            <button className="btns text-primary2 font-semibold bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] after:bg-white">Explore More</button>
          </div>

        </div>
      </div >

    </div >
  )
}
export default Banner