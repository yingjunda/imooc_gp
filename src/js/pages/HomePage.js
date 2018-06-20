import React from 'react';
import { Text, View ,Button,Image} from 'react-native';
//import {createBottomTabNavigator, createStackNavigator,createDrawerNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        header: null
    });

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <Text>Home!</Text>
            </View>
        );
    }
}

export default HomeScreen