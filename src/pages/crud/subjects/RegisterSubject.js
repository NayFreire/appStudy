import React, { useState } from 'react'
import {TextInput, Text, TouchableOpacity, ScrollView, View, SafeAreaView, StyleSheet} from 'react-native'

import * as SQLite from 'expo-sqlite'

var db = SQLite.openDatabase({name: 'StudyDatabase.db'})

export default function RegisterSubject({navigation}){    
    const [subject, setSubject] = useState('')

    let registerSubject = () =>{
        if(!subject){
            alert('Campo vazio, digite o nome da matéria')
        }
        db.transaction(function (tx){
            tx.executeSql(
                'INSERT INTO tableSubjects (subjectName) VALUES (?)',
                [subject],
                (tx, results) => {
                    if(results.rowsAffected > 0){
                        Alert.alert(
                            'Sucesso',
                            'Matéria cadastrada com sucesso',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => navigation.navigate('Home')
                                },
                            ],
                            {cancelable: false}
                        )
                    }
                    else{
                        alert('Cadastro falhou')
                    }
                }
            )
        })
    }

    return(
        <SafeAreaView style={stylesRegisterSubject.safeView}>
            <View style={stylesRegisterSubject.container}>
                <Text style={stylesRegisterSubject.title}>Novo assunto de estudo</Text>

                <View style={stylesRegisterSubject.inputView}>
                    <Text style={stylesRegisterSubject.name}>Nome</Text>
                    <TextInput 
                    style={stylesRegisterSubject.inputName}
                    onChangeText={(subject) => setSubject(subject)}/>
                </View>
                
                <TouchableOpacity
                style={stylesRegisterSubject.touch}
                onPress={registerSubject}>
                    <Text style={stylesRegisterSubject.txtTouch}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const stylesRegisterSubject = StyleSheet.create({
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