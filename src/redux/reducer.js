import { ADD_TO_CART, REMOVE_FROM_CART } from "./action";

const intialState = {
    cart:[]
}

export const reducer = (state=intialState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            return{
                ...state,
                cart:[{...action.payload,isCart:true},...state.cart]
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cart:state.cart.filter((data)=>data.id!==action.payload.id)
            }
        default:
            return state;
    }
}