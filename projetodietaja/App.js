import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import RecipesScreen from './src/screens/RecipesScreen';
import WorkoutsScreen from './src/screens/WorkoutsScreen';
import CalculatorScreen from './src/screens/CalculatorScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Recipes" component={RecipesScreen} />
        <Stack.Screen name="Workouts" component={WorkoutsScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
