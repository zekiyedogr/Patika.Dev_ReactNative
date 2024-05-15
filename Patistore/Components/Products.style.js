import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2,
        padding: 5,
    },

    body: {
        backgroundColor: '#ECEFF1',
        padding: 15,
        borderRadius: 10,
        flex: 1,
    },
    
    image: {
        width: (Dimensions.get('window').width / 2) - 40,
        height: 250,
        borderRadius: 10,
        backgroundColor: 'white'
    },

    bottom: {
        marginTop: 10,
        width: (Dimensions.get('window').width / 2) - 40,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
    },

    price: {        
        fontWeight: 'bold',
        color: '#808080',
    },

    inStock: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
    }
})