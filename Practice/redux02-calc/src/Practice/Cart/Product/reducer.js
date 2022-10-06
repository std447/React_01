import { INCREMENT, DECREMENT } from "./action";

const initialState = [
  {
    id: 1,
    title: "Prod1",
    price: 5,
    qty: 1,
  },
  {
    id: 2,
    title: "Prod2",
    price: 10,
    qty: 1,
  },
  {
    id: 3,
    title: "Prod3",
    price: 15,
    qty: 1,
  },
];

const ProductReducer = (state = initialState, action,id) => {
  console.log("@Cc action:",action)
 
    
      switch (action.type) {
        case INCREMENT:
         return state.map((item)=>{
            const copyItem = {...item}
            const {id} = copyItem;
            if(action.param === id && copyItem.qty<5){
              copyItem.qty= copyItem.qty+1;
            }
            return copyItem;
          })
          
        case DECREMENT:
          return state.map((item)=>{
            const copyItem = {...item}
            const {id} = copyItem;
            if(action.param === id && copyItem.qty>0){
              copyItem.qty= copyItem.qty-1;
            }
            return copyItem;
          })
        default:
          return state;
      }
    
  
  return state;
};

export default ProductReducer;
