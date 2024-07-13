import React, { useState } from "react";
import { View, TouchableOpacity, TextInput } from 'react-native';
import styles from './SearchItem.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchItem = (props) => {
    const [text, setText] = useState('');

    const handleClearText = () => {
        setText('');
        props.onSearch(''); // Props üzerinden boş arama metnini geri gönder
    };

    const handleChangeText = (newText) => {
        setText(newText);
        props.onSearch(newText);
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={text}
                placeholder="Search..."
                onChangeText={handleChangeText}
            />
            <TouchableOpacity onPress={handleClearText}>
                <Icon style={styles.icon} name='close' />
            </TouchableOpacity>
        </View>
    );
}

export default SearchItem;
