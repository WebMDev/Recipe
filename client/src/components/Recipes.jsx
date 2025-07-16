import React, { useEffect } from 'react';
import Heading from '../utility/Heading';
import Card from '../utility/Card';
import ButtonCommon from '../utility/ButtonCommon';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipe } from '../redux/slices/AuthSlice';
import { Link } from 'react-router-dom';

const Recipes = () => {

  const dispatch = useDispatch();

  const { recipes, loading, error} = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchRecipe());
  }, [dispatch]);

  return (
    // Recipes Section
    <section className="common-padding">
      <div className="pb-[80px]">
        <Heading name={"New Recipes"} desc={"Explore our latest recipes, from quick snacks to hearty meals and indulgent desserts."}/>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center flex-wrap gap-3 pb-[30px] text-[14px] font-[700] ">
            <ButtonCommon name={"All Recipes"} style={'p-[13px_22px] normal-case text-white bg-[red]'}/>
            
            <ButtonCommon name={"Appetizers"} style={'p-[13px_22px] normal-case border-1 border-[#DDDDDD] bg-[white]'}/>
            
            <ButtonCommon name={"Main Dishes"} style={'p-[13px_22px] normal-case border-1 border-[#DDDDDD] bg-[white]'}/>
            
            <ButtonCommon name={"Desserts"} style={'p-[13px_22px] normal-case border-1 border-[#DDDDDD] bg-[white]'}/>
            
            <ButtonCommon name={"Drinks"} style={'p-[13px_22px] normal-case border-1 border-[#DDDDDD] bg-[white]'}/>
            
            <ButtonCommon name={"Healthy"} style={'p-[13px_22px] normal-case border-1 border-[#DDDDDD] bg-[white]'}/>
            
            <ButtonCommon name={"Other Recipes"} style={'p-[13px_22px] normal-case border-1 border-[#DDDDDD] bg-[white]'}/>
          </div>
          <div className="flex justify-center items-center flex-wrap w-full">

            { recipes && recipes.length > 0 ? (
              recipes.slice(0, 8).map((item, index) => (
                <Link key={item._id} to={`/recipeinfo/${item._id}`}>
                  <Card 
                    key={item._id || index}
                    img={item.image || img}
                    title={item.title}
                    desc={item.description}
                    style={"pb-10"}
                  />
                </Link>
              ))
            ) : (
              !loading && <p className="col-span-5 text-center">No recipe found.</p>
            )}

          {/* <div className="flex justify-center items-center w-full">
            <Card />
            <Card />
            <Card />
            <Card /> */}
          </div>
        </div>

        <div className="flex justify-center items-center pt-[80px]">
          <span className="relative bg-[#DDDDDD] after:absolute after:content-[''] after:w-[560px] after:h-[1px] after:bg-[#DDDDDD] after:left-[200px]"></span>
          
          <div className="px-5">
            <ButtonCommon name={"Explore All Recipes"} style={'text-xl bg-white  border-2 border-gray-200 rounded-lg font-[600]'}/>
          </div>
          
          <span className="relative bg-[#DDDDDD] after:absolute after:content-[''] after:w-[560px] after:h-[1px] after:bg-[#DDDDDD] after:right-[200px]"></span>
        </div>

      </div>
    </section>
  )
}

export default Recipes;