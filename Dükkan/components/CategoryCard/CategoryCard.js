import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './CategoryCard.styles';


const CategoryCard = ({name, onSelect, filter}) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style = { !filter ? styles.container : styles.container_selected } >
                <Text style = { !filter ? styles.text : styles.text_selected } >
                    {name == null ? "Tümü" : name}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default CategoryCard;