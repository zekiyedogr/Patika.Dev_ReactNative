import { StyleSheet } from "react-native";

export default StyleSheet.create({
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    
  modal_view: {
    backgroundColor: '#d9e7cb',
    borderRadius: 10,
    padding: 25,
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#3a4632',
  },

  header: {
    fontSize: 18,
    color: '#3a4632',
    fontFamily:'sans-serif-thin',
    fontWeight: 'bold',
  },

  modal_button: {
    marginTop: 35,
    color: '#3a4632',
    fontFamily:'sans-serif-thin',
    fontWeight: 'bold',
  },
});