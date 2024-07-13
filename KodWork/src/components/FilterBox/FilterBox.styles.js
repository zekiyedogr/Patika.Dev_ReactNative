import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    centered_view: {
        flex: 1,
        backgroundColor: '#E0F7FA',
    },
    
    header_container: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    header_text: {
        backgroundColor: '#78AEF5',
        padding: 10,
        borderRadius: 5,
        color: 'white'
    },

    container: {
        marginVertical: 10,
    },

    inner_container: {
        flexWrap: 'wrap',
    },

    search_container: {
        flexDirection: "row",
        flexWrap: 'wrap',
        backgroundColor: '#b8d4fa',
        margin: 10,
        borderRadius: 10
    },

    search_container_noresults: {
        flexDirection: "row",
        flexWrap: 'wrap',
        backgroundColor: '#fab8d4',
        margin: 10,
        borderRadius: 10
    },

    search_filter: {
        width: (Dimensions.get('window').width / 2) - 40,
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 10,
        marginHorizontal: 15,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#78AEF5',
    },

    search_filter_noresults: {
        width: (Dimensions.get('window').width / 2) - 40,
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 20,
        marginHorizontal: 25,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#F578AE',
    },    


    search_text: {
        fontSize: 16,
        color: 'white',
        flex: 1,
        flexWrap: 'wrap',
        padding: 5,
        textAlign: 'center',
    },

    body_container: {
        flexDirection: "row",
        flexWrap: 'wrap',
        padding: 5,
    },

    header_filter: {
        backgroundColor: '#b8d4fa',
        padding: 10,
        color: 'black'
    },

    filter: {
        width: (Dimensions.get('window').width / 2) - 5,
        alignItems: "center",
        marginVertical: 5,
        flexDirection: "row",
        paddingHorizontal: 10
    },

    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#323e81",
        marginRight: 10,
    },

    checkbox_selected: {
        backgroundColor: "#323e81",
    },

    text: {
        fontSize: 16,
        color: 'black',
        flexShrink: 1,
        flexWrap: 'wrap'
    },
});

export default styles;
