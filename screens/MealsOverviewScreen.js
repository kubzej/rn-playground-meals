import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';

import { MEALS } from '../data/dummy-data';

function MealsOverviewScreen({ route }) {
  // sending this param categoryId from CategoriesScreen so I can use it here
  const catId = route.params.categoryId;

  // get all meals that belong to category, return true if meals has a categoryId in its array
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
