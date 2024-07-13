import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Button.styles';

const Button = ({ text, onPress, iconR, iconL, iconColor = 'white', textColor = 'white', colorContainer = '#5C6BC0'  }) => {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: colorContainer }]}  onPress={onPress}>
            {iconL ? <Icon style={[styles.icon, { color: iconColor }]} name={iconL} /> : null}

            {text && iconL ? <View style={{margin: 5}}/> : null}

            {text ? <Text style={[styles.text, { color: textColor }]} >{text}</Text> : null}

            {text && iconR ? <View style={{margin: 5}}/> : null}

            {iconR ? <Icon style={[styles.icon, { color: iconColor }]} name={iconR} /> : null}
        </TouchableOpacity>
    );
}

export default Button;