import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import loginIcon from './assets/userIcon.png';
import cartIcon from './assets/cartIcon.png';
import companyLogo from './assets/companyLogo.png';
import styles from './style';
import IconContainer from '../../common/iconContainer/iconContainer';

const HeaderBar = ({onIconPress, onCartPress}) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={companyLogo} style={styles.logo} />
            </View>

            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => onCartPress()}>
                    <IconContainer icon={cartIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onIconPress('profile')}>
                    <IconContainer icon={loginIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HeaderBar;
