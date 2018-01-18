import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

export default class Splash extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.title}>NAJWA</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm navigation={this.props.navigator} />
                </View>
            </View>
        );
    };
}