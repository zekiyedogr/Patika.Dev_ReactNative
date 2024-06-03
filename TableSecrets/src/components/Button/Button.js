import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from './Button.styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({ text, onPress, iconR, iconL, dark }) => {
    return (
        <TouchableOpacity 
            style={dark ? styles.dark_container : styles.light_container} 
            onPress={onPress}
        >
            {iconL ? <Icon style={dark ? styles.dark_icon : styles.light_icon} name={iconL} /> : null}

            {text && iconL ? <View style={{margin: 5}}/> : null}

            {text ? <Text style={dark ? styles.dark_text : styles.light_text}>{text}</Text> : null}

            {text && iconR ? <View style={{margin: 5}}/> : null}

            {iconR ? <Icon style={dark ? styles.dark_icon : styles.light_icon} name={iconR} /> : null}
        </TouchableOpacity>
    );
}

export default Button;
