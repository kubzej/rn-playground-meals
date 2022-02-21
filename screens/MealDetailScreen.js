import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Button
        title='Go Back to Categories Screen'
        onPress={() => {
          props.navigation.popToTop(); // return to root screen based on stack
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

export default MealDetailScreen;
