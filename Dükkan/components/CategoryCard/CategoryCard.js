import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './CategoryCard.styles';


const CategoryCard = ({name, onSelect}) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style = { styles.container } >
                <Text style = { styles.text }>
                    {name == null ? "Tümü" : name}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default CategoryCard;