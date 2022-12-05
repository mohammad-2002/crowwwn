import { createContext, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, CartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === CartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== CartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === CartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, CartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== CartItemToClear.id);
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };

    case "SET_IS_CART_OPEN":
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unhandled TypeError ${type} at cartContext`);
  }
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  ClearItemFromCart: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [{ isCartOpen,cartItems,cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  // const [isCartOpen, setIsCartOpen] = useState(false);

  // const [cartItems, setcartItems] = useState([]);
  // const [cartTotal, setcartTotal] = useState(0);
  // useEffect(() => {
  //   const newCartTotal = cartItems.reduce((cartTotal, cartItem)=> cartTotal + cartItem.quantity * cartItem.price,0);
  //   setcartTotal(newCartTotal);

  // }, [cartItems])

  const updateCartItemsReducer = (newCartItems) => {
    const newCartTotal = newCartItems.reduce(
      (cartTotal, cartItem) => cartTotal + cartItem.quantity * cartItem.price,
      0
    );

    
    dispatch({type:'SET_CART_ITEMS',payload:{
      cartItems:newCartItems,
      cartTotal:newCartTotal
    }})

  };

  const setIsCartOpen=(bool)=>{
    dispatch({type:'SET_IS_CART_OPEN',payload:bool})
  }


  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (CartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, CartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const ClearItemFromCart = (CartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, CartItemToClear);
    updateCartItemsReducer(newCartItems);
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    removeItemFromCart,
    ClearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
