import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './src/pages/Home'
import Login from './src/pages/Login'
import RegisterLoginUser from './src/pages/RegisterLoginUser'
import RegisterSubject from './src/pages/crud/subjects/RegisterSubject'
// import UpdateSubject from './src/pages/crud/subjects/UpdateSubject'
// import DeleteSubject from './src/pages/crud/subjects/DeleteSubject'
// import ViewSubject from './src/pages/crud/subjects/ViewSubject'
// import ViewAllSubjects from './src/pages/crud/subjects/ViewAllSubjects'


import * as SQLite from 'expo-sqlite'

var db = SQLite.openDatabase({name: 'StudyDatabase.db'})

let Stack = createStackNavigator();

export default function App() {

  useEffect(() => {
    db.transaction((txn) => {
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='tableSubjects",
            [],
            function (tx, result) {
                if(result.rows.length == 0){
                    txn.executeSql(
                        'DROP TABLE IF EXISTS tableSubjects', []
                    );
                    txn.executeSql(
                        'CREATE TABLE IF NOT EXISTS tableSubjects(subjectId INTEGER PRIMARY KEY AUTOINCREMENT,subjectName VARCHAR(50), numberNotes INTEGER, timeStudying TIME)', []
                    )
                }
            }
        )
    })
  }, [])

  useEffect(() => {
    db.transaction((txn) => {
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='tableNotas",
            [],
            function (tx, result) {
                if(result.rows.length == 0){
                    txn.executeSql(
                        'DROP TABLE IF EXISTS tableNotas', []
                    );
                    txn.executeSql(
                        'CREATE TABLE IF NOT EXISTS tableNotas(notaId INTEGER PRIMARY KEY AUTOINCREMENT, titulo VARCHAR(50), descricao VARCHAR(1000), subjectID int, FOREIGN KEY (subjectid) REFERENCES tableSubjects(subjectId))', []
                    )
                }
            }
        )
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RegisterUser" component={RegisterLoginUser} options={{title: "Cadastre-se ou entre"}}/> 
        <Stack.Screen name="Login" component={Login} options={{title: "Login"}}/> 
        <Stack.Screen name="Home" component={Home} options={{title: "Página Inicial"}}/> 
        <Stack.Screen name="RegisterSubject" component={RegisterSubject} options={{title: "Adicione uma matéria"}}/> 
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
