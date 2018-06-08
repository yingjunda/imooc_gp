import { AppRegistry ,SafeAreaView,StatusBar,View,Dimensions} from 'react-native';
import App from './src/js/App';
import React from 'react';
import SplashScreen from 'react-native-splash-screen'
class Root extends React.Component{
    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
        console.log(Dimensions)

    }
    render(){
        return(
            <App/>
        )
    }
}
const styles = {
    container:{flex:1},
    paragraph:{}
}
AppRegistry.registerComponent('imooc_gp', () => Root);
