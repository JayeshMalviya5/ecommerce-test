import { InitialState } from "./Index";
import {
  SelectedCart,
  AddToCart,
  RemoveFromCart,
  Increment,
  Decrement,
} from "./Action";

export const reducer = (state = InitialState, action) => {
  console.log("I am redux state", state);
  switch (action.type) {
    case AddToCart:
      if (!state.inCart.includes(action.payload)) {
        state.inCart.push(action.payload);
        let amount = 0;
        for(let i = 0;i<state.toRenderProduct.length;i++){
              if(action.payload == state.toRenderProduct[i].id){
                amount = state.toRenderProduct[i].price;
              }
        }
        state.units.push({ id: action.payload, count: 1, price: amount });
        return { ...state };
      }

    case RemoveFromCart:
      let index = state.inCart.indexOf(action.payload); // Get the index of the value to be removed
        if (index !== -1) {
          state.inCart.splice(index, 1); // Remove the value at the specified index
          state.units = state.units.filter((k)=>{
            return k.id!=action.payload;
          })
        }
      return { ...state };
    case SelectedCart:
      const newSelectedCategory = action.payload;
      return { ...state, toRenderProduct: newSelectedCategory };

    case Increment:
      const tempUnit = state.units.map((item) => {
        if (item.id == action.payload) {
          item.count = item.count + 1;
        }
        return item;
      });
      return { ...state, units: tempUnit };

    case Decrement:
      let toBeRemove = false;
      const tempUnit2 = state.units.map((item) => {
        if (item.id == action.payload) {
          if (item.count == 1) {
            item.count = item.count - 1;
            toBeRemove = true;
          } else {
            item.count = item.count - 1;
          }
        }
        return item;
      });
      state.units = tempUnit2;
      if (toBeRemove) {
        let index = state.inCart.indexOf(action.payload); // Get the index of the value to be removed
        if (index !== -1) {
          state.inCart.splice(index, 1); // Remove the value at the specified index
          state.units = state.units.filter((k)=>{
            return k.id!=action.payload;
          })
        }
      }
      return { ...state, };

    default:
      return { ...state };
  }
};
