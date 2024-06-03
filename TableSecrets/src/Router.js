import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome/Welcome';
import Categories from './pages/Categories/Categories';
import Foods from './pages/Foods/Foods';
import FoodsSearch from './pages/FoodsSearch/FoodsSearch';
import Detail from './pages/Detail';


const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="welcome_screen"
          component={Welcome}
          options={{
            title: 'Sofra Sırları',
            headerStyle : { backgroundColor: '#FFA726' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white',
            headerShown: false
          }}
        />
        <Stack.Screen
          name="categories_screen"
          component={Categories}
          options={{
            title: 'Categories',
            headerStyle : { backgroundColor: '#FFA726' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="foods_screen"
          component={Foods}
          options={{
            title: 'Foods',
            headerStyle : { backgroundColor: '#FFA726' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="detail_screen"
          component={Detail}
          options={{
            title: 'Detail',
            headerStyle : { backgroundColor: '#FFA726' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="foodssearch_screen"
          component={FoodsSearch}
          options={{
            title: 'Search',
            headerStyle : { backgroundColor: '#FFA726' },
            headerTitleStyle: { color: 'white' },
            headerTintColor: 'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;