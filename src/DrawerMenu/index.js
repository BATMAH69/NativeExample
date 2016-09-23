/**
 * Created by batmah on 23.09.16.
 */

import React, {PropTypes} from  'react';
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#FFF'
  },
  item: {
    fontSize: 18,
    margin: 10,
    textAlign: 'left'
  },
  view: {
    flex: 1,
    backgroundColor: '#fff'
  },
  padding:{
    height:100,
    backgroundColor: 'gray'
  }
});

const DrawerMenuItem = ({color, onPress, title}) => (
  <TouchableHighlight onPress={() => onPress(color)}>
    <View>
      <Text style={styles.item}>{title}</Text>
    </View>
  </TouchableHighlight>
);

DrawerMenuItem.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const DrawerMenu = ({ buttons, onPress }) => (
  <View style={styles.view}>
    <View style={styles.padding} />
    { buttons.map((item, key) => (
      <DrawerMenuItem key={key} title={item.title} color={item.color} onPress={onPress} />
    ))}
  </View>
);

DrawerMenu.propTypes = {
  buttons: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired
};

module.exports = { DrawerMenuItem, DrawerMenu };
