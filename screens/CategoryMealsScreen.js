import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen!</Text>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
