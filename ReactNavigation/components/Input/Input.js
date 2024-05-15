import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from './Input.styles';

const Input = ({label, placeholder,value, onChangeText}) => {
    return (
        <View style = { styles.container }>
            <Text style = { styles.label }>{label}</Text>
            <View style = { styles.input_container }>
                <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText}/>
            </View>
        </View>
    )
}

export default Input;