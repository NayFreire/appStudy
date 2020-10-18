import React, { useState } from 'react'
import {TextInput, Text, TouchableOpacity, Alert, View, SafeAreaView, StyleSheet} from 'react-native'

import * as SQLite from 'expo-sqlite'

var db = SQLite.openDatabase('StudyDatabase.db')

export default function UpdateSubject({navigation}){   
    return(
        <Text>Delete Topics</Text>
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