import { Text, View, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'

const CarItem =(props) => {
    return (
    <View style={styles.carContainer}>
        <ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.image}/>
        <View style={styles.Titles}>
          <Text style={styles.Title}>Model S</Text>
          <Text style={styles.Subtitle}>Starting at $69,420</Text>
        </View>
    </View>
    );
};

export default CarItem