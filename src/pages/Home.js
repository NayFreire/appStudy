import React from 'react'
import {Text, TouchableOpacity, ScrollView, View, StyleSheet, SafeAreaView} from 'react-native'

export default function Home(){
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
                            <Text style={stylesHome.subjectsTitleText}>Matérias</Text>
                            <View style={stylesHome.subjectsTitlePlus}>
                                <Text style={stylesHome.subjectsTitlePlusTxt}>+</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={stylesHome.subjectItem}>
                                <Text style={stylesHome.subjectName}>Português</Text>
                                <Text style={stylesHome.numberTopics}>Número de Tópicos: 5</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={stylesHome.subjectItem}>
                                <Text style={stylesHome.subjectName}>Português</Text>
                                <Text style={stylesHome.numberTopics}>Número de Tópicos: 5</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={stylesHome.subjectItem}>
                                <Text style={stylesHome.subjectName}>Português</Text>
                                <Text style={stylesHome.numberTopics}>Número de Tópicos: 5</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={stylesHome.subjectItem}>
                                <Text style={stylesHome.subjectName}>Português</Text>
                                <Text style={stylesHome.numberTopics}>Número de Tópicos: 5</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={stylesHome.subjectItem}>
                                <Text style={stylesHome.subjectName}>Português</Text>
                                <Text style={stylesHome.numberTopics}>Número de Tópicos: 5</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={stylesHome.subjectItem}>
                                <Text style={stylesHome.subjectName}>Português</Text>
                                <Text style={stylesHome.numberTopics}>Número de Tópicos: 5</Text>
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
        backgroundColor: '#00ddee',
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
        padding: 10,
        //backgroundColor: '#e1e1e1',
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
