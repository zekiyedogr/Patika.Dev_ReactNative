import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        backgroundColor: '#90CAF9',
        flex: 1,
        justifyContent: 'center',
    },

    inner_container: {
        backgroundColor: '#b6dcfb',
        marginHorizontal: 30,
        padding: 15,
        paddingVertical: 50,
        borderRadius: 15
    },

    login_text: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#0b7dda',
        marginVertical: 20,
    },

    logo: {
        height: 200,
        width: 200,
        alignSelf: 'center'
    }
})