import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import Login from './pages/Login';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Profile from './pages/Profile';

import Loading from './components/Loading';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const Router = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {
        isAuthLoading ? (
          <Loading />
        ) : !userSession ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Login_screen"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Products_screen"
              component={Products}
              options={({ navigation }) => ({
                title: 'Dükkan',
                headerStyle: { backgroundColor: '#90CAF9' },
                headerTitleStyle: { color: 'white' },
                headerRight: () => (
                  <Icon
                    name='logout'
                    size={30}
                    color='white'
                    onPress={() => dispatch({ type: 'REMOVE_USER' })}
                    style={{ marginRight: 10 }}
                  />
                ),
                headerLeft: () => (
                  <Icon
                    name='account'
                    size={30}
                    color='white'
                    onPress={() => navigation.navigate('Profile_screen')}
                    style={{ marginLeft: 10 }}
                  />
                )
              })}
            />

            <Stack.Screen
              name="Detail_screen"
              component={Detail}
              options={{
                title: 'Ürün',
                headerStyle : { backgroundColor: '#90CAF9' },
                headerTitleStyle: { color: 'white' },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name="Profile_screen"
              component={Profile}
              options={{
                title: 'Profil',
                headerStyle : { backgroundColor: '#90CAF9' },
                headerTitleStyle: { color: 'white' },
                headerTintColor: 'white',
              }}
            />
          </Stack.Navigator>
        )
      }
    </NavigationContainer>
  );
}

export default Router;
