export const AddToCart = "ADD";
export const RemoveFromCart = "REMOVE";
export const SelectedCart = "SELECTEDCART";
export const Increment = "INCREMENT";
export const Decrement = "DECREMENT";
export const toRemove = (payload) => {
    return {
      type: RemoveFromCart,
      payload: payload,
    };
  };
  
  export const toAdd = (payload) => {
    return {
      type: AddToCart,
      payload: payload,
    };
  };

  export const itemDecrement = (payload) => {
    return {
      type: Decrement,
      payload: payload,
    };
  };

 

  export const itemIncrement = (payload) => {
    return {
      type: Increment,
      payload: payload,
    };
  };

  export const toSelect = (payload) => {
    return {
      type: SelectedCart,
      payload: payload,
    };
  };