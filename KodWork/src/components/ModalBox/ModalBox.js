import React from "react";
import { TouchableOpacity, Text, View, Modal } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
            <Text style = {styles.text}>{header}</Text>
            
            <TouchableOpacity style = {styles.close_button} onPress={() => close()}>
              <Icon style={styles.icon} name='close' />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
}

export default ModalBox;