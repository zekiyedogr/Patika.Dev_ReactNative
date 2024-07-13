import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import JobCard from "../../components/JobCard";
import styles from './JobFavorites.styles'
import FilterBox from "../../components/FilterBox";
import Button from "../../components/Button";
import Error from '../../components/Error';

const JabFavorites = ({ navigation }) => {
    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const dispatch = useDispatch();
    const favoriteJobs = useSelector(state => state.favoriteList);
    const [favoriteData, setFavoriteData] = useState(favoriteJobs)

    const [filters, setFilters] = useState({
        descending: false,
        levels: [],
        sizes: [],
        categories: [],
        company: [],
        industries: []
    });

    useEffect(() => {
        setFavoriteData(favoriteJobs);
    }, [favoriteJobs]);

    const removeFavorite = async (job) => {
        dispatch({ type: 'DELETE_FAVORITE', payload: { id: job.id } });
        
        const existingFavorites = await AsyncStorage.getItem('@FAVORITES');
        if (existingFavorites) {
            const updatedFavorites = JSON.parse(existingFavorites).filter(favorite => favorite.id !== job.id);
            await AsyncStorage.setItem('@FAVORITES', JSON.stringify(updatedFavorites));
        }
    };

    const handleJobSelect = text => {
        navigation.navigate('j_detail_page', { text });
    };

    const closeFilterModal = () => {
        setFilterModalVisible(false);
    };

    const applyFilter = (filterOptions) => {  
        let filteredData = [...favoriteJobs];

        if(filterOptions.descending == true) {
            filteredData.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date));
        }

        if (filterOptions.levels.length > 0) {
            const levelNames = filterOptions.levels.map(level => level.name);
            filteredData = filteredData.filter(job => levelNames.includes(job.levels));
        }

        if (filterOptions.categories.length > 0) {
            const categoryNames = filterOptions.categories.map(category => category.name);
            filteredData = filteredData.filter(job => categoryNames.includes(job.category));
        }

        setFavoriteData(filteredData);
        setFilters(filterOptions);
    };

    const renderFavoriteItem = ({ item }) => (
        <JobCard job={item} onSelect={() => handleJobSelect(item.id)} removeFavorite={() => removeFavorite(item)}/>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style = { styles.header_container }>
                <Button text = 'Filter' onPress={() => { setFilterModalVisible(true)}} />
                    <Text style = { styles.jobs_text }>FAVORITE JOBS</Text>
                <View style = { styles.property_container }>
                    <Text style = { styles.property_text }>Total: {favoriteJobs.length}</Text>                    
                </View>
            </View>
            { favoriteData.length > 0 ? (
                <FlatList
                    data={favoriteData}
                    keyExtractor={(item) => item.id}
                    renderItem={renderFavoriteItem}
                />
                ) : (
                    <Error />
                )
            }
            <FilterBox modalVisible={filterModalVisible} close={closeFilterModal} filtering={applyFilter} filterOptions = {filters} filterType = 'job' />
        </SafeAreaView>
    );
};

export default JabFavorites;
