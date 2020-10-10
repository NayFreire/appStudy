import React, { useState } from 'react'
import {TextInput, Text, TouchableOpacity, ScrollView, View, SafeAreaView, StyleSheet} from 'react-native'

export default function RegisterSubject(){    
    const [subject, setSubject] = useState('')

    return(
        <SafeAreaView style={stylesRegisterSubject.safeView}>
            <ScrollView>
                <View style={stylesRegisterSubject.container}>
                    <Text style={stylesRegisterSubject.title}>Nova matéria, novos estudos</Text>

                    <View style={stylesRegisterSubject.inputView}>
                        <Text style={stylesRegisterSubject.name}>Nome</Text>
                        <TextInput 
                        style={stylesRegisterSubject.inputName}
                        onChangeText={(subject) => setSubject(subject)}/>
                    </View>
                    <TouchableOpacity
                    style={stylesRegisterSubject.touch}
                    onPress={() => alert(subject)}>
                        <Text>Adicionar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        padding: 10,
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
        marginTop: 20,
        backgroundColor: 'red'
    },
    name:{
        fontSize: 18
    },
    inputName:{
        height: 45,
        padding: 5,
        fontSize: 18,
        borderRadius: 5,
        backgroundColor: '#E0F0FF'
    },
    touch:{

    }
})