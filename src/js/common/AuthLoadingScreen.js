import React from "react";
import {AsyncStorage, View, ActivityIndicator} from "react-native";

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);

        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        AsyncStorage.clear()
        AsyncStorage.getItem('userToken').then((userToken) => {
            if (userToken) {
                AsyncStorage.setItem('userToken', '123');
            }
            this.props.navigation.navigate(userToken ? 'ButtomTabNavigator' : 'WelcomePage');
        }).catch(error => {
            console.log(error);
            // Error retrieving data
        })

    };


    render() {
        return (
            <View style={{flex: 1,alignItems:'center', justifyContent:'center'}}>
                <ActivityIndicator/>
            </View>
        );
    }
}

export default AuthLoadingScreen