import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#E0F7FA',
        padding: 15,
    },

    header: {
        padding: 15,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    inner_container: {
        padding: 20,
        backgroundColor: '#5C6BC0',
        borderRadius: 20,
        marginTop: 15,
    }
})