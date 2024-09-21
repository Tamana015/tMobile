import React from 'react';
import { View, Image } from 'react-native';
import styles from './style';

const IconContainer = ({icon}) => {
    return (<View style={styles.iconContainer}>
            <Image source={icon} style={[styles.icon]} />
          </View>)
}

export default IconContainer;