import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  menuIcon: {
    width: 40,
    height: 40,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginTop: 8,
    borderWidth: 1,
    padding: 16,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  btnSubmit: {
    width: 120,
    height: 45,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    alignSelf: 'center',
  },
});
