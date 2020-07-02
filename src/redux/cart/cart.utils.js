
// export const addItemToCart=(cartItems,cartItemToAdd)=>{
//     const existingCartItem=cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id)
//     if(existingCartItem){
//         return cartItems.map(cartItem=>cartItem.id===cartItemToAdd.id?{...cartItem, quantity: cartItem.quantity + 1 })
//         : cartItem
//     }
//     return  [...cartItems, {...cartItemToAdd, quantity:1}]
// }



export const addItemToCart = (cartItems, cartItemToAdd ) => {
    const existingCartItem = cartItems.find(
                                            cartItem =>
                                            cartItem.id === cartItemToAdd.id
                                           )
    // Find Method if it is true it will return true or it will return undefined

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ?{...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem

            )
        // Cart Item .map returns us a new array
        // And we need to remember that we need to return new version of state 
        // So that our components know to re render properly
    }
    return [...cartItems, {...cartItemToAdd, quantity:1}]
}

export const removeItemFromCart=(cartItems, cartItemToRemove)=>{
    const existingCartItem=cartItems.find(
                                            cartItem=>
                                            cartItem.id=== cartItemToRemove.id
                                    )

        if(existingCartItem.quantity===1){
            return cartItems.filter(
                cartItem=>cartItem.id!==cartItemToRemove.id
            )
        }

        return cartItems.map(cartItem=>
                    cartItem.id===cartItemToRemove.id?
                    {
                        ...cartItem,
                        quantity:cartItem.quantity-1
                    }  : cartItem     
            )
}

