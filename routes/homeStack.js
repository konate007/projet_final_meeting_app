import React from 'react'
import{NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'

const Stack = createStackNavigator();

function homeStack()
{
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Meeting App"
          component={Home}
          options= {{ 
            headerTitle: (navigation)=>{
              return(<Header navigation={navigation}/>)
            }
          }}
          />
          <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          //options={{ title: 'Review Details'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default homeStack;