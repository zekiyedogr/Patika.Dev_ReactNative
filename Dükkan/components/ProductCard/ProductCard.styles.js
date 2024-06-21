import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#E3F2FD',
        borderWidth: 2,
        borderColor: '#42A5F5',
        borderRadius: 10,
        flexDirection: 'row'
    },

    image: {
        width: 100,
        minHeight: 100,
        backgroundColor: 'white',
        resizeMode: 'contain',
        borderRadius: 10,
    },

    body_container: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between'
    },
    
    product: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    
    price: {
        fontSize: 15,
        color: 'black',
        textAlign: 'right'
    }
})