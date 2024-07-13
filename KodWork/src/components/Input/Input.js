import React from "react";
import { View, TextInput } from "react-native";
import styles from './Input.styles';

const Input = ({placeholder,value, onType}) => {
    return (
        <View style = { styles.container }>
            <TextInput
                style = { styles.input }
                placeholder={placeholder}
                placeholderTextColor="#D5E7FF"
                value={value}
                onChangeText={onType}
            />
        </View>
    )
}

export default Input;