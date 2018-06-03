import React from 'react';
import { Text, View ,Button,Image} from 'react-native';
import {createBottomTabNavigator, createStackNavigator,createDrawerNavigator} from 'react-navigation';

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Details!</Text>
            </View>
        );
    }
}

