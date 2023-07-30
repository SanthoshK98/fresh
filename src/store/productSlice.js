import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { useDispatch } from "react-redux";

const initialState ={
    data:[],
    status:"idle"
}

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
//        fetchProducts(state,action){
//  
//        }   
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state,action)=>{
            state.status  = "loading"
          })

  builder.addCase(getProducts.fulfilled,(state,action)=>{
    state.data =action.payload
    state.status = "Data Got Succesfully"
  })
  builder.addCase(getProducts.rejected,(state,action)=>{
    state.status  = "Error"
  })
    }


})


export default productSlice.reducer;
export const { fetchProducts} = productSlice.actions;


export const getProducts = createAsyncThunk('products/get',async()=>{
    const output =  await   axios.get("https://fakestoreapi.com/products").then((response) => {
        console.log(response.data)
        const result = response.data
        return result;

})
return output
})

// export function getProducts(){
//     return async function getProductsThunk(dispatch,getState){
     
//             dispatch(fetchProducts(result))
//           });
//     }
// }