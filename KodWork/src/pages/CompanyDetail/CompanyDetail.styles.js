import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    header: {
        padding: 10,
        backgroundColor: '#E0F7FA',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    name: {
        color: '#5C6BC0',
        fontSize: 25,
        fontWeight: 'bold'
    },

    property: {
        flexDirection: 'row',
        marginVertical: 5,
        flexWrap: 'wrap'
    },

    property_header: {
        color: '#78AEF5',
        fontSize: 18,
        fontWeight: 'bold'
    },

    property_text: {
        color: 'black',
        fontSize: 18,
    },

    detail: {
        color: '#5C6BC0',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10
    },

    content: {
        padding: 10,
        paddingBottom: 60
    },
    
    content_text: {
        fontSize: 15,
        color: 'white',
        backgroundColor: '#78AEF5',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginVertical: 10
    },

    footer: {
        flexDirection: 'row',
    }

});