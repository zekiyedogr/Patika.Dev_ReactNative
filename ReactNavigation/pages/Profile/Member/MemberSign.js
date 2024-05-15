import React, {useState} from 'react';
import { View, StyleSheet, Text, Alert, StatusBar } from 'react-native';

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import MesajBox from '../../../components/MesajBox';

function MemberSign ({navigation}) {
  const [newUser, setNewUser] = useState({ name: '', surname: '', age: '', mail: '', });
  const [modalVisible, setModalVisible] = useState(false);

  function handleSubmit() {
    if(Object.values(newUser).some(value => value === '')){
      setModalVisible(true);
      return;
    }

    const user = {
      name : newUser.name,
      surname : newUser.surname,
      age : newUser.age,
      mail : newUser.mail
    };

    navigation.navigate('MemberResultScreen', {user});
  }

  function closeModal() {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#d9e7cb"
        barStyle="dark-content"
      />

      <Text style={styles.text}>Kayıt Oluştur</Text>
      <Input
        label="Üye Adı"
        placeholder="İsim bilgisini giriniz."
        onChangeText={(text) => setNewUser(prevState => ({ ...prevState, name: text }))}
      />
      
      <Input
        label="Üye Soyadı"
        placeholder="Soyadı bilgisini giriniz."
        onChangeText={(text) => setNewUser(prevState => ({ ...prevState, surname: text }))}
      />
      
      <Input
        label="Üye Yaşı"
        placeholder="Yaş bilgisini giriniz."
        onChangeText={(text) => setNewUser(prevState => ({ ...prevState, age: text }))}
      />
      
      <Input
        label="Üye E-posta"
        placeholder="E-posta bilgisini giriniz."
        onChangeText={(text) => setNewUser(prevState => ({ ...prevState, mail: text }))}
      />      
      <Button text="Kaydı tamamla" onPress={handleSubmit} />

      <MesajBox modalVisible={modalVisible} close={closeModal} header="Eksik bilgiler var." />
    </View>

  );
};

export default MemberSign;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d9e7cb',
      padding: 20,
      justifyContent: 'center'
    },

    text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#3a4632',
      textAlign: 'center',
      margin: 10,
      fontFamily:'sans-serif-thin',
    }
})