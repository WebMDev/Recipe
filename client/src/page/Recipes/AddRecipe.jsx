import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipeThunk } from "../../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { handleError } from "../../util";
import Img from "../../assets/taxonomies-bg.svg";
import Heading from "../../utility/Heading";
import ButtonRed from "../../utility/ButtonRed";

const AddRecipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //adjust slice if needed
  const { loading } = useSelector((state) => state.auth);

  // Form Input Data
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);

  const handleAddField = (setter, values) => {
    setter([...values, ""]);
  };

  const handleChangeField = (index, value, setter, values) => {
    const updated = [...values];
    updated[index] = value;
    setter(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    ingredients.forEach((item) => formData.append("ingredients", item));
    steps.forEach((step) => formData.append("steps", step));
    tags.split(",").forEach((tag) => formData.append("tags", tag.trim()));
    if (image) formData.append("image", image);

    try {
      await dispatch(createRecipeThunk(formData)).unwrap();
      navigate("/");
    } catch (error) {
      handleError(error.message || "Failed to create recipe");
    }
  };

  return (
    // AddRecipe section for create recipes
    <section className="w-full min-h-[100vh] flex justify-center items-center flex-col gap-4">
      <div className="h-[350px] flex justify-center items-center relative bg-[#F4F4F4] w-full">
        <img src={Img} className="h-[50%] absolute left-0 bottom-0 w-full" alt="" />
        <Heading name={"Add Recipe"} desc={"Discover and share your favorite recipes on Platea! Add your own delicious dishes and inspire others with new culinary creations."}/>
      </div>

      <div className="flex justify-center items-center gap-6 m-[20px] border-0 rounded-4xl shadow-2xl px-5 py-6 w-[50%]">
        <form className="flex flex-col items-start w-full gap-6 p-8" onSubmit={handleSubmit} encType="multipart/form-data">

          <label className="text-[14px] font-[700] uppercase">Title</label>
          <input className="border-2 border-gray-400 rounded w-[100%] h-[50px] px-3" value={title} onChange={(e) => setTitle(e.target.value)} required />

          <label className="text-[14px] font-[700] uppercase">Description</label>
          <textarea className="border-2 border-gray-400 rounded w-[100%] h-[50px] pt-2.5 px-3" value={description} onChange={(e) => setDescription(e.target.value)} required />

          <label className="text-[14px] font-[700] uppercase">Ingredients</label>
          {ingredients.map((item, index) => (
            <input
              className="border-2 border-gray-400 rounded w-[100%] h-[50px] px-3"
              key={index}
              value={item}
              onChange={(e) => handleChangeField(index, e.target.value, setIngredients, ingredients)}
              required
            />
          ))}
          <button type="button" onClick={() => handleAddField(setIngredients, ingredients)}>
            + Add Ingredient
          </button>

          <label className="text-[14px] font-[700] uppercase">Steps</label>
          {steps.map((step, index) => (
            <textarea
              className="border-2 border-gray-400 rounded w-[100%] h-[50px] pt-2.5 px-3"
              key={index}
              value={step}
              onChange={(e) =>
                handleChangeField(index, e.target.value, setSteps, steps)
              }
              required
            />
          ))}
          <button type="button" onClick={() => handleAddField(setSteps, steps)}>
            + Add Step
          </button>

          <label className="text-[14px] font-[700] uppercase">Tags (comma separated)</label>
          <input className="border-2 border-gray-400 rounded w-[100%] h-[50px] px-3" value={tags} onChange={(e) => setTags(e.target.value)} />

          <label className="text-[14px] font-[700] uppercase">Image</label>
          <input type="file" className="border-2 border-gray-400 rounded w-[50%] h-[50px] pt-2.5 px-3" onChange={(e) => setImage(e.target.files[0])} accept="image/*" />

          <ButtonRed name={loading ? "Submitting..." : "Recipe Submit"} style={"mt-5"} type="submit" disabled={loading} />
        </form>
      </div>
    </section>
  );
};

export default AddRecipe;
