/**
 * Created by batmah on 19.10.16.
 */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

import axios from 'axios';

const style = StyleSheet.create({
  card: {
    alignItems: 'center',
    flexDirection: 'column'
  },
  icon: {
    margin: 5,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
    borderRadius: 50,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  description: {
    width: 70
  },
  input: {
    width: 150
  },
  buttons:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button:{
    margin: 10
  }
});

const UsersInfoRow = ({ description, value, changeInfo }) => (
  <View style={style.row}>
    <Text style={style.description}>{description}:</Text>
    <TextInput
      style={style.input}
      value={value}
      onChangeText={(value) => changeInfo(description, value)}
    />
  </View>
);

const sendUser = (user) => {
  axios.post('https://jsonplaceholder.typicode.com/posts')
    .then((responce) => alert(JSON.stringify(responce.data)))
    .catch((error) => console.error(error))
};

const User = ({ user, changeInfo, selectUser }) => (
  <View style={style.card}>
    <View style={style.icon}><Text>{user.name[0]}</Text></View>
    <View style={style.column}>
      {
        Object.keys(user)
          .filter(key  => typeof user[key] === 'string')
          .map((key) => (
            <UsersInfoRow
              key={key}
              description={key}
              value={user[key]}
              changeInfo={changeInfo}
              selectUser={selectUser}
            />
          ))
      }
    </View>
    <View style={style.buttons}>
      <TouchableOpacity onPress={() => selectUser(0)}>
        <Text style={style.button}>Назад</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => sendUser(user)}>
        <Text style={style.button}>Отправить</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default User;