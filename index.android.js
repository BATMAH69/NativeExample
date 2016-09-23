/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid
} from 'react-native';

import {DrawerMenu, DrawerMenuItem} from './src/DrawerMenu';
import Page from './src/Main';
import { buttons } from './src/Navigation'

class NativeExample extends Component {

  constructor(props){
    super(props);
    this.state = {
      color: 'green'
    }
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref={(ref) => (this.drawer = ref)}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() =>
          <DrawerMenu
            buttons={buttons}
            onPress={(color) => { this.setState({color: color}), 	this.drawer.closeDrawer()}}
          />
        }
      >
        <Page color={this.state.color} />
      </DrawerLayoutAndroid>
    );
  }
}

AppRegistry.registerComponent('NativeExample', () => NativeExample);
