import React from 'react';
import { View, StatusBar } from 'react-native';
import LottieView from "lottie-react-native";

function Loading() {
  return (
    <View style = {{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <LottieView style = {{ flex: 1 }} source={require("../../assets/loading.json")} autoPlay/>
    </View>
  )
}

export default Loading;