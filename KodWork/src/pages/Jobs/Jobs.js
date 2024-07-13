import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, FlatList, View, Text, TextInput } from "react-native";
import styles from './Jobs.styles'
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch";
import JobCard from "../../components/JobCard";
import Button from "../../components/Button";
import FilterBox from "../../components/FilterBox";

import Error from "../../components/Error";
import Loading from "../../components/Loading";

const Jobs = ({navigation, route}) => {
    const [page, setPage] = useState(1);
    const [tempPage, setTempPage] = useState("1");
    const API_URL = 'https://www.themuse.com/api/public/jobs?page=';
    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const [filterUrl, setFilterUrl] = useState('');
    const [company, setCompany] = useState('');
    
    const [url, setUrl] = useState(API_URL + page + filterUrl);
    const { loading, data, error } = useFetch(url);

    const [filters, setFilters] = useState({
        descending: false,
        levels: [],
        sizes: [],
        categories: [],
        company: [],
        industries: []
    });    

    useEffect(() => {
        if (route.params?.company) {
            setCompany('&company=' + route.params.company);
        }
    }, [route.params]);

    useEffect(() => {
        setUrl(API_URL + page + company + filterUrl);
        setTempPage(page.toString());
    }, [page, company, filterUrl]);

    const renderJob = ({ item }) => {
        const jobDetails = {
            id: item.id || '',
            name: item.name || '',
            company: item.company.name,
            locations: item.locations && item.locations[0]?.name || '',
            levels: item.levels && item.levels[0]?.name || '',
        };
    
        return <JobCard job={jobDetails} onSelect={() => handleJobSelect(item.id)} />;        
    };
    
    const handleJobSelect = text => {
        navigation.navigate('j_detail_page', { text });
    };

    const handleNextPage = () => {
        setPage(prevPage => {
            if (data.page_count && prevPage >= data.page_count - 1) {
                return prevPage;
            }
            return prevPage < 99 ? prevPage + 1 : 99;
        });
    };

    const handlePrevPage = () => {
        setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
    }

    const handlePageChange = (text) => {
        setTempPage(text);
    }

    const handlePageSubmit = () => {
        const newPage = parseInt(tempPage, 10);
        if (!isNaN(newPage) && newPage >= 1 && newPage <= 99 && newPage < data.page_count) {
            setPage(newPage);
        } else {
            setTempPage(page.toString());
        }
    }

    const applyFilter = (filterOptions) => {        
        let filter = '';
        if(filterOptions.descending == true) {
            filter += '&descending=true';
        }

        if (filterOptions.levels.length > 0) {
            for (let i = 0; i < filterOptions.levels.length; i++) {
                filter += ('&level=' + filterOptions.levels[i].name);
            }
        }

        if (filterOptions.categories.length > 0) {
            
            for (let i = 0; i < filterOptions.categories.length; i++) {
                filter += ('&category=' + filterOptions.categories[i].name);
            }
        }

        setFilterUrl(filter);
        setFilters(filterOptions);
    };

    const closeFilterModal = () => {
        setFilterModalVisible(false);
    };

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    } 
    return (
        <SafeAreaView style = { styles.container }>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style = { styles.header_container }>
                <Button text = 'Filter' onPress={() => { setFilterModalVisible(true)}} />
                    <Text style = { styles.jobs_text }>JOBS</Text>
                <View style = { styles.property_container }>
                    <Text style = { styles.property_text }>Total: {data.total}</Text>
                    <Button iconL = 'bookmark' colorContainer="#F578AE" onPress={() => {navigation.navigate('favorite_jobs_page')}} />
                </View>
            </View>
                    
            <FlatList
                data={data.results}
                keyExtractor={(item) => item.id} 
                renderItem={renderJob}
                contentContainerStyle={{ paddingBottom: 60 }}
                ListFooterComponent={
                <View style = { styles.footer_container }>
                    <Button iconL="chevron-double-left" onPress={handlePrevPage} />
                    <TextInput style = { styles.pages } value={tempPage} onChangeText={handlePageChange} onSubmitEditing={handlePageSubmit} keyboardType="numeric"/>
                    <Button iconR="chevron-double-right" onPress={handleNextPage} />
                </View>
               }
            />
            <FilterBox modalVisible={filterModalVisible} close={closeFilterModal} filtering={applyFilter} filterOptions = {filters} filterType = 'job' />
        </SafeAreaView>
    )
}

export default Jobs;