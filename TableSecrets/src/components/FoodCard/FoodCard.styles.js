import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
    },

    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        height: 200,
        justifyContent: 'flex-end',
    },
    
    food: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'right',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
})