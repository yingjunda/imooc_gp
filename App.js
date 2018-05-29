/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import TabNavigator from 'react-native-tab-navigator';
import {
  Platform,Image,
  StyleSheet,Navigator,
  Text,
  View
} from 'react-native';



export default class App extends Component {
    constructor(props){
        super(props);
        this.state={selectedTab:'home'}

    }
  render() {
    return (
        <View style={styles.container}>
        <TabNavigator>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                selectedTitleStyle={{color:'green'}}
                title="Home"
                renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
                renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'green'}]}  source={require('./res/images/ic_polular.png')} />}
                badgeText="1"
                onPress={() => this.setState({ selectedTab: 'home' })}>
                <View style={styles.page1}></View>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'profile'}
                selectedTitleStyle={{color:'yellow'}}
                title="Profile"
                renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
                renderSelectedIcon={() => <Image style={[styles.image, {tintColor:'yellow'}]} source={require('./res/images/ic_polular.png')} />}

                onPress={() => this.setState({ selectedTab: 'profile' })}>
                <View style={styles.page2}></View>
            </TabNavigator.Item>
        </TabNavigator>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    page1:{
      flex:1, backgroundColor:'red'
    }, page2:{
        flex:1, backgroundColor:'yellow'
    },
    image:{
      width:25,
        height:25
    }
});
