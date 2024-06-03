import React from 'react';
import { View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';

import styles from './FoodCard.styles';

const FoodCard = ({food, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: food.strMealThumb }}
          style={styles.image}
          borderRadius={10}
        >
          <Text style = { styles.food }>{ food.strMeal }</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default FoodCard;