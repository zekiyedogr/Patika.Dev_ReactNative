import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inner_container: {
        padding: 25,
        borderColor: '#6eb9f7',
        borderWidth: 2,
        width: '85%',
        flexWrap: 'wrap',
        backgroundColor: '#90CAF9',
        borderRadius: 10,
    },

    component: {
        flexDirection: 'row',
    },

    text_header: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10
    },

    text: {
        color: 'white',
        fontSize: 20,
    },
})