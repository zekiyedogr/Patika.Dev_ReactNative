import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginVertical: 10,
        marginLeft: 15,
        backgroundColor: '#FFFEFA',
        borderWidth: 2,
        borderColor: '#FFA000',
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },

    image: {
        width: 100,
        minHeight: 100,
        backgroundColor: 'white',
        resizeMode: 'contain',
        borderRadius: 50,
    },

    body_container: {
        flex: 1,
        padding: 10,
    },
    
    category: {
        fontSize: 18,
        color: 'black',
        margin: 15,
    },
})