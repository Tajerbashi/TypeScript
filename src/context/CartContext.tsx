import {
  createContext,
  useContext as UseContextReact,
  ReactNode,
  useState,
} from "react";
import CartComponent from "../components/Cart/CartComponent";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartProviderProp = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  qty: number;
};

type CartContext = {
  openCart: () => void;
  closeCart: () => void;
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
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shoppint-cart",
    []
  );
  const cartQty = cartItems.reduce((qty, item) => item.qty + qty, 0);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

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
        openCart,
        closeCart,
        getItemQty,
        addItemQty,
        decreaseItemQty,
        removeItemQty,
        cartQty,
        cartItems,
      }}
    >
      {children}
      <CartComponent isOpen={isOpen} />
    </CartContext.Provider>
  );
}
