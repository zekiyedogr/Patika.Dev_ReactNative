import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor : '#5C6BC0',
        paddingRight: 15,
    },

    input: {
        flex: 3,
        paddingLeft: 10,
        color: 'white',
    },

    text_container: {
        flex: 2,
    },

    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        paddingHorizontal: 15,
        borderRightWidth: 1,
        borderRightColor: 'white',
        height: 50,
        textAlignVertical: 'center',
    }
});