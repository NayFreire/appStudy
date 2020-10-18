import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import * as SQLite from 'expo-sqlite'

var db = SQLite.openDatabase('StudyDatabase.db')

let Stack = createStackNavigator();

export default class SQLViewSub extends React.Component ({subIdParam}){

    state = {data: []}

    async componentDidMount(){
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT subjectName FROM tableSubjects WHERE subjectId = ?',
                [subIdParam],
                (tx, results) => {
                    var nameSubject = []
                    nameSubject.push(results.rows.item(0))
                    name = nameSubject[0].subjectName;
                    //console.log("Name: ", name)

                    db.transaction((tx) => {
                        tx.executeSql(
                            'SELECT * FROM tableNotas WHERE subjectId = ?',
                            [subIdParam],
                            (tx, results) => {
                                var auxNotas = [];
                                for(let i=0; i<results.rows.length; ++i){
                                    auxNotas.push(results.rows.item(i))
                                    
                                }
                                console.log('subIdParam: ', subIdParam)
                                setFlatListTopics(auxNotas)
                            }
                        )
                    })
                }
            )
        })
        
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
