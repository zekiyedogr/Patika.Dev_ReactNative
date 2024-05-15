import React, {useState} from "react";
import { TouchableOpacity, Text, View, Modal } from "react-native";
import styles from './ModalBox.styles';

const ModalBox = ({ modalVisible, close, header, deleteTask, deletedTaskId }) => {
  
    return (
      <Modal
        animationType="slide"
        transparent = {true}
       // visible = {true}
        visible = {modalVisible}
      >
        <View style = {styles.centered_view}>
          <View style = {styles.modal_view}>
            <Text style = {styles.modal_button}>{header}</Text>
            <TouchableOpacity onPress = {deletedTaskId}>
              <Text style = {styles.modal_button}>Durumu değiştir</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteTask()}>
              <Text style = {styles.modal_button}>Görevi Sil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => close()}>
              <Text style = {styles.modal_button}>Vazgeç</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
}

export default ModalBox;