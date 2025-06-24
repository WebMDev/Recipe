import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { handleError, handlesuccess } from "../../util";

export const signUpThunk = createAsyncThunk("auth/register", 
    async (data) => {
        const response = await axios.post(
            "http://localhost:8000/api/user/register",
            data
        );
        console.log(response);
        return response.data;
    }
);

// login thunk 
export const loginThunk = createAsyncThunk(
    "auth/login",
    async(data, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                "http://localhost:8000/api/user/login",
                data
            );
            console.log(response);
            // save token to localStorage
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response?.data?.msg || "Login failed");
        }
    }
);

export const fetchRecipe = createAsyncThunk(
    "/recipe",
    async ( _ , { rejectWithValue }) => {
        try {
            const response = await axios.get(
                "http://localhost:8000/api/recipe"
            );
            // console.log(response);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response?.data?.error || "Failed fetch recipe");
        }
    }
)

// Create recipe thunk
export const createRecipeThunk = createAsyncThunk(
    "recipe/create",
    async (formData, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(
                "http://localhost:8000/api/recipe",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response);
            return response.data;
            
        } catch (err) {
            return rejectWithValue(err.response?.data?.error || "Failed to create recipe");
        }
    }
);


const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
    successMessage: null,
    successLoginMessage: null,
};

export const counterSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
         logout: (state) => {
            state.user = null;
            state.token = null;
            state.error = null;
            state.successMessage = null;
            state.successLoginMessage = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            
        },

        // when app Start & Reload then check accessiblity of user token on globally by setUserToken 
        setUserToken: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
    },
        extraReducers: (builder) => {
            builder

            // Signup thunk case
            .addCase(signUpThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.successMessage = null;
            })
            .addCase(signUpThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.user = null;
                state.successMessage = action.payload.msg || "Registration successful";
                handlesuccess(action.payload.msg || "Registration successful");
            })
            .addCase(signUpThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "An error occurred";
                handleError(action.payload || "An error occurred");
            })

            // Login Thunk Case
            .addCase(loginThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.successMessage = null;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user || null;
                state.token = action.payload.token;
                state.successLoginMessage = action.payload.msg || "Login successful";
                handlesuccess(action.payload.msg || "Login successful");
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "An error occurred during login";
                handleError(action.payload || "An error occurred during login");
            })

            //   fetch recipe
            .addCase(fetchRecipe.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.successMessage = null;
            })
            .addCase(fetchRecipe.fulfilled, (state, action) => {
                state.loading = false;
                
                //  console.log( action.payload);
                state.recipes = action.payload;
                handlesuccess("Recipes fetched successfully");
            })
            .addCase(fetchRecipe.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch recipes";
                handleError(action.payload || "Failed to fetch recipes");
            })
            
            //   create Recipe
            .addCase(createRecipeThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.successMessage = null;
            })
            .addCase(createRecipeThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.successMessage = "Recipes fetched successfully";
                handlesuccess("Recipes fetched successfully");

                //Optional: add the new recipe to the list if you want
                if  (state.recipes) {
                    state.recipes.push(action.payload);
                } else {
                    state.recipes = [action.payload];
                }
            })
            .addCase(createRecipeThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to create recipe";
                handleError(action.payload || "Failed to create recipe");
            })
        },
    }
); 

export const { logout } = counterSlice.actions;

export default counterSlice.reducer;