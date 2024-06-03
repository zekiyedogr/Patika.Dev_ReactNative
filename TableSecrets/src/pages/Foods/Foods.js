import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, FlatList } from 'react-native';

import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import FoodCard from '../../components/FoodCard';
import Suggestion from '../../components/Suggestion';

const Foods = ({ navigation, route }) => {
    const { text } = route.params;
    const { loading, data, error } = useFetch(Config.FILTER_URL + text);

  const renderCategory = ({ item }) => ( <FoodCard food={item} onSelect={() => handleCategorySelect(item.idMeal)} /> );

  const handleCategorySelect = text => {
    navigation.navigate('detail_screen', { text });
  };  

  const RandomFood = () => {
    const randomIndex = Math.floor(Math.random() * data.meals.length);
    const text = data.meals[randomIndex].idMeal;
    console.log(text);
    navigation.navigate('detail_screen', { text });
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  } 

  return (
    <SafeAreaView style={{ backgroundColor: '#FFA726', flex: 1 }}>
        <StatusBar backgroundColor="#FFA726" barStyle="light-content" />     
      <Suggestion onSelect={RandomFood}/> 
        <FlatList
            data={data.meals}
            keyExtractor={(item) => item.idMeal} 
            renderItem={renderCategory}
        />
    </SafeAreaView>
  );
};

export default Foods;