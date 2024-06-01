import React from 'react';
import { View, Text, Image } from 'react-native';

import Config from "react-native-config";

import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import styles from './Detail.styles';

const Detail = ({route}) => {
  const {id} = route.params;
  const { loading, data, error } = useFetch(`${Config.API_URL}/${id}`);
  
  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <View style = { styles.container }>
      <Image style = { styles.image } source={{ uri: data.image }} />
      <View style = { styles.body_container } >
        <Text style = { styles.product }>{ data.title }</Text>
        <Text style = { styles.description }>{ data.description }</Text>
        <Text style = { styles.price }>{ data.price } TL</Text>
      </View>
   </View>
  );
}
export default Detail;
