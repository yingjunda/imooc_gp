import React from 'react'
import {TouchableOpacity,View,TouchableHighlight,Image} from 'react-native'
import Iconfont,{getImageSource} from '../utils/iconfont'
import {NavigationActions} from 'react-navigation'

class BackButton extends React.Component{
    constructor(props){
   super(props)
console.log(props)
        this.state=props;
}
    render(){
        return (
            <TouchableOpacity onPress={this._onPressButton.bind(this)}>
                <View style={style.leftButton}><Iconfont name='fanhui' size={24} color='#fff'></Iconfont></View>
            </TouchableOpacity>
        )
    }
    _onPressButton(){
        //console.log(this.state)
        this.props.navigation.goBack()
    }
}
export default BackButton

const style = {
    leftButton:{
        width:44,justifyContent:'center',alignItems:'center',
    }
}