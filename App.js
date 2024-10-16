import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DonutList from './components/DonutList';
import DonutDetail from './components/DonutDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DonutList">
        <Stack.Screen name="DonutList" component={DonutList} options={{ title: 'Choose Best Food' }}  options={{ headerShown: false }} />
        <Stack.Screen name="DonutDetail" component={DonutDetail} options={{ title: 'Donut Detail' }}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
