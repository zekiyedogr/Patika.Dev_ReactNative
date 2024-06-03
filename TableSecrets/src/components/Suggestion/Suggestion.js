import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import LottieView from "lottie-react-native";
import styles from './Suggestion.styles'

function Suggestion({ onSelect }) {
  return (
    <View style={ styles.container }>
      <TouchableWithoutFeedback onPress={onSelect}>
        <LottieView 
          style={ styles.lotti }
          source={require("../../assets/pan.json")}
          autoPlay
        />
      </TouchableWithoutFeedback>
      
    </View>
  );
}

export default Suggestion;
