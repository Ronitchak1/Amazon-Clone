export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => {
    return basket?.reduce((total,item) => total = total + item.price ,0);
}

export const reducer = (state,action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
         
        case 'REMOVE_FROM_BAKSET':
            const index = state.basket.findIndex(
                (item) => item.id === action.id
            );

            let newBasket = [...state.basket]; 

            if( index>=0 ){
                newBasket.splice(index,1);    
            }
            else{
                console.warn('Cant Remove Product')
            }

            return {
                ...state,
                basket : newBasket
            };
            
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        default:
            return state;    
    }
};