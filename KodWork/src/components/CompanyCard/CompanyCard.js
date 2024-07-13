import React from "react";
import { TouchableWithoutFeedback, View, Text } from "react-native";

import styles from './CompanyCard.styles';
import Button from "../Button";

const CompanyCard = ({ company, onSelect, removeFavorite }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Text style={styles.name}>{company.name}</Text>
                <View style={styles.header_container}>
                    <View>
                        { company.industries ? <Text style={styles.industries}>{company.industries}</Text>
                            : null }
                        { company.locations ? <Text style={styles.locations}>{company.locations}</Text>
                            : null }
                    </View>
                    { removeFavorite ? <Button iconL = 'bookmark'  colorContainer="#E7F1FF" iconColor="#78AEF5" onPress={removeFavorite} />
                            : null }                    
                </View>
                
                { company.size ? <Text style={styles.size}>{company.size}</Text>
                    : null }
                
            </View>
        </TouchableWithoutFeedback>
    );
};

export default CompanyCard;
