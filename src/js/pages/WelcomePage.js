import React,{Component} from 'react'
import {View,StyleSheet,Text,Button,StatusBar,Image,ScrollView} from 'react-native'
import Swiper from 'react-native-swiper'

class Welcome extends Component{
    componentDidMount() {


    }
    render(){
        return (
            <Swiper style={styles.wrapper} loop={false} showsButtons={false} >
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                    <View style={{position:'absolute', left:0, right:0,bottom:59, alignItems:'center',justifyContent:'center'}}><Button
                        onPress={()=>this.props.navigation.navigate("ButtomTabNavigator")} style={{width:150,padding:20,height:40}} title={'立即体验'}/></View>
                </View>
            </Swiper>
        );
     }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})
export default Welcome

