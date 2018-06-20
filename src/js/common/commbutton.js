import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native'
import Iconfont from '../utils/iconfont'
import PropTypes from 'prop-types';
class CommButton extends React.Component {
    static propTypes = {
        title:PropTypes.string,
        style: View.propTypes.style,
        textStyle: Text.propTypes.style,
        onPressFun:PropTypes.func,
    }
    static defaultProps = {
        textStyle:{color:"#fff", fontSize:14},
        onPressFun:()=>{}
    }
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return (
            <TouchableOpacity onPress={this._onPressButton.bind(this)} activeOpacity={.7}>
            <View style={[styles.itemStyle,this.props.style]}>
                <Text style={this.props.textStyle}>{this.props.title}</Text>
            </View>
            </TouchableOpacity>
        )
    }
    _onPressButton(){
        this.props.onPressFun()
    }

}
export default CommButton;

const styles={
    itemStyle:{
        height:40,justifyContent:'center', alignItems:'center',backgroundColor:'#7fbb00'
    },
}