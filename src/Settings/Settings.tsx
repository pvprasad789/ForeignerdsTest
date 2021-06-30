import React, {useLayoutEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import styles from './SettingsStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import {setUserName} from '../Actions/SettingsAction'

const Settings = ({navigation}) => {
  const name = useSelector(state => state.settingsReducer.name);
  const dispatch = useDispatch();

  const [userName1, setUserName1] = useState(name);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.openDrawer()}>
          <Icon name={'bars'} size={20} color={'tomato'} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const submitTapped = () => {
    if (userName1.length === 0) {
      Alert.alert('Alert', 'Please enter name to submit');
      return
    }
    dispatch(setUserName(userName1))
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, alignSelf: 'center', fontWeight: 'bold', marginBottom: 30}}>{name}</Text>
      <Text>Enter Name</Text>
      <TextInput
        placeholder="Enter Name"
        style={styles.input}
        value={userName1}
        onChangeText={setUserName1}
      />
      <TouchableOpacity style={styles.btnSubmit} onPress={submitTapped}>
        <Text style={{color: '#fff'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
