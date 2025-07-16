import React, { useEffect } from 'react';
import HERO from "../assets/search-hero-2.jpg"
import FoodSafe from "../assets/svgImg/foodSafe.svg"
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Card from '../utility/Card';
import ButtonRed from '../utility/ButtonRed';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipe } from '../redux/slices/AuthSlice';
import { Link } from 'react-router-dom';

const Hero = () => {

  const dispatch = useDispatch();

  const { recipes, loading, error} = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchRecipe());
  }, [dispatch]);

  // console.log("rec", recipes);

  return (
    // Hero Section
    <section className="font-(family-name:--font-family)">

        {/* Hero Search Section */}
        <div className="mt-[5px] px-[12px] relative w-full">
            <img src={HERO} className="rounded-2xl w-full" alt="" />
            <div className="absolute top-0 bottom-0 left-[14%] py-[200px] flex flex-col justify-start h-full w-[680px]">

              <h3 className="text-[52px] leading-[1.1] mb-6 font-[600] w-full">You don't know how to make the dish you have in mind?</h3>

              <p className="text-[18px] leading-[1.7] mb-15">Feed your imagination and spark your creativity. From cravings to creations, let your ideas flourish and uncover the perfect recipe waiting to be discovered.</p>

              <div className="relative w-full flex items-center p-[6px] mb-5 rounded-[16px] bg-white">

                <img src={FoodSafe} className="p-[16px]" alt="" />
                
                <input type="text" className="p-[12px_24px] w-full" placeholder="Find what do you want to cook today " />

                <ButtonRed name={<FaMagnifyingGlass />} style={'p-[18px] text-[22px] rounded-[12px]'}/>
              </div>

              <p className="text-[#464646] text-[14px]">Type a keyword and discover recipes that turn your cravings into delicious reality!</p>
            </div>
        </div>

        {/* Hero Food-Card Section */}
        <div className="pb-[60px] flex flex-col w-full">
          <ul className="flex justify-center items-center gap-10 py-15">
            <li className="text-[22px] font-[500] text-black">Latest Recipes</li>
            <li className="text-[22px] font-[500] text-[#A1A1A1]">Most Popular Recipes</li>
            <li className="text-[22px] font-[500] text-[#A1A1A1]">Fatest Recipes</li>
            <li className="text-[22px] font-[500] text-[#A1A1A1]">Editor's Choice</li>
          </ul>
          <div className="flex justify-start items-center px-2">

            { recipes && recipes.length > 0 ? (
              recipes.slice(0, 5).map((item, index) => (
                <Link key={item._id} to={"/recipeinfo"}>
                  <Card 
                    key={item._id || index}
                    img={item.image || img}
                    title={item.title}
                    desc={item.description}
                  />
                </Link>
              ))
            ) : (
              !loading && <p className="col-span-5 text-center">No recipe found.</p>
              
            )}

            {/* <Card />
            <Card />
            <Card />
            <Card /> */}
          </div>
        </div>
    </section>
  )
}

export default Hero;