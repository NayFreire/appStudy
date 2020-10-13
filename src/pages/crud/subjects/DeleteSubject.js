import React, { useEffect, useState } from 'react'
import {Text, TouchableOpacity, ScrollView, View, StyleSheet, SafeAreaView, Alert} from 'react-native'
import * as SQLite from 'expo-sqlite'
import { FlatList } from 'react-native-gesture-handler'
// import { Dimensions } from 'react-native';

var db = SQLite.openDatabase('StudyDatabase.db')

const DeleteSubject = () => {
    Alert.alert(
        'Alerta',
        'Deletar esta matéria?',
        [
            {
                text: 'Sim',
                onPress: () => console.log('Excluído')
            },
            {
                text: 'Não',
                onPress: () => 'Não excluído'
            }
        ],
        {cancelable: false}
    )
}

export default DeleteSubject
