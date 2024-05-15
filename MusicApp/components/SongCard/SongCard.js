import React from "react";
import {View, Text, Image} from 'react-native';
import styles from './SongCard.styles';

const SongCard = ({song}) => {
    return (
        <View style = {styles.container}>
            <Image source = {{uri : song.imageUrl}} style = {styles.image} />
            <View style = {styles.inner_container}>
                <Text style = {styles.title}>{song.title}</Text>
                <View style = {styles.content_container}>
                    <View style = {styles.info_container}>
                        <Text style = {styles.artist}>{song.artist}</Text>
                        <Text style = {styles.year}>{song.year}</Text>
                    </View>

                    {
                        song.isSoldOut && 
                        <View style = {styles.soldout_container}>
                            <Text style = {styles.soldout_title}>TÜKENDİ</Text>
                        </View>
                    }
                    
                </View>
            </View>
        </View>
    )
}

export default SongCard;
