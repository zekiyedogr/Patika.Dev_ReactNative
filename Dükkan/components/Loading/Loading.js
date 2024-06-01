import React from 'react';
import { View, StatusBar } from 'react-native';
import LottieView from "lottie-react-native";

function Loading() {
  return (
    <View style = {{ flex: 1 }}>
      <StatusBar backgroundColor = { '#90CAF9' } />
      <LottieView style = {{ flex: 1 }} source={require("../../assets/loading.json")} autoPlay/>
    </View>
  )
}

export default Loading;