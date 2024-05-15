import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
        padding: 15,
        paddingTop: 25,
        marginBottom : 0
    },

    profile: {
        flexDirection: 'row',
    },

    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },

    nickName: {
        fontSize: 15,
    },

    name: {
        marginLeft: 10,
        justifyContent: 'center',
    },

    profilePhoto: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },

    body: {
        paddingTop: 15,
    },

    tweet: {
        color: 'black',
        fontSize: 18
    },

    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    bodyBottom:{
        flexDirection: 'row',
        marginTop: 5,
        paddingBottom: 15,
        borderBottomWidth: 0.5,
        borderColor: '#8E8E8E'
    },

    bottomObjects: {
        flexDirection: 'row',
        marginTop: 10,
    },

    bottomIcon: {
        width: 20,
        height: 20,
    }
})