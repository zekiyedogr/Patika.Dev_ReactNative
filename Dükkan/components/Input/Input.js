import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from './Input.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({placeholder,value, onType, secure, iconName}) => {
    return (
        <View style = { styles.container }>
            <TextInput
                style = { styles.input }
                placeholder={placeholder}
                placeholderTextColor="#B3E5FC"
                value={value}
                onChangeText={onType}
                secureTextEntry={secure}
            />
            <Icon style = { styles.icon } name = {iconName} />
        </View>
    )
}

export default Input;