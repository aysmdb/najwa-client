import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RegisterForm from './registerForm';

export default class Register extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.title}>NAJWA</Text>
                </View>
                <View style={styles.formContainer}>
                    <RegisterForm />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    formContainer: {

    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 36
    }
});