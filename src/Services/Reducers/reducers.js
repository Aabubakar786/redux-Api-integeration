import { ADD_TO_CART,REMOVE_TO_CART } from "../Consants";
const initialState = {
    cartData:[]
}
export default function cardItems(state=[],actions){
    switch(actions.type){
        case 'ADD_TO_CART':
            console.log('reducers',actions)
            return[
                ...state,
                {cartData:actions.data}
            ]
        break;
        case 'REMOVE_TO_CART':
            console.log('reducers REMOVE',actions)
            state.pop();
            return[
                ...state,

            ]
        break;
        default:
        return state
    }
}