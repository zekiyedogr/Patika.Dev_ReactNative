import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styles from './Welcome.styles';
import LottieView from "lottie-react-native";
import { useSelector } from 'react-redux';

import Button from "../../components/Button";

const Welcome = ({ navigation }) => {

  const userSession = useSelector(state => state.user);

  const handleSubmit = async () => {
    
    if (userSession.name == '') { 
      navigation.navigate('signin_page');
    } else {
      navigation.navigate('main_page');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#E0F7FA" barStyle="dark-content" />
      <LottieView style={{ flex: 1 }} source={require("../../assets/welcome.json")} autoPlay />
      <Button text="Start" iconR="chevron-double-right" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default Welcome;
