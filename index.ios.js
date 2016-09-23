/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, DrawerLayoutAndroid } from 'react-native';

import { Page } from './src/Page';
import { buttons } from './src/pages'

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

class NativeExample extends Component {

  constructor(props){
    super(props);
    this.state = { color: 'green' };
  }

  getTabs() {
    return buttons.map((item, key) => (
      <TabBarIOS.Item
        key={key}
        title={item.title}
        systemIcon={item.icon}
        selected={this.state.color === item.color}
        onPress={() => this.setState({ color: item.color })}
      >
        <Page color={this.state.color} />
      </TabBarIOS.Item>)
    );
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        barTintColor="darkslateblue"
      >
        {() => this.getTabs()}
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('NativeExample', () => NativeExample);
