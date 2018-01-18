import React from 'react';
import { 
    View, 
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default class FloatingButton extends React.Component {
    render(){
        return (
            <View>
                <TouchableHighlight style={styles.addButton}
                    underlayColor='#ff7043' onPress={()=>{alert('pressed')}}>
                    <Text style={{fontSize: 50, color: 'white'}}>+</Text>
                </TouchableHighlight>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: '#ff5722',
        borderColor: '#ff5722',
        borderWidth: 1,
        height: 75,
        width: 75,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 450,
        right:20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        }
      }
});