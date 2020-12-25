import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AnimatedTabBars from '@gorhom/animated-tabbar';

//Icons
import HomeSVG from '../src/svg/HomeSVG';
import SearchSVG from '../src/svg/SearchSVG';
import BookSVG from '../src/svg/BookSVG';
import GearSVG from '../src/svg/GearSVG';

//Screens
import HomeScreen from '../src/screens/HomeScreen';
import SearchScreen from '../src/screens/SearchScreen';
import WishlistScreen from '../src/screens/WishlistScreen';
import SettingScreen from '../src/screens/SettingScreen';

import MainScreen from '../src/screens/MainScreen';
import SignUpScreen from '../src/screens/SignUpScreen';
import SignInScreen from '../src/screens/SignInScreen';

const iconActiveColor = "#500000"
const iconInactiveColor = "#3e3e3e"
const backgroundActiveColor = "#eaeaea"
const backgroundInactiveColor = "#FFFFFF"
const labelColor = "#500000"

const tabs = {
  Home: {
    labelStyle: {
      color: labelColor,
    },
    icon: {
      component: HomeSVG,
      activeColor:  iconActiveColor,
      inactiveColor: iconInactiveColor,
    },
    background: {
      activeColor: backgroundActiveColor,
      inactiveColor: backgroundInactiveColor,
    },
  },
  Search: {
    labelStyle: {
      color: labelColor,
    },
    icon: {
      component: SearchSVG,
      activeColor:  iconActiveColor,
      inactiveColor: iconInactiveColor,
    },
    background: {
      activeColor: backgroundActiveColor,
      inactiveColor: backgroundInactiveColor,
    },
  },
  Wishlist: {
    labelStyle: {
      color: labelColor,
    },
    icon: {
      component: BookSVG,
      activeColor:  iconActiveColor,
      inactiveColor: iconInactiveColor,
    },
    background: {
      activeColor: backgroundActiveColor,
      inactiveColor: backgroundInactiveColor,
    },
  },
  Setting: {
    labelStyle: {
      color: labelColor,
    },
    icon: {
      component: GearSVG,
      activeColor:  iconActiveColor,
      inactiveColor: iconInactiveColor,
    },
    background: {
      activeColor: backgroundActiveColor,
      inactiveColor: backgroundInactiveColor,
    },
  },
};

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  if(false){
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions = {{headerShown: false}}>
          <Stack.Screen name='Main'  component={MainScreen}/>
          <Stack.Screen name='SignUp'  component={SignUpScreen}/>
          <Stack.Screen name='SignIn'  component={SignInScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  else{
    return (
      <NavigationContainer>
        <Tabs.Navigator
          initialRouteName='Home'
          tabBar={props => (
            <AnimatedTabBars tabs={tabs} iconSize={25} {...props} />
          )}
        >
          <Tabs.Screen
            name='Home'
            component={HomeScreen}
          />
          <Tabs.Screen
            name='Search'
            component={SearchScreen}
          />
          <Tabs.Screen
            name='Wishlist'
            component={WishlistScreen}
          />
          <Tabs.Screen
            name='Setting'
            component={SettingScreen}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;