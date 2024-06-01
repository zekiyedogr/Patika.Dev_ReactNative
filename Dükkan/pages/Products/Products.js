import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, FlatList, View } from 'react-native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import ProductCard from '../../components/ProductCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import SearchBar from '../../components/SearchBar';
import CategoryCard from '../../components/CategoryCard';

const Products = ({ navigation }) => {
  const { loading, data, error } = useFetch(Config.API_URL);
  const { loading: loadingC, data: dataC, error: errorC } = useFetch(`${Config.API_URL}/categories`);
  const [list, setList] = useState([]);
  

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  const handleSearch = text => {
    const filteredList = data.filter(product => {
      const searcedText = text.toLowerCase();
      const currentTitle = product.title.toLowerCase();

      return currentTitle.indexOf(searcedText) >= 0;
    });

    setList(filteredList);
  };

  const handleCategorySelect = text => {
    const filteredList = data.filter(product => {
      const searcedText = text.toLowerCase();
      const currentTitle = product.category.toLowerCase();

      return currentTitle.indexOf(searcedText) >= 0;
    });

    setList(filteredList);
  };

  const removeFilter = () => {
    setList(data);
  }

  const handleProductSelect = id => {
    navigation.navigate('Detail_screen', { id });
  };

  const renderCategory = ({ item }) => (
    <CategoryCard name={item} onSelect={() => handleCategorySelect(item)} />
  );

  const allItem = <CategoryCard onSelect={removeFilter}/>
  

  const renderProduct = ({ item }) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );


  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }  

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar backgroundColor="#90CAF9" />
      <SearchBar onSearch={handleSearch} />
      {!loadingC && !error ?
        <View style={{flexDirection: 'row'}}>
          <CategoryCard onSelect={removeFilter}/>
          <FlatList
            data={dataC}
            renderItem={renderCategory}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      : null}

      
      
      <FlatList data={list} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
