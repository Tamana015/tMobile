import { StyleSheet } from 'react-native';
import { color } from '../../utils/color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 240,
    marginBottom:20,
    color: color.gray
  },
  input: {
    width: 50,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: color.gray,
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 5,
  },
});

export default styles;
