import img from "../assets/recipe/recipe-2-630x785.jpg";
import { GiCurvyKnife } from "react-icons/gi";
import Heading from '../utility/Heading';
import avatar from "../assets/avatar/avatar-200x200.jpg"
import Img from "../assets/taxonomies-bg.svg";

const Recipe = () => {

    // const [recipe, setRecipe] = useState([]);

    // const fetchRecipes = async () => {

    //     try {
    //         const url = 'http://localhost:8000/api/recipe';

    //         const response = await fetch((url) => {
    //             method: "GET",
    //             'Authorization': ,
    //         })
    //     } catch (error) {
            
    //     }
    // }

  return (
    // Recipe page section
    <section className="h-[100vh] flex flex-col justify-center items-center w-full bg-[#F4F4F4]">
        <div className="flex justify-center items-center w-[800px] h-[850px] my-[40px] border-1 rounded-[30px] border-[#DDDDDD] bg-red-400 relative font-(family-name:--font-family)">

            <img src={img} className="absolute z-2 left-[-12%] rounded-[30px] w-[400px] min-h-[80%]" alt="" />
            {/* {image} */}

            <div className="flex flex-col items-start bg-amber-300 w-[400px] min-h-[80%] border-0 rounded-[30px] border-[#A1A1A1] absolute z-1 top-[50%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 py-10">

                <div className="mb-10 text-2xl text-center px-[30px] bg-white w-full">
                    <h2 className="text-[36px] font-[700]">
                        {/* {ingredients} */}
                        Ingredient    
                    </h2> 
                </div>
                
                <ul className="flex flex-col items-center px-10 text-[18px] font-[500]">
                    <li className="flex justify-center items-center gap-2 pb-3"><GiCurvyKnife className="text-[olive] text-xl"/>pasta (like penne)</li> 
                    <li className="flex justify-center items-center gap-2 pb-3"><GiCurvyKnife className="text-[olive] text-xl"/>mushrooms</li> 
                    <li className="flex justify-center items-center gap-2 pb-3"><GiCurvyKnife className="text-[olive] text-xl"/>garlic</li> 
                    <li className="flex justify-center items-center gap-2 pb-3"><GiCurvyKnife className="text-[olive] text-xl"/>cream (or heavy cream)</li> 
                    <li className="flex justify-center items-center gap-2 pb-3"><GiCurvyKnife className="text-[olive] text-xl"/>butter or olive oil</li> 
                    <li className="flex justify-center items-center gap-2 pb-3"><GiCurvyKnife className="text-[olive] text-xl"/>parmesan cheese</li>
                    <li className="flex justify-center items-center gap-2 pb-3"><GiCurvyKnife className="text-[olive] text-xl"/>seasonings like salt and pepper</li>
                </ul>
            </div>            
        </div>
        <div className="common-padding w-full h-[450px] relative bg-white">
            <img src={Img} className="h-[50%] absolute left-0 bottom-[0px] w-full" alt="" />
            
            <div className="flex justify-center items-center gap-8 p-6 absolute top-[20px]">

                <div className="w-[50%] px-5 ">
                    {/* {description} */}
                    <Heading name={'With a Delicious Description'} desc={'Savor the perfect comfort dish — penne pasta tossed in a rich, velvety cream sauce infused with garlic and butter, generously loaded with sautéed mushrooms. Finished with a sprinkle of parmesan cheese and balanced with a touch of salt and pepper, this dish delivers a creamy, savory flavor in every bite.'}/>
                    <p className="font-[500] uppercase">
                        {/* {steps} */}
                        Boil, Cook, mix with sauce
                    </p>
                </div>

                <div className="flex flex-col items-start gap-4 px-5 border-l-2 border-[#DDDDDD]">

                    <h4 className="text-xl font-[800] w-[80%]">
                        {/* {titile} */}
                        Creamy Garlic Mushroom Penne Pasta
                    </h4>
                    <p className="font-[500] uppercase">
                        {/* {tags}  */}
                        Italian
                    </p>

                    <div className="flex justify-center items-center gap-3 ">

                        <img src={avatar} className="h-[50px] w-[50px] rounded-[50%]" alt="" />

                        <span className="flex flex-col items-start font-[700]">

                            <h6 className="text-[18px]">
                                {/* {author} */}
                                Olivia Thompson
                            </h6>
                            <p className="text-[#A1A1A1]">Recipe Author</p>
                        </span>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Recipe;