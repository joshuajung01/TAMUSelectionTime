import { NavigationHelpersContext } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';

const iconActiveColor = "#500000"
const iconInactiveColor = "#3e3e3e"
const backgroundActiveColor = "#eaeaea"
const backgroundInactiveColor = "#FFFFFF"
const labelColor = "#500000"

const SignUpButton = (props) => {
    if(props.buttonStyle == 1){
        return(
            <TouchableOpacity style={styles.buttonStyle1} onPress={() => props.navigate('SignUp')}>
                <Text style={styles.textStyle1}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        );
    }
    else{
        return(
            <TouchableOpacity style={styles.buttonStyle2} onPress={() => props.navigate('SignIn')}>
                <Text style={styles.textStyle2}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        );
    }
    
}

const styles = StyleSheet.create({
    textStyle1:{
        color: '#FFFFFF'
    },
    buttonStyle1:{
        backgroundColor: "#500000",
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop:10,
        marginHorizontal: 30,
        borderRadius: 30,
    },
    textStyle2:{
        color: "#500000"
    },
    buttonStyle2:{
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginVertical:0,
        marginHorizontal: 30,
        borderRadius: 30,
    }
})
export default SignUpButton;