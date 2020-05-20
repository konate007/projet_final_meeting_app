import React from 'react'
import {StyleSheet, Text,View, Image} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

export default function Header({navigation}){

    const optionMenu =  () => {
        //navigation.openDrawer();
        
    }

    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' size={30}
            style={styles.icon} onPress={optionMenu}
            />
            <View>
                <Text style={styles.headerText}>Meeting App</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },

    icon: {
        position: 'absolute',
        left: 16,
    }
})