import React from 'react'
import {TextInput, Text, TouchbleOpacity, ScrollView, View} from 'react-native'

export default function RegisterSubject(){
    return(
        <ScrollView>
            <View>
                <Text>Bem-vindo</Text>
                <Text>Dê início aos seus eestudos agora mesmo</Text>

                <Text>Nome</Text>
                <TextInput />

                <Text>Email</Text>
                <TextInput />

                <Text>Senha</Text>
                <TextInput />
            </View>
        </ScrollView>
    )
}