import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import settingsReducer from './SettingsReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['name'],
};

const rootReducer = combineReducers({
  settingsReducer: persistReducer(persistConfig, settingsReducer),
});

export default rootReducer;