import React, {useState} from "react";
import {View, Text, StatusBar, FlatList, StyleSheet, TextInput, TouchableOpacity, Modal} from "react-native";

import ToDo from "./components/ToDo";
import ModalBox from "./components/ModalBox";

import todo_data from './Todo_app_data.json';

function App(){  
  const [task, setTask] = useState('');
  const [deletedTask, setDeletedTask] = useState('');
  const [deletedTaskId, setDeletedTaskId] = useState('');
  const renderList = ({ item }) => <ToDo changeComplete={handleComplete} askDeleteTask={openModal} task={item} />;
  const [taskList, setTaskList] = useState(todo_data);
  const [modalVisible, setModalVisible] = useState(false);
  const [listLength, setListLength] = useState(taskList.length);

  const openModal = (id, name) => {
    setModalVisible(true);
    setDeletedTaskId(id);
    setDeletedTask(name);
  };

  const deleteTask = () => {
    const updatedList = taskList.filter(item => item.id !== deletedTaskId);
    setTaskList(updatedList);
    setModalVisible(false);
    setDeletedTaskId();
    setDeletedTask('');
  }

  const closeModal = () => {
    setModalVisible(false);
    setDeletedTaskId();
    setDeletedTask('');
  };

  const handleAddTask = () => {
    const newTask = {
      id: listLength,
      name: task,
      completed: false,
    };
    setTaskList([...taskList, newTask]);
    setTask('');
    setListLength(listLength+1);
  }

  const handleComplete = (id) => {
    const updatedTaskList = taskList.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTaskList(updatedTaskList);
    setModalVisible(false);
    setDeletedTaskId();
    setDeletedTask('');
  }

  const deleteAllTasks = () => {
    const updatedList = taskList.filter(item => item.completed == false);
    setTaskList(updatedList);
  };

  const completedTasksCount = taskList.filter(item => !item.completed).length;

  return(
    <View style = {styles.container}>
      <StatusBar backgroundColor="#102027" />
      <View style = {styles.header}>
        <Text style = {styles.header_text}>YAPILACAKLAR</Text>
        <Text style = {styles.header_text}>{completedTasksCount}</Text>
        <TouchableOpacity style = {styles.delete_button} onPress={deleteAllTasks}>
          <Text style={{ color: 'white', fontSize: 12 }}>Yapılanları Sil</Text> 
        </TouchableOpacity>
      </View>
      <View style = {styles.body}>
        <FlatList
          data = {taskList}
          renderItem={renderList}
        />
      </View>
      <View style = {styles.bottom}>
        <TextInput style={styles.input} placeholder="Yapılacak"  placeholderTextColor="#808080" onChangeText={(newTask) => setTask(newTask)} value={task}/>
        <View style = {styles.line}/>
        <TouchableOpacity style = {[styles.saved, { backgroundColor: task ? '#ffa500' : '#808080' }]} onPress={handleAddTask}>
          <Text style={{ color: 'white', fontSize: 15 }}>Kaydet</Text> 
        </TouchableOpacity>
      </View>
      
      <ModalBox modalVisible={modalVisible} close={closeModal} header={deletedTask} deleteTask={deleteTask} deletedTaskId={() => handleComplete(deletedTaskId)}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027'
  },

  header: {
    padding: 15,
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  header_text: {
    color: '#ffa500',
    fontSize: 30,
    fontWeight: 'bold',
  },

  body: {
    flex: 1,
  },

  delete_button: {
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'red',
    borderRadius: 10,
    padding: 8,
  },

  bottom: {
    margin: 10,
    padding: 10,
    backgroundColor: '#37474f',
    borderRadius: 10
  },

  line: {
    borderWidth: 0.5,
    borderColor: "#78909c",
  },

  input: {
    color: 'white'
  },

  saved: {
    backgroundColor: '#808080',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10
  },

})

export default App;