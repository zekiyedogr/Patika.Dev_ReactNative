import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Products from './pages/Products';
import Detail from './pages/Detail';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Products_screen"
          component={Products}
          options={{
            title: 'Dükkan',
            headerStyle : { backgroundColor: '#90CAF9' },
            headerTitleStyle: { color: 'white' }
          }}
        />
        <Stack.Screen
          name="Detail_screen"
          component={Detail}
          options={{
            title: 'Detay',
            headerStyle : { backgroundColor: '#90CAF9' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;