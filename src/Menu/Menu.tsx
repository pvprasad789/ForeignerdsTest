import React from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import styles from './MenuStyles'
import Icon from 'react-native-vector-icons/FontAwesome';

const Menu = ({navigation}) => {
  const itemTapped = (item: any) => {
    navigation.navigate(item.navigator)
    navigation.closeDrawer()
  }

  const renderListItem = (item: any) => {
    return (
      <TouchableOpacity style={styles.btn} onPress={() => itemTapped(item)}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.viImage}>
        <Icon name='user' color='grey' size={50} />
      </View>
      <FlatList 
        data={screensArr}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => renderListItem(item)}
      />
    </View>
  )
}

const screensArr = [
  {
    id: 1,
    title: "Home",
    navigator: "Home"
  },
  {
    id: 2,
    title: "Profile",
    navigator: "Profile"
  },
  {
    id: 3,
    title: "Settings",
    navigator: "Settings"
  }
]

export default Menu