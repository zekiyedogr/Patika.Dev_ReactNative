import  React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Welcome from './pages/Profile/Member/Welcome';
import MemberSign from './pages/Profile/Member/MemberSign';
import MemberResult from './pages/Profile/Member/MemberResult';

import Profile from './pages/Profile/Profile';
import ProfileEdit from './pages/Profile/ProfileEdit';

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MemberStack() {
  return (
    <stack.Navigator screenOptions={{ headerShown: false, }}>
      <stack.Screen name="WelcomeScreen" component={Welcome} />
      <stack.Screen name="MemberSignScreen" component={MemberSign} />
      <stack.Screen name="MemberResultScreen" component={MemberResult} />
    </stack.Navigator>
  )
}

function ProfileStack() {
  return (
    <stack.Navigator screenOptions={{ headerShown: false, }}>
      <stack.Screen name="ProfileHomeScreen" component={Profile} />
      <stack.Screen name="ProfileEditScreen" component={ProfileEdit} />
    </stack.Navigator>
  )
}

function App() {
  return(
    <NavigationContainer>      
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveBackgroundColor: '#d9e7cb', tabBarInactiveBackgroundColor: '#d9e7cb', tabBarActiveTintColor: 'black'}}>
        <Tab.Screen name="MemberScreen" component={MemberStack} options={{
          tabBarIcon: () => (
            <Image source={require('./assets/member.png')}
            style={{ width: 30, height: 30 }}
            />
          ),
        }}/>
        <Tab.Screen name="ProfileScreen" component={ProfileStack} options={{
          tabBarIcon: () => (
            <Image source={require('./assets/profile.png')}
            style={{ width: 30, height: 30 }}
            />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;