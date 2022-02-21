import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button
        title='Go to Category Meals Screen'
        onPress={() => {
          props.navigation.navigate({ routeName: 'CategoryMeals' });
        }}
      />
      <Button
        title='Replace this screen with Category Meals Screen in stack'
        onPress={() => {
          props.navigation.replace({ routeName: 'CategoryMeals' }); // replace screen on top of the stack with no option to go back
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

export default CategoriesScreen;
