import React from 'react';
import {Text, View, StatusBar, Image,Animated,Easing} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Ionicons from '../utils/iconfont'
import HomeScreen from './HomePage'
import LoginScreen from './LoginPage'

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text><Ionicons name='xinlang' size={24} color="yellow"/></Text>
            </View>
        );
    }
}
class MineScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text><Ionicons name='xinlang' size={24} color="yellow"/></Text>
            </View>
        );
    }
}

/*创建Tab路由*/
const TabBar = createBottomTabNavigator({
    New: {

        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: '新鲜事',
            tabBarIcon: ({tintColor}) => {
                return <Ionicons name='fengche' size={20} color={tintColor}/>;
            }
        },
        path: 'new'
    },
    Home: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: '创投圈',
            tabBarIcon: ({tintColor}) => {
                return <Ionicons name='jijin' size={20} color={tintColor}/>;
            },
            path: 'home'
        }
    },
    Mine: {
        screen: MineScreen,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => {
                return <Ionicons name='wode' size={20} color={tintColor}/>;
            }
        }
    },

}, {
    backBehavior: 'none',
    tabBarOptions: {
        activeTintColor: '#7fbb00',
        inactiveTintColor: '#858585',
        style: {borderColor:"#dcdcdc"},
        labelStyle: {
            fontSize: 12,
        },
        tabStyle: {paddingTop: 7,
        }
    },
    animationEnabled: true,
});


//创建页面跳转动画
const TransitionConfiguration = () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;

            const width = layout.initWidth;
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [width, 0, 0],
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });

            return { opacity, transform: [{ translateX }] };
        },
    })

/*创建根路由*/

export default  FirstApp= createStackNavigator({
        TabBar: TabBar,
        Settings: SettingsScreen,
        Login:LoginScreen,
    },
    {
        initialRouteName: 'TabBar',
        navigationOptions: {
            header: null
        },
        mode: 'card',
        headerMode:'screen',
        transitionConfig: TransitionConfiguration
    }
)



//登录拦截
const defaultGetStateForAction=FirstApp.router.getStateForAction;
FirstApp.router.getStateForAction = (action, state) => {

    if (action.routeName ==='Mine') {
        this.routes = [
            ...state.routes,
            {key: 'Login', routeName: 'Login', params: { name: 'name1'}},
        ];
        return {
            ...state,
            routes,
            index: this.routes.length - 1,
        };
    }
    return defaultGetStateForAction(action, state);

};