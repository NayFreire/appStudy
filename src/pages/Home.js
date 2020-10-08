import React from 'react'
import {TextInput, Text, TouchbleOpacity, ScrollView, View, StyleSheet} from 'react-native'

export default function RegisterUser(){
    return(
        <ScrollView style={stylesHome.scrollContainer}>
            <View style={stylesHome.container}>
                <Text style={stylesHome.title}>Bem-vindo</Text>
                <Text style={stylesHome.text}>Dê início aos seus eestudos agora mesmo</Text>

                <Text style={stylesHome.lableName}>Nome</Text>
                <TextInput />

                <Text style={stylesHome.lableEmail}>Email</Text>
                <TextInput />

                <Text style={stylesHome.lablePassword}>Senha</Text>
                <TextInput />
            </View>
        </ScrollView>
    )
}
