import React, { useState } from 'react'
import {TextInput, Text, TouchableOpacity, Alert, View, SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native'

import * as SQLite from 'expo-sqlite'
import { ScrollView } from 'react-native-gesture-handler';

var db = SQLite.openDatabase('StudyDatabase.db')

export default function RegisterNotes({route, navigation}){    
    const {idSub} = route.params;

    let [noteTitle, setNoteTitle] = useState('')
    let [noteDescription, setNoteDescription] = useState('')

    let registerNotes = () =>{
        if(!noteTitle){
            alert('Campo vazio, digite o nome da matéria');
            return;
        }

        db.transaction(function (tx){
            alert('Entrou na transiction: ' + noteTitle)
            tx.executeSql(
                'INSERT INTO tableNotas (titulo, descricao, subjectID) values (?, ?, ?)',
                [noteTitle, noteDescription, idSub],
                (tx, results) => {
                    if(results.rowsAffected > 0){
                        console.log('Cadastrada com sucesso')
                        Alert.alert(
                            'Sucesso',
                            'Tópico cadastrado com sucesso',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => navigation.navigate('ViewSubject')
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

        navigation.navigate('Home')
    }

    return(
        <KeyboardAvoidingView style={{flex: 1}}
        behavior={Platform.OS == "ios" ? "padding" : "height"}>
            {/* <ScrollView> */}
                <SafeAreaView style={stylesRegisterNotes.safeView}>
            <View style={stylesRegisterNotes.container}>
                <Text style={stylesRegisterNotes.title}>Novo assunto de estudo</Text>

                <View style={stylesRegisterNotes.inputView}>
                    <Text style={stylesRegisterNotes.name}>Nome</Text>

                    <TextInput 
                    style={stylesRegisterNotes.inputName}
                    onChangeText={(noteTitle) => setNoteTitle(noteTitle)}/>

                    <Text style={stylesRegisterNotes.name}>Descrição</Text>

                    <TextInput
                    style={stylesRegisterNotes.inputDesc}
                    placeholder="Você pode preencher agora ou mais tarde"
                    multiline={true}
                    onChangeText={(noteDescription) => setNoteDescription(noteDescription)}/>
                </View>
                
                <TouchableOpacity
                style={stylesRegisterNotes.touch}
                onPress={registerNotes}>
                    <Text style={stylesRegisterNotes.txtTouch}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
            {/* </ScrollView> */}
        </KeyboardAvoidingView>
    )
}

const stylesRegisterNotes = StyleSheet.create({
    safeView:{
        flex: 1,        
        padding: 20,
        backgroundColor: '#2d85ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
        width: '90%',
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 20
    },
    title:{
        marginTop: 10,
        fontSize: 30,
        textAlign: 'center',
    },
    inputView:{
        flex: 1,
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
    inputDesc:{
        flex: 1,
        //height: 45,
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
        alignSelf: 'center',
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