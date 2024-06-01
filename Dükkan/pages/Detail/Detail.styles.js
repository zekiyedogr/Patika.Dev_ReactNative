import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    image: {
        width: deviceSize.width,
        minHeight: deviceSize.height / 3,
        backgroundColor: 'white',
        resizeMode: 'contain',
    },

    body_container: {
        padding: 10,
    },
    
    product: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginVertical: 10,
    },
    
    description: {
        fontSize: 15,
        color: 'black'
    },
    
    price: {
        fontSize: 15,
        color: 'black',
        textAlign: 'right',
        marginVertical: 10,
        fontWeight: 'bold',
    }
})