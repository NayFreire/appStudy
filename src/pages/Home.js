import React from 'react'
import {TextInput, Text, TouchableOpacity, ScrollView, View, StyleSheet} from 'react-native'

export default function Home(){
    return(
        <View style={stylesHome.scrollContainer}>
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
                        <TouchableOpacity style={stylesHome.subject1}>
                            <Text>Português</Text>
                            <Text>Número de Tópicos: 5</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const stylesHome = StyleSheet.create({
    scrollContainer:{
        flex: 1,
        padding: 20,
        backgroundColor: '#2d85ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
        backgroundColor: '#00ddee',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hours:{
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
        flex: 1,
        backgroundColor: '#999743',
        borderRadius: 20
    },
    subjectsTitleView:{
        backgroundColor: '#e1e1e1',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subjectsTitleText:{
        fontSize: 36
    },
    subjectsTitlePlusTxt:{
        fontSize: 40
    }
})
