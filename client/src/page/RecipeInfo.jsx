import img from "../assets/recipe/recipe-2-630x785.jpg";
import { GiCurvyKnife } from "react-icons/gi";
import Heading from '../utility/Heading';
import avatar from "../assets/avatar/avatar-200x200.jpg"
import Img from "../assets/taxonomies-bg.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipeInfo = () => {

    const [recipe, setRecipe] = useState({});

    const { id } =  useParams();

    const fetchRecipes = async () => {

        const url = `http://localhost:8000/api/recipe/${id}`;

        const response = await fetch(url);

        const data = await response.json();

        setRecipe(data);
    }

    useEffect(() => {
        fetchRecipes();
    }, [id]);

    useEffect(() => {
        console.log(recipe); // ✅ Check what's inside
    }, [recipe]);


  return (
    // Recipe page section
    <section className="min-h-[100vh] flex flex-col justify-center items-center w-full bg-[#F4F4F4]">
        <div className="flex justify-center items-center w-[800px] min-h-[550px] my-[40px] border-1 rounded-[30px] border-[#DDDDDD] bg-red-400 relative font-(family-name:--font-family)">

            <img src={recipe.image} className="absolute z-2 left-[-12%] rounded-[30px] w-[400px] min-h-[80%]" alt="" />
            

            <div className="flex flex-col items-center gap-6 bg-amber-300 w-[400px] min-h-[70%] border-0 rounded-[30px] border-[#A1A1A1] absolute z-1 top-[50%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 py-10">
                
                <div className="flex flex-col items-start justify-center">
                    <h4 className="text-xl font-[800] w-[80%] text-[red]">
                        {recipe.title}
                        
                    </h4>
                    <p className="font-[500] uppercase">
                        {recipe.description}
                    </p>
                </div>

                <div className="flex justify-start items-center gap-3 w-[75%]">

                    <img src={avatar} className="h-[50px] w-[50px] rounded-[50%]" alt="" />

                    <span className="flex flex-col items-start font-[700]">

                        <h6 className="text-[18px]">
                            {recipe.author?.username}
                            
                        </h6>
                        <p className="text-[#A1A1A1]">Recipe Author</p>

                    </span>

                </div>
                
                <span className="text-[red] w-[75%]">{recipe.tags}</span>
                
            </div>            
        </div>

        <div className="w-full min-h-[560px] flex justify-between items-start relative bg-white common-padding">
            
            <div className="flex justify-between items-start w-full pt-7">
                <img src={Img} className="h-[30%] absolute left-0 bottom-[0px] w-full" alt="" />

                <div className="w-[40%] flex flex-col items-center gap-8 mr-10 border-r-2 border-[#DDDDDD]">

                    <h2 className="text-[36px] font-[600] border-b-2 border-[red]">Ingredient</h2> 

                    <ul className="flex flex-col items-end text-[15px] font-mono">
                    
                        {/* {console.log(recipe.ingredients)} */}
                        {recipe.ingredients && recipe.ingredients.map((item, index) => (
                            
                            <li className="flex justify-center items-center gap-2 text-[14px] w-full pb-2" key={index} >
                                <GiCurvyKnife className="text-[olive] text-[18px]"/>
                                <span className="w-full">
                                    {typeof item === "string" ? item : item.ingredient}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="text-[16px] w-[75%] flex flex-col gap-8 ">

                    <h2 className="text-[36px] font-[600] border-b-2 border-[red] w-fit">Prepare the Ingredients</h2>

                    <ul className="flex flex-col items-start gap-4 ">
                        {recipe.steps && recipe.steps.map((step, index) => (

                            <li key={index} className="mb-2 "> - {step}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RecipeInfo;