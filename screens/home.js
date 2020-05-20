import React, {useState} from 'react'
import {StyleSheet, Text, View, FlatList,
    TouchableOpacity,Button, Modal,
    TouchableWithoutFeedback, Keyboard, YellowBox} from 'react-native'
import {global} from '../styles/global'
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons'
import ReviewForm from './reviewForm'
import ReviewDetails from './reviewDetails'
import  Datepicker from 'react-native-datepicker'

YellowBox.ignoreWarnings(['Remote debugger']);

export default function Home ({navigation}){

    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {lieuReunion: 'Coulouba, Mali/Bamako',sujetReunion: 'Gestion des biens',
         date: '12/01/2018', heure:'11h 00', numeroSalle: 5, key: '1'},
        {lieuReunion: 'Hyppodrome, Mali/Bamako',sujetReunion: 'Lutte contre la corruption',
        date: '13/02/2019', heure:'10h 00',  numeroSalle: 4, key: '2'},
        {lieuReunion: 'Fass-marché, Sénégal/Dakar',sujetReunion: 'Gestion des immobiliers',
        date: '14/03/2020', heure:'12h 00', numeroSalle: 3, key: '3'},
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        //setModalOpen(false);
    }
        
    return(
        <View style={global.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            style={{...styles.modalToggle, ...styles.modalClose}}
                            onPress={() =>setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview}/>
                    </View>  
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() =>setModalOpen(true)}
            />
            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={global.title}>{item.lieuReunion}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },

    modalClose: {
        marginTop: 20,
        marginBottom: 10,
    },
    
    modalContent: {
        flex: 1,
    },

    suppButton: {
        borderRadius: 50,
        margin:5,
        height:70,
    }
})

  