import React from 'react'
import Img from "../assets/search-section-background.jpg"
import Heading from '../utility/Heading'
import ButtonRed from '../utility/ButtonRed'

const Feature = () => {
  return (
    
    <div className="max-h-[60vh] w-full flex flex-wrap justify-center items-center gap-6 py-6">
      <div className="h-[500px] flex flex-col justify-center items-center relative z-0 text-white w-full">
        <img src={Img} className="h-full object-cover brightness-60 absolute z-[-5] left-0 bottom-0 w-full" alt="" />
        <Heading name={"Subscribe to Our Newsletter"} desc={"Subscribe to our newsletter and get delicious recipes, expert cooking tips, and the latest food trends."} style={"text-white"} />
        <div className="relative w-[35%] h-[68px] flex items-center p-[6px] mb-5 rounded-xl bg-white">
          <div className="w-full h-full flex justify-between border-1 border-[#D4D4D4] rounded-[10px]">
            <input type="text" placeholder="Your email address" className="w-[80%] text-black pl-5 font-[500] focus:outline-none focus:ring-0" />
            <ButtonRed name={"Sign Up"} style={"rounded-tl-[0] rounded-bl-[0] w-[20%]"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature