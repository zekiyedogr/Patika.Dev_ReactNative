import React from "react";
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import styles from './Tweet.style';

const Tweet = ({tweets}) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.profile}>
                <Image
                    style = {styles.profilePhoto}
                    source={{
                        uri: tweets.ProfilePhoto,
                      }}
                />
                <View style = {styles.name}>
                    <Text style = {styles.nameText}>{tweets.name}</Text>
                    <Text style = {styles.nickName}>@{tweets.nickName}</Text>
                </View>
            </View>

            <View style = {styles.body}>
                <Text style = {styles.tweet}>{tweets.tweet}</Text>
                <View style = {styles.bodyBottom}>
                    <Text>{tweets.time}</Text>
                    <Text style={{ marginLeft: 10 }}>{tweets.date}</Text>
                </View>                
            </View>

            <View style = {styles.bottom}>
                <TouchableOpacity style = {styles.bottomObjects} onPress={() => Alert.alert("You commented " + tweets.name + "'s tweet")}>
                    <Image
                        style = {styles.bottomIcon}
                        source = {require('../../assets/Icons/comment.png')}
                    />
                    <Text style={{ marginLeft: 10 }}>{tweets.comment}</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.bottomObjects} onPress={() => Alert.alert("You retweeted " + tweets.name + "'s tweet")}>
                    <Image
                        style = {styles.bottomIcon}
                        source = {require('../../assets/Icons/retweet.png')}
                    />
                    <Text style={{ marginLeft: 10 }}>{tweets.retweet}</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.bottomObjects} onPress={() => Alert.alert("You liked " + tweets.name + "'s tweet")}>
                    <Image
                        style = {styles.bottomIcon}
                        source = {require('../../assets/Icons/like_heart.png')}
                    />
                    <Text style={{ marginLeft: 10 }}>{tweets.like}</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.bottomObjects} onPress={() => Alert.alert("You saved " + tweets.name + "'s tweet")}>
                    <Image
                        style = {styles.bottomIcon}
                        source = {require('../../assets/Icons/saved.png')}
                    />
                    <Text style={{ marginLeft: 10 }}>{tweets.saved}</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.bottomObjects} onPress={() => Alert.alert("Exported")}>
                    <Image
                        style = {styles.bottomIcon}
                        source = {require('../../assets/Icons/export_arrow.png')}
                    />
                </TouchableOpacity>

            </View>


            
        </View>        
    );
};

export default Tweet;