import { StyleSheet } from "react-native";

export default StyleSheet.create({

    centered_view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    modal_view: {
      backgroundColor: '#FCE4EC',
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
  
    text: {
      marginTop: 10,  
      color: '#E91E63',
    },

    close_button: {
      backgroundColor: '#F06292',
      position: 'absolute',
      top: -10,
      right: -10,
      padding: 3,
      borderRadius: 5
    },

    icon: {
      color: '#FCE4EC',
      fontSize: 20
    }
});