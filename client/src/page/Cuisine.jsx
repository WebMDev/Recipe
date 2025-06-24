import React from 'react'
import Img from "../assets/taxonomies-bg.svg";
import Heading from '../utility/Heading'

const Cuisine = () => {
  return (
    <div>
      <div className="h-[350px] flex justify-center items-center relative bg-[#F4F4F4] w-full">
        <img src={Img} className="h-[50%] absolute left-0 bottom-0 w-full" alt="" />
        <Heading name={"Cuisione"} desc={"Explore a world of diverse cuisines from all corners of the globe. Discover unique recipes and rich food cultures that cater to every taste and preference!"} style={"w-[80%]"}/>
      </div>
    </div>
  )
}

export default Cuisine