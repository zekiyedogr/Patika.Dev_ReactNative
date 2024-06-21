import React from 'react';
import { View, Text, Image } from 'react-native';

import Config from "react-native-config";

import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import styles from './Detail.styles';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Detail = ({route}) => {
  const {id} = route.params;
  const { loading, data, error } = useFetch(`${Config.API_PRODUCT_URL}/${id}`);
  
  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <View style = { styles.container }>
      <View>
        <Image style = { styles.image } source={{ uri: data.image }} />
      </View>      
      <View style = { styles.body_container } >
      <Text style = { styles.category }>{ data.category }</Text>
        <Text style = { styles.product }>{ data.title }</Text>
        <Text style = { styles.description }>{ data.description }</Text>
        <Text style = { styles.price }>{ data.price } TL</Text>

        <View style={styles.rating_container}>
          <Stars
            default={data.rating.rate}
            count={5}
            half={true}
            starSize={30}
            fullStar={<Icon name={'star'} type={'font-awesome'} color={'#90CAF9'} size={30} />}
            emptyStar={<Icon name={'star'} type={'font-awesome'} color={'#ccc'} size={30} />}
            halfStar={<Icon name={'star'} type={'font-awesome'} color={'#90CAF9'} size={30} />}
          />
          <Text style = { styles.count }> ({ data.rating.count })</Text>
        </View>
      </View>
   </View>
  );
}
export default Detail;
