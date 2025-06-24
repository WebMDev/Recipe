import React from 'react'
import Img from "../assets/taxonomies-bg.svg";
import Heading from '../utility/Heading';

const Blog = () => {
  return (
    <div>
      <div className="h-[350px] flex justify-center items-center relative bg-[#F4F4F4] w-full">
        <img src={Img} className="h-[50%] absolute left-0 bottom-0 w-full" alt="" />
        <Heading name={"Blog"} desc={"Discover tips, trends, and stories to enhance your culinary journey. From expert advice to creative ideas, explore everything food enthusiasts need to stay inspired!"} style={"w-[70%] text-black font-[500]"} />
      </div>
    </div>
  )
}

export default Blog