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
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={setSearchText}
        value={searchText}
      />
      <TouchableOpacity style={styles.text_container} onPress={handleSearchPress}>
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
