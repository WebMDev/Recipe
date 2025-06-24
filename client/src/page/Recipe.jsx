import React from 'react'
import Img from "../assets/page-title-bar.jpg"
import Card from '../utility/Card'
import Heading from '../utility/Heading'

const Recipe = () => {
  return (
    <div className="min-h-[100vh] w-full flex flex-wrap justify-center items-center gap-6 py-6">

        <div className="h-[500px] flex justify-center items-center relative z-0 text-white w-full">
            <img src={Img} className="h-full object-cover brightness-60 absolute z-[-5] left-0 bottom-0 w-full" alt="" />
            <Heading name={"Recipes"} desc={"Browse a wide variety of recipes designed for every taste and skill level. From comforting classics to creative culinary delights, find the perfect dish to inspire your next meal!"} style={"text-white w-[80%]"} />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 py-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default Recipe