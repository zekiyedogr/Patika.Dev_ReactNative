import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    task : {
      margin: 10,
      padding: 10,
      backgroundColor: '#7da453',
      borderRadius: 6,
    },

    finished_task: {
        margin: 10,
        padding: 10,
        backgroundColor: '#37474f',
        borderRadius: 6,
    },
  
    task_note: {
      color: 'white'
    },

    finished_task_note: {
        color: '#808080',
        textDecorationLine: 'line-through'
    }
})