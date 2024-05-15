import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ToDo.styles';

const ToDo = ({ task, changeComplete, askDeleteTask }) => {
    return (
        <TouchableOpacity style={!task.completed ? styles.task : styles.finished_task} onPress={() => changeComplete(task.id)} onLongPress={() => askDeleteTask(task.id, task.name)}>
            <Text style={!task.completed ? styles.task_note : styles.finished_task_note}>{task.name}</Text>
        </TouchableOpacity>
    );
};

export default ToDo;