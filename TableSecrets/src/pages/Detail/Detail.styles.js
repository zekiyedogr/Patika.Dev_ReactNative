import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    image: {
        width: deviceSize.width,
        minHeight: deviceSize.height / 3,
        resizeMode: 'cover',
    },

    header: {
        padding: 10,
        paddingVertical: 15,
        borderBottomColor: '#BDBDBD',
        borderBottomWidth: 1,
    },

    name: {
        fontSize: 20,
        color: '#D32F2F',
        fontWeight: 'bold',
    },

    area: {
        fontSize: 15,
        color: '#D32F2F',
        fontWeight: 'bold',
    },

    body_container: {
        padding: 10,
    },
    
    content_titles: {
        fontSize: 18,
        color: 'black',
        marginVertical: 10,
        fontWeight: 'bold',
    },
    
    content_texts: {
        fontSize: 15,
        color: 'black',
    },
})