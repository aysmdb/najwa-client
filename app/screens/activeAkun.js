import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {
    Card,
    ListItem,
    Button
} from 'react-native-elements';

export default class ActiveAkun extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const navigation = this.props.navigation;

        return(
            <View>
                <Button buttonStyle={{ marginTop: 10 }} icon={{name:'add'}} title='Tambah' onPress={() => navigation.navigate('AkunCreate')} />
                <Card title='Akun Satu'>
                    <View style={{alignItems:'center'}}>
                        <Text >Iuran terkumpul: Rp 124.000,00</Text>
                        <Text>Terkumpul dari: 9 orang</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent:'flex-end', alignItems:'flex-end', marginTop: 15}}>
                        <TouchableOpacity style={{marginRight: 10}} onPress={() => navigation.navigate('AkunDetail')}>
                            <Text style={{color:'blue'}}>Detail</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AkunEdit')}>
                            <Text style={{color:'blue'}}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
            </View>
        );
    }
}