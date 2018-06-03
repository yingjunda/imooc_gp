import React from 'react'
import {Text,View} from  'react-native'
import PropTypes from 'prop-types';

class Header extends React.Component{
    static propTypes = {
        title: PropTypes.string,
        leftIcon: PropTypes.string,
        rightIcon: PropTypes.string,
        leftPress: PropTypes.func,
        rightPress: PropTypes.func,
        style: PropTypes.object
    }
    constructor (props){
        super(props);
        console.log(props)
    }
    render(){
        return(
            <View style={styles.Header}>
                <View style={styles.leftTitle}><Text>返回</Text></View>
                <View style={styles.centerTitle}><Text>标题</Text></View>
                <View style={styles.leftTitle}><Text>返回</Text></View>
            </View>
        )
    }
}


const styles = {
    Header: {
        height:50,flexDirection:'row', justifyContent:'space-between',
        backgroundColor:'green',
        alignItems:'center'
    },
    leftTitle:{
        width:40,alignSelf:'center'
    },
    centerTitle:{
        flex:1
    },
    HeaderText:{
        color:'#fff'
    }
}
export default  Header