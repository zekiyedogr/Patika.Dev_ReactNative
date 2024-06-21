import React, {useState} from "react";
import { TouchableOpacity, Text, View, Modal } from "react-native";
import styles from './ModalBox.styles';

const ModalBox = ({ modalVisible, close, header }) => {
  
    return (
      <Modal
        animationType="slide"
        transparent = {true}
        visible = {modalVisible}
      >
        <View style = {styles.centered_view}>
          <View style = {styles.modal_view}>
            <Text style = {styles.modal_button}>{header}</Text>
            
            <TouchableOpacity onPress={() => close()}>
              <Text style = {styles.modal_button}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
}

export default ModalBox;