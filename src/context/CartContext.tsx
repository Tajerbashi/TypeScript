import {
  createContext,
  useContext as UseContextReact,
  ReactNode,
  useState,
} from "react";

type CartProviderProp = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  qty: number;
};

type CartContext = {
  getItemQty: (id: number) => number;
  addItemQty: (id: number) => void;
  decreaseItemQty: (id: number) => void;
  removeItemQty: (id: number) => void;
  cartQty: number;
  cartItems: CartItem[];
};

const CartContext = createContext({} as CartContext);

export function useCartContext() {
  return UseContextReact(CartContext);
}

export function CartProvider({ children }: CartProviderProp) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartQty = cartItems.reduce((qty, item) => item.qty + qty, 0);
  function getItemQty(id: number) {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  }
  function addItemQty(id: number) {
    setCartItems((curItem) => {
      if (curItem.find((item) => item.id == id) == null) {
        return [...curItem, { id, qty: 1 }];
      } else {
        return curItem.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseItemQty(id: number) {
    setCartItems((curItem) => {
      if (curItem.find((item) => item.id == id)?.qty === 1) {
        return curItem.filter((item) => item.id != id);
      } else {
        return curItem.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeItemQty(id: number) {
    setCartItems((curItem) => {
      return curItem.filter((item) => item.id !== id);
    });
  }
  return (
    <CartContext.Provider
      value={{
        getItemQty,
        addItemQty,
        decreaseItemQty,
        removeItemQty,
        cartQty,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
