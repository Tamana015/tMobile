import {StyleSheet } from 'react-native';
import { color } from '../../utils/color';

const styles = StyleSheet.create({
    button: {
        backgroundColor: color.gray,
        borderRadius: 20,
        padding: 10,
        width: '100%',
        alignItems: 'center',
        marginBottom:10
      },
      buttonDisabled: {
        backgroundColor: color.magenta,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
      buttonPressed: {
        opacity: 0.7,
      },
});

export default styles;
