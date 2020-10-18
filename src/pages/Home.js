import React, { useEffect, useState } from 'react'
import {Text, TouchableOpacity, ScrollView, View, StyleSheet, SafeAreaView, Image, Alert} from 'react-native'
import ImagemEmptyList from '../components/ImageEmptyList'
import * as SQLite from 'expo-sqlite'
import { FlatList } from 'react-native-gesture-handler'

var db = SQLite.openDatabase('StudyDatabase.db')

export default function Home({navigation}){

    let[flatListItems, setFlatListItems] = useState([])
    let[selectedSub, setSelectedSub] = useState('')
    let[selectedSubData, setSelectedSubData] = useState([])
    
    //const navigationRef = React.useRef(null);
    
    useEffect(() => {
        db.transaction(function (txn){
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='tableSubjects'",
                [],
                function (tx, res) {
                    if(res.rows.length == 0){
                        txn.executeSql(
                            'DROP TABLE IF EXISTS tableSubjects', []
                        );
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS tableSubjects(subjectId INTEGER PRIMARY KEY AUTOINCREMENT,subjectName VARCHAR(50), numberNotes INTEGER, timeStudying TEXT)', 
                            [],
                            (error) => {
                              console.log("Error call back: " + JSON.stringify(error));
                              console.log(error);
                            },
                            () => {
                              console.log("transaction complete call back")
                            }
                        );
                    }
                },
              (error) => {
                console.log("Error call back: " + JSON.stringify(error));
                console.log(error);
              },
              () => {
                console.log("Transaction complete call back");
              }
            );
        });
      }, []);
    
      useEffect(() => {
        db.transaction((txn) => {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='tableTopics'",
                [],
                function (tx, result) {
                    if(result.rows.length == 0){
                        txn.executeSql(
                            'DROP TABLE IF EXISTS tableTopics', []
                        );
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS tableTopics(topicId INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(50), subjectID int, FOREIGN KEY (subjectID) REFERENCES tableSubjects(subjectId))', 
                            [],
                            (error) => {
                              console.log("Error call back: " + JSON.stringify(error));
                              console.log(error)
                            },
                            () => {
                              console.log("transaction complete call back")
                            }
                        )
                    }
                },
                (error) => {
                  console.log("Error call back: " + JSON.stringify(error));
                  console.log(error);
                },
                () => {
                  console.log("Transaction complete call back");
                }
            );
        });
      }, [])

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM tableSubjects', 
                [], 
                (tx, results) => {
                    var temp = [];
                    for(let i=0; i<results.rows.length; ++i){
                        temp.push(results.rows.item(i))
                        console.log(temp[i])
                    }
                    setFlatListItems(temp);
                }
            )
        })
    }, [])

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
                            onPress={() => navigation.navigate('RegisterSubject')}>
                                <Text style={stylesHome.subjectsTitlePlusTxt}>Cadastrar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            style={stylesHome.subjectsTitlePlus}
                            onPress={() => navigation.navigate('UpdateSubject')}>
                                <Text style={stylesHome.subjectsTitlePlusTxt}>Editar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            style={stylesHome.subjectsTitlePlus}
                            onPress={() => navigation.navigate('DeleteSubject')}>
                                <Text style={stylesHome.subjectsTitlePlusTxt}>Deletar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            style={stylesHome.subjectsTitlePlus}
                            onPress={() => navigation.navigate('ViewSubject')}>
                                <Text style={stylesHome.subjectsTitlePlusTxt}>Ver Todas</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            style={stylesHome.subjectsTitlePlus}
                            onPress={ 
                            () => Alert.alert(
          'Instruções',
          'Para adicionar um tópico é preciso que você o associe com uma matéria já cadastrada',
          [
            {
              text: "Ok, entendi",
              onPress: navigation.navigate('TopicsMenu')
            }
          ],
          {cancelable: true}
        )}>
                                <Text style={stylesHome.subjectsTitlePlusTxt}>Tópicos</Text>
                            </TouchableOpacity> 
                        </View>
                        <View style={stylesHome.subjectsList}>
                            

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
