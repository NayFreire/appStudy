import React, { useState } from 'react'
import {TextInput, Text, TouchableOpacity, View, StyleSheet, Alert, ActivityIndicator} from 'react-native'
import firebase from '@firebase/app'
import '@firebase/auth'

import Home from './Home';

export default class LoginPage extends  React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        isLoading: false,
        message: ''
      }
    }
  
  
    componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyBsMszPC8rcZinXx22Yz3Aq5nakrH571Bw",
            authDomain: "appstudy-d5299.firebaseapp.com",
            databaseURL: "https://appstudy-d5299.firebaseio.com",
            projectId: "appstudy-d5299",
            storageBucket: "appstudy-d5299.appspot.com",
            messagingSenderId: "386253086254",
            appId: "1:386253086254:web:a3c299cdfa890ab28349bf"
        };
      // Initialize Firebase
        try { 
            firebase.initializeApp(firebaseConfig)
        } catch (err) {
            if (!/already exists/.test(err.message)) {
                console.error("erro")
            }
        }
    }
  
    renderButtonCreate() {
        if (this.state.isLoading)
            return <ActivityIndicator />;
        return(
            <TouchableOpacity
            style={stylesHome.createAccount}
            onPress={() => this.createAccount()}>
                <Text style={stylesHome.txtCreateAccount}>Criar minha conta</Text>
            </TouchableOpacity> 
        );
    }

    renderButtonLogin(){
        if (this.state.isLoading)
            return <ActivityIndicator />
        return(
            <TouchableOpacity
            style={stylesHome.login}
            onPress={() => this.login()}
            >
                <Text style={stylesHome.txtLogin}>Já possuo conta,</Text>
                <Text style={stylesHome.txtLogin}>fazer login</Text>
            </TouchableOpacity>
        )
    }

    renderMessage() {
        const { message } = this.state;
        if (!message)
            return null;
        return (
            <View>
                <Text>
                {message}
                </Text>
            </View>
        );
    }
  
    mudaTextInput(campo, valor) {
        //const newState = {};
        //newState[campo] = valor;
        //this.setState(newState);
        this.setState({[campo]: valor});
    }
  
	createAccount() {
        this.setState({ isLoading: true });
        const {email, password} = this.state;

        // if(password.length < 6){
        //     Alert.alert(
        //     'Senha muito pequena',
        //     'Sua senha deve conter 6 ou mais caractéres'
        //         [
        //             {
        //                 text: 'Ok'
        //             }
        //         ],
        //         {cancelable: true}
        //     )
        // }

        const createAccountSucesso = user => {
            this.props.navigation.navigate('Home');
        }

        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(createAccountSucesso)
        .catch(error => {
            this.setState({
                message: this.erroLoginMessage(error.code)
            })
        })
        .then(() => this.setState({ isLoading: false}));
    }

    login() {
        this.setState({ isLoading: true });
        const {email, password} = this.state;
    
        const loginSucesso = user => {
          this.props.navigation.navigate('Home');
        }
    
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(loginSucesso)
        .catch(error => {
            if (error.code == 'auth/user-not-found') {
                Alert.alert(
                    'Usuário não encontrado',
                    'Não foram encontrados usuários com esses dado, por favor crie uma conta',
                    [
                        {
                            text: 'Ok',
                        }
                    ],
                    {cancelable: true}
                )
            }
            else {
                Alert.alert(
                'Erro na auntenticação',
                this.erroLoginMessage(error.code)
                )
            }
        })
        .then(() => this.setState({ isLoading: false}));
    }

    erroLoginMessage(errorCode) {
      switch (errorCode) {
        case 'auth/wrong-password':
          return 'Senha incorreta'
        case 'auth/user-not-found':
          return 'Usuário não encontrado'
        case 'auth/invalid-email':
          return 'E-mail incorreto'
        default :
          return 'Erro não documentado, contate a administradora: nayfreireof@gmail.com'
      }
    }
  
    render() {
        return (
            <View style={stylesHome.container}>
                <View style={stylesHome.formView}>
                    <Text style={stylesHome.title}>Bem-vindo</Text>
                    <Text style={stylesHome.text}>Dê início aos seus estudos agora mesmo</Text>
                    
                    <View style={stylesHome.form}>
                        <Text style={stylesHome.lable}>Email</Text>
                        <TextInput 
                        style={stylesHome.input}
                        value={this.state.email}
                        onChangeText={value => this.mudaTextInput('email', value)}/>

                        <Text style={stylesHome.lable}>Senha</Text>
                        <TextInput 
                        style={stylesHome.input}
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.mudaTextInput('password', value)}/>
                    </View>

                    <View style={stylesHome.touchs}>
                        {this.renderButtonCreate()}    
                        {this.renderButtonLogin()}

                        {this.renderMessage()}
                    </View>

                </View>
            </View>
        )
    }
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