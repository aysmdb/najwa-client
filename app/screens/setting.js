import React from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView, NavigationActions } from 'react-navigation';

import Profile from './profile';
import { LogOut } from '../config/auth';

export default class Setting extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const navigation = this.props.navigation;

        return(
            <ScrollView style={{ flex: 1 }} automaticallyAdjustContentInsets={true}>
            
                        <TouchableOpacity 
                            onPress={() => {
                                navigation.navigate('Profile');
                            }}>
            
                            <SafeAreaView style={styles.itemContainer} forceInset={{ vertical: 'never' }}>
                                <View style={styles.item}>
                                    <Text style={styles.title}>Profile</Text>
                                </View>
                            </SafeAreaView>
                        </TouchableOpacity>
                    <TouchableOpacity onPress={() => { 
                        LogOut().then(() => {
                            this.props.screenProps.dua.navigate('Login');
                        }).catch((err) => { console.error(err); });
                }}>
                        <SafeAreaView style={styles.itemContainer} forceInset={{ vertical: 'never' }}>
                            <View style={styles.item}>
                                <Text style={styles.title}>Logout</Text>
                            </View>
                        </SafeAreaView>
                        </TouchableOpacity>
                </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    item: {
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    itemContainer: {
      backgroundColor: '#fff',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#000',
    },
    image: {
      width: 120,
      height: 120,
      alignSelf: 'center',
      marginBottom: 20,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#444',
    },
    description: {
      fontSize: 13,
      color: '#999',
    },
  });