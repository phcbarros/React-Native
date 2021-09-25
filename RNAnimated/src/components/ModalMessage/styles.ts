import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 298,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 18,
    lineHeight: 26,
    marginTop: 16,
  },
  message: {
    fontSize: 14,
    lineHeight: 24,
    marginTop: 16,
    textAlign: 'center',
    height: 74,
  },
  buttonContainer: {
    marginTop: 16,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#079D56',
    borderRadius: 8,
    width: 160,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#079D56',
    lineHeight: 22,
  },
})
