import React from 'react';
import { View, StatusBar } from 'react-native';
import LottieView from "lottie-react-native";

function Loading() {
  return (
    <View style = {{ flex: 1 }}>
    <StatusBar backgroundColor="#FFA726" barStyle="light-content" />
      <LottieView style = {{ flex: 1 }} source={require("../../assets/loading.json")} autoPlay/>
    </View>
  )
}

export default Loading;