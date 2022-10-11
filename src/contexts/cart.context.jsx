import { createContext,useState,useEffect } from "react";

const addCartItem = (cartItems,productToAdd) =>{
   const existingCartItem = cartItems.find((cartItem)=>cartItem.id === productToAdd.id);

   if(existingCartItem){
      return cartItems.map((cartItem)=> cartItem.id === productToAdd.id ?
        {...cartItem, quantity:cartItem.quantity+1} : cartItem
      )
   }

   return [...cartItems, {...productToAdd, quantity:1}];
}

const removeCartItem = (cartItems,CartItemToRemove) =>{
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === CartItemToRemove.id);
 
    if(existingCartItem.quantity === 1){
       return cartItems.filter(cartItem => cartItem.id !== CartItemToRemove.id);
    }
    return cartItems.map((cartItem)=> cartItem.id === CartItemToRemove.id ?
    {...cartItem, quantity:cartItem.quantity-1} : cartItem
  )

}

const clearCartItem = (cartItems,CartItemToClear)=>{
        return cartItems.filter(cartItem => cartItem.id !== CartItemToClear.id)    
}

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen : ()=>{}, 
    cartItems:[],
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    ClearItemFromCart:()=>{},
    cartTotal:0
})

export const CartProvider = ({children})=>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    const [cartItems, setcartItems] = useState([]);
    const [cartTotal, setcartTotal] = useState(0);
    useEffect(() => {
      const newCartTotal = cartItems.reduce((cartTotal, cartItem)=> cartTotal + cartItem.quantity * cartItem.price,0);
      setcartTotal(newCartTotal); 
     
    }, [cartItems])
    

    const addItemToCart=(productToAdd)=>{
        setcartItems(addCartItem(cartItems,productToAdd));
    }

    const removeItemFromCart=(CartItemToRemove)=>{
        setcartItems(removeCartItem(cartItems,CartItemToRemove));
    }

    const ClearItemFromCart=(CartItemToClear)=>{
        setcartItems(clearCartItem(cartItems,CartItemToClear));
    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems,removeItemFromCart,ClearItemFromCart,cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
