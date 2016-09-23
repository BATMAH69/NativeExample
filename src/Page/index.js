/**
 * Created by batmah on 23.09.16.
 */
'use strict';
import React, { PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

const Page = ({color, pageText, count}) => {
  return (
    <View style={[styles.tabContent, {backgroundColor: color}]}>
      <Text style={styles.tabText}>Страница с backgroundColor: {color}</Text>
    </View>
  );
}

Page.propTypes = {
  color: PropTypes.string.isRequired
};

export { Page };