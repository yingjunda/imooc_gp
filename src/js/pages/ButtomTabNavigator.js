import React from 'react';
import { Text, View,StatusBar } from 'react-native';
import { createBottomTabNavigator,createStackNavigator } from 'react-navigation';
import NavigationBar from '../common/NavigationBar'

class HomeScreen extends React.Component {
    static navigationOptions = ({navigation})=>({
        header: <NavigationBar title={'首页'} style={{backgroundColor:"#7fbb00"}} statusBar={{backgroundColor:'#7fbb00'}} />
    });
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar/>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settingszz!</Text>
            </View>
        );
    }
}

 const TabBar= createBottomTabNavigator({
     Home: {

         screen: HomeScreen,

         path: 'people/:name',},
     Settings: SettingsScreen,


 },{
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
                iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Settings') {
                iconName = `ios-options${focused ? '' : '-outline'}`;
            }

            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
    }),
        tabBarOptions: {
    activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
}
 });

export default createStackNavigator({
    TabBar: TabBar,
    Settings: SettingsScreen,

},
    {
        initialRouteName: 'TabBar',
        /* The header config from HomeScreen is now here */
        navigationOptions:{
            header:null
        }
    }
    )