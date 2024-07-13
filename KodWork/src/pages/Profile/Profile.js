import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, View, Image, Text, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Profile.styles';
import Button from "../../components/Button";
import JobCard from "../../components/JobCard";
import CompanyCard from '../../components/CompanyCard';

const Profile = ({navigation}) => {
    const userSession = useSelector(state => state.user);
    const favoriteJobs = useSelector(state => state.favoriteList);
    const favoriteCompanies = useSelector(state => state.favoriteCompanyList);
    const [favoriteData, setFavoriteData] = useState(favoriteJobs);
    const dispatch = useDispatch();   

    useEffect(() => {
        setFavoriteData(favoriteCompanies);
    }, [favoriteCompanies]);

    useEffect(() => {
        setFavoriteData(favoriteJobs);
    }, [favoriteJobs]);

    const renderFavoriteItem = ({ item }) => (
        favoriteData == favoriteJobs
        ? <JobCard job={item} onSelect={() => handleJobSelect(item.id)} removeFavorite={() => removeJobFavorite(item)}/>
        : <CompanyCard company={item} onSelect={() => handleCompanySelect(item.id)} removeFavorite={() => removeCompanyFavorite(item)}/>        
    );

    const GetJobData = () => {
        setFavoriteData(favoriteJobs);
    };

    const GetCompanyData = () => {
        setFavoriteData(favoriteCompanies);
    };

    const handleCompanySelect = text => {
        navigation.navigate('c_detail_page', { text });
    };    

    const handleJobSelect = text => {
        navigation.navigate('j_detail_page', { text });
    };

    const removeJobFavorite = async (job) => {
        dispatch({ type: 'DELETE_FAVORITE', payload: { id: job.id } });
        
        const existingFavorites = await AsyncStorage.getItem('@FAVORITES');
        if (existingFavorites) {
            const updatedFavorites = JSON.parse(existingFavorites).filter(favorite => favorite.id !== job.id);
            await AsyncStorage.setItem('@FAVORITES', JSON.stringify(updatedFavorites));
        }
    };

    const removeCompanyFavorite = async (company) => {
        dispatch({ type: 'DELETE_COMPANY_FAVORITE', payload: { id: company.id } });
        
        const existingFavorites = await AsyncStorage.getItem('@COMPANIES');
        if (existingFavorites) {
            const updatedFavorites = JSON.parse(existingFavorites).filter(favorite => favorite.id !== company.id);
            await AsyncStorage.setItem('@COMPANIES', JSON.stringify(updatedFavorites));
        }
    };


    return (
        <SafeAreaView style = { styles.container }>
            <StatusBar backgroundColor="#E0F7FA" barStyle="dark-content" />
            <View style = { styles.header }>
                <View  style = { styles.profile }>
                    <Image style = {styles.image} source = {require('../../assets/user-pictures/anonym_avatar.png')} />
                </View>
                <View>
                    <Text style = { styles.name_text }>{userSession.name} {userSession.lastName}</Text>
                </View>
            </View>

            <View style = { styles.body }>
                <View style = { styles.info_body }>
                    <Text style = { styles.info_header }>Branch:</Text>
                    <Text style = { styles.info_text }>{userSession.branch}</Text>
                </View>
                <View style = { styles.info_body }>
                    <Text style = { styles.info_header }>Level:</Text>
                    <Text style = { styles.info_text }>{userSession.level}</Text>
                </View>
                <View style = { styles.info_body }>
                    <Text style = { styles.info_header }>Location:</Text>
                    <Text style = { styles.info_text }>{userSession.location}</Text>
                </View>
            </View>
            <View style = { styles.button }>
                <Button text="Edit Profile"  colorContainer="#F578AE" onPress={() => {navigation.navigate('profile_edit_page')}} />
            </View>

            <View style = { styles.favorites }>
                <View style = { styles.favorites_header }>
                    <Button
                        text = 'Jobs'
                        colorContainer={favoriteData == favoriteJobs ? '#5C6BC0' : '#E0F7FA'}
                        textColor={favoriteData == favoriteJobs ? 'white' : '#5C6BC0'}
                        onPress={GetJobData}
                    />
                    <Button
                        text = 'Companies'
                        colorContainer={favoriteData == favoriteCompanies ? '#5C6BC0' : '#E0F7FA'}
                        textColor={favoriteData == favoriteCompanies ? 'white' : '#5C6BC0'}
                        onPress={GetCompanyData}
                    />
                </View>
                <View style = { styles.favorites_content }>
                    <FlatList showsVerticalScrollIndicator= {false}
                        data={favoriteData}
                        keyExtractor={(item) => item.id}
                        renderItem={renderFavoriteItem}
                    />
                </View>
            </View>
            
            
        </SafeAreaView>
    )
}

export default Profile;