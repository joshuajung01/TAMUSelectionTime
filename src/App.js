import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBars from '@gorhom/animated-tabbar';
import Icon from 'react-native-vector-icons/FontAwesome';

//Icons
import HomeSVG from '../src/svg/HomeSVG';
import SearchSVG from '../src/svg/SearchSVG';
import BookSVG from '../src/svg/BookSVG';
import GearSVG from '../src/svg/GearSVG';

//Screens
import HomeScreen from '../src/screens/HomeScreen';

const iconActiveColor = "#500000"
const iconInactiveColor = "#3e3e3e"
const backgroundActiveColor = "#eaeaea"
const backgroundInactiveColor = "#FFFFFF"
const labelColor = "#3e3e3e"

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

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName='home'
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
          component={HomeScreen}
        />
        <Tabs.Screen
          name='Wishlist'
          component={HomeScreen}
        />
        <Tabs.Screen
          name='Setting'
          component={HomeScreen}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const Styles = StyleSheet.create({
  _mainContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;