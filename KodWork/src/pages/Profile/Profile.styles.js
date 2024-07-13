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
        alignItems:'center'
    },

    profile: {
        width: 128,
        height: 128,
        padding: 10,
        borderWidth: 4,
        borderColor: '#F578AE',
        borderRadius: 64,
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    name_text: {
        padding: 20,
        backgroundColor: '#5C6BC0',
        borderRadius: 20,
        marginLeft: 20,
        color: 'white'
    },

    body:{
        padding: 20,
        backgroundColor: '#5C6BC0',
        borderRadius: 20,
        marginTop: 15,
    },

    info_body: {
        flexDirection: 'row',
    },

    info_header: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },

    info_text: {
        color: 'white',
        marginLeft: 20,
        fontSize: 15,
    },
    
    button: {
    },

    favorites: {
        maxHeight: 380
    },

    favorites_header: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    favorites_content: {
        borderRadius: 20,
    }
})