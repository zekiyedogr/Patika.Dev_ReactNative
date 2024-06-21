import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styles from './Profile.styles';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';

const Profile = () => {    
    const user = useSelector(s => s.user);
    const dispatch = useDispatch();

    if (!user) {
        return (
            <SafeAreaView style={styles.container}>                
                <View style = { styles.inner_container }>
                    <Text style={styles.text}>Kullanıcı bilgileri bulunamadı.</Text>
                </View>
            </SafeAreaView>
        );
    }

  return (
    <SafeAreaView style = { styles.container }>
        <View style = { styles.inner_container }>
            <View style = { styles.component }>
                <Text style = { styles.text_header }>Kullanıcı Adı:</Text>
                <Text style={styles.text}>{user.username}</Text>
            </View>
            <View style = { styles.component }>
                <Text style = { styles.text_header }>Mail:</Text>
                <Text style={styles.text}>{user.email}</Text>
            </View>
            <View style = { styles.component }>
                <Text style = { styles.text_header }>Ad Soyad:</Text>
                <Text style={styles.text}>{user.name.firstname} {user.name.lastname}</Text>
            </View>
            <View style = { styles.component }>
                <Text style = { styles.text_header }>Telefon:</Text>
                <Text style={styles.text}>{user.phone}</Text>
            </View>
            <View style = { styles.component }>
                <Text style = { styles.text_header }>Adres:</Text>
                <Text style={styles.text}>{user.address.city}, {user.address.street}, {user.address.number}, {user.address.zipcode}</Text>
            </View>
            
        </View>
        <Button text="Çıkış Yap" onPress={() => dispatch({ type: 'REMOVE_USER' })} loading={false} />
    </SafeAreaView>
  )
};

export default Profile;