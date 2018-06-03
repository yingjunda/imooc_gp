import React from "react";
import {AsyncStorage,View,ActivityIndicator} from "react-native";

class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={{flex:1}}>
                <ActivityIndicator />

            </View>
        );
    }
}

export default AuthLoadingScreen