import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    TextInput ,
    Text,
    TouchableOpacity,
    StatusBar,
    Alert,
    AsyncStorage,
    Keyboard
} from 'react-native';

import Loader from '../loader/loader';

import { SubmitLogin } from '../../config/auth';

export default class LoginForm extends Component {
    constructor(props){
        super(props);

        this._onSubmitLogin = this._onSubmitLogin.bind(this);

        this.state = {
            loading: false
        }
    }

    _onSubmitLogin() {
        Keyboard.dismiss;
        this.setState({
            loading: true
        });

        SubmitLogin(this.state).then((resp) => resp.json())
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
                alert("Can't login, check your data.");
            });
    }

    render(){
        return(
            <View style={styles.container}>
                <Loader loading={this.state.loading} />
                <StatusBar barStyle="light-content" />
                <TextInput 
                    placeholder="Username" 
                    placeholderTextColor="rgba(255,255,255,0.5)" 
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText={(data) => this.setState({username:data})} 
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

                <TouchableOpacity onPress={this._onSubmitLogin}
                        style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.linkContainer} onPress={() => {this.props.navigator.navigate('Register')}}>
                    <Text style={styles.linkText}>Register</Text>
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