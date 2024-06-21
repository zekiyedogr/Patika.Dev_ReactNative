import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    image: {
        width: deviceSize.width,
        minHeight: deviceSize.height / 3,
        backgroundColor: 'white',
        resizeMode: 'contain',
    },

    category: {
        backgroundColor: '#f1f1f1',
        paddingHorizontal: 8,
        paddingVertical: 5,
        fontWeight: 'bold',
        borderRadius: 3,
        alignSelf: 'flex-start',
        textTransform: 'capitalize',        
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
    },

    rating_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },

    count: {
        marginLeft: 10,
        fontSize: 12,
        fontWeight: 'bold'
    },
})
