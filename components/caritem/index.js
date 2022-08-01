import { Text, View, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'
import StyledBtn from '../StyledBtn';

const CarItem =(props) => {
    return (
    <View style={styles.carContainer}>
        <ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.image}/>
        <View style={styles.Titles}>
          <Text style={styles.Title}>Model S</Text>
          <Text style={styles.Subtitle}>Starting at $69,420</Text>
        </View>

      <StyledBtn type="primary" content={"Custom Order"} onPress={() => console.warn("Custom Order Pressed")}/>
      <StyledBtn type="Secondery" content={"Existing Inventory"} onPress={() => console.warn("Inventory Pressed")}/>

    </View>
    );
};

export default CarItem