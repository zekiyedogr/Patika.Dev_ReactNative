import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, FlatList } from 'react-native';

import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Suggestion from '../../components/Suggestion';
import CategoryCard from '../../components/CategoryCard';
import SearchBar from '../../components/SearchBar';

const Categories = ({ navigation }) => {
  const { loading, data, error } = useFetch(Config.API_URL);
  const [list, setList] = useState([]);
  const [ searchText, setSearchText ] = useState("");

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  const handleSearch = (searchText) => {
    console.log(searchText);
    navigation.navigate('foodssearch_screen', { searchText });
  };

  const renderCategory = ({ item }) => ( <CategoryCard category={item} onSelect={() => handleCategorySelect(item.strCategory)} /> );

  const handleCategorySelect = text => {
    navigation.navigate('foods_screen', { text });
  };

  const RandomFood = () => {
    const randomIndex = Math.floor(Math.random() * list.categories.length);
    const text = list.categories[randomIndex].strCategory;
    console.log(text);
    navigation.navigate('foods_screen', { text });
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  } 

  return (
    <SafeAreaView style={{ backgroundColor: '#FFA726', flex: 1 }}>
      <Suggestion onSelect={RandomFood}/>
      <StatusBar backgroundColor="#FFA726" barStyle="light-content" />
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={data.categories}
        keyExtractor={(item) => item.idCategory} 
        renderItem={renderCategory}
      />
      
    </SafeAreaView>
  );
};

export default Categories;