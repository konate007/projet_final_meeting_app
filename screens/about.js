import React from 'react'
import { StyleSheet, Text, View, FlatList,TouchableWithoutFeedback, Keyboard } from 'react-native'
import {global} from '../styles/global'

export default function About (){
    return(
        <View style={global.container}>
            <Text>About Screen</Text>
        </View>
    )
}