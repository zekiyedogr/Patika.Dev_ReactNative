import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchPress = () => {
    props.onSearch(searchText);
  };

  return (
    <View style={styles.container}>      
      <TouchableOpacity style={styles.text_container} onPress={handleSearchPress}>
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor='white'
        onChangeText={setSearchText}
        value={searchText}
      />
    </View>
  );
};

export default SearchBar;
