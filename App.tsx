import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './src/screens/home/home';
import { Text, Toast, Root } from 'native-base';
import { AProposScreen } from './src/screens/a-propos/apropos';

const Stack = createStackNavigator()

export default class App extends Component {
    componentWillUnmount() {
      
    }
    render() {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'HomeScreen'}>
              <Stack.Screen
                  name={'HomeScreen'}
                  component={HomeScreen}
                  options={{
                    headerShown: true,
                    headerTitle: (props: any) => (
                      <Text>Home</Text>
                    )                   
                  }}
              />
              <Stack.Screen
                  name={'AProposScreen'}
                  component={AProposScreen}
                  options={{
                    headerShown: true,
                    headerTitle: (props: any) => (
                      <Text>A Propos</Text>
                    ) 
                  }}
              />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
}


