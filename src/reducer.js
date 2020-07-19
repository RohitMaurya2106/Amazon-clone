export const initialState = {
    basket: [{
        id:"12321341" ,
        title:"The lean Startup: How constant inovation creates radically successful businesses paperback" ,
        price:11.96 ,
        rating:5 ,
        image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
    },
],
    user: null,
};

export const getBasketTotal = (basket)=>
basket?.reduce((amount,item)=> item.price + amount,0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket,action.item],
            };
            
        case 'REMOVE_FROM_BASKET':

            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index >=0){
                newBasket.splice(index, 1);
            }
            else{
                console.warn(`cant remove Product (id: ${action.id}) as its not present`);
            }
            return{...state, basket: newBasket};
            
        default:
            return state;
    }
};

export default reducer;