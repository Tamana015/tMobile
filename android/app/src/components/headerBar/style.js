import {StyleSheet } from 'react-native';
import { color } from '../../utils/color';

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderBottomWidth:2,
        borderBottomColor:color.magenta
      },
      logoContainer: {
        flex: 1,
        marginLeft:-20
      },
      logo: {
        width: 80,
        height: 24,
        resizeMode: 'contain',
      },
      iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      }, 
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        backgroundColor:'white'
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
        color: color.magenta,
        marginLeft:50
      },
      closeButtonContainer: {
          padding: 10,
        },
        closeButton: {
          fontSize: 24,
          color: color.magenta,
        },
});

export default styles;