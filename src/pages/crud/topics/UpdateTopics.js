import React, { useEffect, useState } from 'react'
import {Text, TouchableOpacity, ScrollView, View, StyleSheet, SafeAreaView, Image, Alert} from 'react-native'
import ImagemEmptyList from '../../../components/ImageEmptyList'
import * as SQLite from 'expo-sqlite'
import { FlatList } from 'react-native-gesture-handler'

var db = SQLite.openDatabase('StudyDatabase.db')

export default function ViewTopics({navigation}){

    <Text>Update Topics</Text>
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
    topicsView:{
        width: '100%',
        padding: 5,
        flex: 1,
        marginTop: 10,
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 20
    },
    topicsTitleView:{
        flexDirection: 'row',
        marginTop: 5,
        //backgroundColor: 'purple',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    topicsTitleText:{
        marginLeft: 5,
        fontSize: 34
    },
    topicsList:{
        flex: 1,
        //backgroundColor: 'pink',
    },
    paperEmptyView:{
        marginTop: 80,
        //backgroundColor: 'red',
        alignSelf: 'center'
    },
    imgEmpty:{
        marginTop: 40,
        marginBottom: 20
    },
    txtEmpty:{
        fontSize: 20,
        textAlign: 'center',
        color: '#67656F',
        marginBottom: 10
    },
    topicItem:{
        backgroundColor: '#F0D33B',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    viewInItem:{
        width: '100%',
        flexDirection: 'row',
        //backgroundColor: '#aaaaaa',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subjectName:{
        fontSize: 25,
        flexDirection: 'column'
    },
    numberTopics:{
        fontSize: 18,
        flexDirection: 'column'
    },
    iconsItem:{
        //backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})
