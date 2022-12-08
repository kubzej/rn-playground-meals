import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

  function addFavoriteFunc(id) {
    // creates list of favIds and add id param at the end
    setFavoriteMealsIds((currentFavdIds) => [...currentFavdIds, id]);
  }
  function removeFavoriteFunc(id) {
    setFavoriteMealsIds((currentFavdIds) =>
      // filter out mealId which we got as param
      currentFavdIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealsIds,
    addFavorite: addFavoriteFunc,
    removeFavorite: removeFavoriteFunc,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
