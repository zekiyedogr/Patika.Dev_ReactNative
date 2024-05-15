import React, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar } from "react-native";

import MesajBox from "../../components/MesajBox";
import Input from "../../components/Input";
import Button from "../../components/Button";

const ProfileEdit = ({route, navigation}) => {
    const {user} = route.params;
    const [newUser, setNewUser] = useState({ name: user.name, surname: user.surname, age: user.age, mail: user.mail });
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
    
        navigation.navigate('ProfileHomeScreen', {user});
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

            <Text style={styles.text}>Profili Düzenle</Text>
            <Input
                label="Üye Adı"
                placeholder="İsim bilgisini giriniz."
                value={newUser.name}
                onChangeText={(text) => setNewUser(prevState => ({ ...prevState, name: text }))}
            />
      
            <Input
                label="Üye Soyadı"
                placeholder="Soyadı bilgisini giriniz."
                value={newUser.surname}
                onChangeText={(text) => setNewUser(prevState => ({ ...prevState, surname: text }))}
            />
            
            <Input
                label="Üye Yaşı"
                placeholder="Yaş bilgisini giriniz."
                value={newUser.age}
                onChangeText={(text) => setNewUser(prevState => ({ ...prevState, age: text }))}
            />
      
            <Input
                label="Üye E-posta"
                placeholder="E-posta bilgisini giriniz."
                value={newUser.mail}
                onChangeText={(text) => setNewUser(prevState => ({ ...prevState, mail: text }))}
            />      
            <Button text="Kaydet" onPress={handleSubmit} />
            <Button text="Vazgeç" onPress={() => navigation.navigate('ProfileHomeScreen', {user})} />
            <MesajBox modalVisible={modalVisible} close={closeModal} header="Eksik bilgiler var." />
        </View>
    )
}

export default ProfileEdit;

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