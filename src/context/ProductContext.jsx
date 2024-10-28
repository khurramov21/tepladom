import { createContext, useState } from "react";

const ProductContext = createContext(null);

const ProductContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [favorites, setFavorites] = useState([]);
  // Basket
  const addToBasket = (product) => {
    setBasket([...prev, product]);
  };

  const deleteFromBasket = (productId) => {
    setBasket((prev) => prev.filter((item) => item.id !== productId));
  };
  // Favorites
  const addForFavorites = (product) => {
    setFavorites([...prev, product]);
  };

  const deleteFromFavorites = (productId) => {
    setFavorites((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <ProductContext.Provider
      value={{
        basket,
        favorites,
        addToBasket,
        deleteFromBasket,
        addForFavorites,
        deleteFromFavorites,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
export default ProductContextProvider;
