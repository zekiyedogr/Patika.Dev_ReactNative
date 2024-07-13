import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import styles from './Signin.styles';

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Input from "../../components/Input";
import Button from "../../components/Button";
import ModalBox from "../../components/ModalBox";

const Signin = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [header, setHeader] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async (values) => {
        if (!values.name || !values.lastName || !values.branch) {
            setHeader('Please enter all the information');
            setModalVisible(true);
        } else {
            dispatch({ type: 'SET_USER', payload: values });
            try {
                await AsyncStorage.setItem('@USER', JSON.stringify(values));
                navigation.navigate('main_page');
            } catch (error) {
                console.error('AsyncStorage error:', error);
            }
        }
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.header_text}>Career</Text>
                <Text style={styles.header_text}>Finder</Text>
            </View>
            <View style={styles.inner_container}>
                <Formik initialValues={{ name: '', lastName: '', branch: '', level: '', location: '' }} onSubmit={handleLogin}>
                    {({ handleSubmit, handleChange, values }) => (
                        <View>
                            <Input
                                placeholder="Enter your name"
                                value={values.name}
                                onType={handleChange('name')}
                            />
                            <Input
                                placeholder="Enter your last name"
                                value={values.lastName}
                                onType={handleChange('lastName')}
                            />
                            <Input
                                placeholder="Enter your profession"
                                value={values.branch}
                                onType={handleChange('branch')}
                            />
                            <Input
                                placeholder="Enter your level (Beginner, Intermediate, Advanced)"
                                value={values.level}
                                onType={handleChange('level')}
                            />
                            <Input
                                placeholder="Enter your city"
                                value={values.location}
                                onType={handleChange('location')}
                            />
                            <Button text="Register" onPress={handleSubmit} />
                        </View>
                    )}
                </Formik>
            </View>
            <ModalBox modalVisible={modalVisible} close={closeModal} header={header} />
        </SafeAreaView>
    )
}

export default Signin;
