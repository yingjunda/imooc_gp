import React from 'react'
import {TextInput, View, StatusBar, Platform, StyleSheet} from 'react-native'
import Iconfont from '../utils/iconfont'
import PropTypes from 'prop-types';
class InputText extends React.Component {
    static propTypes = {
        keyName:PropTypes.string,
        style: View.propTypes.style,
        placeholderTextColor: PropTypes.string,
        placeholder: PropTypes.string,
        returnKeyType:PropTypes.oneOf(['done','go','next','search','send']),
        keyboardType: PropTypes.string,
        secureTextEntry: PropTypes.bool,
        onChangeText:PropTypes.func,
        
    }
    static defaultProps = {
        placeholderTextColor:'#fefefe',
        returnKeyType:'next',
        onChangeText:()=>{}
    }
    render(){
        return (
            <View style={[styles.itemStyle,this.props.style]}>
                <Iconfont name={this.props.iconName} size={24}  color='#fff'></Iconfont>
                <TextInput onChangeText={this.handleChange.bind(this)}
                    style={styles.regInput} underlineColorAndroid="transparent" placeholderTextColor={this.props.placeholderTextColor} returnKeyType={this.props.returnKeyType} keyboardType={this.props.keyboardType} placeholder={this.props.placeholder} multiline={this.props.multiline} secureTextEntry={this.props.secureTextEntry} />
            </View>
        )
    }
    handleChange(val){
        console.log(val)
        this.props.onChangeText(val)
    }

}
export default InputText

styles={
    itemStyle:{
        flexDirection:'row',alignItems:'center', height:50, paddingTop:10,paddingBottom:10,
        borderBottomWidth:1,borderBottomColor:'#fff',borderStyle:'solid',
    },
    regInput:{
      flex:1,lineHeight:30,padding:0,paddingLeft:10, color:"#fff",fontSize:15
    }
}