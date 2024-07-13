import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Jobs from "./pages/Jobs";
import JobFavorites from "./pages/JobFavorites";
import JobDetail from "./pages/JobDetail";
import Welcome from "./pages/Welcome";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import Companies from "./pages/Companies";
import CompanyFavorites from "./pages/CompanyFavorites";
import CompanyDetail from "./pages/CompanyDetail";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function JobsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="jobs_page" component={Jobs} />
      <Stack.Screen name="j_detail_page" component={JobDetail} />
      <Stack.Screen name="favorite_jobs_page" component={JobFavorites} />
    </Stack.Navigator>
  )
}

function CompaniesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="companies_page" component={Companies} />
      <Stack.Screen name="c_detail_page" component={CompanyDetail} />
      <Stack.Screen name="favorite_companies_page" component={CompanyFavorites} />
    </Stack.Navigator>
  )
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profile_page" component={Profile} />
      <Stack.Screen name="profile_edit_page" component={ProfileEdit} />
      <Stack.Screen name="j_detail_page" component={JobDetail} />
      <Stack.Screen name="c_detail_page" component={CompanyDetail} />
    </Stack.Navigator>
  )
}

function TabNavigator() {
  return  (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#5C6BC0',
          position: 'absolute',
          bottom: 10,
          left: 15,
          right: 15,
          borderRadius: 20,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#D0E7FB',
        tabBarLabelStyle: { display: 'none' },
      }}
    >
      <Tab.Screen
        name="JobsScreen"
        component={JobsStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CompaniesScreen"
        component={CompaniesStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="office-building-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const Router = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="welcome_page" component={Welcome} />
              <Stack.Screen name="signin_page" component={Signin} />
              <Stack.Screen name="main_page" component={TabNavigator} />
          </Stack.Navigator>
      </NavigationContainer>
  )
};

export default Router;
