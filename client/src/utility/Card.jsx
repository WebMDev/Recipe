import React from 'react';
// import img from "../assets/recipe/recipe-2-550x690.jpg";
import STAR from "../assets/svgImg/star.svg";
import Heart from "../assets/svgImg/heart.svg";
import Bookmark from "../assets/svgImg/bookmark.svg";
import Watch from "../assets/svgImg/watch.svg";
import ct1 from "../assets/svgImg/ct-1.svg";
import Cheaf from "../assets/svgImg/cheaf.svg";
import {Infocard} from "../assets/contant";


const Card = ({ img, desc , title , style}) => {
  return (
    // Card Section with Utility
    <div className={`flex flex-col items-center px-2 ${style}`}>
        <div className="relative w-[328px] h-[428px] pb-[12px]">
            <img src={img} className="w-full h-full rounded-xl object-center" alt={title} />

            <ul className="w-full pt-2 flex justify-between items-start absolute top-[0.5rem] left-[1rem]">

                <li className="flex items-center text-[14px] p-[5px_10px] rounded-3xl bg-white">
                    <img src={STAR} alt="" />
                    <span className="pl-2 font-[500]">4.8</span>
                </li>

                <li className="relative flex flex-col gap-4 pr-7">
                    <img src={Heart} className=" h-[35px] w-[35px] bg-white p-[6px] rounded-[50%]" alt="" />
                    <span className="p-[8px] bg-white rounded-[50%]">
                        <img src={Bookmark} className=" h-[20px] w-[20px]" alt="" />
                    </span>
                </li>

            </ul>
        </div>

            {
                Infocard.map((item, _id) => {
                    return (
                        <div className="flex flex-col w-[328px]" key={_id}>
                            <h6 className="text-[red] font-[500] pt-[5px] text-[16px]" heading={item.heading}>{title}</h6>
                            <p className="text-[22px] font-[600] pt-[5px]">{desc}</p>

                            <ul className="flex justify-start items-center gap-5 pt-[15px]">

                                <li className="flex justify-center items-center text-[#A1A1A1] gap-2">
                                    <img src={Watch} alt="" className="text-[#A1A1A1]"/>
                                    <span className="text-[14px]">5 min</span>
                                </li>

                                <li className="flex justify-center items-center text-[#A1A1A1] gap-2">
                                    <img src={ct1} className="h-[17px] text-[#A1A1A1]" alt=""/>
                                    <span className="text-[14px]">Lebanese</span>
                                </li>

                                <li className="flex justify-center items-center text-[#A1A1A1] gap-2">
                                    <img src={Cheaf} alt="" className="text-[#A1A1A1]"/>
                                    <span className="text-[14px]">Beginner</span>
                                </li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
  )
}

export default Card;