import React from 'react'
import {TextInput, Text, TouchableOpacity, View, StyleSheet} from 'react-native'

export default function RegisterUser({navigation}){
    return(
        <View style={stylesHome.container}>
            <View style={stylesHome.formView}>
                <Text style={stylesHome.title}>Bem-vindo</Text>
                <Text style={stylesHome.text}>Dê início aos seus estudos agora mesmo</Text>

                <View style={stylesHome.form}>
                    <Text style={stylesHome.lable}>Nome</Text>
                    <TextInput style={stylesHome.input}/>

                    <Text style={stylesHome.lable}>Email</Text>
                    <TextInput style={stylesHome.input}/>

                    <Text style={stylesHome.lable}>Senha</Text>
                    <TextInput style={stylesHome.input}
                    secureTextEntry/>
                </View>

                <View style={stylesHome.touchs}>
                    <TouchableOpacity
                    style={stylesHome.createAccount}
                    onPress={() => navigation.navigate('Home')}>
                        <Text style={stylesHome.txtCreateAccount}>Criar minha conta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={stylesHome.login}
                    onPress={() => navigation.navigate('Login')}>
                        <Text style={stylesHome.txtLogin}>Já possuo conta,</Text>
                        <Text style={stylesHome.txtLogin}>fazer login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const stylesHome = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor: '#2d85ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formView:{
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 20
    },
    title:{
        textAlign: 'center',
        fontSize: 36
    },
    text:{
        margin: 10,
        textAlign: 'center',
        fontSize: 22,
        color: 'rgba(0,0,0,0.6)'
    },
    form:{
        paddingHorizontal: 20
    },
    lable:{
        margin: 10,
        fontSize: 20
    },
    input:{
        height: 45,
        padding: 5,
        fontSize: 18,
        borderRadius: 5,
        backgroundColor: '#E0F0FF'
    },
    touchs:{
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    createAccount:{
        margin: 10,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        backgroundColor: '#3CA2D6',
        borderRadius: 10
        
    },
    txtCreateAccount:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    },
    login:{
        padding: 20,
        margin: 10,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        backgroundColor: '#1E50D4',
        borderRadius: 10
    },
    txtLogin:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    }
  });