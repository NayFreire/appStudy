import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './src/pages/Home'
import Login from './src/pages/Login'
import RegisterLoginUser from './src/pages/RegisterLoginUser'
import RegisterSubject from './src/pages/crud/subjects/RegisterSubject'
import UpdateSubject from './src/pages/crud/subjects/UpdateSubject'
import DeleteSubject from './src/pages/crud/subjects/DeleteSubject'
import ViewSubject from './src/pages/crud/subjects/ViewSubject'
// import ViewAllSubjects from './src/pages/crud/subjects/ViewAllSubjects'
import RegisterTopics from './src/pages/crud/topics/RegisterTopics'
import ViewTopics from './src/pages/crud/topics/ViewTopics'
import UpdateTopics from './src/pages/crud/topics/UpdateTopics'
import DeleteTopics from './src/pages/crud/topics/DeleteTopics'
import TopicsMenu from './src/pages/crud/topics/TopicsMenu'


import * as SQLite from 'expo-sqlite'

var db = SQLite.openDatabase('StudyDatabase.db')

let Stack = createStackNavigator();

export default class App extends React.Component {

    state = {data: []}

    render(){
        return (
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="RegisterUser" component={RegisterLoginUser} options={{title: "Cadastre-se ou entre"}}/> 
                <Stack.Screen name="Login" component={Login} options={{title: "Login"}}/> 
                <Stack.Screen name="Home" component={Home} options={{title: "Página Inicial", headerLeft: null}}/> 
                <Stack.Screen name="RegisterSubject" component={RegisterSubject} options={{title: "Adicione uma matéria"}}/> 
                <Stack.Screen name="DeleteSubject" component={DeleteSubject} options={{title: "Deletar"}} />
                <Stack.Screen name="ViewSubject" component={ViewSubject} options={{title: "Notas"}} />
                <Stack.Screen name="UpdateSubject" component={UpdateSubject} options={{title: "Edite sua matéria"}} />
                <Stack.Screen name="TopicsMenu" component={TopicsMenu} options={{title: "Menu de Tópicos"}} />
                <Stack.Screen name="RegisterTopics" component={RegisterTopics} options={{title: "Vamos de novo tópico?"}} />
                <Stack.Screen name="UpdateTopics" component={UpdateTopics} options={{title: "Edição de Tópicos"}} />
                <Stack.Screen name="ViewTopics" component={ViewTopics} options={{title: "Todos os Tópicos"}} />
                <Stack.Screen name="DeleteTopics" component={DeleteTopics} options={{title: "Excluir Tópicos"}} />
              </Stack.Navigator>
            </NavigationContainer>
          );
    }
}
