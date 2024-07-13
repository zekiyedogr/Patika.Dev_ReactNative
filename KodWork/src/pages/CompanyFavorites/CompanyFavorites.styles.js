import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    
    header_container: {        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    property_container: {        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    jobs_text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#78AEF5'
    },


    property_text: {
        backgroundColor: '#5C6BC0',
        margin: 5,
        padding: 10,
        borderRadius: 5,
        color: 'white'
    },

    footer_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 3,
    },

    pages: {
        backgroundColor: '#5C6BC0',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 5,
        padding: 10,
        textAlign: 'center'
    }
})