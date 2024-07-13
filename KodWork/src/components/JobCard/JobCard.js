import React from "react";
import { TouchableWithoutFeedback, View, Text } from "react-native";

import styles from './JobCard.styles';
import Button from "../Button";

const JobCard = ({job, onSelect, removeFavorite}) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
            <Text style={styles.name}>{job.name}</Text>
                <View style={styles.header_container}>
                    <View>
                        { job.company ? <Text style={styles.company}>{job.company}</Text>
                            : null }
                        { job.locations ? <Text style={styles.locations}>{job.locations}</Text>
                            : null }
                    </View>
                    { removeFavorite ? <Button iconL = 'bookmark' colorContainer="#E7F1FF" iconColor="#78AEF5" onPress={removeFavorite} />
                        : null }                    
                </View>
                { job.levels ? <Text style={styles.levels}>{job.levels}</Text>
                    : null }
            </View>
        </TouchableWithoutFeedback>
    )
}

export default JobCard;