import React from "react";
import { SafeAreaView, StatusBar, View, Text, useWindowDimensions, ScrollView, Linking  } from "react-native";
import styles from './JobDetail.styles'
import useFetch from "../../hooks/useFetch";
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RenderHtml from 'react-native-render-html';

import Error from "../../components/Error";
import Loading from "../../components/Loading";

import Button from "../../components/Button";

const Detail = ({route}) => {
    const { text } = route.params;
    const API_URL = Config.API_URL + 'jobs/' + text;
    const { loading, data, error } = useFetch(API_URL);
    const { width } = useWindowDimensions();    
    const dispatch = useDispatch();
    const favoriteJobs = useSelector(state => state.favoriteList);
    
    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }
    
    const source = {
        html: data.contents
    };

    const isFavorite = favoriteJobs.some(job => job.id === data.id);

    const GoJob = () => {
        Linking.openURL(data.refs.landing_page)            
    }

    const AddFavorite = async  () => {
        const favoriteJob = {
            id: data.id,
            name: data.name,
            locations: data.locations[0].name,
            levels: data.levels[0].name,
            company: data.company.name,
            category: data.categories[0].name,
            publication_date: data.publication_date
        };

        dispatch({ type: 'ADD_FAVORITE', payload: { favorite: favoriteJob } });

        const existingFavorites = await AsyncStorage.getItem('@FAVORITES');
        const updatedFavorites = existingFavorites ? JSON.parse(existingFavorites).concat(favoriteJob) : [favoriteJob];
        await AsyncStorage.setItem('@FAVORITES', JSON.stringify(updatedFavorites));
    }

    const RemoveFavorite = async  () => {
        dispatch({ type: 'DELETE_FAVORITE', payload: { id: data.id } });

        const existingFavorites = await AsyncStorage.getItem('@FAVORITES');
        if (existingFavorites) {
            const updatedFavorites = JSON.parse(existingFavorites).filter(favorite => favorite.id !== data.id);
            await AsyncStorage.setItem('@FAVORITES', JSON.stringify(updatedFavorites));
        }

    }
    
    return (
        <SafeAreaView style = { styles.container }>
            <StatusBar backgroundColor="#E0F7FA" barStyle="dark-content" />
            <View style = { styles.header }>
                <Text style = { styles.name }>{data.name}</Text>
                <View style = {{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style = {{ flex: 1 }}>
                        <View style = { styles.property }>
                            <Text style = { styles.property_header }>Company: </Text>
                            <Text style = { styles.property_text }>{data.company.name}</Text>
                        </View>
                        <View style = { styles.property }>
                            <Text style = { styles.property_header }>Locations: </Text>
                            <Text style = { styles.property_text }>{data.locations[0].name}</Text>
                        </View>
                    </View>
                    <View style = {{ flex: 1 }}>
                        <View style = { styles.property }>
                            <Text style = { styles.property_header }>Job Level: </Text>
                            <Text style = { styles.property_text }>{data.levels[0].name}</Text>
                        </View>
                    </View>
                </View>
                <Text style = { styles.detail }>Job Detail</Text>
                
            </View>

            <ScrollView contentContainerStyle= { styles.content } showsVerticalScrollIndicator={false} >
                <RenderHtml contentWidth={width} source={source} 
                baseStyle={styles.content_text}/>
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
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Detail;
