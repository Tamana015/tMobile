import { StyleSheet } from 'react-native';
import { color } from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  closeButtonContainer: {
    padding: 10,
  },
  closeButton: {
    fontSize: 24,
    color: color.magenta,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    color: color.magenta,
  },
  item: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: color.magenta,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  itemDate: {
    fontSize: 12,
    color: 'gray',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.magenta,
  },
  itemAmount: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 10,
  },
  paginationButton: {
    fontSize: 16,
    color: 'blue',
  },
  disabledButton: {
    color: '#ccc',
  },
});
