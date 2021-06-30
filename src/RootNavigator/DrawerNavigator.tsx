import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import Menu from '../Menu';
import {Provider} from 'react-redux';
import store, {persistor} from '../store';
import {PersistGate} from 'redux-persist/integration/react';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="TabNavigator"
            drawerContent={Menu}
            drawerStyle={{width: '80%'}}>
            <Drawer.Screen name="TabNavigator" component={TabNavigator} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default DrawerNavigator;
