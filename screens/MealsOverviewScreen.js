import { View, Text, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';

function MealsOverviewScreen({ route }) {
  // sending this param categoryId from CategoriesScreen so I can use it here
  const catId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
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
