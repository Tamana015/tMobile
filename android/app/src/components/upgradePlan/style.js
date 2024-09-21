import { StyleSheet } from 'react-native';
import { color } from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  navButton: {
    padding: 8,
    borderRadius: 4,
    marginRight: 16,
  },
  navText: {
    fontSize: 40,
    fontWeight: '900',
    color:color.darkMagenta
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    flex: 1,
    marginHorizontal:40,
    marginTop:15,
    color: color.magenta,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 8,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: color.magenta,
    marginVertical: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: color.gray,
    marginVertical: 10,
  },
  plan: {
    backgroundColor: '#ffffff',
    borderColor: color.darkMagenta,
    borderWidth: 1,
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 4,
  },
  bold: {
    fontWeight: 'bold',
    color: color.darkMagenta,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '60%',
    elevation: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: color.magenta,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 45,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderColor: color.gray,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: color.magenta,
    padding: 5,
    alignSelf:'center',
    marginTop:10,
    borderRadius: 8,
    width: '48%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
