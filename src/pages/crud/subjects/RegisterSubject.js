import React, { useState } from 'react'
import {TextInput, Text, TouchableOpacity, ScrollView, View, SafeAreaView, StyleSheet} from 'react-native'

export default function RegisterSubject(){    
    const [subject, setSubject] = useState('')

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
                onPress={() => alert(subject)}>
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