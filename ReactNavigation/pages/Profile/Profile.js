import React from "react";
import { View, StyleSheet, Text, StatusBar } from 'react-native';

import Button from "../../components/Button";

const Profile = ({route, navigation}) => {
    if (!route.params) {
        return (
            <View style={styles.container}>
              <StatusBar
                  backgroundColor="#d9e7cb"
                  barStyle="dark-content"
              />
        
              <Text style={styles.label}>Kullanıcı bulunamadı.</Text>
              <Button text="Üye Kaydı Oluştur" onPress={() => navigation.navigate('MemberSignScreen')} />
            </View>
        );
    }

    const {user} = route.params;
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#d9e7cb" barStyle="dark-content" />
            <Text style={styles.label}>Merhaba ben {user.name} {user.surname}</Text>
            <Button text="Profili Düzenle" onPress={() => navigation.navigate('ProfileEditScreen', {user})} />
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d9e7cb',
      justifyContent: 'center'
    },

    inner_container: {
        margin: 15,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: '#3a4632',
    },

    body: {        
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    text: {
        backgroundColor: '#3a4632',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#d9e7cb',
        textAlign: 'center',
        fontFamily:'sans-serif-thin',
        padding: 10,
    }, 

    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3a4632',
        textAlign: 'center',
        margin: 10,
        fontFamily:'sans-serif-thin',
    }
})