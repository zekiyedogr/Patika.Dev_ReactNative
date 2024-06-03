import React from 'react';
import { View, Text, Image, ScrollView, Linking } from 'react-native';

import Config from "react-native-config";

import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Button from '../../components/Button';

import styles from './Detail.styles';

const Detail = ({route}) => {
  const {text} = route.params;
  const { loading, data, error } = useFetch(Config.MEAL_URL + text);

  function OpenYoutube() {
    const youtubeUrl = data.meals[0].strYoutube;
    if (youtubeUrl) {
      Linking.openURL(youtubeUrl);
    } else {
      console.log('Video URL not available');
    }
  }

  function renderIngredients(){
    const ingredients = [];
    let index = 1;
    let stop = false;
    while(!stop) {
      const measure = data.meals[0][`strMeasure${index}`];
      const ingredient = data.meals[0][`strIngredient${index}`];
      if (measure && ingredient) {
        ingredients.push(
          <Text key={index - 1} style={styles.content_texts}>{measure} {ingredient}</Text>
        );
        index++;
      }
      else{
        stop = true;
      }
    }
    return ingredients;
  }

  function formatInstructions(instructions) {
    instructions = instructions.replace(/\r\n/g, '\n');
    const lines = instructions.split('\n');
    return lines.map((line, index) => (
      <Text key={index} style={styles.content_texts}>{line}</Text>
    ));
  }
  
  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.meals[0].strMealThumb }} />
      <View style={styles.header}>
        <Text style={styles.name}>{data.meals[0].strMeal}</Text>
        <Text style={styles.area}>{data.meals[0].strArea}</Text>
      </View>
        
      <ScrollView contentContainerStyle={styles.body_container} showsVerticalScrollIndicator={false}>
        <Text style={styles.content_titles}>Ingredients:</Text>
        {renderIngredients()}
        <Text style={styles.content_titles}>Instructions:</Text>
        {formatInstructions(data.meals[0].strInstructions)}        
      </ScrollView>
      
      <Button text="Watch on Youtube" onPress={OpenYoutube} iconR='youtube-play' dark={true} />
    </View>
  );
}
export default Detail;
