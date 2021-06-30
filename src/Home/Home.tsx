import React, {useLayoutEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './HomeStyles'
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
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
      <Text>Home</Text>
    </View>
  )
}

export default Home