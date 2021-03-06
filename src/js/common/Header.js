import React from 'react'
import {Text, View, StatusBar, Platform, StyleSheet} from 'react-native'
import PropTypes from 'prop-types';

const NAV_BAR_HEIGHT_ANDROID = 50;
const NAV_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;
const StatusBarShape = {
    backgroundColor: PropTypes.string,
    barStyle: PropTypes.oneOf(['default', "light-content", 'dark-content']),
    hidden: PropTypes.bool
}

class Header extends React.Component {
    static propTypes = {
        style: View.propTypes.style,
        title: PropTypes.string,
        titleView: PropTypes.element,
        hide: PropTypes.bool,
        leftButton: PropTypes.element,
        rightButton: PropTypes.element,
        statusBar: PropTypes.shape(StatusBarShape)
    }
static defaultProps={
    statusBar:{
        barStyle:'light-content',
        hidden:false,

    },

}
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            hide: false,
        }

    }

    render() {
        let titleView = this.props.titleView ? this.props.titleView :
            <Text style={styles.title}>{this.props.title}</Text>

        let statusBar = !this.props.statusBar.hidden ?
            <View style={[styles.statusBar, {backgroundColor:this.props.statusBar.backgroundColor}]}>
                <StatusBar {...this.props.statusBar} />
            </View>: null;

        let connent = this.props.hide ? null : <View style={styles.navBar}>

            <View style={styles.titleViewContainer}>{titleView}</View>
            {this.props.rightButton}
        </View>;

        return (
            <View style={[styles.Header,this.props.style]}>
                {statusBar}
                {connent}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    Header: {
        backgroundColor: '#eee'
    },
    leftTitle: {
        width: 40, alignSelf: 'center'
    },
    navBar: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Platform.os == 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
        backgroundColor: 'red',
        flexDirection: 'row',
    },
    titleViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 40,
        right: 40, top: 0, bottom: 0
    },
    title: {
        color: '#fff',
        fontSize: 18,

    },
    statusBar:{
        height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT:25,
    }
})
export default Header