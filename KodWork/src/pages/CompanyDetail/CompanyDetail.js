import React from "react";
import { SafeAreaView, StatusBar, View, Text, useWindowDimensions, ScrollView, Linking  } from "react-native";
import styles from './CompanyDetail.styles'
import useFetch from "../../hooks/useFetch";
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RenderHtml from 'react-native-render-html';

import Error from "../../components/Error";
import Loading from "../../components/Loading";

import Button from "../../components/Button";

const Detail = ({navigation, route}) => {
    const { text } = route.params;
    const API_URL = Config.API_URL + 'companies/' + text;
    const { loading, data, error } = useFetch(API_URL);
    const { width } = useWindowDimensions();    
    const dispatch = useDispatch();
    const favoriteCompanies = useSelector(state => state.favoriteCompanyList);
    
    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }
    
    const source = {
        html: data.description
    };

    const isFavorite = favoriteCompanies.some(job => job.id === data.id);

    const GoJob = () => {
        Linking.openURL(data.refs.landing_page)            
    }

    const AddFavorite = async  () => {
        const favoriteCompany = {
            id:  data.id,
            name: data.name,
            locations: data.locations[0].name,
            size: data.size.name,
            industries: data.industries[0].name,
            publication_date: data.publication_date
        };
        dispatch({ type: 'ADD_COMPANY_FAVORITE', payload: { favoriteCompany: favoriteCompany } });

        const existingFavorites = await AsyncStorage.getItem('@COMPANIES');
        const updatedFavorites = existingFavorites ? JSON.parse(existingFavorites).concat(favoriteCompany) : [favoriteCompany];
        await AsyncStorage.setItem('@COMPANIES', JSON.stringify(updatedFavorites));
    }

    const RemoveFavorite = async  () => {
        dispatch({ type: 'DELETE_COMPANY_FAVORITE', payload: { id: data.id } });

        const existingFavorites = await AsyncStorage.getItem('@COMPANIES');
        if (existingFavorites) {
            const updatedFavorites = JSON.parse(existingFavorites).filter(favorite => favorite.id !== data.id);
            await AsyncStorage.setItem('@COMPANIES', JSON.stringify(updatedFavorites));
        }

    }
    
    const GoToJobs = company => {
        navigation.navigate('jobs_page', { company });
    };
    
    return (
        <SafeAreaView style = { styles.container }>
            <StatusBar backgroundColor="#E0F7FA" barStyle="dark-content" />
            <View style = { styles.header }>
                <Text style = { styles.name }>{data.name}</Text>
                <Text style = { styles.detail }>Company Detail</Text>
                
            </View>

            <ScrollView contentContainerStyle= { styles.content } showsVerticalScrollIndicator={false} >            
                <View>
                    <View style = { styles.property }>
                        <Text style = { styles.property_header }>Industry: </Text>
                        <Text style = { styles.property_text }>{data.industries[0].name}</Text>
                    </View>
                    <View style = { styles.property }>
                        <Text style = { styles.property_header }>Locations: </Text>
                        <Text style = { styles.property_text }>{data.locations[0].name}</Text>
                    </View>
                    <View style = { styles.property }>
                        <Text style = { styles.property_header }>Locations: </Text>
                        <Text style = { styles.property_text }>{data.size.name}</Text>
                    </View>
                </View>
                    {
                        data.description
                        ? <RenderHtml contentWidth={width} source={source}  baseStyle={styles.content_text}/>
                        : null
                    }

                <View style = { styles.footer }>
                    <View style = {{flex: 1}}>
                        <Button text = 'Apply' colorContainer="#F578AE" iconL = 'exit-to-app' onPress={GoJob} />
                    </View>
                    <View style = {{flex: 1}}>
                        {
                            !isFavorite
                            ? <Button text = 'Add Favorite' colorContainer="#F578AE" iconL = 'bookmark-outline' onPress={AddFavorite} />
                            : <Button text = 'Remove Favorite' colorContainer="#F578AE" iconL = 'bookmark' onPress={RemoveFavorite} />
                        }
                    </View>
                </View>
                <Button text = 'Go To Jobs' onPress={() => GoToJobs(data.name)} />
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Detail;
