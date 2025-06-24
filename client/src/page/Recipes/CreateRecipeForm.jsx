import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipeThunk } from "../../redux/slices/AuthSlice"; // adjust path
import { useNavigate } from "react-router-dom";
 
const CreateRecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth); // adjust slice if needed
 
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
 
    await dispatch(createRecipeThunk(formData)).unwrap();
    navigate("/"); // or wherever you want to redirect
  };
 
  return (
 
    <>
    <div className="min-h-[100vh] flex justify-center items-center flex-col gap-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full" >
 
      <div className="bg-[#ffffff] rounded-xl w-[50%] shadow-2xl flex justify-center items-center flex-col gap-6 m-[20px] px-5 py-6">
 
      <h2 className="text-3xl fw-bolder ">Register</h2>
 
      <form className="flex flex-col gap-6 w-[100%]" onSubmit={handleSubmit} encType="multipart/form-data">
      <h2>Create Recipe</h2>
 
      <label>Title</label>
      <input className="border-2 border-gray-400 rounded w-[100%] h-[50px] px-3" value={title} onChange={(e) => setTitle(e.target.value)} required />
 
      <label>Description</label>
      <textarea className="border-2 border-gray-400 rounded w-[100%] h-[50px] px-3" value={description} onChange={(e) => setDescription(e.target.value)} required />
 
      <label>Ingredients</label>
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
 
      <label>Steps</label>
      {steps.map((step, index) => (
        <textarea className="border-2 border-gray-400 rounded w-[100%] h-[50px] px-3"
          key={index}
          value={step}
          onChange={(e) => handleChangeField(index, e.target.value, setSteps, steps)}
          required
        />
      ))}
      <button type="button" onClick={() => handleAddField(setSteps, steps)}>
        + Add Step
      </button>
 
      <label>Tags (comma separated)</label>
      <input className="border-2 border-gray-400 rounded w-[100%] h-[50px] px-3" value={tags} onChange={(e) => setTags(e.target.value)} />
 
      <label>Image</label>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" />
 
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Create Recipe"}
      </button>
    </form>
      </div>
 
   
    </div>
   
    </>
   
  );
};
 
export default CreateRecipeForm;