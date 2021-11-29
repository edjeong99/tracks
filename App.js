
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
 

import { StyleSheet, Text, View } from 'react-native';

import AccountScreen from './src/screens/AccountScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';

const switchNavigator = createSwitchNavigator({
  loginFlow : createStackNavigator({
    Signup : SignupScreen,
    Signin : SigninScreen
  }),
  mainFlow : createBottomTabNavigator({
    tractListFlow : createStackNavigator({
      TrackList : TrackListScreen,
      TrackDetail : TrackDetailScreen
    }),
    TrackCreate : TrackCreateScreen,
    Account : AccountScreen
  })

});

export default createAppContainer(switchNavigator);