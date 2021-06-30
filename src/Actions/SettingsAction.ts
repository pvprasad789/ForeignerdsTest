export const SettingsActionTypes = {
  SET_USER_NAME: "SET_USER_NAME"
}

export const setUserName = (name: string) => {
  return {
    type: SettingsActionTypes.SET_USER_NAME,
    name
  }
}