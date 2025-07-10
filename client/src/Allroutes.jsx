import React from 'react';
import { Route, Routes, useLocation  } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from "./page/Signup";
import Login from "./page/Login";

import Home from "./page/Home";
import Recipes from "./page/Recipe";
import Cuisines from "./page/Cuisine";
import Categories from "./page/Category";
import Blog from "./page/Blog";
import Features from "./page/Feature";
import Favorites from "./page/Favorite";
import AddRecipe from "./page/Recipes/AddRecipe";
import CreateRecipeForm from "./page/Recipes/CreateRecipeForm";
import RecipeInfo from "./page/RecipeInfo";

const Allroutes = () => {

    const location = useLocation();
    // console.log(location.pathname);
    
    const hiddenRoutes = location.pathname === "/login" || location.pathname === "/signup";
    // console.log(hiddenRoutes);
    
    return (
        <>

            {!hiddenRoutes && <Navbar />}
            <Routes>
            
                {/* Public pages */}
                <Route path="/" element={<Home />} />

                {/* Now these will be rendered inside MainLayout */}
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/cuisines" element={<Cuisines />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/features" element={<Features />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/addrecipe" element={<AddRecipe />} />
                <Route path="/createRecipeForm" element={<CreateRecipeForm />} />
                <Route path="/recipeinfo/:id" element={<RecipeInfo />} />
            </Routes>

            {!hiddenRoutes && <Footer />}
        </>
    )
}

export default Allroutes;