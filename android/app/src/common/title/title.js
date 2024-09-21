import React from "react";
import { Text } from "react-native";
import styles from "./style";

const Title = ({title}) => {
    return (
        <Text style={styles.inputTitle}>
                  {title}{' '}
                  <Text style={styles.asterisk}>*</Text>
                </Text>
    )
}

export default Title;