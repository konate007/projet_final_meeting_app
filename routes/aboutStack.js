import *as React from 'react'
import{NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import About from '../screens/about'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'
import React from 'react'

const Stack = createStackNavigator();

function aboutStack(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="About"
          component={About}
          options= {{ 
            headerTitle: (navigation)=>{
              return(<Header navigation={navigation}/>)
            }
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default aboutStack;