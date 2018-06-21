import React from 'react';
import { Text, View ,Button,Image,ImageBackground,Dimensions,StyleSheet,TextInput} from 'react-native';
import Header from'../common/NavigationBar'
import BackButton from '../common/back'
import RegInput from '../common/RegInput'
import Styles from "../common/styles"
import CommButton from "../common/commbutton";
import {POST,postPromise,$param} from'../utils/fetch'
class Login extends React.Component{
    static navigationOptions = ({navigation}) => ({
        header:null
    });
constructor(props){
    super(props)
    console.log(this.props)
    this.state={
        phone:'',
        loginPwd:'',
        optSource:' '
    }
}
    render(){

        return (
                <ImageBackground source={require('../../images/login_bg.jpg')} style={styles.backgroundImg}>
                    <Header leftButton={<BackButton {...this.props} />} style={{opacity:1,backgroundColor:"transparent"}}  />
                    <View style={styles.LoginView}>
                        <View style={styles.logo_view}><Image source={require('../../images/reg_logo.png')} style={styles.log_ico} /></View>
                        <View style={Styles.regLogin_warp}>
                            <RegInput onChangeText={this.handleChange.bind(this,'phone')} placeholder='请输入你的手机号'  iconName='iconset0227'   />
                            <RegInput onChangeText={this.handleChange.bind(this,'loginPwd')} placeholder='请输入你的密码' iconName='mima' secureTextEntry={true} />

<CommButton onPressFun={this.submitButton.bind(this)} style={{marginTop:30}} title='登录'/>
                        </View>
                    </View>

                </ImageBackground>
        )
    }
    handleChange(key,val){
    this.setState({[key]:val})
        console.log(this.state)
    }
    submitButton(){
console.log(JSON.stringify(this.state))
        POST('api/noauth/doLogin',this.state)
            .then(responseData=>{
                if(code==200&&statusCode){
                    this.props.navigation.goBack()
                }
            })
            .catch(error=>console.log(error))
    }

    componentDidMount() {
        console.log($param({a:'sdfsd',b:['sas',' sss']}))
    }
}

export default Login;

const styles=StyleSheet.create({
    backgroundImg:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height
    },
    LoginView:{
        flex:1
    },
    logo_view:{
        alignItems:'center', justifyContent:'center',paddingTop:40,paddingBottom:35
    },
    log_ico:{
        height:60, width:60,alignItems:'center'
    }
})