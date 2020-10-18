import React, { useState } from 'react'
import {TextInput, Text, TouchableOpacity, Alert, View, SafeAreaView, StyleSheet} from 'react-native'

import * as SQLite from 'expo-sqlite'

var db = SQLite.openDatabase('StudyDatabase.db')

export default function UpdateSubject({navigation}){   
    let titleTxt = 'Nome da matéria que deseja editar' 
    let [subjectName, setSubjectName] = useState('')
    let [subNewName, setSubNewName] = useState('')
    let [subjectId, setSubjectId] = useState(0)

    var materia = '';
    
    let renderButtonUpdate = () => {
      return(
          <TouchableOpacity
          style={stylesUpdateSubject.touch}
          onPress={updateSubject}>
            <Text style={stylesUpdateSubject.txtTouch}>Editar</Text>
          </TouchableOpacity>
        )
    }

    let renderButtonSearch = () => {
        return(
          <TouchableOpacity
          style={stylesUpdateSubject.touch}
          onPress={searchSubject, () => materia = subjectName}>
            <Text style={stylesUpdateSubject.txtTouch}>Buscar</Text>
          </TouchableOpacity>
        )
    }

    let renderInputSearch = () => {
        return(
          <View style={stylesUpdateSubject.inputView}>
            <TextInput 
            style={stylesUpdateSubject.inputName}
            onChangeText={(subjectName) => setSubjectName(subjectName)}/>
          </View>
        )        
      
    }

      let renderInputUpdate = () => {
        return(
          <View style={stylesUpdateSubject.inputView}>
            <TextInput 
            style={stylesUpdateSubject.inputName}
            onChangeText={(subNewName) => setSubNewName(subNewName)}/>
          </View>
        )
      
    }

    let searchSubject = () =>{
      if(!subjectName){
            alert('Campo vazio, digite o nome da matéria');
            return;
        }

      db.transaction(function (tx){
            tx.executeSql(
                'SELECT subjectId FROM tableSubjects WHERE subjectName = ?',
                [subjectName],
                (tx, results) => {
                    var len = results.rows.length;
                    if(len > 0) {
                      let res = results.rows.item(0);
                      setSubjectId(res.subjectId);
                      
                      Alert.alert(
                        'Ótimo',
                        'A matéria foi encontrada',
                        [
                          {
                            text: 'Ok'
                          }
                        ],
                        {cancelable: true}
                      )
                    } 
                    else{
                      alert('Nenhuma matéria com esse nome foi encontrada');
                    }
                }
            )
      })     
    }

    let updateSubject = () =>{       
        if(!subjectName){
            alert('Campo vazio, digite o nome da matéria');
            return;
        }
        
        db.transaction(function (tx){
            alert('Entrou na transiction: ' + subjectName)
            tx.executeSql(
                'UPDATE tableSubjects SET subjectname = ? WHERE subjectid = ?',
                [subNewName, subjectId],
                (tx, results) => {
                    if(results.rowsAffected > 0){
                        console.log('Editado com sucesso')
                        Alert.alert(
                            'Sucesso',
                            'Matéria editada com sucesso',
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
                        alert('Edição falhou')
                    }
                }
            )
        })

        navigation.navigate('Home')
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
                    onPress={searchSubject}>
                    <Text style={stylesUpdateSubject.txtTouch}>Buscar</Text>
                  </TouchableOpacity>
                </View>
                
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  <TextInput 
                  style={stylesUpdateSubject.inputName}
                  onChangeText={(subNewName) => setSubNewName(subNewName)}/>
                      
                  <TouchableOpacity
                    style={stylesUpdateSubject.touch}
                    onPress={updateSubject}>
                    <Text style={stylesUpdateSubject.txtTouch}>Editar</Text>
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
    inputView:{
        width: '100%',
        marginTop: 10,
        marginBottom: 10
    },
    name:{
        maxWidth: 500,
        fontSize: 20,
        marginBottom: 10
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