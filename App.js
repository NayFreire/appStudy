import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './src/pages/Home'
import Login from './src/pages/Login'
import RegisterUser from './src/pages/RegisterUser'
// import RegisterSubject from './src/pages/crud/subjects/RegisterSubject'
// import UpdateSubject from './src/pages/crud/subjects/UpdateSubject'
// import DeleteSubject from './src/pages/crud/subjects/DeleteSubject'
// import ViewSubject from './src/pages/crud/subjects/ViewSubject'
// import ViewAllSubjects from './src/pages/crud/subjects/ViewAllSubjects'

let Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RegisterUser" component={RegisterUser} options={{title: "Cadastre-se"}}/> 
        <Stack.Screen name="Login" component={Login} options={{title: "Login"}}/> 
        <Stack.Screen name="Home" component={Home} options={{title: "Página Inicial"}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
