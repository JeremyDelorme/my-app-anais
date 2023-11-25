import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Define the initial state for the cart
interface CartState {
    items: any[]; // Array to store items in the cart
}

const initialState: CartState = {
    items: [], // Initial empty items array
};

// Define action types
type CartAction = { type: 'ADD_ITEM_TO_CART'; payload: any /* Define your payload type here */ };

// Create the context
export const CartContext = createContext<{ cartState: CartState; dispatch: React.Dispatch<CartAction> }>({
    cartState: initialState,
    dispatch: () => null,
});

// Create a custom hook to use the cart context
export const useCart = () => {
    return useContext(CartContext);
};

// Reducer function to manage state changes
const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            // Logic to add an item to the cart
            return {
                ...state,
                items: [...state.items, action.payload], // Add the new item to the items array
            };
        // Add other cases for different actions like removing items, updating quantities, etc.
        default:
            return state;
    }
};

// Cart provider component to wrap the app and provide cart functionality
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState);

    return <CartContext.Provider value={{ cartState, dispatch }}>{children}</CartContext.Provider>;
};
