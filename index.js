import { AppRegistry ,SafeAreaView,StatusBar} from 'react-native';
import App from './src/js/App';
import React from 'react';
import SplashScreen from 'react-native-splash-screen'

class Root extends React.Component{
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
