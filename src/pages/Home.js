import React from 'react'
import {TextInput, Text, TouchableOpacity, ScrollView, View, StyleSheet} from 'react-native'

export default function Home(){
    return(
        <ScrollView style={stylesHome.scrollContainer}>
            <View style={stylesHome.container}>
                <Text>Total de Horas Estudadas</Text>
                <Text>15:46:56</Text>
            </View>
            <View style={stylesHome.subjectsView}>
                <View style={stylesHome.subjectsTitleView}>
                    <Text style={stylesHome.subjectsTitleView}>Matérias</Text>
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
        </ScrollView>
    )
}

const stylesHome = StyleSheet.create({
    
})
