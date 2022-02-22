// navigation configuration and also a rn component
import { Platform } from 'react-native';
import Colors from '../constants/Colors';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    // same style for each screen using default navigation options
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Colors.primaryColor : 'WHITE',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor, // color of text
      headerTitle: 'Header Title', // default header title which is replaced by specific headerTitles from component screens files
    },
  }
);

export default createAppContainer(MealsNavigator);
