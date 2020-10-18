import React, { useEffect, useState } from 'react'
import {Text, TouchableOpacity, ScrollView, View, StyleSheet, SafeAreaView, Image, Alert} from 'react-native'
import * as SQLite from 'expo-sqlite'
import { FlatList } from 'react-native-gesture-handler'

var db = SQLite.openDatabase('StudyDatabase.db')

export default function TopicsMenu({navigation}){

    let[flatListItems, setFlatListItems] = useState([])
    let[selectedSub, setSelectedSub] = useState('')
    let[selectedSubData, setSelectedSubData] = useState([])

    return(
        <SafeAreaView style={stylesHome.safeArea}>
            <ScrollView style={stylesHome.scrollContainer}>                 
                <View style={stylesHome.container}>
                    <View style={stylesHome.hours}>
                        <Text style={stylesHome.textHour}>Total de Horas Estudadas</Text>
                        <Text style={stylesHome.timer}>15:46:56</Text>
                    </View>
                    <View style={stylesHome.subjectsView}>
                        <View style={stylesHome.subjectsTitleView}>
                            <Text style={{fontSize: 25}}>Matérias</Text>

                            <TouchableOpacity
                            style={stylesHome.subjectsTitlePlus}
                            onPress={() => navigation.navigate('RegisterTopics')}>
                                <Text style={stylesHome.subjectsTitlePlusTxt}>Adicionar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            style={stylesHome.subjectsTitlePlus}
                            onPress={() => navigation.navigate('UpdateTopics')}>
                                <Text style={stylesHome.subjectsTitlePlusTxt}>Editar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            style={stylesHome.subjectsTitlePlus}
                            onPress={() => navigation.navigate('DeleteTopics')}>
                                <Text style={stylesHome.subjectsTitlePlusTxt}>Excluir</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            style={stylesHome.subjectsTitlePlus}
                            onPress={() => navigation.navigate('ViewTopics')}>
                                <Text style={stylesHome.subjectsTitlePlusTxt}>Ver Todos</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}

const stylesHome = StyleSheet.create({
    safeArea:{
        flex: 1,
        backgroundColor: '#2d85ff',
        padding: 10,
    },
    container:{
        flex: 1,
        padding: 10,
        //backgroundColor: '#00aadd',
        alignItems: 'center',
        //justifyContent: 'center'
    },
    hours:{
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 20
    },
    textHour:{
        fontSize: 25
    },
    timer:{
        fontSize: 42
    },
    subjectsView:{
        width: '100%',
        padding: 5,
        flex: 1,
        marginTop: 10,
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 20
    },
    subjectsTitleView:{
        marginTop: 5,
        //backgroundColor: 'purple',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    
    subjectsTitlePlus:{ 
        width: '100%',
        display: 'flex',
        backgroundColor: '#4ADE6B',
        alignItems: 'center',
        justifyContent: 'center',   
        borderRadius: 5,
        marginBottom: 10 
    },
    subjectsTitlePlusTxt:{
        textAlign: 'center',
        fontSize: 34,
        color: '#fff'
    },
    subjectsList:{
        flex: 1,
        //backgroundColor: 'pink',
    }
})
