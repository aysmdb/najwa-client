import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    TextInput ,
    Text,
    TouchableOpacity,
    StatusBar,
    Alert,
    Keyboard,
    AsyncStorage
} from 'react-native';

import Loader from '../loader/loader';

import { SubmitRegister } from '../../config/auth';

export default class RegisterForm extends Component {
    constructor(props){
        super(props);

        this._submitRegister = this._submitRegister.bind(this);

        this.state = {
            loading: false
        };
    }

    _submitRegister(){
        Keyboard.dismiss;
        this.setState({
            loading: true
        });

        SubmitRegister(this.state)
        .then((resp) => resp.json())
        .then((respJson) => {
            this.setState({
                loading: false
            });
            AsyncStorage.setItem('UserToken', respJson);
            this.props.navigator.navigate('Main');
        })
        .catch((err) => {
            this.setState({
                loading: false
            });
            console.error(err);
        });
    }
    
    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Loader loading={this.state.loading} />
                <TextInput 
                    placeholder="Username" 
                    placeholderTextColor="rgba(255,255,255,0.5)" 
                    returnKeyType="next"
                    onSubmitEditing={() => this.phoneInput.focus()}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText={(data) => this.setState({username:data})} 
                    />
                <TextInput 
                    placeholder="Nomor Telepon" 
                    keyboardType='numeric'
                    placeholderTextColor="rgba(255,255,255,0.5)" 
                    returnKeyType="next"
                    ref={(input) => this.phoneInput = input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText={(data) => this.setState({phone:data})} 
                    />
                <TextInput 
                    placeholder="Password" 
                    placeholderTextColor="rgba(255,255,255,0.5)" 
                    secureTextEntry 
                    style={styles.input}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    ref={(input) => this.passwordInput = input} 
                    onChangeText={(data) => this.setState({password:data})}
                    />

                <TouchableOpacity onPress={this._submitRegister} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.linkContainer} onPress={() => {this.props.navigator.navigate('Login')}}>
                    <Text style={styles.linkText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#FFF',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '700'
    },
    linkContainer: {
        paddingVertical: 15
    },
    linkText: {
        textAlign: 'center',
        fontWeight: '700',
        textDecorationLine: 'underline'
    }
});