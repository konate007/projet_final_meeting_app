import React from 'react';
import {
    StyleSheet,Text, Keyboard,View,
    TextInput, TouchableOpacity, Button 
} from 'react-native'
import Navigator from './homeStack'
import Home from '../screens/home'
import {createSwitchNavigator} from 'react-navigation'

//const userInfo = {user:"admin", pwd: "admin"}
class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
        } 

    }
    

    myFun = () =>
    {
       const{username, password} = this.state
       //alert(username)

        if(username === password)
        {   
          //this.props.navigation.navigate('Navigator')
          alert("Connection reçu")
        }
        else{
          alert("Connection réfusé")
        }
         
     }

    render(){
     console.log(this.props)
      return (
        <View style={styles.container}>
          <Text style={styles.header}>Authentication</Text>
          <TextInput
          placeholder="Username"
          style={styles.myText}
          onChangeText={
              username => this.setState({username})
          }
          value={this.state.username}
          />

          <TextInput
          placeholder="Password"
          style={styles.myText}
          onChangeText={
              password => this.setState({password})
          }
          value={this.state.password}
          secureTextEntry={true}
          />
          <Button title='Login'  onPress={this.myFun}/>
        </View>
      );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2896d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touch:{
      backgroundColor: 'red',
      padding: 10,
      width: 150,
  },

  myText: {
      borderWidth:1,
      borderColor: '#ccc',
      margin: 10,
      padding: 10,
      width: 300
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  header:{
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default LoginForm
