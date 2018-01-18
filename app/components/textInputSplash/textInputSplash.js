import React from 'react';
import { TextInput } from 'react-native';

export default class TextInputSplash extends React.Component {
    render(){
        return(
            <TextInput 
                placeholder={this.props.placeholder} 
                placeholderTextColor="rgba(255,255,255,0.5)" 
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input} 
                underlineColorAndroid='rgba(0,0,0,0)'
                onChangeText={(data) => this.setState({username:data})} 
            />
        );
    }
}