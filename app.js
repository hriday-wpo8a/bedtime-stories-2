import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import writeScreen from './screens/writeScreen';

export default class app extends React.Component{
    
}

const TabNavigator = createBottomTabNavigator({
    Read:{screen:readScreen},
    Write:{screen:writeScreen} 