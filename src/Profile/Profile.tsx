import React, {useLayoutEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './ProfileStyles'
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
          <Icon name={"bars"} size={20} color={"tomato"} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile