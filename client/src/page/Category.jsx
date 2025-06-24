import React from 'react'
import Img from "../assets/taxonomies-bg.svg";
import Heading from '../utility/Heading';

const Category = () => {
  return (
    <div className=" bg-[#F4F4F4]">
      <div className="h-[410px] flex flex-col justify-center items-center gap-0 relative w-full">
        <img src={Img} className=" absolute left-0 bottom-0 w-full" alt="" />
        <Heading name={"Healthy"} desc={"Stay balanced with nutritious recipes using wholesome ingredients. From salads to healthy mains, enjoy flavorful dishes that are good for your body and mind."} style={"w-[70%]"} />
        <span className="px-4 py-2 mt-[-30px] text-[#4f4545] text-[11px] border-1 border-[#D4D4D4] rounded-3xl">Total 3 Recipes</span>
      </div>
    </div>
  )
}

export default Category