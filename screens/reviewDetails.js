import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {global} from '../styles/global'
import Card from '../shared/card'
class ReviewDetails extends React.Component
{
    render=()=>{
        //console.log(this.props)
        return(
            <View style={global.container}>
                <Card>
                    <Text>Lieu réunion: {this.props.route.params.lieuReunion}</Text>
                    <Text>Sujet réunion: {this.props.route.params.sujetReunion}</Text>
                    <Text>Numéro salle: {this.props.route.params.numeroSalle}</Text>
                    <Text>Date réunion: {this.props.route.params.date}</Text>
                    <Text>Heure réunion: {this.props.route.params.heure}</Text>
                </Card>
            </View>
        )
    }
}
export default ReviewDetails

  