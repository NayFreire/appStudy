import React, { useState } from 'react'
import {TextInput, Text, TouchableOpacity, Alert, View, SafeAreaView, StyleSheet} from 'react-native'

import * as SQLite from 'expo-sqlite'

var db = SQLite.openDatabase('StudyDatabase.db')

export default function DeleteSubject({navigation}){   
    let [subjectName, setSubjectName] = useState('')

    let deleteSubject = () =>{         
      Alert.alert(
        'Cuidado!',
        'Tem certeza que deseja excluir essa matéria?',
        [
          {
            text: 'Sim',
            onPress: () => {
              db.transaction(function (tx){
                tx.executeSql(
                  'DELETE from tableSubjects WHERE subjectName = ?',
                  [subjectName],
                  (tx, results) => {
                    if(results.rowsAffected > 0){
                      Alert.alert(
                        'Sucesso',
                        'Matéria excluída com sucesso',
                        [
                          {
                            text: 'Ok',
                            onPress: () => {navigation.navigate('Home')}
                          },
                        ],
                        {cancelable: false}
                      )
                    }
                    else{
                      alert('Exclusão falhou')
                    }
                  }
                )
              })  
            }
          },
          {
            text: 'Não',
            onPress: () => navigation.navigate('Home')
          }
        ]
      )
    }

    return(
        <SafeAreaView style={stylesUpdateSubject.safeView}>
            <View style={stylesUpdateSubject.container}>
                <Text style={stylesUpdateSubject.title}>Novo assunto de estudo</Text>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  <TextInput 
                  style={stylesUpdateSubject.inputName}
                  onChangeText={(subjectName) => setSubjectName(subjectName)}/>
                      
                  <TouchableOpacity
                    style={stylesUpdateSubject.touch}
                    onPress={deleteSubject}>
                    <Text style={stylesUpdateSubject.txtTouch}>Excluir</Text>
                  </TouchableOpacity>
                </View>         
                
            </View>
        </SafeAreaView>
    )
}

const stylesUpdateSubject = StyleSheet.create({
    safeView:{
        flex: 1,        
        padding: 20,
        backgroundColor: '#2d85ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
      width: '90%',
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    title:{
        marginTop: 10,
        fontSize: 30,
        textAlign: 'center',
    },
    inputName:{
        width: '65%',
        height: 45,
        padding: 5,
        fontSize: 18,
        borderRadius: 5,
        backgroundColor: '#E0F0FF'
    },
    touch:{
        padding: 20,
        margin: 10,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        backgroundColor: '#3CA2D6',
        borderRadius: 10
    },
    txtTouch:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    }
})