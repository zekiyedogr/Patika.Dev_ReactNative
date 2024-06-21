import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Image, View, Text } from 'react-native';
import { Formik } from 'formik';
import Config from 'react-native-config';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button';
import Input from '../../components/Input';
import ModalBox from '../../components/ModalBox';
import styles from './Login.styles';

import usePost from '../../hooks/usePost';

const Login = () => {
  const { data, loading, error, post, clearError } = usePost();
  const [modalVisible, setModalVisible] = useState(false);
  const [header, setHeader] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (error && !modalVisible) {
      setHeader('Kullanıcı Bulunamadı!');
      setModalVisible(true);
    }
  }, [error, modalVisible]);

  useEffect(() => {
    if (data && data.token && !modalVisible) {
      const user = {
        address: {
          geolocation: { lat: '-37.3159', long: '81.1496' },
          city: 'kilcoole',
          street: 'new road',
          number: 7682,
          zipcode: '12926-3874',
        },
        id: 1,
        email: 'john@gmail.com',
        username: 'johnd',
        password: 'm38rmF$',
        name: { firstname: 'john', lastname: 'doe' },
        phone: '1-570-236-7033',
        __v: 0,
      };

      dispatch({ type: 'SET_USER', payload: { user } });
    }
  }, [data, modalVisible, dispatch]);

  const handleLogin = (values) => {
    if (!values.username || !values.password) {
      if (!values.username && !values.password) {
        setHeader('Kullanıcı Adı ve Şifre gerekli');
      } else if (!values.username) {
        setHeader('Kullanıcı Adı gerekli');
      } else if (!values.password) {
        setHeader('Şifre gerekli');
      }
      openModal();
    } else {
      post(Config.API_AUTH_URL + '/login', values);
    }
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    clearError();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#90CAF9" />
      <View style={styles.inner_container}>
        <Image source={require('./../../assets/login_icon.png')} style={styles.logo} />
        <Text style={styles.login_text}>DÜKKAN</Text>
        <Formik initialValues={{ username: '', password: '' }} onSubmit={handleLogin}>
          {({ handleSubmit, handleChange, values }) => (
            <View>
              <Input
                placeholder="Kullanıcı Adını giriniz."
                value={values.username}
                onType={handleChange('username')}
                secure={false}
                iconName="account"
              />
              <Input
                placeholder="Şifrenizi giriniz."
                value={values.password}
                onType={handleChange('password')}
                secure={true}
                iconName="key"
              />
              <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
            </View>
          )}
        </Formik>
      </View>
      <ModalBox modalVisible={modalVisible} close={closeModal} header={header} />
    </SafeAreaView>
  );
};

export default Login;
