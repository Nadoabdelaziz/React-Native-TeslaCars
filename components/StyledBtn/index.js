import { Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

const StyledBtn =(props) => {

    const {type,content,onPress} =props;
    // const content=props.content;
    // const onPress=props.onPress;


    const backgroundColor = type === 'primary'?'black':'white';
    const textColor = type === 'primary'?'white':'black';


    return (
        <View style={styles.container}>
            <Pressable
            style={[styles.btn , {backgroundColor:backgroundColor}]}
            onPress={onPress}
            >
                <Text style={[styles.Text , {color:textColor}]}>
                    {content}
                </Text>

            </Pressable>
        </View>
    );
};

export default StyledBtn