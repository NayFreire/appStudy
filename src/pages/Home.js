import React, { useEffect, useState } from 'react'
import {Text, TouchableOpacity, ScrollView, View, StyleSheet, SafeAreaView} from 'react-native'
import ImagemEmptyList from '../components/ImageEmptyList'
import * as SQLite from 'expo-sqlite'
import { FlatList } from 'react-native-gesture-handler'

var db = SQLite.openDatabase({name: 'StudyDatabase.db'})

export default function Home({navigation}){

    let[flatListItems, setFlatListItems] = useState([])

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM tableSubjects', 
                [], 
                (tx, results) => {
                    var temp = [];
                    for(let i=0; i<results.rows.length; i++){
                        temp.push(results.rows.item(i))
                        console.log(temp(i))
                    }
                    setFlatListItems(temp);
                }
            )
        })
    }, [])

    let itemView = (item) => {
        return(
            <TouchableOpacity
            key={item.subjectId}
            // style={}
            // onPress={}
            >
                <Text>{item.subjectName}</Text>
                <Text>{item.numberNotes}</Text>
            </TouchableOpacity>
            
        )
    }

    let imageOrList = (item) => {
        if(flatListItems.length == 0){
            return(
                <View>
                    <ImagemEmptyList style={stylesHome.imgEmpty}/>
                    <Text style={stylesHome.txtEmpty}>MDS! Você ainda não adicionou nenhuma matéria!</Text> 
                </View>
            )
        }
        else{
            return(
                <FlatList
                data={flatListItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => itemView} />
            )
        }
    }

    return(
        <SafeAreaView style={stylesHome.safeArea}>
            {/* <ScrollView style={stylesHome.scrollContainer}>                 */}
                <View style={stylesHome.container}>
                    <View style={stylesHome.hours}>
                        <Text style={stylesHome.textHour}>Total de Horas Estudadas</Text>
                        <Text style={stylesHome.timer}>15:46:56</Text>
                    </View>
                    <View style={stylesHome.subjectsView}>
                        <View style={stylesHome.subjectsTitleView}>
                            <Text style={stylesHome.subjectsTitleText}>Matérias</Text>
                            <TouchableOpacity 
                            style={stylesHome.subjectsTitlePlus}
                            onPress={() => navigation.navigate('RegisterSubject')}>
                                <Text style={stylesHome.subjectsTitlePlusTxt}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={stylesHome.subjectsList}>
                            
                        {imageOrList()}
                            
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
        padding: 20,
        backgroundColor: '#2d85ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollContainer:{
        flex: 1
    },
    container:{
        maxWidth: 700,
        //backgroundColor: '#00ddee',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hours:{
        width: '100%',
        padding: 30,
        backgroundColor: '#fff',
        borderRadius: 20
    },
    textHour:{
        fontSize: 25,
        textAlign: 'center'
    },
    timer:{
        fontSize: 42,
        textAlign: 'center'
    },
    subjectsView:{
        width: '100%',
        //paddingHorizontal: 20,
        marginTop: 10,
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 20
    },
    subjectsTitleView:{
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subjectsTitleText:{
        fontSize: 34,
    },
    subjectsTitlePlus:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 44,
        height: 45,
        padding: 10,
        backgroundColor: '#4ADE6B',        
        borderRadius: 30
    },
    subjectsTitlePlusTxt:{
        textAlign: 'center',
        margin: 0,
        padding: 0,
        color: '#fff',
        fontSize: 40
    },
    subjectsList:{
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgEmpty:{
        marginBottom: 20
    },
    txtEmpty:{
        fontSize: 20,
        textAlign: 'center',
        color: '#67656F',
        marginBottom: 10
    },
    subjectItem:{
        margin: 10,
        padding: 10,
        backgroundColor: '#F0D33B',
        borderRadius: 5
    },
    subjectName:{
        fontSize: 28
    },
    numberTopics:{
        fontSize: 18
    }
})
