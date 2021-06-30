import {SettingsActionTypes} from '../Actions/SettingsAction'

const initialState = {
  name: ''
}

const settingsReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case SettingsActionTypes.SET_USER_NAME:
      return {
        name: action.name
      }
    default: 
      return state
  }
}

export default settingsReducer;