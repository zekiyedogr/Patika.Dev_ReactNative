import React from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, StatusBar, TextInput } from 'react-native';

import patikastore_data from './patikastore_data.json';
import Products from "./Components/Products";

const App = () => {

  const renderProduct = ({item}) => <Products product={item} />;

  return (
    <SafeAreaView style = { styles.container }>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      
      <View style = { styles.product_area }>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View>
              <Text style = {styles.header_text }>PATIKASTORE</Text>
              <View style = { styles.search }>                
                <TextInput
                  style={styles.search_text}
                  placeholder="Ara..."
                />
              </View>
            </View>
          )}

          data = {patikastore_data}
          renderItem={renderProduct}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: 'white'  
  },

  header_text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#800080',
    marginTop: 20,
    marginLeft: 10,
  },

  search: {
    paddingLeft: 15,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#ECEFF1',
  },
  
  search_text: {
    color: '#B7B9BC',
  },

  product_area: {
    alignItems: 'center'
  },
})

export default App;


