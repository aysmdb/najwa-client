import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import {
    FormLabel,
    FormInput,
    ListItem,
    Button,
    FormValidationMessage
} from 'react-native-elements';

export default class ActiveAkun extends React.Component {
    constructor(props){
        super(props);

        this._submitForm = this._submitForm.bind(this);
    }

    _submitForm() {
        Keyboard.dismiss;
        // this.setState({
        //     loading: true
        // });

        fetch("http://192.168.1.129:5000/Api/Akun", {
            method: 'POST',
            headers: {
                'cache-control': 'no-cache',
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                Name: this.state.Name
            })
        })
        .then((resp) => resp.json())
            .then((respJson) => {
                // this.setState({
                //     loading: false
                // });
                    alert("Berhasil ajg!1!1!1!");
                })
            .catch((err) => {
                // this.setState({
                //     loading: false
                // });
                alert("Kalem tjoy");
            });
    }

    render(){
        return(
            <View>
                <FormLabel>Cikan</FormLabel>
                <FormInput
                    placeholder="Name" 
                    placeholderTextColor="rgba(0,0,0,0.5)" 
                    // returnKeyType="next"
                    // onSubmitEditing={() => this.passwordInput.focus()}
                    autoCapitalize="words"
                    autoCorrect={false}
                    // style={styles.input} 
                    // underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText={(data) => this.setState({Name:data})}
                />
                {/* <FormValidationMessage>Error</FormValidationMessage> */}
                <Button 
                    buttonStyle={{ backgroundColor: 'skyblue' }} 
                    icon={{name:'save'}} 
                    title='Simpan' 
                    onPress={() => this._submitForm()} 
                />
            </View>
        );
    }
}