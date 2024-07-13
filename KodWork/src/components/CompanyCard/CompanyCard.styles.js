import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#78AEF5',
        margin: 10,
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },

    header_container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },

    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

    industries: {
        fontSize: 15,
        color: 'white'
    },

    locations: {
        fontSize: 15,
        padding: 5,
        borderRadius: 8,
        color: '#78AEF5',
        backgroundColor: '#E7F1FF',
        alignSelf: 'flex-start'
    },

    size: {
        fontSize: 18,
        color: '#E7F1FF',
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    },
})