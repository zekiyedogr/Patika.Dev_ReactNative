import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA726',
        padding: 10,
        justifyContent: 'center'
    },

    text_container: {
        alignItems: 'flex-start',
    },

    text1: {
        fontSize: 130,
        color: '#FFFEFA',
    },

    text2: {
        fontSize: 94,
        color: '#FFFEFA',
        marginTop: -60,
    },

    button_container: {
        position: 'absolute',
        bottom: 60,
        alignSelf: 'center',
    }
});