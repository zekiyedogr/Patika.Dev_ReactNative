import React from "react";
import { StyleSheet, SafeAreaView, FlatList, View, Image, Text } from "react-native";

import Tweet from "./components/Tweet";
import tweet_data from './tweet_data.json';

const App = () => {
  const renderTweets = ({item}) => <Tweet tweets={item} />;

  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.header}>
        <Image style = {styles.header_image} source={{ uri: "https://pbs.twimg.com/profile_images/1269718732189958145/3PCZDloD_400x400.jpg", }} />
        <Image style = {styles.twitter_image} source = {require('./assets/Icons/twitter.png')} />
        <Image style = {styles.header_image} source = {require('./assets/Icons/settings.png')} />
      </View>
      <FlatList 
        data={tweet_data}
        renderItem={ renderTweets }
      />
      
      <View style = {styles.header}>
        <Image style = {styles.bottom_image} source = {require('./assets/Icons/home.png')} />
        <Image style = {styles.bottom_image} source = {require('./assets/Icons/search.png')} />
        <View style={{ borderWidth: 2, borderColor: 'black', borderRadius: 7, padding: 3 }}>
          <Image style={{ width: 20, height: 20 }} source={require('./assets/Icons/line.png')} />
        </View>
        <Image style = {styles.bottom_image} source = {require('./assets/Icons/alert.png')} />
        <Image style = {styles.bottom_image} source = {require('./assets/Icons/letter.png')} />
      </View>
    </SafeAreaView>    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },

  header: {
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  header_image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  bottom_image: {
    width: 30,
    height: 30,
  },

  twitter_image: {
      width: 45,
      height: 45,
  },
});

export default App;