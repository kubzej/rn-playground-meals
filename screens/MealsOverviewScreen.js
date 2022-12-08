import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';

import { CATEGORIES, MEALS } from '../data/dummy-data';

function MealsOverviewScreen({ route, navigation }) {
  // sending this param categoryId from CategoriesScreen so I can use it here
  const catId = route.params.categoryId;

  // get all meals that belong to category, return true if meals has a categoryId in its array
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
