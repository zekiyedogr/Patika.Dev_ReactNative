import { StyleSheet } from "react-native";

export default StyleSheet.create({

    centered_view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    modal_view: {
      backgroundColor: '#0b7dda',
      borderRadius: 10,
      paddingHorizontal: 50,
      paddingVertical: 30,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  
    modal_button: {
      marginTop: 10,
      color: 'white',  
    },
});