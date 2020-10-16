import React, { useEffect, useState } from 'react'
import {Text, TouchableOpacity, ScrollView, View, StyleSheet, SafeAreaView, Image, Alert} from 'react-native'
import * as SQLite from 'expo-sqlite'
import { FlatList } from 'react-native-gesture-handler'
import ImagemEmptyList from '../../../components/ImageEmptyList'

var db = SQLite.openDatabase('StudyDatabase.db')

export default function ViewSubject({route, navigation}){
    
    let [flatListTopics, setFlatListTopics] = useState([])
    let [selectedTopic, setSelectedTopic] = useState('')
    
    const {subIdParam} = route.params;
    var name;

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT subjectName FROM tableSubjects WHERE subjectId = ?',
                [subIdParam],
                (tx, results) => {
                    var nameSubject = []
                    nameSubject.push(results.rows.item(0))
                    name = nameSubject[0].subjectName;
                    //console.log("Name: ", name)

                    db.transaction((tx) => {
                        tx.executeSql(
                            'SELECT * FROM tableNotas WHERE subjectId = ?',
                            [subIdParam],
                            (tx, results) => {
                                var auxNotas = [];
                                for(let i=0; i<results.rows.length; ++i){
                                    auxNotas.push(results.rows.item(i))
                                    //console.log(auxNotas[i])
                                }
                                setFlatListTopics(auxNotas)
                            }
                        )
                    })
                }
            )
        })
    })

    let itemView = (item) => {
        return(
            <TouchableOpacity
            key={item.subjectId}
            style={stylesHome.subjectItem}
            // onPress={}
            >
                <View style={stylesHome.viewInItem}>
                    <View>
                        <Text style={stylesHome.subjectName}>{item.titulo}</Text>
                    </View>
                    {/* <View style={stylesHome.iconsItem}>
                        <View style={stylesHome.iconInView}>
                            
                             
                        </View>
                    </View> */}
                </View>
            </TouchableOpacity>            
        )
    }

    let imageOrList = (item) => {
        if(flatListTopics.length == 0){
            return(
                <View style={stylesHome.paperEmptyView}>
                    <ImagemEmptyList style={stylesHome.imgEmpty}/>
                    <Text style={stylesHome.txtEmpty}>MDS! Você ainda não adicionou nenhum tópico!</Text> 
                </View>
            )
        }
        else{
            return(
                <FlatList
                data={flatListTopics}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => itemView(item)} />
            )
        }

        return(
            <Text>Nada adicionado ainda</Text>
        )
    }

    return(
        <SafeAreaView style={stylesHome.safeArea}>
            {/* <ScrollView style={stylesHome.scrollContainer}>                 */}
                <View style={stylesHome.container}>
                    <View style={stylesHome.hours}>
    <Text style={stylesHome.textSubjectName}>Matéria: {name}</Text>
                    </View>
                    <View style={stylesHome.subjectsView}>
                        <View style={stylesHome.subjectsTitleView}>
                            <Text style={stylesHome.subjectsTitleText}>Tópicos</Text>
                            <TouchableOpacity 
                            style={stylesHome.subjectsTitlePlus}
                            onPress={() => navigation.navigate('RegisterNotes', {idSub: subIdParam})}>
                                <Text style={stylesHome.subjectsTitlePlusTxt}>+</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={stylesHome.subjectsList}>
                            
                            {imageOrList()} 

                            {/* 
                            <FlatList
                            data={flatListItems}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) => itemView(item)} /> */}

                        </View>
                    </View>
                </View>
                
            {/* </ScrollView> */}
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
    textSubjectName:{
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
        flexDirection: 'row',
        marginTop: 5,
        //backgroundColor: 'purple',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    subjectsTitleText:{
        marginLeft: 5,
        fontSize: 34
    },
    subjectsTitlePlus:{
        display: 'flex',
        backgroundColor: '#4ADE6B',
        alignItems: 'center',
        justifyContent: 'center',        
        width: 45,
        height: 45,
        borderRadius: 30
    },
    subjectsTitlePlusTxt:{
        textAlign: 'center',
        fontSize: 34,
        color: '#fff'
    },
    subjectsList:{
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
    subjectItem:{
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
    txtViewItem:{
        width: '70%',
        flexDirection: 'column'
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
    },
    iconInView:{
        flexDirection: 'row'
    },
    iconImage:{
        width: 30,
        height: 30
    }
})
