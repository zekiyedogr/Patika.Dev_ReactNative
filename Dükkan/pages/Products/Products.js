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
  const { loading, data, error } = useFetch(Config.API_PRODUCT_URL);
  const { loading: loadingC, data: dataC, error: errorC } = useFetch(`${Config.API_PRODUCT_URL}/categories`);
  const [list, setList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [unfiltered, setUnfiltered] = useState(true);
  
  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  useEffect(() => {
    if (dataC) {
      const categoriesWithSelection = dataC.map(category => ({
        name: category,
        filter: false
      }));
      setCategories(categoriesWithSelection);
      setCategory('');
    }
  }, [dataC]);

  const handleSearch = text => {
    const searcedText = text.toLowerCase();
  
    const filteredList = data.filter(product => {
      const currentTitle = product.title.toLowerCase();
      const currentCategory = product.category.toLowerCase();
      const selectedCategory = category.toLowerCase();  
      
      if (selectedCategory) {
        return currentTitle.indexOf(searcedText) >= 0 && currentCategory === selectedCategory;
      } else {
        return currentTitle.indexOf(searcedText) >= 0;
      }
    });
  
    setList(filteredList);
    console.log(category);
  };
  
  

  const handleCategorySelect = text => {
    const searcedText = text.toLowerCase();  
    
    const updatedCategories = categories.map(category => {
      if (category.name.toLowerCase() === searcedText) {
        return { ...category, filter: true };
      }
      return { ...category, filter: false };
    });
  
    const filteredList = data.filter(product => {
      const currentTitle = product.category.toLowerCase();
      return currentTitle.indexOf(searcedText) >= 0;
    });
  
    setCategories(updatedCategories);
    setList(filteredList);
    setUnfiltered(false);
    setCategory(text);
  };  

  const removeFilter = () => {
    setList(data);
    setUnfiltered(true);
    const resetCategories = categories.map(category => {
      return { ...category, filter: false };
    });
  
    setCategories(resetCategories);
    setCategory('');
  }

  const handleProductSelect = id => {
    navigation.navigate('Detail_screen', { id });
  };

  const renderCategory = ({ item }) => (
    <CategoryCard name={item.name} onSelect={() => handleCategorySelect(item.name)} filter={item.filter} />
  );

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
          <CategoryCard onSelect={removeFilter} filter={unfiltered}/>
          <FlatList
            data={categories}
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
