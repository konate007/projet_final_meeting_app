import React, {useState} from 'react'
import {StyleSheet, Text, View,Button, TextInput, YellowBox} from 'react-native'
import { global } from '../styles/global'
import {Formik} from 'formik'
import * as yup from 'yup';
import FlatButton from '../shared/button'
import MyDatePicker from '../MyDatePicker'
YellowBox.ignoreWarnings(['Remote debugger']);

const reviewSchema = yup.object({
    lieuReunion: yup.string().required().min(8),
    sujetReunion: yup.string().required().min(8),
    date: yup.string().required(8),
    heure: yup.string().required(8),
    numeroSalle: yup.string().required()
    .test('is-num-1-5', 'Rating must be a number 1 - 10', (val) => {
        return parseInt(val) <= 10 && parseInt(val) >0;
    })
})

export default function ReviewForm({ addReview }){

    return(
        <View style={global.container}>
            <Formik
            initialValues={{lieuReunion: '', sujetReunion: '', date:'', heure: '', numeroSalle: ''}}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => {
                actions.resetForm();
                addReview(values);
            }}
            >
                {(props) => (
                    <View>
                        <TextInput
                        style={global.input}
                        placeholder='Tapez lieu reunion'
                        onChangeText={props.handleChange('lieuReunion')}
                        value={props.values.lieuReunion}
                        onBlur={props.handleBlur('lieuReunion')}
                        />
                        <Text style={global.errorsText}>{props.touched.lieuReunion && props.errors.lieuReunion}</Text>

                        <TextInput
                        style={global.input}
                        placeholder='Tapez sujet réunion'
                        onChangeText={props.handleChange('sujetReunion')}
                        value={props.values.sujetReunion}
                        onBlur={props.handleBlur('sujetReunion')}
                        />
                        <Text style={global.errorsText}>{props.touched.sujetReunion && props.errors.sujetReunion}</Text>

                        <TextInput
                        style={global.input}
                        placeholder='Tapez date réunion(12/04/2018)'
                        onChangeText={props.handleChange('date')}
                        value={props.values.date}
                        onBlur={props.handleBlur('date')}
                        />
                        <Text style={global.errorsText}>{props.touched.date && props.errors.date}</Text>

                        <TextInput
                        style={global.input}
                        placeholder='Tapez heure réunion(12h 45mn)'
                        onChangeText={props.handleChange('heure')}
                        value={props.values.heure}
                        onBlur={props.handleBlur('heure')}
                        />
                        <Text style={global.errorsText}>{props.touched.heure && props.errors.heure}</Text>

                        <TextInput
                        style={global.input}
                        placeholder='Numéro salle (1-10)'
                        onChangeText={props.handleChange('numeroSalle')}
                        value={props.values.numeroSalle}
                        keyboardType='numeric'
                        onBlur={props.handleBlur('numeroSalle')}
                        />
                        <Text style={global.errorsText}>{props.touched.numeroSalle && props.errors.numeroSalle}</Text>

                        <FlatButton text='submit'onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>

    )
}