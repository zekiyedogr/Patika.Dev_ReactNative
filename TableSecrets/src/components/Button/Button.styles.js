import { StyleSheet } from "react-native";

export default StyleSheet.create({
    light_container: {
        backgroundColor: '#FFFEFA',
        borderRadius: 20,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    dark_container: {
        backgroundColor: '#FFA726',
        borderRadius: 20,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    light_text: {
        color: '#FFA726',
        fontSize: 18,
    },

    dark_text: {
        color: '#FFFEFA',
        fontSize: 18,
    },

    light_icon: {
        fontSize: 25,
        color: '#FFA726',
        fontWeight: 'bold',
    },

    dark_icon: {
        fontSize: 25,
        color: '#FFFEFA',
        fontWeight: 'bold',
    },
})