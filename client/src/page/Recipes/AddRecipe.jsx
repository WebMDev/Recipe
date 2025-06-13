import React from 'react';
import Img from "../../assets/taxonomies-bg.svg"
import Heading from '../../utility/Heading';
import ButtonRed from '../../utility/ButtonRed';


const AddRecipe = () => {
  return (
    // AddRecipe section for create recipes
    <section className="w-full">
      <div className="h-[350px] flex justify-center items-center relative bg-[#F4F4F4] w-full">
        <img src={Img} className="h-[50%] absolute left-0 bottom-0 w-full" alt="" />
        <Heading name={"Add Recipe"} desc={"Discover and share your favorite recipes on Platea! Add your own delicious dishes and inspire others with new culinary creations."}/>
      </div>

      <div className="h-[100vh] flex justify-center items-center my-[40px] w-full">
        <form className="flex flex-col items-center justify-center w-[65%] border-1 border-[#D4D4D4] rounded-2xl p-5">
          <div className="w-full flex justify-between items-center gap-5 py-3">
            <label htmlFor="" className="w-1/4 text-[14px] font-[700] uppercase">Title</label>
            <input type="text" name="" id="" className="border-1 rounded-[8px]  w-3/4 border-[#D4D4D4] px-4 py-4" />
          </div>

          <div className="w-full flex justify-between items-center gap-5 py-3">
            <label htmlFor="" className="w-1/4 text-[14px] font-[700] uppercase">Description</label>
            <textarea name="" id="" className="border-1 rounded-[8px] px-4 py-4 w-3/4  border-[#D4D4D4]" cols="30" rows="10"></textarea>
          </div>

          <div className="w-full flex justify-start items-center gap-4 py-3">
            <label htmlFor="" className="w-1/4 text-[14px] font-[700] uppercase">Image</label>
            <input type="file" name="" id="" className="border-1 rounded-[8px] w-fit border-[#D4D4D4] px-3 py-4" placeholder='Choose Image' />
          </div>

          <div className="w-full flex justify-start items-center gap-5 py-3">
            <label htmlFor="" className="w-1/4 text-[14px] font-[700] uppercase">Ingredients</label>
            <input type="checkbox" name="" id="" className="border-1 w-fit rounded-[8px] border-[#D4D4D4] px-4 py-4" />
          </div>

          <div className="w-full flex justify-between items-center gap-5 py-3">
            <label htmlFor="" className="w-1/4 text-[14px] font-[700] uppercase">Steps</label>
            <input type="text" name="" id="" className="border-1 rounded-[8px]  w-3/4 border-[#D4D4D4] px-4 py-4" />
          </div>

          <div className="w-full flex justify-between items-center gap-5 py-3">
            <label htmlFor="" className="w-1/4 text-[14px] font-[700] uppercase">Tags</label>
            <input type="text" name="" id="" className="border-1 rounded-[8px]  w-3/4 border-[#D4D4D4] px-4 py-4" />
          </div>

          <div className="w-full flex justify-between items-center gap-5 py-3">
            <label htmlFor="" className="w-1/4 text-[14px] font-[700] uppercase">Author</label>
            <input type="text" name="" id="" className="border-1 rounded-[8px]  w-3/4 border-[#D4D4D4] px-4 py-4" />
          </div>

          <ButtonRed name={"Submit"} style={"mt-5"} />
        </form>
      </div>
    </section>
  )
}

export default AddRecipe;