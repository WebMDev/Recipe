import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import './App.css';
import Signup from "./page/Signup";
import Login from "./page/Login";
import Navbar from './components/Navbar';
import Home from "./page/Home";
import Recipe from "./page/Recipe";
import Footer from './components/Footer';
import AddRecipe from "./page/Recipes/AddRecipe";
// import { useState } from "react";
// import RefreshHandler from "./RefreshHandler";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {

  // const [isAuthenticate, setIsAuthenticate] = useState(false);

  // const PrivateRoute = ({element}) => {
  //   return isAuthenticate ? element : <Navigate to={'/login'}/>
  // }

  return (
    <BrowserRouter>
      {/* <RefreshHandler setIsAuthenticate={setIsAuthenticate} /> */}

      <Routes>
        {/* Redirect root to signup */}
        <Route path="/" element={<Navigate to="/signup" />} />

        {/* Auth routes without navbar/footer */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Routes with navbar and footer */}
        <Route path="/" element={<MainLayout />}>

          {/* Now these will be rendered inside MainLayout */}
          <Route path="/home" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
