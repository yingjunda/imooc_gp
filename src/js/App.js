import React,{Component} from 'react'
import {View,Text,Button,Image} from 'react-native';
import {createStackNavigator,createSwitchNavigator} from 'react-navigation';
import WelcomePage from './pages/WelcomePage'
import AuthLoadingScreen from './common/AuthLoadingScreen';
import ButtomTabNavigator from './pages/ButtomTabNavigator'



export default createSwitchNavigator(
    {
        AuthLoadingScreen: AuthLoadingScreen,
        WelcomePage:WelcomePage,
        ButtomTabNavigator:ButtomTabNavigator
    },
    {
        initialRouteName: 'AuthLoadingScreen',
    }
);
