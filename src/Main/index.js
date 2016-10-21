/**
 * Created by batmah on 23.09.16.
 */
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import axios from 'axios';

import Users from './Users';
import User from './User';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      users: null
    };
    this.selectUser = this.selectUser.bind(this)
    this.changeInfo = this.changeInfo.bind(this)
  }

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => this.setState({ users: response.data }))
      .catch((errror) => console.error(errror))
  }

  selectUser(id){
    let userId = id;
    if (userId > this.state.users.length){
      userId = 0;
    }
    this.setState({userId});
  }

  changeInfo(key, value) {
    const index = this.state.users.findIndex(user => user.id === this.state.userId)
    const users = this.state.users.slice();
    users[index][key] = value;
    this.setState({users});
  }

  render() {
    console.log(this.state.users);
    if (!this.state.users) {
      return (
        <Text>
          Loading...
        </Text>
      )
    }

    if (!this.state.userId) {
      return (
        <ScrollView>
          <Users users={this.state.users} selectUser={this.selectUser} />
          <Users users={this.state.users} selectUser={this.selectUser} />
        </ScrollView>
      )
    }

    const user = this.state.users.find(user => user.id === this.state.userId);

    return (
      <ScrollView>
        <User user={user} selectUser={this.selectUser} changeInfo={this.changeInfo} />
      </ScrollView>
    )

  }
}

export default App;
