import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

import Button from "../../../components/Button";

function Welcome ({navigation}) {
  function goToMemberSign() {
    navigation.navigate('MemberSignScreen')
  }

  return (
    <View style={styles.container}>
      <StatusBar
          backgroundColor="#d9e7cb"
          barStyle="dark-content"
      />

      <Text style={styles.header}>Sporium</Text>
      <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign} />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d9e7cb'
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3a4632',
    textAlign: 'center',
    margin: 10,
    fontFamily:'sans-serif-thin',
  }
})