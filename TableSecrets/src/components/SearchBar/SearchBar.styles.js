import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginVertical: 10,
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor : '#FFFEFA',
        borderWidth: 2,
        borderColor: '#FFA000',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        marginLeft: 15,
        paddingLeft: 15,
    },

    text_container: {
    },

    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFA726',
        paddingHorizontal: 15,
        borderLeftWidth: 2,
        borderLeftColor: '#FFA726',
        height: 50,
        textAlignVertical: 'center',
    }
});