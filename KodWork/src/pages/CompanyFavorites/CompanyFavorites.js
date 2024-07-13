import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CompanyCard from '../../components/CompanyCard';
import styles from './CompanyFavorites.styles'
import FilterBox from "../../components/FilterBox";
import Button from "../../components/Button";
import Error from '../../components/Error';

const CompanyFavorites = ({ navigation }) => {
    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const dispatch = useDispatch();
    const favoriteCompanies = useSelector(state => state.favoriteCompanyList);
    const [favoriteData, setFavoriteData] = useState(favoriteCompanies)

    const [filters, setFilters] = useState({
        descending: false,
        levels: [],
        sizes: [],
        categories: [],
        company: [],
        industries: []
    });

    useEffect(() => {
        setFavoriteData(favoriteCompanies);
    }, [favoriteCompanies]);

    const removeFavorite = async (company) => {
        dispatch({ type: 'DELETE_COMPANY_FAVORITE', payload: { id: company.id } });
        
        const existingFavorites = await AsyncStorage.getItem('@COMPANIES');
        if (existingFavorites) {
            const updatedFavorites = JSON.parse(existingFavorites).filter(favorite => favorite.id !== company.id);
            await AsyncStorage.setItem('@COMPANIES', JSON.stringify(updatedFavorites));
        }
    };

    const handleCompanySelect = text => {
        navigation.navigate('c_detail_page', { text });
    };

    const closeFilterModal = () => {
        setFilterModalVisible(false);
    };

    const applyFilter = (filterOptions) => {  
        let filteredData = [...favoriteCompanies];

        if(filterOptions.descending == true) {
            filteredData.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date));
        }

        if (filterOptions.sizes.length > 0) {
            const sizeNames = filterOptions.sizes.map(size => size.name);
            filteredData = filteredData.filter(company => sizeNames.includes(company.size));
        }

        if (filterOptions.industries.length > 0) {
            const categoryNames = filterOptions.industries.map(industries => industries.name);
            filteredData = filteredData.filter(company => categoryNames.includes(company.industries));
        }

        setFavoriteData(filteredData);
        setFilters(filterOptions);
    };

    const renderFavoriteItem = ({ item }) => (
        <CompanyCard company={item} onSelect={() => handleCompanySelect(item.id)} removeFavorite={() => removeFavorite(item)}/>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style = { styles.header_container }>
                <Button text = 'Filter' onPress={() => { setFilterModalVisible(true)}} />
                    <Text style = { styles.jobs_text }>FAVORITE COMPANY</Text>
                <View style = { styles.property_container }>
                    <Text style = { styles.property_text }>Total: {favoriteData.length}</Text>                    
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
            <FilterBox modalVisible={filterModalVisible} close={closeFilterModal} filtering={applyFilter} filterOptions = {filters}/>
        </SafeAreaView>
    );
};

export default CompanyFavorites;
