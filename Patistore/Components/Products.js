import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

import styles from './Products.style';

const Product = ({product}) => {
    return (
        <View style = { styles.container }>
            <View style = { styles.body }>
                <Image style = { styles.image } source = {{ uri : product.imgURL }} resizeMode = 'contain'/>
                <View style = { styles.bottom }>
                    <Text style = { styles.title }>{product.title}</Text>
                    <Text style = { styles.price }>{product.price}</Text>
                    {product.inStock ? null : <Text style={styles.inStock}>STOK YOK</Text>}
                </View>
            </View>
        </View>
    )
}

export default Product;