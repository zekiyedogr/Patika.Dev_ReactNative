import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import styles from './Welcome.styles';

import Button from '../../components/Button';

function Welcome({ navigation }) {

    const GoCategories = () => {
        navigation.navigate('categories_screen');
      };

    return (
      <View style ={ styles.container } >
        <StatusBar backgroundColor="#FFA726" barStyle="light-content" />

        <View style ={ styles.text_container } >
            <Text style ={ styles.text1 } >Table</Text>
            <Text style ={ styles.text2 } >Secrets</Text>
        </View>

        <View style ={ styles.button_container } >
            <Button text="Start" onPress={GoCategories} iconR='chevron-right' />
        </View>

      </View>
    );
}

export default Welcome;
