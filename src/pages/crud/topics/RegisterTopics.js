import React, { useState } from 'react'
import {TextInput, Text, TouchableOpacity, Alert, View, SafeAreaView, StyleSheet} from 'react-native'

import * as SQLite from 'expo-sqlite'

var db = SQLite.openDatabase('StudyDatabase.db')

export default function RegisterTopics({navigation}){    
    let [title, setTitle] = useState('')
    let [subjectName, setSubjectName] = useState('')
    let [subjectID, setSubjectID] = useState(0)

    let registerTopic = () =>{
        if(!title && !subjectName){
            alert('Campo(s) vazio(s), preencha-o(s)');
            return;
        }

        db.transaction(function (tx){
          alert('entrou na parte de banco')
          tx.executeSql(
            'SELECT subjectId FROM tableSubjects WHERE subjectName = ?',
            [subjectName],
            (tx, results) => {
              var len = results.rows.length;
                if(len > 0) {
                  let res = results.rows.item(0);
                  console.log(res)
                  setSubjectID(res.subjectId);
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
                    
                    tx.executeSql(
                    'INSERT INTO tableTopics(title, subjectID) VALUES (?, ?)',
                    [title, subjectID],
                    (tx, results) => {
                        if(results.rowsAffected > 0){
                            console.log('Cadastrada com sucesso')
                            Alert.alert(
                                'Sucesso',
                                'Tópico cadastrado com sucesso',
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
                            alert('Cadastro do tópico falhou')
                        }
                }
            )
                    } 
                    else{
                      alert('Nenhuma matéria com esse nome foi encontrada');
                    }
            }
          )
        })
        
        navigation.navigate('TopicsMenu')
    }

    return(
        <SafeAreaView style={stylesRegisterTopic.safeView}>
            <View style={stylesRegisterTopic.container}>
                <Text style={stylesRegisterTopic.title}>Novo assunto de estudo</Text>

                <View style={stylesRegisterTopic.inputView}>
                  <Text style={stylesRegisterTopic.name}>Nome da matéria desse tópico</Text>

                  <TextInput 
                  placeholder="Ex.: Matemática"
                  style={stylesRegisterTopic.inputName}
                  onChangeText={(subjectName) => setSubjectName(subjectName)}/>

                  <Text style={stylesRegisterTopic.name}>Título do tópico</Text>

                  <TextInput 
                  placeholder="Ex.: Conjuntos"
                  style={stylesRegisterTopic.inputName}
                  onChangeText={(title) => setTitle(title)}/>                    
                </View>
                
                <TouchableOpacity
                style={stylesRegisterTopic.touch}
                onPress={registerTopic}>
                    <Text style={stylesRegisterTopic.txtTouch}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const stylesRegisterTopic = StyleSheet.create({
    safeView:{
        flex: 1,        
        padding: 20,
        backgroundColor: '#2d85ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
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
        minWidth: '100%',
        height: 45,
        padding: 5,
        fontSize: 18,
        borderRadius: 5,
        backgroundColor: '#E0F0FF'
    },
    touch:{
        padding: 20,
        margin: 10,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        backgroundColor: '#3CA2D6',
        borderRadius: 10
    },
    txtTouch:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    }
})