import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

import Button from "../../../components/Button";

function MemberResult({route, navigation}) {
    const {user} = route.params;
    return (
        <View style={styles.container}>
            <StatusBar
            backgroundColor="#d9e7cb"
            barStyle="dark-content"
            />

            <View style={styles.inner_container}>
                <Text style={styles.text}>Kaydınız Tamamladı</Text>
                <View style={styles.body}>
                    <Text style={styles.label}>Üye Adı: {user.name}</Text>
                    <Text style={styles.label}>Üye Soyadı: {user.surname}</Text>
                    <Text style={styles.label}>Üye Yaşı: {user.age}</Text>
                    <Text style={styles.label}>Üye E-posta: {user.mail}</Text>
                </View>                
            </View>
      
            <Button text="Profil Ekranına Git" onPress={() => navigation.navigate('ProfileHomeScreen', {user})} />
            
        </View>
    )
}

export default MemberResult;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d9e7cb',
      padding: 20,
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