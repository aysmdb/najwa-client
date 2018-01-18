import React from 'react';
import { 
    StyleSheet, 
    View, 
    TextInput ,
    Text,
    TouchableOpacity,
    StatusBar,
    Alert
} from 'react-native';

import RegisterForm from '../components/register/registerForm';

export default ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Text style={styles.title}>NAJWA</Text>
        </View>
        <View style={styles.formContainer}>
            <RegisterForm navigator={navigation} />
        </View>
    </View>
);

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