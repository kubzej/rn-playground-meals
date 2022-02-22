import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId'); // extract parameter I will receive when opening screen, so categoryId
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId); // it gives me category by catId I received

  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title='Go to Meal Detail Screen'
        onPress={() => {
          props.navigation.navigate('MealDetail');
        }}
      />
      <Button
        title='Go Back to Categories Screen'
        onPress={() => {
          props.navigation.goBack(); // return to previous screen based on stack
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId'); // get category data same is inside CategoryMealsScreen obj which is not accessible from here
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId); // it gives me category by catId I received

  return {
    headerTitle: selectedCategory.title,
  }; // return object with navigation options means change header title
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
